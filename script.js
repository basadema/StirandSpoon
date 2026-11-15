/**
 * ============================================================================
 * STIR & SPOON® — Main Application Script (script.js)
 * ============================================================================
 * Features:
 * 1. NL / EN Language Switcher (with localStorage persistence & html[lang])
 * 2. Data-driven Mood Photo Grid rendering (from `moodPhotos` in translations.js)
 * 3. Automatic fallback for `/assets/logo.svg` and `/assets/photos/foto-*.jpg`
 * 4. Central link binding (`SITE_CONFIG.bolUrl`, contact email, social links)
 * 5. Smooth scroll-reveal animations (respects prefers-reduced-motion)
 * 6. Future-ready mobile burger navigation toggle
 * ============================================================================
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'stir_and_spoon_lang';
  const DEFAULT_LANG = 'nl';

  /**
   * Resolve nested key like "manifesto.p1" from the active language dictionary
   */
  function getTranslation(lang, keyPath) {
    if (!translations || !translations[lang]) return null;
    return keyPath.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), translations[lang]);
  }

  /**
   * Handle graceful fallback when `/assets/logo.svg` is not added yet
   */
  function initLogoFallbacks() {
    const logoImages = document.querySelectorAll('[data-logo-img]');
    logoImages.forEach((img) => {
      const wrapper = img.closest('.brand-logo');
      const fallback = wrapper ? wrapper.querySelector('.brand-wordmark-fallback') : null;

      const showFallback = () => {
        img.style.display = 'none';
        if (fallback) fallback.style.display = 'inline-flex';
      };

      const showImage = () => {
        img.style.display = 'block';
        if (fallback) fallback.style.display = 'none';
      };

      img.addEventListener('error', showFallback);
      img.addEventListener('load', () => {
        if (img.naturalWidth > 0) {
          showImage();
        } else {
          showFallback();
        }
      });

      if (img.complete) {
        if (img.naturalWidth > 0) {
          showImage();
        } else {
          showFallback();
        }
      }
    });
  }

  /**
   * Attach soft pastel placeholder fallback to any photo `<img>` whose file is not added yet
   */
  function bindPhotoFallback(imgEl, captionText, srcPath, lang) {
    const frame = imgEl.closest('.photo-frame');
    if (!frame) return;

    const hintPrefix = getTranslation(lang, 'mood.placeholderHint') || 'Add photo:';

    const renderPlaceholder = () => {
      imgEl.style.display = 'none';
      let placeholder = frame.querySelector('.photo-placeholder');
      if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.className = 'photo-placeholder';
        frame.insertBefore(placeholder, frame.firstChild);
      }
      placeholder.innerHTML = `
        <div class="photo-placeholder-icon" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <path d="M21 15l-5-5L5 21"></path>
          </svg>
        </div>
        <span class="photo-placeholder-title">${captionText}</span>
        <span class="photo-placeholder-path">${hintPrefix} /${srcPath}</span>
      `;
    };

    imgEl.addEventListener('error', renderPlaceholder, { once: true });
    if (imgEl.complete && imgEl.naturalWidth === 0) {
      renderPlaceholder();
    }
  }

  /**
   * Render the Data-Driven Mood Photo Grid (`#mood-grid`)
   */
  function renderMoodGrid(lang) {
    const grid = document.getElementById('mood-grid');
    if (!grid || typeof moodPhotos === 'undefined') return;

    grid.innerHTML = '';

    moodPhotos.forEach((photo) => {
      const altText = (photo.alt && photo.alt[lang]) || photo.alt.nl || 'Stir and Spoon';
      const captionText = (photo.caption && photo.caption[lang]) || photo.caption.nl || '';

      const figure = document.createElement('figure');
      figure.className = 'photo-frame mood-item reveal is-visible';

      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = altText;
      img.loading = 'lazy';

      const figcaption = document.createElement('figcaption');
      figcaption.className = 'mood-caption-pill';
      figcaption.textContent = captionText;

      figure.appendChild(img);
      figure.appendChild(figcaption);
      grid.appendChild(figure);

      bindPhotoFallback(img, captionText, photo.src, lang);
    });
  }

  /**
   * Update Hero photo fallback if `/assets/photos/foto-1.jpg` isn't uploaded yet
   */
  function updateHeroPhoto(lang) {
    const heroImg = document.getElementById('hero-photo-img');
    if (!heroImg) return;
    const caption = getTranslation(lang, 'hero.visualCaption') || 'Stir and Spoon®';
    const existingPlaceholder = heroImg.closest('.photo-frame')?.querySelector('.photo-placeholder');
    if (existingPlaceholder) {
      existingPlaceholder.remove();
      heroImg.style.display = '';
    }
    bindPhotoFallback(heroImg, caption, 'assets/photos/foto-1.jpg', lang);
  }

  /**
   * Apply translations across the entire page without reloading
   */
  function applyLanguage(lang) {
    const validLang = translations && translations[lang] ? lang : DEFAULT_LANG;

    // 1. Set <html lang="..."> and save choice in localStorage
    document.documentElement.setAttribute('lang', validLang);
    try {
      localStorage.setItem(STORAGE_KEY, validLang);
    } catch (e) {
      // Ignore storage errors in private mode
    }

    // 2. Update Document Title & Meta Description / Open Graph
    const metaTitle = getTranslation(validLang, 'meta.title');
    const metaDesc = getTranslation(validLang, 'meta.description');
    if (metaTitle) {
      document.title = metaTitle;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', metaTitle);
    }
    if (metaDesc) {
      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute('content', metaDesc);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', metaDesc);
    }

    // 3. Swap all [data-i18n] text nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const translated = getTranslation(validLang, key);
      if (translated !== null) {
        el.textContent = translated;
      }
    });

    // 4. Swap all [data-i18n-alt] image alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      const translated = getTranslation(validLang, key);
      if (translated !== null) {
        el.setAttribute('alt', translated);
      }
    });

    // 5. Swap all [data-i18n-aria] aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const translated = getTranslation(validLang, key);
      if (translated !== null) {
        el.setAttribute('aria-label', translated);
      }
    });

    // 6. Update NL | EN language buttons state
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const isCurrent = btn.getAttribute('data-lang-btn') === validLang;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-pressed', String(isCurrent));
    });

    // 7. Re-render data-driven photo grid & hero fallback in active language
    renderMoodGrid(validLang);
    updateHeroPhoto(validLang);
  }

  /**
   * Bind SITE_CONFIG links (Bol.com URL, contact email, social links)
   */
  function applySiteConfig() {
    if (typeof SITE_CONFIG === 'undefined') return;

    document.querySelectorAll('[data-bol-link]').forEach((link) => {
      link.setAttribute('href', SITE_CONFIG.bolUrl);
    });

    const emailLink = document.getElementById('footer-email-link');
    const emailText = document.getElementById('footer-email-text');
    if (emailLink && SITE_CONFIG.contactEmail) {
      emailLink.setAttribute('href', `mailto:${SITE_CONFIG.contactEmail}`);
    }
    if (emailText && SITE_CONFIG.contactEmail) {
      emailText.textContent = SITE_CONFIG.contactEmail;
    }

    if (SITE_CONFIG.socials) {
      Object.entries(SITE_CONFIG.socials).forEach(([network, url]) => {
        const el = document.querySelector(`[data-social="${network}"]`);
        if (el && url) el.setAttribute('href', url);
      });
    }
  }

  /**
   * Scroll Reveal Observer
   */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /**
   * Future-ready mobile navigation toggle
   */
  function initNavigation() {
    const burger = document.getElementById('nav-burger');
    const nav = document.getElementById('site-nav');
    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
  }

  /**
   * Initialize Page
   */
  document.addEventListener('DOMContentLoaded', () => {
    applySiteConfig();
    initLogoFallbacks();
    initNavigation();

    // Determine initial language (localStorage -> default 'nl')
    let savedLang = DEFAULT_LANG;
    try {
      savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      savedLang = DEFAULT_LANG;
    }

    applyLanguage(savedLang);
    initScrollReveal();

    // Language switch button listeners
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chosen = btn.getAttribute('data-lang-btn');
        applyLanguage(chosen);
      });
    });
  });
})();

