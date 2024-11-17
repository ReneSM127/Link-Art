function filterArtists() {
    const searchQuery = document.getElementById("search").value.toLowerCase(); // Obtiene el texto del input
    const artistList = document.querySelectorAll("#artistList .col-md-3"); // Obtiene todos los elementos de los artistas
  
    artistList.forEach(artist => {
      const artistName = artist.querySelector(".card-body p.mb-1").textContent.toLowerCase(); // Nombre del artista
      if (artistName.includes(searchQuery)) {
        artist.style.display = "block"; // Muestra el artista si el nombre coincide con el texto de búsqueda
      } else {
        artist.style.display = "none"; // Oculta el artista si no coincide
      }
    });
  }

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