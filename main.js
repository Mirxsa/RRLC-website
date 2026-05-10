// Initialize Swiper with full-height slides
var swiper = new Swiper(".home", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function() {
      // adjust heights if needed
      document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
    }
  }
});

// Optional: ensure slides height on resize
function resizeSlides() {
  const vh = window.innerHeight;
  document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.style.minHeight = vh + 'px';
  });
}
window.addEventListener('resize', resizeSlides);
resizeSlides();

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', function() {
      const isHidden = getComputedStyle(navbar).display === 'none';
      navbar.style.display = isHidden ? 'flex' : 'none';
    });
  }
});
