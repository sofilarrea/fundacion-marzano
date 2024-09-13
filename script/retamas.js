document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item-doss');
    const totalItems = items.length;
    const carousel = document.querySelector('.carousel-doss');
    const prevButton = document.querySelector('.carousel-button.prev'); // Asegúrate de tener estos botones en tu HTML
    const nextButton = document.querySelector('.carousel-button.next'); // Asegúrate de tener estos botones en tu HTML

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function showPrev() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    }

    // Event listeners for next/prev buttons
    if (nextButton && prevButton) {
        nextButton.addEventListener('click', showNext);
        prevButton.addEventListener('click', showPrev);
    }

    // Optional: Automatic image change every 3 seconds
    setInterval(showNext, 1500);
});
