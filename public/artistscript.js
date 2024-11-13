// Inicializa todos los carouseles
document.querySelectorAll('.carousel').forEach(function(carouselElement) {
  var carousel = new bootstrap.Carousel(carouselElement, {
    interval: 5000, // Cambia de diapositiva cada 3 segundos
    wrap: true // Continúa el ciclo de diapositivas cuando llega al final
  });

  // Detener el carousel al pasar el mouse por encima
  carouselElement.addEventListener('mouseenter', function () {
    carousel.pause();
  });

  // Reanudar el carousel al salir el mouse
  carouselElement.addEventListener('mouseleave', function () {
    carousel.cycle();
  });
});

// Ajustar el tamaño de las imágenes de todos los carouseles
document.addEventListener('DOMContentLoaded', function() {
    // Cambiar el tamaño de las imágenes de todos los carouseles
    const images = document.querySelectorAll('.carousel .card-img-top img');
    images.forEach(function(img) {
      // Ajustar el tamaño de las imágenes si es necesario
      img.style.width = '100%';
      img.style.height = 'auto';
    });
});
