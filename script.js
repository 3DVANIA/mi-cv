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

    // 🎭 Modo Oscuro
    let botonModo = document.getElementById("modoOscuro");

    botonModo.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Guardar preferencia en localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modoOscuro", "activado");
            botonModo.textContent = "☀️ Activar Modo Claro";
        } else {
            localStorage.setItem("modoOscuro", "desactivado");
            botonModo.textContent = "🌙 Activar Modo Oscuro";
        }
    });

    // Comprobar el modo oscuro guardado
    if (localStorage.getItem("modoOscuro") === "activado") {
        document.body.classList.add("dark-mode");
        botonModo.textContent = "☀️ Activar Modo Claro";
    }

    // Botón "Volver arriba"
    let botonArriba = document.getElementById("botonArriba");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 10) {
            botonArriba.style.display = "block";
        } else {
            botonArriba.style.display = "none";
        }
    });

    botonArriba.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
document.getElementById("descargarPDF").addEventListener("click", function() {
    window.print();
});
// Seleccionamos los elementos necesarios
const hoverItems = document.querySelectorAll(".hover-view");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

// Función para abrir el modal al hacer clic
hoverItems.forEach(item => {
    item.addEventListener("click", function() {
        const imgSrc = this.getAttribute("data-img");
        modalImg.src = imgSrc;
        modal.style.display = "flex";
    });
});

// Cerrar el modal al hacer clic en la "X" o fuera de la imagen
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
