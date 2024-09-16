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

const proyectos = document.getElementById('proyectos')


document.addEventListener('DOMContentLoaded', () => {
    const whatsappIcon = document.getElementById('whatsapp-icon'); // Seleccionamos el ícono de la imagen

    whatsappIcon.addEventListener('click', () => {
        const phoneNumber = '5492613395692'; // Reemplaza con el número de teléfono incluyendo el código de país
        const message = 'Hola, me gustaría obtener más información'; // Mensaje que se enviará
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Abrimos WhatsApp Web en una nueva pestaña
        window.open(whatsappURL, '_blank');
    });
});
