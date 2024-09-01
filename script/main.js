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
    setInterval(showNext, 1500);
});


/* Accordeon */
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const section = this.parentElement;
            const content = section.querySelector('.accordion-content');

            if (section) {
                if (section.classList.contains('active')) {
                    content.style.height = content.scrollHeight + 'px'; // Aseguramos la altura completa
                    requestAnimationFrame(() => { // Deferimos al siguiente frame para activar la transición
                        content.style.height = '0';
                    });
                    section.classList.remove('active');
                } else {
                    document.querySelectorAll('.accordion-section').forEach(sec => {
                        sec.querySelector('.accordion-content').style.height = '0'; // Colapsamos los otros
                        sec.classList.remove('active');
                    });

                    section.classList.add('active');
                    content.style.height = content.scrollHeight + 'px'; // Expandimos el contenido
                }
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header-ideario');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const section = this.parentElement;
            const content = section.querySelector('.accordion-content-ideario');
            
            // Check if the clicked section is already active
            const isActive = section.classList.contains('active');

            // Collapse all sections
            document.querySelectorAll('.accordion-section-ideario').forEach(sec => {
                const secContent = sec.querySelector('.accordion-content-ideario');
                if (secContent) {
                    secContent.style.height = '0'; // Collapse all sections
                }
                sec.classList.remove('active');
            });

            // If the clicked section was not active, expand it
            if (!isActive) {
                section.classList.add('active');
                content.style.height = content.scrollHeight + 'px'; // Expand the content
            }
        });
    });

    // Ensure all sections are collapsed initially
    document.querySelectorAll('.accordion-content-ideario').forEach(content => {
        content.style.height = '0'; // Collapse all sections on page load
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todas las tarjetas
    const tarjetas = document.querySelectorAll('.tarjetas');

    // Iteramos sobre cada tarjeta y añadimos el evento de clic
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.addEventListener('click', () => {
            // Guardamos el índice del acordeón en sessionStorage
            sessionStorage.setItem('acordeonAbierto', index);

            // Redirigimos a la sección correspondiente
            switch (index) {
                case 0:
                    window.location.href = 'proyectoeducativo.html#seccion1';
                    break;
                case 1:
                    window.location.href = 'proyectoeducativo.html#seccion2';
                    break;
                case 2:
                    window.location.href = 'proyectoeducativo.html#seccion3';
                    break;
                // Añadir más casos si hay más tarjetas/acordeones
                default:
                    window.location.href = 'proyectoeducativo.html';
                    break;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos el acordeón que debe abrirse desde sessionStorage
    const acordeonAbierto = sessionStorage.getItem('acordeonAbierto');

    if (acordeonAbierto !== null) {
        // Seleccionamos todos los acordeones
        const acordeones = document.querySelectorAll('.accordion-section-ideario');

        // Abrimos el acordeón correspondiente
        const acordeon = acordeones[acordeonAbierto];
        if (acordeon) {
            const content = acordeon.querySelector('.accordion-content-ideario');
            const toggleIcon = acordeon.querySelector('.accordion-toggle i');

            // Mostrar contenido
            content.style.display = 'block'; // O agrega la clase correspondiente
            toggleIcon.classList.remove('fa-chevron-down');
            toggleIcon.classList.add('fa-chevron-up');

            // Añadir la clase 'open' al acordeón
            acordeon.classList.add('open'); 
        }

        // Limpiamos el sessionStorage
        sessionStorage.removeItem('acordeonAbierto');
    }
});
