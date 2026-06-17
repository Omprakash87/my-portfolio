/* ============================================================
   CIRCUIT INTELLIGENCE — interactions
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar: glass blur on scroll ---------- */
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (window.scrollY > 24) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const toggleMenu = (open) => {
    const isOpen = open ?? !navLinks.classList.contains("open");
    navLinks.classList.toggle("open", isOpen);
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  };
  hamburger.addEventListener("click", () => toggleMenu());
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => toggleMenu(false))
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) toggleMenu(false);
  });

  /* ---------- Typewriter ---------- */
  const twEl = document.getElementById("typewriter");
  if (twEl) {
    const words = [
      "Electrical Engineer",
      "Embedded Firmware Developer",
      "Edge AI Engineer",
      "Control Systems Specialist",
    ];
    if (prefersReduced) {
      twEl.textContent = words[0];
    } else {
      let wi = 0, ci = 0, deleting = false;
      const tick = () => {
        const word = words[wi];
        twEl.textContent = word.slice(0, ci);
        if (!deleting) {
          if (ci < word.length) { ci++; setTimeout(tick, 70); }
          else { deleting = true; setTimeout(tick, 1500); }
        } else {
          if (ci > 0) { ci--; setTimeout(tick, 38); }
          else { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 320); }
        }
      };
      tick();
    }
  }

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReduced) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* ---------- Animate skill bars when visible ---------- */
  const bars = document.querySelectorAll(".bar");
  if ("IntersectionObserver" in window) {
    const barIO = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector("i");
            const lvl = entry.target.getAttribute("data-level");
            if (fill) fill.style.width = lvl + "%";
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((b) => barIO.observe(b));
  } else {
    bars.forEach((b) => {
      const fill = b.querySelector("i");
      if (fill) fill.style.width = b.getAttribute("data-level") + "%";
    });
  }

  /* ---------- Animate stat counters ---------- */
  const stats = document.querySelectorAll(".stat-num");
  const runCount = (el) => {
    const target = parseInt(el.getAttribute("data-target"), 10) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    if (prefersReduced) { el.textContent = target + suffix; return; }
    const dur = 1200;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const statIO = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { runCount(entry.target); obs.unobserve(entry.target); }
        });
      },
      { threshold: 0.6 }
    );
    stats.forEach((s) => statIO.observe(s));
  } else {
    stats.forEach(runCount);
  }

  /* ---------- Oscilloscope animated waveform ---------- */
  const line1 = document.querySelector(".scope-line-1");
  const line2 = document.querySelector(".scope-line-2");
  if (line1 && line2 && !prefersReduced) {
    const W = 1440, H = 600, mid = H / 2;
    const buildPath = (t, amp, freq, phase, fn) => {
      let d = "";
      for (let x = 0; x <= W; x += 8) {
        const y = mid + amp * fn(freq * (x / W) * Math.PI * 2 + phase + t);
        d += (x === 0 ? "M" : "L") + x + " " + y.toFixed(1) + " ";
      }
      return d;
    };
    // square-ish wave via clamped sine
    const squarish = (v) => Math.tanh(Math.sin(v) * 3) ;
    let t = 0;
    const animate = () => {
      t += 0.02;
      line1.setAttribute("d", buildPath(t, 90, 5, 0, Math.sin));
      line2.setAttribute("d", buildPath(t * 0.7, 55, 8, 1.2, squarish));
      requestAnimationFrame(animate);
    };
    animate();
  } else if (line1) {
    // static fallback
    line1.setAttribute("d", "M0 300 Q360 180 720 300 T1440 300");
  }

  /* ---------- Cursor trail ---------- */
  const dot = document.querySelector(".cursor-dot");
  if (dot && !prefersReduced && window.matchMedia("(pointer: fine)").matches) {
    let mx = 0, my = 0, dx = 0, dy = 0;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY; dot.style.opacity = "0.9";
    });
    window.addEventListener("mouseleave", () => { dot.style.opacity = "0"; });
    const interactive = "a, button, input, textarea, .skill-card, .proj, .contact-link";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(interactive)) dot.style.transform = "translate(-50%, -50%) scale(2.2)";
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(interactive)) dot.style.transform = "translate(-50%, -50%) scale(1)";
    });
    const render = () => {
      dx += (mx - dx) * 0.18; dy += (my - dy) * 0.18;
      dot.style.left = dx + "px"; dot.style.top = dy + "px";
      requestAnimationFrame(render);
    };
    render();
  }

  /* ---------- Contact form (client-side, no backend) ---------- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.classList.add("error");
        return;
      }
      if (!emailOk) {
        status.textContent = "Please enter a valid email address.";
        status.classList.add("error");
        return;
      }
      status.classList.remove("error");
      // Open the user's mail client pre-filled (works without a backend)
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:oindla@uab.edu?subject=${subject}&body=${body}`;
      status.textContent = "Opening your email client… thanks for reaching out!";
      form.reset();
    });
  }
})();
