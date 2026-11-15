/**
 * STIR & SPOON® — Interactieve Merk-landingspagina Script
 * Opgericht door Bas Adema
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header schaduw bij scrollen
  const header = document.getElementById('site-header');
  const handleScroll = () => {
    if (window.scrollY > 12) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobiel menu openen / sluiten
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Interactieve 4-in-1 Slijpwijzer filter in de Bamboe-sectie
  const advisorTabs = document.querySelectorAll('.advisor-tab');
  const slotCards = document.querySelectorAll('.slot-card');

  advisorTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      advisorTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const targetSlots = (tab.getAttribute('data-slots') || 'all').split(',');

      slotCards.forEach((card) => {
        const slotNum = card.getAttribute('data-slot');
        card.classList.remove('highlighted', 'dimmed');

        if (targetSlots.includes('all')) {
          return;
        }

        if (targetSlots.includes(slotNum)) {
          card.classList.add('highlighted');
        } else {
          card.classList.add('dimmed');
        }
      });
    });
  });

  // 4. Actieve sectie-indicator in de navigatiebalk
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -55% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));
});

