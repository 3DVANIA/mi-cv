document.addEventListener("DOMContentLoaded", function() {
    let secciones = document.querySelectorAll("section");

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

    // Menú Responsive
    let menu = document.querySelector(".menu");
    let menuToggle = document.getElementById("menu-toggle");

    menuToggle.addEventListener("click", function() {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});
