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


const proyectos = document.getElementById('proyectos')


    const whatsappIcon = document.getElementById('whatsapp-icon'); // Seleccionamos el ícono de la imagen

    whatsappIcon.addEventListener('click', () => {
        const phoneNumber = '5492613395692'; // Reemplaza con el número de teléfono incluyendo el código de país
        const message = 'Hola, me gustaría obtener más información'; // Mensaje que se enviará
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Abrimos WhatsApp Web en una nueva pestaña
        window.open(whatsappURL, '_blank');
    });




    // Abre el modal y muestra la imagen inicial
function openModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'block';
    showImage(1); // Mostrar la primera imagen por defecto
}

// Cierra el modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Cambia entre las imágenes del modal
function showImage(imageNumber) {
    const image1 = document.getElementById('modalImage1');
    const image2 = document.getElementById('modalImage2');

    if (imageNumber === 1) {
        image1.style.display = 'block';
        image2.style.display = 'none';
    } else if (imageNumber === 2) {
        image1.style.display = 'none';
        image2.style.display = 'block';
    }
}

// Cierra el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}
