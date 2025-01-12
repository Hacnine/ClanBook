// JavaScript for Slider
const sliderWrapper = document.getElementById('sliderWrapper');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Update slider transform and buttons
function updateSlider() {
  const slideWidth = sliderWrapper.children[0].getBoundingClientRect().width;
  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  // Enable/disable buttons based on the index
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === sliderWrapper.children.length - 3;
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

function nextSlide() {
  if (currentIndex < sliderWrapper.children.length - 3) {
    currentIndex++;
    updateSlider();
  }
}

// Initialize on page load
updateSlider();

// Recalculate slider on window resize
window.addEventListener('resize', updateSlider);
