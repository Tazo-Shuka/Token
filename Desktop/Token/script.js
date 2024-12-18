// Example of a simple script to handle scroll effects or interactivity
document.addEventListener('DOMContentLoaded', function() {
  const ctaBtn = document.querySelector('.cta-btn');
  ctaBtn.addEventListener('click', function() {
      window.scrollTo({
          top: document.querySelector('#about').offsetTop,
          behavior: 'smooth'
      });
  });
});
