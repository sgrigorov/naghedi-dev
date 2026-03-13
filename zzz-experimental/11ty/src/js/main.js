// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.querySelector('.header-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('is-open');
      document.body.classList.toggle('menu-open', !expanded);
    });
  }

  // Nav folder toggle for mobile
  document.querySelectorAll('.header-nav-folder-title').forEach(title => {
    title.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        title.closest('.header-nav-item--folder')?.classList.toggle('is-open');
      }
    });
  });
});
