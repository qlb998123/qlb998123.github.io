const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); } });
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(other => {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    document.querySelectorAll('.paper').forEach(paper => {
      const filter = button.dataset.filter;
      paper.hidden = filter === 'selected' ? paper.dataset.selected !== 'true' : filter !== 'all' && paper.dataset.type !== filter;
      if (!paper.hidden) count++;
    });
    document.querySelector('#filter-status').textContent = `Showing ${count} works`;
  });
});
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('qiao_libo@gzlab.ac.cn');
    status.textContent = 'Email copied';
  } catch {
    status.textContent = 'Select the email address above to copy it, or click it to send a message.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
