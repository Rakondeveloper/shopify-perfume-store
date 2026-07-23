document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before the element enters the viewport
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const revealElements = document.querySelectorAll('.fade-up-init, .fade-left-init, .fade-right-init');
  revealElements.forEach(el => observer.observe(el));
});
