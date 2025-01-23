// Carousel
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Ensure the index is within bounds (circular navigation)
    currentSlide = (index + totalSlides) % totalSlides;

    // Update the carousel position
    const carousel = document.querySelector('.carousel-container');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Add event listeners for navigation buttons
document.getElementById('prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.getElementById('next').addEventListener('click', () => showSlide(currentSlide + 1));

// Auto-slide every 5 seconds (optional)
setInterval(() => showSlide(currentSlide + 1), 5000);


