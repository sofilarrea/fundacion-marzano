document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 60) { // Ajusta el valor según cuando quieres que cambie el color de fondo
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarousel();
    });

    document.querySelector('.carousel-button.next').addEventListener('click', showNext);

    setInterval(showNext, 4000); 
});
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

/* -------------*/ 
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item-dos');
    const totalItems = items.length;
    const carousel = document.querySelector('.carousel-dos');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

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

    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // Opcional: Agregar cambio automático de imagen cada 3 segundos
    setInterval(showNext, 1000);
});
