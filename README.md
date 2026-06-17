# Omprakash Indla — Portfolio

A single-page portfolio with a **"Circuit Intelligence"** theme — precision hardware meets intelligent systems. Built with pure HTML, CSS, and vanilla JavaScript. No build step, no framework, no heavy dependencies.

## Features

- Animated oscilloscope waveform hero background (live SVG signal)
- Typewriter headline cycling through specializations
- Floating tech badges drifting upward
- Scroll-triggered fade-ins (IntersectionObserver)
- Animated skill bars and counting stats
- Glowing pulse timeline for experience
- Bento-grid projects with gradient-sweep hover borders
- Glassmorphic navbar that blurs on scroll
- Subtle cursor trail (desktop, pointer: fine)
- Fully responsive (mobile / tablet / desktop)
- Accessible: skip link, ARIA labels, keyboard nav, focus states
- Honors `prefers-reduced-motion`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main single-page site |
| `styles.css` | All styling and animations |
| `script.js` | All interactivity |
| `resume.html` | Printable resume (Print → Save as PDF) |

## Run locally

It's static — just open `index.html`, or serve it:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy

Drop the folder into any static host — **GitHub Pages, Netlify, Vercel, Cloudflare Pages**. No configuration needed.

## Customize

- **Colors / fonts:** CSS variables at the top of `styles.css` (`:root`).
- **Resume PDF:** open `resume.html` and use the *Print / Save as PDF* button, or replace the `resume.html` link in `index.html` with your own `resume.pdf`.
- **Content:** edit the relevant section in `index.html`.

## Contact

- Email: oindla@uab.edu
- LinkedIn: [omprakash-indla](https://www.linkedin.com/in/omprakash-indla-aa7025266)
