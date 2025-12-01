console.log("lightboxvideo.js cargado correctamente");

const lightboxVideo = document.getElementById("lightbox-video");
const iframeVideo = document.getElementById("iframe-video");
const btnCerrarVideo = document.querySelector(".cerrar-lightbox-video");

const videosGaleria = document.querySelectorAll(".item-video");

function abrirVideo(url) {
    if (!url) {
        console.warn("No se encontró un URL de video válido.");
        return;
    }

    lightboxVideo.classList.add("mostrar");

    iframeVideo.src = url;

    console.log("Reproduciendo video:", url);
}

function cerrarVideo() {
    lightboxVideo.classList.remove("mostrar");

    iframeVideo.src = "";
}

btnCerrarVideo.addEventListener("click", cerrarVideo);

videosGaleria.forEach(item => {
    item.addEventListener("click", () => {
        const url = item.dataset.video;
        abrirVideo(url);
    });
});

lightboxVideo.addEventListener("click", (e) => {
    if (e.target === lightboxVideo) {
        cerrarVideo();
    }
});
