const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
