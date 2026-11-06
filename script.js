const navLinks = [...document.querySelectorAll('.deck-nav a')];
const slides = [...document.querySelectorAll('.slide')];
const byId = new Map(navLinks.map((link) => [link.getAttribute('href')?.slice(1), link]));

const setActive = (id) => {
  navLinks.forEach((link) => link.setAttribute('aria-current', link.id === id ? 'true' : 'false'));
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) setActive(entry.target.id);
    }
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
  slides.forEach((slide) => observer.observe(slide));
} else {
  setActive('overview');
}

document.addEventListener('keydown', (event) => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
  const direction = event.key === 'ArrowDown' || event.key === 'PageDown' ? 1 : event.key === 'ArrowUp' || event.key === 'PageUp' ? -1 : 0;
  if (!direction) return;
  const currentIndex = slides.findIndex((slide) => {
    const rect = slide.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
  });
  const next = slides[Math.min(Math.max(currentIndex + direction, 0), slides.length - 1)];
  if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
