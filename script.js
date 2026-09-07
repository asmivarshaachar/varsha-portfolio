// Small interaction: smoothly reveal sections as they enter the viewport.
const items = document.querySelectorAll('.section, .contact');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.08 });
items.forEach(item => observer.observe(item));
