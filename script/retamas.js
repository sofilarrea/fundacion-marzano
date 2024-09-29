// Carousel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item-doss');
const totalItems = items.length;
const carousel = document.querySelector('.carousel-doss');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

function updateCarousel() {
    if (carousel) {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

function showNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function showPrev() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
}

if (nextButton && prevButton) {
    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);
}

// Auto-slide
if (totalItems > 0) {
    setInterval(showNext, 1500);
}

// WhatsApp
const whatsappIcon = document.getElementById('whatsapp-icon');
if (whatsappIcon) {
    whatsappIcon.addEventListener('click', () => {
        const phoneNumber = '5492617744912';
        const message = 'Hola, me gustaría obtener más información';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
}

// Funciones para manejar los modales
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Unificar eventos para cerrar modales al hacer clic fuera de ellos
window.onclick = function(event) {
    const modals = ['modalSocio', 'modalPadrino', 'imageModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal && event.target === modal) {
            closeModal(modalId);
        }
    });
};

// Cierre de modales con la tecla "Escape"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal('modalSocio');
        closeModal('modalPadrino');
        closeModal('imageModal');
    }
});

// Inicialización del modal de imágenes
document.addEventListener('DOMContentLoaded', () => {
    const verPlanDeEstudio = document.getElementById('verPlanDeEstudio');
    if (verPlanDeEstudio) {
        verPlanDeEstudio.addEventListener('click', () => openModal('imageModal'));
    }

    const closeModalButtons = document.querySelectorAll('.close');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => closeModal(button.closest('.modall').id));
    });
});
function showImage(imageNumber) {
    const image1 = document.getElementById('modalImage1');
    const image2 = document.getElementById('modalImage2');

    if (image1 && image2) {
        image1.style.display = (imageNumber === 1) ? 'block' : 'none';
        image2.style.display = (imageNumber === 2) ? 'block' : 'none';
    }
}

// Asegúrate de que los botones de navegación en el modal llamen a showImage correctamente
const imageNavButtons = document.querySelectorAll('.modal-navigation .nav-button');
imageNavButtons.forEach((button, index) => {
    button.addEventListener('click', () => showImage(index + 1));
});
function copiarDatosBancarios() {
  // Datos bancarios que deseas copiar
  const datosBancarios = `
      Banco: Galicia (suc. 81 Mendoza)
      Cuenta: Cuenta Corriente en Pesos 17480-8081-5
      CBU: 0070 0818 2000 0017 4808 53
      Alias: las.retamas.fm
  `;

  // Copiar los datos al portapapeles
  navigator.clipboard.writeText(datosBancarios).then(() => {
      alert('Datos bancarios copiados al portapapeles');
  }).catch(err => {
      console.error('Error al copiar los datos: ', err);
  });
}
