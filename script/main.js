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
    });

/* Accordeon */
// Código para la página de las tarjetas (la que redirige a proyectoeducativo.html)
document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.tarjetas');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            const acordeonId = tarjeta.getAttribute('data-acordeon');
            sessionStorage.setItem('acordeonAbierto', acordeonId);
            window.location.href = 'proyectoeducativo.html'; // Redirige a la página destino
        });
    });
});

// Código para la página proyectoeducativo.html
document.addEventListener('DOMContentLoaded', () => {
    const acordeonId = sessionStorage.getItem('acordeonAbierto');

    if (acordeonId) {
        const acordeon = document.getElementById(acordeonId);
        if (acordeon) {
            // Añade la clase para marcar el acordeón como activo
            acordeon.classList.add('active');
            
            // Despliega el contenido del acordeón
            const content = acordeon.querySelector('.accordion-content-ideario');
            if (content) {
                content.style.height = content.scrollHeight + 'px'; // Despliega el contenido
            }
        }

        // Borra el valor de sessionStorage para que no se mantenga en la próxima carga
        sessionStorage.removeItem('acordeonAbierto');
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const slideInterval = 3000; // Intervalo de 1000 milisegundos (1 segundo)

    function showSlide(index) {
        const wrapper = document.querySelector('.carousel-wrapper');
        const width = slides[0].clientWidth;
        wrapper.style.transform = `translateX(${-index * width}px)`;
        currentIndex = index;

        // Actualizar los puntos
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Puntos de control
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Mostrar la primera diapositiva
    showSlide(currentIndex);

    // Hacer que el carrusel pase automáticamente cada 1000 milisegundos
    setInterval(() => {
        nextSlide();
    }, slideInterval);
});







var timelineSwiper = new Swiper ('.timeline .swiper-container', {
    direction: 'vertical',
    loop: false,
    speed: 1600,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
      var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      return '<span class="' + className + '">' + year + '</span>';
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      768: {
        direction: 'horizontal',
      }
    }
  });
  