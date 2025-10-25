/* Small site JS: mobile nav, active links, back-to-top, form toast, hero bg */

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const navMenu = $('#nav-menu');
const hamburger = $('#hamburger');
const backToTop = $('#back-to-top');
const toast = $('#toast');

/* Mobile menu toggle */
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const active = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active', active);
    hamburger.setAttribute('aria-expanded', String(active));
  });

  // Close menu when a link is clicked
  navMenu.addEventListener('click', e => {
    const link = e.target.closest('a.nav-link');
    if (link) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* Back to top visibility */
const toggleBackToTop = () => {
  if (window.scrollY > 400) backToTop.classList.add('visible');
  else backToTop.classList.remove('visible');
};
window.addEventListener('scroll', toggleBackToTop);
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* Active nav link on scroll */
const sections = $$('.section, .hero');
const navLinks = $$('.nav-link');

const setActiveLink = () => {
  const scrollPos = window.scrollY + 120; // offset for fixed navbar
  let currentId = 'home';
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    const top = rect.top + window.scrollY - 140;
    if (scrollPos >= top) currentId = sec.id || currentId;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`));
};
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

/* Toast helper */
function showToast(message, type = 'success', ms = 2500) {
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), ms);
}

/* Demo contact form (replace with your endpoint if needed) */
const form = $('#contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // TODO: replace with real endpoint/fetch
    showToast('Message sent! I will get back to you soon.', 'success');
    form.reset();
  });
}

/* Hero animated background (subtle gradient motion) */
const heroBg = $('#hero-background');
if (heroBg) {
  let t = 0;
  const animate = () => {
    t += 0.005;
    const x = Math.sin(t) * 50 + 50;
    const y = Math.cos(t * 0.8) * 50 + 50;
    heroBg.style.background = `radial-gradient(600px 600px at ${x}% ${y}%, rgba(37,99,235,0.25), transparent 60%),
                               radial-gradient(500px 500px at ${100 - x}% ${100 - y}%, rgba(96,165,250,0.18), transparent 60%)`;
    requestAnimationFrame(animate);
  };
  animate();
}
