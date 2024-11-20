// Obtener el modal
var modal2 = document.getElementById("modal2");

// Obtener el botón que abre el modal
var btn2 = document.querySelector(".add-post-btn");

// Obtener el elemento <span> que cierra el modal
var span2 = document.getElementsByClassName("close2")[0];

// Cuando el usuario hace clic en el botón, abre el modal
btn2.onclick = function() {
    modal2.style.display = "flex";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, también cierra el modal
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}