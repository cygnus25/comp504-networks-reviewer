(() => {
  const input = document.querySelector('#glossary-search');
  const rows = [...document.querySelectorAll('article tbody tr')];
  const count = document.querySelector('#glossary-count');
  function filter() {
    const term = input.value.trim().toLowerCase();
    let shown = 0;
    rows.forEach(row => {
      const match = row.textContent.toLowerCase().includes(term);
      row.hidden = !match;
      if (match) shown += 1;
    });
    count.textContent = `${shown} of ${rows.length} terms shown`;
  }
  input.addEventListener('input', filter);
  filter();
})();
