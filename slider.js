const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentIndex = 0;
const cardsPerSlide = 3;
const totalCards = slider.children.length;


const cardWidth = 250 + 32; 

next.addEventListener('click', () => {
  if (currentIndex + cardsPerSlide < totalCards) {
    currentIndex += cardsPerSlide;
  } else {
    currentIndex = 0; 
  }
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});


prev.addEventListener('click', () => {
  if (currentIndex - cardsPerSlide >= 0) {
    currentIndex -= cardsPerSlide;
  } else {
  
    currentIndex = totalCards - cardsPerSlide;
  }

  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});
