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

function toggleFollow(button) {
  if (button.classList.contains('btn-followed')) {
    // Volver al estado original: "Seguir"
    button.classList.remove('btn-followed');
    button.innerHTML = '<i class="bi bi-person-plus" style="margin-right: 5px;"></i> Seguir';
    button.style.backgroundColor = ''; // Restaurar al color original
    button.style.color = ''; // Restaurar al color original
  } else {
    // Cambiar al estado "Siguiendo"
    button.classList.add('btn-followed');
    button.innerHTML = '<i class="bi bi-check" style="margin-right: 5px;"></i> Siguiendo';
    button.style.backgroundColor = '#0084ff'; // Cambiar el color al hacer clic
    button.style.color = 'white'; // Cambiar el color del texto
  }
}