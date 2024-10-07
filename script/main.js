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
    const items = document.querySelectorAll('.carousel-itemm');
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


   // Selecciona los botones de proyectos y la superposición
   function animateNumber(element, start, end, duration) {
    let startTime = null;

    function updateNumber(currentTime) {
        if (startTime === null) startTime = currentTime;
        const progress = currentTime - startTime;
        const currentNumber = Math.min(Math.floor(start + (progress / duration) * (end - start)), end);
        element.innerHTML = currentNumber;  // Cambiamos textContent por innerHTML para asegurar formato correcto
        if (currentNumber < end) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

// Seleccionar los elementos
const counters = document.querySelectorAll('.container-cinco .uno h3, .container-cinco .dos h3');

// Valores finales para los contadores
const values = [70, 9, 2000]; // Estos son los valores que queremos mostrar al final

// Aplicar animación a cada contador
counters.forEach((counter, index) => {
    animateNumber(counter, 0, values[index], 2000); // Duración 2000 ms (2 segundos)
});





document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;

  function showSlide() {
      const slides = document.querySelector('.slider-images');
      const totalSlides = slides.children.length;

      // Muestra la siguiente imagen
      currentSlide = (currentSlide + 1) % totalSlides;

      // Calcula la posición de la imagen
      const offset = -currentSlide * 100;
      slides.style.transform = `translateX(${offset}%)`;
  }

  // Cambia de imagen cada 3 segundos
  setInterval(showSlide, 3000);
});


document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelector('.slider-wrapper');
  const totalSlides = document.querySelectorAll('.slider-image').length;

  function showSlide() {
    // Actualiza el índice de la imagen actual
    currentSlide = (currentSlide + 1) % totalSlides;

    // Mueve el slider al 100% de su ancho multiplicado por el índice actual
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }

  // Cambia de imagen cada 3 segundos
  setInterval(showSlide, 3000);
});


var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
  interval: 2000,  // Intervalo de tiempo entre diapositivas (ajústalo si es necesario)
  wrap: true      // Permite el ciclo continuo hacia adelante y hacia atrás
});
