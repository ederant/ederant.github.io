// Nav toggle
function toggleNav() {
  document.getElementById('nav-mobile').classList.toggle('open');
}
function closeNav() {
  document.getElementById('nav-mobile').classList.remove('open');
}

// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
});

// Gallery switcher
function switchImg(btn, project, index) {
  // Remove active from siblings
  const thumbs = btn.parentElement.querySelectorAll('.thumb');
  thumbs.forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  // Switch image
  const gallery = btn.closest('.project-gallery');
  const imgs = gallery.querySelectorAll('.gallery-img');
  imgs.forEach(img => img.classList.remove('active'));
  imgs[index].classList.add('active');
}

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('form-note');
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  // Simulate send (no backend — user can wire to Formspree/EmailJS)
  setTimeout(() => {
    note.textContent = '✓ Mensaje recibido. Te contactaré pronto.';
    e.target.reset();
    btn.textContent = 'Enviar mensaje ✓';
    setTimeout(() => {
      btn.textContent = 'Enviar mensaje';
      btn.disabled = false;
      note.textContent = '';
    }, 4000);
  }, 800);
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-block, .section-title').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
