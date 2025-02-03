document.addEventListener("DOMContentLoaded", function () {
    // Manejo de secciones y animación de scroll
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
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });

    // Modo Oscuro
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

    // Descargar PDF
    document.getElementById("descargarPDF").addEventListener("click", function() {
        window.print();
    });

    // Modal para imágenes
    const hoverItems = document.querySelectorAll(".hover-view");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");

    hoverItems.forEach(item => {
        item.addEventListener("click", function() {
            const imgSrc = this.getAttribute("data-img");
            modalImg.src = imgSrc;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Animación de imagen emergente al hacer clic
    const elements = document.querySelectorAll(".hover-view");

    elements.forEach((element) => {
        element.addEventListener("click", function () {
            // Crear la imagen emergente si aún no existe
            let imgContainer = document.getElementById("imagePopup");
            if (!imgContainer) {
                imgContainer = document.createElement("div");
                imgContainer.id = "imagePopup";
                imgContainer.classList.add("fade-in");
                document.body.appendChild(imgContainer);
            }

            // Insertar la imagen seleccionada
            imgContainer.innerHTML = `<img src="${element.dataset.img}" alt="Certificado">`;
            imgContainer.classList.add("visible");

            // Cerrar imagen al hacer clic fuera de ella
            imgContainer.addEventListener("click", function () {
                imgContainer.classList.remove("visible");
            });
        });

        // Animación al hacer scroll
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(element);
    });
});
document.querySelectorAll('.hover-view').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = item.getAttribute('data-img');
        const modalImg = document.getElementById('modal-img');
        modalImg.src = imgSrc;

        const modal = document.getElementById('modal');
        modal.style.display = "block";
    });
});

document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
});
