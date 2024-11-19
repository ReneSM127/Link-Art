// Inicializa el carousel
var carousel = new bootstrap.Carousel(document.getElementById('Destacados'), {
    interval: 3000, // Cambia de diapositiva cada 3 segundos
    wrap: true // Continúa el ciclo de diapositivas cuando llega al final
  });

  // Detener el carousel al pasar el mouse por encima
  document.getElementById('Destacados').addEventListener('mouseenter', function () {
    carousel.pause();
  });

  // Reanudar el carousel al salir el mouse
  document.getElementById('Destacados').addEventListener('mouseleave', function () {
    carousel.cycle();
  });

    // Ejemplo de ajustar el tamaño de la imagen de forma dinámica
    document.addEventListener('DOMContentLoaded', function() {
        // Cambiar el tamaño de las imágenes cuando se cargan
        const images = document.querySelectorAll('.card-img-top img');
        images.forEach(function(img) {
          // Ajustar el tamaño de la imagen si es necesario
          img.style.width = '100%';
          img.style.height = 'auto';
        });
      });