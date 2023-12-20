document.addEventListener("DOMContentLoaded", function() {
    const mostrarResenaButton = document.getElementById("mostrarResena");
    const mostrarMiembrosButton = document.getElementById("mostrarMiembros");
    const reseñaPage = document.getElementById("reseña");
    const equipoPage = document.getElementById("equipo");

    mostrarResenaButton.addEventListener("click", function() {
        reseñaPage.style.display = "block";
        equipoPage.style.display = "none";
    });

    mostrarMiembrosButton.addEventListener("click", function() {
        reseñaPage.style.display = "none";
        equipoPage.style.display = "block";
    });
});
