/**
 * Stir and Spoon — Officiële Merkpagina (Coming Soon)
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});
