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

    // Modo Oscuro
    let botonModo = document.getElementById("modoOscuro");
    if (botonModo) {
        botonModo.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");
            botonModo.textContent = document.body.classList.contains("dark-mode") ? "☀️ Activar Modo Claro" : "🌙 Activar Modo Oscuro";
        });
    }

    // Música
    let musica = document.getElementById("musicaFondo");
    let botonMusica = document.getElementById("toggleMusica");
    if (botonMusica && musica) {
        botonMusica.addEventListener("click", function() {
            if (musica.paused) {
                musica.play();
                botonMusica.textContent = "🔊 Pausar Música";
            } else {
                musica.pause();
                botonMusica.textContent = "🎵 Reproducir Música";
            }
        });
    }

    // Descargar CV
    let botonPDF = document.getElementById("descargarPDF");
    if (botonPDF) {
        botonPDF.addEventListener("click", function() {
            // Guardar el currículum como PDF
            window.print();
        });
    }
});
