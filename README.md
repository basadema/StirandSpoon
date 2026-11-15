# Stir and Spoon® — Official Brand Landing Page

Responsive, mobile-first, bilingual (`NL` | `EN`) landing page for **Stir and Spoon®** — modern, sleek small kitchen appliances. Built with plain HTML, CSS and vanilla JavaScript, designed to grow effortlessly with new sections, pages, and languages.

---

## Project Structure

```text
/
├── index.html          # Main landing page (semantic sections + data-i18n attributes)
├── style.css           # Design system (variables, base, layout, reusable components, sections)
├── translations.js     # Central SITE_CONFIG, NL/EN translations & data-driven photo array
├── script.js           # Language switcher, photo grid renderer, asset fallbacks & scroll reveal
├── assets/
│   ├── logo.svg        # <-- Place your brand logo here (automatic wordmark fallback until added)
│   └── photos/
│       ├── foto-1.jpg  # <-- Place your 6 kitchen mood photos here (foto-1.jpg to foto-6.jpg)
│       └── ...
└── pages/              # Folder ready for future pages (e.g. products.html, recipes.html)
```

---

## Quick Customization Guide

### 1. How to Swap the Logo
1. Place your SVG logo file at `/assets/logo.svg`.
2. As soon as `/assets/logo.svg` exists, the page automatically displays your SVG logo in the header, hero, and footer instead of the raspberry-pink `STIR & SPOON®` text fallback.
3. To adjust the logo size, edit the CSS variables at the top of `style.css`:
   ```css
   --logo-height-header: 38px;
   --logo-height-hero: 64px;
   --logo-height-footer: 36px;
   ```

### 2. How to Add or Swap Photos
1. Drop your 6 mood photos into `/assets/photos/` named:
   - `foto-1.jpg` (also used as the Hero photo)
   - `foto-2.jpg`
   - `foto-3.jpg`
   - `foto-4.jpg`
   - `foto-5.jpg`
   - `foto-6.jpg`
2. Until a photo file is placed in `/assets/photos/`, the page automatically displays a soft rounded pastel placeholder box.
3. **To add more photos to the grid without touching HTML**: open `translations.js` and add a new object to the `moodPhotos` array:
   ```js
   {
     id: 'foto-7',
     src: 'assets/photos/foto-7.jpg',
     aspect: 'standard',
     alt: {
       nl: 'Beschrijving van de foto in het Nederlands',
       en: 'Description of the photo in English'
     },
     caption: {
       nl: 'Korte titel NL',
       en: 'Short caption EN'
     }
   }
   ```

### 3. How to Change the Bol.com Link, Contact Details & Socials
Open `translations.js` and edit `SITE_CONFIG` at the top of the file:
```js
const SITE_CONFIG = {
  bolUrl: 'https://www.bol.com/nl/nl/w/jouw-winkel/',
  contactEmail: 'hello@stirandspoon.com',
  contactLocation: 'Nederland / The Netherlands',
  socials: {
    instagram: 'https://instagram.com/stirandspoon',
    pinterest: 'https://pinterest.com/stirandspoon',
    facebook: 'https://facebook.com/stirandspoon'
  }
};
```
Every `[data-bol-link]` button, the footer email pill, and the social icons update automatically.

---

## How to Add a New Section, a New Page and a New Language

### A. How to Add a New Section
1. **Uncomment the ready-made Product Range template** (`#assortiment`) in `index.html`, or create a new self-contained `<section class="section my-section reveal" id="my-section">` block using the reusable classes (`.container`, `.card`, `.btn`, `.photo-frame`, `.section-header`, `.section-eyebrow`, `.section-title`).
2. **Add the translations** for your new section under both `nl` and `en` in `translations.js`:
   ```js
   mySection: {
     eyebrow: 'Nieuw',
     title: 'Titel van de sectie',
     body: 'Tekst van de sectie...'
   }
   ```
3. **Bind the text in HTML** using `data-i18n="mySection.title"`.
4. **Add section-specific styles** (if needed) under `/* 5. SECTIONS */` in `style.css`.
5. **Enable the Header Navigation** (when ready) by adding the class `has-nav` to `<header class="site-header has-nav" id="top">` in `index.html`.

### B. How to Add a New Page
1. Duplicate `index.html` into root (e.g. `contact.html`) or inside `/pages/` (e.g. `/pages/assortiment.html`).
2. Keep the shared `<header class="site-header">` and `<footer class="site-footer">` blocks intact so branding, navigation, and the `NL | EN` language switcher stay identical across pages.
3. If your new page is inside `/pages/`, prefix asset and script paths with `../` (`../style.css`, `../translations.js`, `../script.js`, `../assets/logo.svg`).
4. Replace the sections inside `<main>...</main>` with your new page's sections.

### C. How to Add a New Language (e.g. German `DE` or Spanish `ES`)
1. Open `translations.js` and duplicate the `en: { ... }` block as `de: { ... }` (and/or add `de: '...'` to each item's `alt` and `caption` in `moodPhotos`).
2. Add a language button inside `.lang-switch` in `index.html`:
   ```html
   <button type="button" class="lang-btn" data-lang-btn="de" aria-pressed="false">
     DE
   </button>
   ```
3. No JavaScript changes are needed — `script.js` automatically detects `[data-lang-btn="de"]`, swaps all `[data-i18n]` texts, updates `<html lang="de">`, and saves the preference in `localStorage`.
