document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('[data-mobile-toggle]');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    // Close menu on link click
    menu.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll offset handled by CSS scroll-margin-top on sections

  // Dynamic year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Contact form - basic UX and placeholder guard for Formspree
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', async (e) => {
      const action = form.getAttribute('action') || '';
      const isPlaceholder = action.includes('your_form_id');
      if (isPlaceholder) {
        e.preventDefault();
        if (statusEl) {
          statusEl.textContent = 'Form not yet connected. Update the action URL with your Formspree ID.';
          statusEl.style.color = '#7c3aed';
        }
        return;
      }
      // Enhance with fetch to avoid page reload
      e.preventDefault();
      const formData = new FormData(form);
      try {
        const res = await fetch(action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          form.reset();
          if (statusEl) {
            statusEl.textContent = 'Thanks! Your message has been sent.';
            statusEl.style.color = 'green';
          }
        } else {
          if (statusEl) {
            statusEl.textContent = 'Something went wrong. Please try again later.';
            statusEl.style.color = 'crimson';
          }
        }
      } catch (err) {
        if (statusEl) {
          statusEl.textContent = 'Network error. Please check your connection.';
          statusEl.style.color = 'crimson';
        }
      }
    });
  }
});


