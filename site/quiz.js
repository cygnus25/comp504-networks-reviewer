(() => {
  const QUESTIONS = window.COMP504_QUESTIONS || [];
  const byId = new Map(QUESTIONS.map(q => [q.id, q]));
  const statsKey = 'comp504-quiz-stats-v1';
  const sessionKey = 'comp504-quiz-session-v1';
  const $ = selector => document.querySelector(selector);
  const stats = (() => { try { return JSON.parse(localStorage.getItem(statsKey) || '{}'); } catch { return {}; } })();
  stats.wrongIds ||= [];
  stats.history ||= [];
  let session = null;
  let finished = false;

  function escape(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function persist() { try { localStorage.setItem(sessionKey, JSON.stringify(session)); } catch { /* Offline page still works. */ } }
  function display(view) {
    ['#quiz-setup','#quiz-panel','#quiz-summary'].forEach(id => $(id).hidden = id !== view);
  }
  function addTopics() {
    [...new Set(QUESTIONS.map(q => q.topic))].forEach(topic => {
      const option = document.createElement('option');
      option.value = topic; option.textContent = `${topic} · ${QUESTIONS.filter(q => q.topic === topic).length} questions`;
      $('#topic-select').append(option);
    });
  }
  function refreshResume() {
    let saved;
    try { saved = JSON.parse(localStorage.getItem(sessionKey) || 'null'); } catch { saved = null; }
    $('#resume-quiz').hidden = !(saved && Array.isArray(saved.ids) && saved.ids.length && saved.ids.every(id => byId.has(id)));
    return saved;
  }
  function start(ids, mode) {
    if (!ids.length) { $('#setup-message').textContent = 'There are no missed questions yet. Choose a topic or all topics.'; return; }
    session = {ids, mode, answers:{}, index:0}; finished = false; persist(); render();
  }
  function render() {
    if (!session || session.index >= session.ids.length) { finish(); return; }
    display('#quiz-panel');
    const q = byId.get(session.ids[session.index]);
    const selected = session.answers[q.id];
    $('#question-progress').textContent = `Question ${session.index + 1} of ${session.ids.length}`;
    $('#question-topic').textContent = q.topic;
    $('#question-meter').style.width = `${100 * session.index / session.ids.length}%`;
    $('#question-text').textContent = q.question;
    $('#choices').replaceChildren();
    q.choices.forEach((choice, i) => {
      const button = document.createElement('button'); button.type='button'; button.className='choice';
      button.innerHTML = `<span class="choice-letter">${String.fromCharCode(65+i)}</span><span>${escape(choice)}</span>`;
      if (selected !== undefined) button.classList.toggle('selected', selected === i);
      if (selected !== undefined && session.mode === 'study') {
        button.disabled = true;
        button.classList.toggle('correct', i === q.answer);
        button.classList.toggle('incorrect', selected === i && selected !== q.answer);
      }
      button.addEventListener('click', () => select(i));
      $('#choices').append(button);
    });
    const explain = session.mode === 'study' && selected !== undefined;
    $('#feedback').hidden = !explain;
    if (explain) $('#feedback').innerHTML = `<strong>${selected === q.answer ? 'Correct.' : `The answer is ${String.fromCharCode(65+q.answer)}.`}</strong> ${escape(q.why)}`;
    $('#next-question').hidden = selected === undefined;
    $('#next-question').textContent = session.index === session.ids.length - 1 ? 'Finish and review →' : 'Next question →';
  }
  function select(choice) {
    const q = byId.get(session.ids[session.index]);
    if (session.mode === 'study' && session.answers[q.id] !== undefined) return;
    session.answers[q.id] = choice; persist(); render();
  }
  function next() {
    if (session.answers[session.ids[session.index]] === undefined) return;
    session.index += 1; persist(); render();
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function finish() {
    if (finished || !session) return;
    finished = true;
    const wrong = session.ids.filter(id => session.answers[id] !== byId.get(id).answer);
    const correct = session.ids.length - wrong.length;
    const wrongSet = new Set(stats.wrongIds);
    session.ids.forEach(id => session.answers[id] === byId.get(id).answer ? wrongSet.delete(id) : wrongSet.add(id));
    stats.wrongIds = [...wrongSet];
    stats.history.unshift({date:new Date().toISOString(), mode:session.mode, count:session.ids.length, correct});
    stats.history = stats.history.slice(0,20);
    try { localStorage.setItem(statsKey, JSON.stringify(stats)); localStorage.removeItem(sessionKey); } catch { /* Keep visible result. */ }
    display('#quiz-summary');
    $('#score-title').textContent = `${correct} / ${session.ids.length} correct`;
    $('#score-detail').textContent = wrong.length ? `Review the ${wrong.length} missed question${wrong.length===1?'':'s'} below, then retry them. A correct guess still deserves an explanation in your own words.` : 'All correct. Try the open-ended questions next to test recall without choices.';
    $('#retry-missed').hidden = wrong.length === 0;
    $('#review-list').replaceChildren();
    session.ids.forEach(id => {
      const q = byId.get(id), selected = session.answers[id], item = document.createElement('details');
      item.className = selected === q.answer ? 'review-correct' : 'review-wrong';
      item.innerHTML = `<summary>${selected === q.answer ? '✓' : '✕'} ${escape(q.question)}</summary><p><strong>Your answer:</strong> ${escape(q.choices[selected] ?? 'No answer')}<br><strong>Correct answer:</strong> ${escape(q.choices[q.answer])}</p><p>${escape(q.why)}</p>`;
      $('#review-list').append(item);
    });
    $('#retry-missed').onclick = () => start(wrong, 'study');
    refreshResume();
  }

  addTopics(); refreshResume();
  $('#start-quiz').addEventListener('click', () => {
    const topic = $('#topic-select').value;
    const ids = topic === 'all' ? QUESTIONS.map(q => q.id) : topic === 'weak' ? stats.wrongIds.filter(id => byId.has(id)) : QUESTIONS.filter(q => q.topic === topic).map(q => q.id);
    $('#setup-message').textContent = '';
    start(ids, $('#mode-select').value);
  });
  $('#resume-quiz').addEventListener('click', () => { session = refreshResume(); finished = false; if (session) render(); });
  $('#next-question').addEventListener('click', next);
  $('#quit-quiz').addEventListener('click', () => { persist(); display('#quiz-setup'); refreshResume(); });
  $('#new-quiz').addEventListener('click', () => { session = null; display('#quiz-setup'); refreshResume(); });
})();
