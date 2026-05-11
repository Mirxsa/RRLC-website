const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentIndex = 0;

const cardsPerSlide = 3;
const totalCards = slider.children.length;

// dynamic card width
const card = slider.children[0];
const cardStyle = window.getComputedStyle(card);

const cardWidth =
  card.offsetWidth +
  parseInt(cardStyle.marginRight || 0);

const maxIndex = totalCards - cardsPerSlide;

// NEXT
next.addEventListener('click', () => {

  if (currentIndex < maxIndex) {

    currentIndex += cardsPerSlide;

    // prevent overshooting
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

  } else {

    // balik sa start
    currentIndex = 0;
  }

  updateSlider();
});

// PREV
prev.addEventListener('click', () => {

  if (currentIndex > 0) {

    currentIndex -= cardsPerSlide;

    if (currentIndex < 0) {
      currentIndex = 0;
    }

  } else {

    // punta sa last complete slide
    currentIndex = maxIndex;
  }

  updateSlider();
});

function updateSlider() {
  slider.style.transform =
    `translateX(-${currentIndex * cardWidth}px)`;
}
