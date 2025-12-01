document.addEventListener("DOMContentLoaded", () => {

    console.log("carousel.js cargado correctamente");

    const carouselItems = document.querySelectorAll(".carousel-item");
    const indicadores = document.querySelectorAll(".carousel-indicadores .indicador");
    const btnAnterior = document.querySelector(".carousel-boton.anterior");
    const btnSiguiente = document.querySelector(".carousel-boton.siguiente");

    console.log("Items del carousel:", carouselItems.length);
    console.log("Indicadores:", indicadores.length);
    console.log("Botón anterior encontrado:", !!btnAnterior);
    console.log("Botón siguiente encontrado:", !!btnSiguiente);

    if (carouselItems.length === 0) {
        console.error("❌ No existen elementos .carousel-item");
        return;
    }

    let indiceActual = 0;

    function mostrarSlide(index) {

        if (index < 0) index = carouselItems.length - 1;
        if (index >= carouselItems.length) index = 0;

        carouselItems.forEach(item => item.classList.remove("activo"));
        indicadores.forEach(ind => ind.classList.remove("activo"));

        carouselItems[index].classList.add("activo");
        indicadores[index].classList.add("activo");

        indiceActual = index;
    }

    if (btnSiguiente) {
        btnSiguiente.addEventListener("click", () => {
            mostrarSlide(indiceActual + 1);
        });
    }

    if (btnAnterior) {
        btnAnterior.addEventListener("click", () => {
            mostrarSlide(indiceActual - 1);
        });
    }

    indicadores.forEach((indicador, index) => {
        indicador.addEventListener("click", () => {
            mostrarSlide(index);
        });
    });

    mostrarSlide(0);
});
