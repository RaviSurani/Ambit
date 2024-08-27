let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideInterval = 3000; // Time in milliseconds (3 seconds)

// Function to update slider position
function updateSliderPosition() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Move to the next slide
function nextSlide() {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  updateSliderPosition();
}

// Move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  updateSliderPosition();
}

// Auto-slide functionality
let autoSlide = setInterval(nextSlide, slideInterval);

// Pause auto-slide on manual controls
function pauseAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setTimeout(() => {
    autoSlide = setInterval(nextSlide, slideInterval);
  }, 10000); // Restart auto-slide after 10 seconds of inactivity
}

// Event listeners for manual controls
document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  pauseAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  pauseAutoSlide();
});
