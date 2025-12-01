console.log("lightboximagenes.js cargado correctamente");

const lightbox = document.getElementById("lightbox-fotos");
const imgLightbox = document.getElementById("imagen-lightbox");
const btnCerrar = document.querySelector(".cerrar-lightbox");
const btnNext = document.querySelector(".nav-lightbox.siguiente");
const btnPrev = document.querySelector(".nav-lightbox.anterior");

const imagenesGaleria = document.querySelectorAll(".item-galeria");

let indiceActual = 0;

function obtenerUrlImagen(index) {
    const item = imagenesGaleria[index];

    let url = item.dataset.lightbox;

    if (!url || url.trim() === "") {
        const img = item.querySelector("img");
        if (img) {
            url = img.src;
        }
    }

    console.log("URL que se va a abrir en lightbox:", url);
    return url;
}

function abrirLightbox(index) {
    const url = obtenerUrlImagen(index);

    if (!url) {
        console.warn("No se encontró una URL válida para la imagen en el índice", index);
        return;
    }

    imgLightbox.src = url;
    indiceActual = index;
    lightbox.classList.add("mostrar");
}

btnCerrar.addEventListener("click", () => {
    lightbox.classList.remove("mostrar");
});

imagenesGaleria.forEach((img, index) => {
    img.addEventListener("click", () => {
        abrirLightbox(index);
    });
});

btnNext.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenesGaleria.length;
    abrirLightbox(indiceActual);
});

btnPrev.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + imagenesGaleria.length) % imagenesGaleria.length;
    abrirLightbox(indiceActual);
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("mostrar");
    }
});
