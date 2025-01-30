document.addEventListener("DOMContentLoaded", function() {
    // Activar efectos de aparición en las secciones
    let secciones = document.querySelectorAll(".seccion");

    function mostrarSeccion() {
        secciones.forEach(sec => {
            let distancia = sec.getBoundingClientRect().top;
            let alturaPantalla = window.innerHeight / 1.3;
            if (distancia < alturaPantalla) {
                sec.style.opacity = "1";
                sec.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", mostrarSeccion);
    mostrarSeccion();
});
