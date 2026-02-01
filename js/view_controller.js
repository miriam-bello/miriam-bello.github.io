document.addEventListener('DOMContentLoaded', function () {
    Fancybox.bind('[data-fancybox="gallery"]', {
        // Opciones de configuración (puedes personalizarlas)
        Thumbs: {
            autoStart: false, // No mostrar miniaturas automáticamente
        },
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ['close'],
            },
        },
        Image: {
            zoom: true, // Permitir zoom
        },
        Carousel: {
            infinite: true, // Navegación infinita
        },
        // Traducción al español (opcional)
        l10n: {
            CLOSE: "Cerrar",
            NEXT: "Siguiente",
            PREV: "Anterior",
            ZOOM_IN: "Acercar",
            ZOOM_OUT: "Alejar",
            FULL_SCREEN: "Pantalla completa",
            THUMBS: "Miniaturas",
            DOWNLOAD: "Descargar",
            SHARE: "Compartir",
        }
    });
});

// navigation.js - Funcionalidad común para todas las páginas
document.addEventListener('DOMContentLoaded', function () {
    // Marcar enlace activo
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Año actual en el footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});