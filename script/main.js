document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Control de navbar al hacer scroll
    function handleScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    // Control de carrusel genérico
    function initializeCarousel(carouselClass, prevButtonClass, nextButtonClass, intervalTime = 4000) {
        let currentIndex = 0;
        const items = document.querySelectorAll(carouselClass);
        const totalItems = items.length;
        const prevButton = document.querySelector(prevButtonClass);
        const nextButton = document.querySelector(nextButtonClass);

        function updateCarousel() {
            const offset = -currentIndex * 100;
            document.querySelector(carouselClass).style.transform = `translateX(${offset}%)`;
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        function showPrev() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            updateCarousel();
        }

        nextButton?.addEventListener('click', showNext);
        prevButton?.addEventListener('click', showPrev);

        setInterval(showNext, intervalTime);
    }

    // Inicializar carruseles
    initializeCarousel('.carousel-item', '.carousel-button.prev', '.carousel-button.next', 4000);
    initializeCarousel('.carousel-item-dos', '.carousel-button.prev', '.carousel-button.next', 1500);

    // Evento en las tarjetas
    const tarjetas = document.querySelectorAll('.tarjetas');
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            window.open('proyectoeducativo.html', '_blank');
        });
    });

    // Evento en acordeones
    const acordeon = document.querySelectorAll(".accordion-header");
    acordeon.forEach(header => {
        header.addEventListener('click', function() {
            console.log("Hola Mundo");
        });
    });
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

