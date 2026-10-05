document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
if (menuButton && menu) {
  menuButton.hidden = false;
  const closeMenu = () => { menuButton.setAttribute('aria-expanded', 'false'); menu.classList.remove('open'); };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuButton.focus(); }
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
}
