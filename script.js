document.addEventListener("DOMContentLoaded", function () {
    // Código para manejar secciones y animación de scroll
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

    // Código del menú responsive
    let menu = document.querySelector(".menu");
    let menuToggle = document.getElementById("menu-toggle");

    menuToggle.addEventListener("click", function() {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });

    // Código del modo oscuro
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

    // Modal para imágenes (solo una vez)
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

   // Eliminar contenedor de imágenes emergentes extra debajo de contacto
   const elements = document.querySelectorAll(".hover-view");

   // Verifica si el contenedor emergente ya existe
   let imgContainer = document.getElementById("imagePopup");
   
   // Si no existe, lo creamos
   if (!imgContainer) {
       imgContainer = document.createElement("div");
       imgContainer.id = "imagePopup";
       imgContainer.classList.add("fade-in");
       document.body.appendChild(imgContainer);
   } else {
       imgContainer.style.display = 'none';  // Aseguramos que el contenedor esté oculto al principio
   }
   
   elements.forEach((element) => {
       element.addEventListener("click", function () {
           // Insertar la imagen seleccionada en el contenedor
           imgContainer.innerHTML = `<img src="${element.dataset.img}" alt="Imagen emergente">`;
           imgContainer.style.display = 'block'; // Mostrar el contenedor
   
           // Agregar la clase para hacer visible la imagen
           imgContainer.classList.add("visible");
   
           // Cerrar la imagen al hacer clic fuera de ella
           imgContainer.addEventListener("click", function () {
               imgContainer.style.display = 'none'; // Ocultar el contenedor
           });
       });
   });
   

    // Animación de las secciones
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

    elements.forEach((element) => {
        observer.observe(element);
    });
});
