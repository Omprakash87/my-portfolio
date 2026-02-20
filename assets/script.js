/* Portfolio: minimal editorial + GSAP. Transform/opacity/filter only. Cleanup on unmount. */

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const navMenu = $('#nav-menu');
const hamburger = $('#hamburger');
const backToTop = $('#back-to-top');
const toast = $('#toast');

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ——— Hero background video (muted autoplay; pause if reduced motion) ——— */
(function initHeroVideo() {
  const video = document.querySelector('.bg-video');
  if (!video) return;
  video.muted = true;
  video.playsInline = true;
  if (prefersReducedMotion()) {
    video.pause();
    video.style.display = 'none';
    return;
  }
  const play = () => {
    video.play().catch(() => {});
  };
  play();
  video.addEventListener('loadeddata', play);
})();

/* ——— GSAP: context + hero timeline, scroll reveal, dividers, project reveal, cleanup ——— */
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  const reduced = prefersReducedMotion();

  if (reduced) {
    gsap.set('.hero-reveal, .reveal-up, .reveal-card, [data-animate="divider"]', {
      opacity: 1, y: 0, scale: 1, x: 0
    });
    return;
  }

  const ctx = gsap.context(() => {
    /* Hero intro: smooth stagger like jakesinclair.ca (fade + slide up) */
    const heroReveals = $$('.hero-reveal');
    if (heroReveals.length) {
      gsap.set(heroReveals, { opacity: 0, y: 28 });
      gsap.to(heroReveals, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.15,
      });
    }

    /* Reusable scroll reveal (transform/opacity only) — jakesinclair-style smooth */
    function reveal(selector, opts = {}) {
      const {
        y = 24,
        x = null,
        duration = 0.85,
        stagger = 0,
        ease = 'power2.out',
        start = 'top 88%',
        trigger: triggerEl = null,
      } = opts;
      const els = gsap.utils.toArray(selector);
      if (!els.length) return;
      const from = { opacity: 0, y };
      if (x != null) from.x = x;
      gsap.set(els, from);
      const to = { opacity: 1, y: 0 };
      if (x != null) to.x = 0;
      if (triggerEl) {
        gsap.to(els, {
          ...to,
          duration,
          stagger,
          ease,
          scrollTrigger: { trigger: triggerEl, start, toggleActions: 'play none none none' },
        });
      } else {
        els.forEach((el) => {
          gsap.to(el, {
            ...to,
            duration,
            ease,
            scrollTrigger: { trigger: el, start, toggleActions: 'play none none none' },
          });
        });
      }
    }

    /* Section headings */
    reveal('.reveal-up', { y: 28, duration: 0.9, start: 'top 86%' });

    /* Divider rows: subtle fade in */
    const dividers = $$('[data-animate="divider"]');
    dividers.forEach((div) => {
      gsap.set(div, { opacity: 0 });
      gsap.to(div, {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: div, start: 'top 92%', toggleActions: 'play none none none' },
      });
    });

    /* Skills grid stagger */
    const skillCards = $$('#skills .reveal-card');
    if (skillCards.length) {
      gsap.set(skillCards, { opacity: 0, y: 20 });
      gsap.to(skillCards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: { trigger: '#skills .skills-grid', start: 'top 84%', toggleActions: 'play none none none' },
      });
    }

    /* Experience cards: same reveal as project cards */
    const experienceCards = $$('#experience .reveal-card');
    if (experienceCards.length) {
      gsap.set(experienceCards, { opacity: 0, y: 22 });
      gsap.to(experienceCards, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '#experience .experience-grid', start: 'top 84%', toggleActions: 'play none none none' },
      });
    }

    /* Project cards: smooth reveal (transform/opacity only) */
    const projectCards = $$('#projects .reveal-card');
    if (projectCards.length) {
      gsap.set(projectCards, { opacity: 0, y: 22 });
      gsap.to(projectCards, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '#projects .projects-grid', start: 'top 84%', toggleActions: 'play none none none' },
      });
    }

    /* Education items */
    reveal('#education .education-item', { stagger: 0.12, start: 'top 84%' });
  });

  window.__gsapPortfolioContext = ctx;
}

/* ——— Navbar scrolled ——— */
const navbar = $('#navbar');
function updateNavbarScroll() {
  if (window.scrollY > 60) navbar?.classList.add('scrolled');
  else navbar?.classList.remove('scrolled');
}
window.addEventListener('scroll', updateNavbarScroll, { passive: true });
window.addEventListener('load', updateNavbarScroll);

/* ——— Button: slight magnetic pull (subtle translate) ——— */
function initMagneticButtons() {
  if (prefersReducedMotion()) return;
  $$('.btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
      gsap.to(btn, { x, y, duration: 0.25, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.35, ease: 'power2.out' });
    });
  });
}

/* ——— Mobile menu ——— */
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const active = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active', active);
    hamburger.setAttribute('aria-expanded', String(active));
  });
  navMenu.addEventListener('click', (e) => {
    if (e.target.closest('a.nav-link')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ——— Back to top ——— */
function toggleBackToTop() {
  if (window.scrollY > 400) backToTop?.classList.add('visible');
  else backToTop?.classList.remove('visible');
}
window.addEventListener('scroll', toggleBackToTop, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ——— Active nav link ——— */
const sections = $$('.section, .hero');
const navLinks = $$('.nav-link');
function setActiveLink() {
  const scrollPos = window.scrollY + 100;
  let currentId = 'home';
  sections.forEach((sec) => {
    if (scrollPos >= sec.offsetTop - 120) currentId = sec.id || currentId;
  });
  navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`));
}
window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('load', setActiveLink);

/* ——— Toast ——— */
function showToast(message, type, ms = 2500) {
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), ms);
}

/* ——— Contact form ——— */
const form = $('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent! I will get back to you soon.', 'success');
    form.reset();
  });
}

/* ——— Hero background (none for B&W) ——— */

/* ——— Init ——— */
function init() {
  if (typeof gsap !== 'undefined') initGSAP();
  else window.addEventListener('load', initGSAP);
  initMagneticButtons();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* ——— Cleanup ——— */
window.addEventListener('pagehide', () => {
  if (window.__gsapPortfolioContext) {
    window.__gsapPortfolioContext.revert();
    window.__gsapPortfolioContext = null;
  }
  if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.getAll) {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
});
