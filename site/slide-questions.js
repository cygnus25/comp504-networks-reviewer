(() => {
  const search = document.querySelector('#slide-search');
  const chapter = document.querySelector('#slide-chapter');
  const cards = [...document.querySelectorAll('.slide-question')];
  const count = document.querySelector('#slide-count');
  function filter() {
    const term = search.value.trim().toLowerCase();
    const selected = chapter.value;
    let shown = 0;
    cards.forEach(card => {
      const match = (selected === 'all' || card.dataset.deck === selected) && card.textContent.toLowerCase().includes(term);
      card.hidden = !match;
      if (match) shown += 1;
    });
    count.textContent = `${shown} of ${cards.length} questions shown`;
  }
  search.addEventListener('input', filter);
  chapter.addEventListener('change', filter);
  filter();
})();
