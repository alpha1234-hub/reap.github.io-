/**
 * REAP Portfolio JavaScript
 * Dynamic behaviors, scroll reveals, quotes carousel, dark map, interactive contact form,
 * Tech Stack filters, FAQ accordion, Cmd+K command palette, Careers board, and citation copy.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCareers();
  initScrollReveals();
  initQuotesCarousel();
  initMap();
  initContactForm();
  initTechFilters();
  initCursorGlow();
  initTiltCards();
  initScrollProgress();
  initBackToTop();
  initButtonRipple();
  initHeroTerminal();
  initTeamBioToggle();
  initFaqAccordion();
  initCommandPalette();
  initApplyModal();
  initCiteButtons();
});

/**
 * 1. Navigation & Header scrolled behavior
 */
function initNavigation() {
  const header = document.querySelector('header');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  // Change header height & background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile navigation hamburger toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Active link highlighter on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120; // offset for nav header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id') || '';
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * 2. Scroll Reveal Animations (Intersection Observer)
 */
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(element => {
    revealObserver.observe(element);
  });
}

/**
 * 3. Quotes Slider Carousel
 */
const QUOTES_DATA = [
  {
    text: "Research is to see what everybody else has seen, and to think what nobody else has thought.",
    author: "Albert Szent-Györgyi, Nobel Laureate"
  },
  {
    text: "Evaluation of results is the beginning of wisdom. Without metrics, progress is merely an illusion.",
    author: "REAP Core Methodology"
  },
  {
    text: "Autonomous agents do not merely solve problems; they adapt, reason, and co-exist with humans to optimize work.",
    author: "Sowad Rahman, Technical Director"
  },
  {
    text: "Production is where the mathematics of research meets the friction of reality.",
    author: "Azad Hossain Raju, Managing Director"
  },
  {
    text: "The best way to predict the future is to invent it. Our job is to build the algorithms that drive that invention.",
    author: "REAP Leadership Group"
  },
  {
    text: "In the medical domain, uncertainty is not a liability. When uncertainty guides learning, it becomes a powerful diagnostic tool.",
    author: "From CT Classification Research, 2026"
  },
  {
    text: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    author: "Alan Turing, Computer Scientist"
  },
  {
    text: "AI is the new electricity. Just as electricity transformed industry after industry roughly a hundred years ago, AI will now do the same.",
    author: "Andrew Ng, AI Researcher"
  },
  {
    text: "The greatest danger in times of turbulence is not the turbulence itself, but to act with yesterday's logic.",
    author: "Peter Drucker"
  },
  {
    text: "Agents are not mere automations; they are collaborators that reason, adapt, and earn trust through consistent evaluation.",
    author: "REAP Agent Systems Division"
  }
];

function initQuotesCarousel() {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const quoteDotsContainer = document.getElementById('quote-dots');
  
  if (!quoteText || !quoteAuthor || !quoteDotsContainer) return;
  
  let currentIdx = 0;
  let intervalId = null;

  // Create dot indicators
  quoteDotsContainer.innerHTML = '';
  QUOTES_DATA.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.classList.add('quote-dot');
    if (idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToQuote(idx);
      resetAutoplay();
    });
    quoteDotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.quote-dot');

  function goToQuote(idx) {
    currentIdx = idx;
    
    quoteText.style.opacity = '0';
    quoteAuthor.style.opacity = '0';
    
    setTimeout(() => {
      quoteText.innerText = QUOTES_DATA[idx].text;
      quoteAuthor.innerText = QUOTES_DATA[idx].author;
      
      quoteText.style.opacity = '1';
      quoteAuthor.style.opacity = '1';
      
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[idx]) dots[idx].classList.add('active');
    }, 250);
  }

  function startAutoplay() {
    intervalId = setInterval(() => {
      let nextIdx = (currentIdx + 1) % QUOTES_DATA.length;
      goToQuote(nextIdx);
    }, 6000);
  }

  function resetAutoplay() {
    clearInterval(intervalId);
    startAutoplay();
  }

  quoteText.style.transition = 'opacity 0.25s ease-in-out';
  quoteAuthor.style.transition = 'opacity 0.25s ease-in-out';
  
  goToQuote(0);
  startAutoplay();
}

/**
 * 4. Filterable Tech Stack Grid
 */
function initTechFilters() {
  const filterBtns = document.querySelectorAll('.tech-filter-btn');
  const techItems = document.querySelectorAll('.tech-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      // Filter tech stack items
      techItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/**
 * 5. Dark Theme Leaflet Map
 */
function initMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  const lat = 44.368812;
  const lng = -100.351481;

  const map = L.map('map', {
    center: [lat, lng],
    zoom: 15,
    scrollWheelZoom: false,
    zoomControl: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>'
  }).addTo(map);

  const customPopup = `
    <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 0.25rem;">
      <h5 style="margin: 0 0 0.35rem; color: #00f2fe; font-family: 'Outfit', sans-serif; font-size: 1rem;">REAP Headquarters</h5>
      <p style="margin: 0; font-size: 0.8rem; color: #f1f5f9; line-height: 1.4;">101-113 S Pierre St, Pierre, SD 57501, USA</p>
    </div>
  `;

  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(customPopup).openPopup();
}

/**
 * 6. Interactive Contact Form with validation & mock feedback
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    feedback.style.display = 'none';
    feedback.className = 'form-feedback';

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    const tr = window.t || ((k) => k);

    if (!name || !email || !message) {
      showFeedback(tr('form.error.required'), 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showFeedback(tr('form.error.email'), 'error');
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" width="20" height="20" viewBox="0 0 50 50" style="animation: rotate 1s linear infinite; margin-right: 8px; display: inline-block;">
        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="80, 200" stroke-dashoffset="0" style="stroke-linecap: round;"></circle>
      </svg>
      ${tr('contact.form.sending')}
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      showFeedback(tr('form.success').replace('{name}', name), 'success');
      form.reset();
    }, 1800);
  });

  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function showFeedback(msg, type) {
    feedback.innerText = msg;
    feedback.classList.add(type);
    feedback.style.display = 'block';
  }
}

/**
 * 7. Mouse-follow Ambient Glow (desktop only)
 */
function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  window.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    glow.classList.add('active');
  });

  document.addEventListener('mouseleave', () => glow.classList.remove('active'));
}

/**
 * 8. 3D Tilt Hover Effect for Cards
 */
function initTiltCards() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.project-card, .service-card, .team-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/**
 * 9. Scroll Progress Bar
 */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  });
}

/**
 * 10. Back to Top Floating Button
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * 11. Button Click Ripple Effect
 */
function initButtonRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });
}

/**
 * 12. Animated Typing Terminal (hero panel)
 */
function initHeroTerminal() {
  const body = document.getElementById('hero-terminal-body');
  if (!body) return;

  const lines = [
    { prompt: '$ ', text: 'reap-agent run --task "kidney-ct-classification"', cls: 'term-cmd' },
    { prompt: '', text: '✓ Loading dataset...', cls: 'term-ok' },
    { prompt: '', text: '✓ Initializing active learning loop...', cls: 'term-ok' },
    { prompt: '', text: '✓ Model checkpoint restored', cls: 'term-ok' },
    { prompt: '', text: '✓ Running evaluation suite...', cls: 'term-ok' },
    { prompt: '', text: '✓ Deployment: production-ready', cls: 'term-success' }
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentLineEl = null;

  function typeNextChar() {
    if (lineIndex >= lines.length) {
      setTimeout(resetTerminal, 4000);
      return;
    }

    const line = lines[lineIndex];

    if (charIndex === 0) {
      currentLineEl = document.createElement('div');
      currentLineEl.className = `term-line ${line.cls}`;
      const promptSpan = document.createElement('span');
      promptSpan.className = 'term-prompt';
      promptSpan.textContent = line.prompt;
      currentLineEl.appendChild(promptSpan);
      currentLineEl.appendChild(document.createTextNode(''));
      body.appendChild(currentLineEl);
    }

    if (charIndex < line.text.length) {
      currentLineEl.lastChild.textContent += line.text.charAt(charIndex);
      charIndex++;
      setTimeout(typeNextChar, line.cls === 'term-cmd' ? 35 : 12);
    } else {
      lineIndex++;
      charIndex = 0;
      setTimeout(typeNextChar, 220);
    }
  }

  function resetTerminal() {
    body.innerHTML = '';
    lineIndex = 0;
    charIndex = 0;
    typeNextChar();
  }

  setTimeout(typeNextChar, 700);
}

/**
 * 13. Expandable "Full Profile" Team Bio Toggle
 */
function initTeamBioToggle() {
  const toggles = document.querySelectorAll('.team-bio-toggle');
  if (!toggles.length) return;

  toggles.forEach(btn => {
    const targetId = btn.getAttribute('data-target');
    const target = document.getElementById(targetId);
    const label = btn.querySelector('span');
    if (!target || !label) return;

    btn.addEventListener('click', () => {
      const isOpen = target.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      const tr = window.t || ((k) => k);
      label.textContent = isOpen ? tr('bio.toggle.less') : tr('bio.toggle.more');
    });
  });
}

/**
 * 14. FAQ Accordion
 */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach(other => {
        other.classList.remove('open');
        const otherQuestion = other.querySelector('.faq-question');
        if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * 15. Command Palette / Quick Search (Ctrl+K or Cmd+K)
 */
function initCommandPalette() {
  const overlay = document.getElementById('command-palette-overlay');
  const input = document.getElementById('command-palette-input');
  const resultsEl = document.getElementById('command-palette-results');
  const trigger = document.getElementById('search-trigger');
  if (!overlay || !input || !resultsEl) return;

  // Build the command list from the already-translated nav links,
  // so labels automatically follow the active language.
  function buildCommands() {
    const commands = [];

    document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      commands.push({
        icon: 'fa-arrow-right',
        label: link.textContent.trim(),
        action: () => target.scrollIntoView({ behavior: 'smooth' })
      });
    });

    const contactForm = document.getElementById('form-name');
    if (contactForm) {
      commands.push({
        icon: 'fa-envelope',
        label: window.t ? window.t('contact.form.title') : 'Send Message',
        action: () => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => contactForm.focus(), 500);
        }
      });
    }

    const langSwitcher = document.getElementById('lang-toggle');
    if (langSwitcher) {
      commands.push({
        icon: 'fa-globe',
        label: window.t ? window.t('nav.search') + ': EN / ES / BN' : 'Change language',
        action: () => langSwitcher.click()
      });
    }

    return commands;
  }

  let commands = [];
  let activeIndex = -1;

  function render(filtered) {
    resultsEl.innerHTML = '';
    activeIndex = filtered.length ? 0 : -1;

    filtered.forEach((cmd, idx) => {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'command-palette-item' + (idx === 0 ? ' active' : '');
      row.innerHTML = `<i class="fa-solid ${cmd.icon}"></i><span>${cmd.label}</span>`;
      row.addEventListener('mouseenter', () => setActive(idx));
      row.addEventListener('click', () => runCommand(cmd));
      resultsEl.appendChild(row);
    });
  }

  function setActive(idx) {
    activeIndex = idx;
    resultsEl.querySelectorAll('.command-palette-item').forEach((el, i) => {
      el.classList.toggle('active', i === idx);
      if (i === idx) el.scrollIntoView({ block: 'nearest' });
    });
  }

  function getFiltered() {
    const query = input.value.trim().toLowerCase();
    if (!query) return commands;
    return commands.filter(c => c.label.toLowerCase().includes(query));
  }

  function runCommand(cmd) {
    closePalette();
    setTimeout(() => cmd.action(), 150);
  }

  function openPalette() {
    commands = buildCommands();
    input.value = '';
    render(commands);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (trigger) trigger.addEventListener('click', openPalette);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePalette();
  });

  input.addEventListener('input', () => render(getFiltered()));

  input.addEventListener('keydown', (e) => {
    const filtered = getFiltered();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(Math.min(activeIndex + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(Math.max(activeIndex - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[activeIndex]) runCommand(filtered[activeIndex]);
    } else if (e.key === 'Escape') {
      closePalette();
    }
  });

  document.addEventListener('keydown', (e) => {
    const isTypingField = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      overlay.classList.contains('open') ? closePalette() : openPalette();
    } else if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closePalette();
    } else if (e.key === '/' && !isTypingField && !overlay.classList.contains('open')) {
      e.preventDefault();
      openPalette();
    }
  });
}

/**
 * 16. Careers Board
 *
 * ADMIN NOTE: This array is the entire "back office" for the Careers section —
 * there's no server, so adding/removing an open role means editing this list.
 * Add an object below and it appears on the site automatically; delete one to
 * take a role down.
 */
const JOB_OPENINGS = [
  {
    title: 'Machine Learning Engineer',
    department: 'AI & Research',
    location: 'Dhaka, Bangladesh (Hybrid)',
    type: 'Full-time',
    description: 'Design and ship deep learning pipelines for medical imaging and autonomous agent systems, from research prototype through to production deployment.'
  },
  {
    title: 'Frontend Developer',
    department: 'Web Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build premium, high-performance client websites and dashboards with modern JavaScript, clean architecture, and accessible UI.'
  },
  {
    title: 'Computer Vision Research Assistant',
    department: 'Research',
    location: 'Dhaka, Bangladesh',
    type: 'Internship',
    description: "Support active learning and medical image segmentation research under REAP's technical directors, with co-authorship opportunities on published work."
  }
];

function initCareers() {
  const list = document.getElementById('careers-list');
  if (!list) return;

  list.innerHTML = '';

  JOB_OPENINGS.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card glass-panel reveal';
    card.innerHTML = `
      <div class="job-card-main">
        <h3>${job.title}</h3>
        <div class="job-meta">
          <span><i class="fa-solid fa-building"></i> ${job.department}</span>
          <span><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
          <span class="job-type-badge">${job.type}</span>
        </div>
        <p class="job-description">${job.description}</p>
      </div>
      <div class="job-card-side">
        <button class="btn btn-primary job-apply-btn" type="button" data-role="${job.title}">
          <span data-i18n="careers.apply.cta">Apply Now</span>
        </button>
      </div>
    `;
    list.appendChild(card);
  });

  // i18n's own DOMContentLoaded listener runs before this one, so the
  // dynamically-created "Apply Now" labels need a manual translation pass.
  const tr = window.t;
  if (tr) {
    list.querySelectorAll('[data-i18n="careers.apply.cta"]').forEach(el => {
      el.textContent = tr('careers.apply.cta');
    });
  }
}

/**
 * 17. Job Application Modal (opens a pre-filled mailto: — no backend to upload to)
 */
function initApplyModal() {
  const overlay = document.getElementById('apply-modal-overlay');
  const closeBtn = document.getElementById('apply-modal-close');
  const roleLabel = document.getElementById('apply-modal-role');
  const form = document.getElementById('apply-form');
  const generalBtn = document.getElementById('careers-general-apply');
  if (!overlay || !form) return;

  function openModal(role) {
    roleLabel.textContent = role;
    form.reset();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('apply-name').focus(), 50);
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const applyBtn = e.target.closest('.job-apply-btn');
    if (applyBtn) openModal(applyBtn.getAttribute('data-role'));
  });

  if (generalBtn) {
    const tr = window.t || ((k) => k);
    generalBtn.addEventListener('click', () => openModal(tr('careers.general.roleLabel')));
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('apply-name').value.trim();
    const email = document.getElementById('apply-email').value.trim();
    const message = document.getElementById('apply-message').value.trim();
    const role = roleLabel.textContent;
    const cvInput = document.getElementById('apply-cv');
    const cvName = cvInput && cvInput.files.length ? cvInput.files[0].name : null;

    let body = `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\n${message}\n\n`;
    body += cvName
      ? `(Please attach "${cvName}" to this email before sending — it can't be uploaded automatically.)`
      : '(Please attach your CV/resume to this email before sending.)';

    const subject = `Application: ${role}`;
    const mailtoLink = `mailto:careers@reap-systems.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    closeModal();
  });
}

/**
 * 18. One-Click Citation Copy (BibTeX) for Project Cards
 */
function initCiteButtons() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  cards.forEach(card => {
    const authorsEl = card.querySelector('.project-authors');
    const titleEl = card.querySelector('.project-content h3');
    const journalEl = card.querySelector('.project-journal');
    if (!authorsEl || !titleEl) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cite-btn';
    btn.innerHTML = '<i class="fa-solid fa-quote-right"></i> <span data-i18n="projects.cite">Cite</span>';
    authorsEl.insertAdjacentElement('afterend', btn);

    btn.addEventListener('click', () => {
      const bibtex = buildBibtex(titleEl, authorsEl, journalEl);
      copyToClipboard(bibtex, btn);
    });
  });

  const tr = window.t;
  if (tr) {
    document.querySelectorAll('.cite-btn span[data-i18n="projects.cite"]').forEach(el => {
      el.textContent = tr('projects.cite');
    });
  }
}

function buildBibtex(titleEl, authorsEl, journalEl) {
  const title = titleEl.textContent.trim();
  const authorsRaw = authorsEl.textContent.replace(/^Authors:\s*/i, '').trim();
  const authors = authorsRaw.split(',').map(a => a.trim()).join(' and ');
  const firstAuthorLastName = authorsRaw.split(',')[0].trim().split(' ').pop().toLowerCase();

  const journalText = journalEl ? journalEl.textContent.trim() : '';
  const yearMatch = journalText.match(/\((\d{4})\)/);
  const year = yearMatch ? yearMatch[1] : new Date().getFullYear();
  const journal = journalText.replace(/\(\d{4}\)/, '').replace(/^[^\w]*/, '').trim() || 'REAP Labs';

  const key = `${firstAuthorLastName}${year}${title.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '')}`;

  return `@article{${key},\n  title={${title}},\n  author={${authors}},\n  journal={${journal}},\n  year={${year}}\n}`;
}

function copyToClipboard(text, triggerEl) {
  const showCopied = () => {
    const span = triggerEl.querySelector('span');
    const original = span.textContent;
    const tr = window.t || ((k) => k);
    span.textContent = tr('projects.cite.copied');
    triggerEl.classList.add('copied');
    setTimeout(() => {
      span.textContent = original;
      triggerEl.classList.remove('copied');
    }, 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showCopied).catch(() => fallbackCopy(text, showCopied));
  } else {
    fallbackCopy(text, showCopied);
  }
}

function fallbackCopy(text, onDone) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    onDone();
  } catch (err) {
    // Clipboard unavailable — silently ignore, button just won't confirm.
  }
  document.body.removeChild(textarea);
}

// Add rotate animation styles inline for the form spinner
const style = document.createElement('style');
style.textContent = `
@keyframes rotate {
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);
