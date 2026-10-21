(() => {
  const links = [...document.querySelectorAll('.toc-link')];
  const headings = [...document.querySelectorAll('article h2')];
  const page = document.body.dataset.page || 'lessons';
  const key = page === 'labs' ? 'comp504-labs-done-v1' : 'comp504-beginner-reviewer-done-v1';
  let done;
  try { done = new Set(JSON.parse(localStorage.getItem(key) || '[]')); }
  catch { done = new Set(); }

  function save() {
    try { localStorage.setItem(key, JSON.stringify([...done])); } catch { /* Browsing still works without storage. */ }
    document.querySelector('#progress-count').textContent = `${done.size} of ${headings.length} ${page === 'labs' ? 'lab sections' : 'lessons'} done`;
    document.querySelector('#progress-fill').style.width = `${100 * done.size / headings.length}%`;
    links.forEach(link => link.classList.toggle('done', done.has(link.dataset.target)));
    document.querySelectorAll('.mark-done').forEach(button => {
      const complete = done.has(button.dataset.lesson);
      button.classList.toggle('done', complete);
      button.textContent = complete ? '✓ Marked complete' : `○ Mark ${page === 'labs' ? 'section' : 'lesson'} complete`;
      button.setAttribute('aria-pressed', String(complete));
    });
  }

  headings.forEach(heading => {
    const row = document.createElement('div');
    row.className = 'lesson-action';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'mark-done';
    button.dataset.lesson = heading.id;
    button.addEventListener('click', () => {
      done.has(heading.id) ? done.delete(heading.id) : done.add(heading.id);
      save();
    });
    row.append(button);
    heading.after(row);
  });
  save();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.dataset.target === entry.target.id));
    });
  }, { rootMargin: '-10% 0px -78% 0px' });
  headings.forEach(heading => observer.observe(heading));

  function updateReadBar() {
    const limit = document.documentElement.scrollHeight - innerHeight;
    document.querySelector('#read-progress').style.width = `${limit > 0 ? 100 * scrollY / limit : 0}%`;
  }
  addEventListener('scroll', updateReadBar, { passive: true });
  updateReadBar();

  const form = document.querySelector('#subnet-form');
  const result = document.querySelector('#subnet-result');
  const dotted = n => [24, 16, 8, 0].map(shift => (n >>> shift) & 255).join('.');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const parts = document.querySelector('#ip-input').value.trim().split('.');
    const prefix = Number(document.querySelector('#prefix-input').value);
    if (parts.length !== 4 || parts.some(p => !/^\d{1,3}$/.test(p) || Number(p) > 255) || !Number.isInteger(prefix) || prefix < 8 || prefix > 30) {
      result.textContent = 'Enter four decimal octets (0–255) and a prefix from 8 to 30.';
      return;
    }
    const ip = parts.reduce((acc, p) => ((acc << 8) | Number(p)) >>> 0, 0);
    const mask = (0xffffffff << (32 - prefix)) >>> 0;
    const network = (ip & mask) >>> 0;
    const broadcast = (network | (~mask >>> 0)) >>> 0;
    const size = 2 ** (32 - prefix);
    result.innerHTML = `<strong>Network:</strong> ${dotted(network)}/${prefix}<br><strong>Mask:</strong> ${dotted(mask)}<br><strong>Usable:</strong> ${dotted(network + 1)} to ${dotted(broadcast - 1)} (${size - 2} hosts)<br><strong>Broadcast:</strong> ${dotted(broadcast)}<br><strong>Why:</strong> ${32 - prefix} host bits make ${size} addresses. The first and last are reserved in these exercises.`;
  });
})();
