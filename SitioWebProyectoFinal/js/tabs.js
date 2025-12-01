console.log("tabs.js cargado correctamente");

document.querySelectorAll(".pestana-boton").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Botón clickeado:", btn.dataset.target);

        document.querySelectorAll(".pestana-boton")
            .forEach(b => b.classList.remove("activa"));

        btn.classList.add("activa");

        const target = btn.dataset.target;

        document.querySelectorAll(".contenido-pestana")
            .forEach(tab => tab.classList.remove("activa"));

        document.getElementById(target).classList.add("activa");
    });
});

document.querySelectorAll(".item-video").forEach(video => {
    video.addEventListener("click", () => {
        const videoUrl = video.dataset.video;
        console.log("Reproduciendo video:", videoUrl);
    });
});

document.querySelectorAll(".item-galeria").forEach(img => {
    img.addEventListener("click", () => {
        const lightboxUrl = img.dataset.lightbox;
        console.log("Abriendo lightbox:", lightboxUrl);
    });
});