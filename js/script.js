// Seleccionar elementos necesarios
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const indicators = document.querySelectorAll('.indicators span');

let currentIndex = 0;

// Función para actualizar el carrusel
function updateCarousel() {
    const width = carouselInner.children[0].offsetWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Navegación con botones
prev.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselInner.children.length - 1 : currentIndex - 1;
    updateCarousel();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselInner.children.length;
    updateCarousel();
});

// Navegación con indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});
 // Seleccionar elementos necesarios
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Escuchar el clic en el botón hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Mostrar/ocultar el menú
});

