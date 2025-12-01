// COMBO SIMPLE: HOTEL DE MONTAÑA //

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("combo-simple").addEventListener("change", function (e) {

        let value = e.target.value;

        let imagenes = {
            balance: "imagenes/hab1.jpeg",
            cabaña: "imagenes/hab2.jpg",
            suite: "imagenes/h3.jpg",
            moderna: "imagenes/hab4.jpg",
            rustica: "imagenes/hab5.jpg"

        };

        let textos = {
            balance: "Descansa en nuestro refugio de alta calidad. Aquí encontrarás las maravillas de la naturaleza mediante una suite balanceada y armoniosa con la naturaleza.",
            cabaña: "Espacio amplio, gran enfoque en madera de alta calidad y en la verdadera experiencia de cabaña en la naturaleza.",
            suite: "Cabaña rústica, acogedora y equipada para una experiencia de hotel de lujo. La mejor opción para experimentar la naturaleza de manera elegante y cómoda al bolsillo.",
            moderna: "Habitación con un diseño contemporáneo, equipada con todas las comodidades modernas para una estancia confortable y estilizada en medio de la naturaleza.",
            rustica: "Habitación con un diseño rústico, utilizando materiales naturales y una decoración que refleja el entorno natural, ofreciendo una experiencia auténtica y acogedora en la montaña."
        };

        if (value in imagenes) {
            document.getElementById("output-img-simple").innerHTML =
                `<img src="${imagenes[value]}" class="imagen-simple" alt="${value}" />`;

            document.getElementById("output-txt-simple").innerHTML =
                textos[value];
        }
    });

    document.getElementById("btn-clean-simple").addEventListener("click", function () {
        document.getElementById("output-img-simple").innerHTML =

        document.getElementById("output-txt-simple").innerHTML = "";

        document.getElementById("combo-simple").value = "";
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const selectHabitacion = document.getElementById("combo-doble-habitacion");
    const inputNoches = document.getElementById("combo-doble-noches");
    const selectExtra = document.getElementById("combo-doble-extra");
    const totalOutput = document.getElementById("combo-doble-total");
    const resumenOutput = document.getElementById("combo-doble-resumen");
    const btnLimpiar = document.getElementById("btn-limpiar-doble");

    let preciosHabitacion = {
        balance: 90,
        cabaña: 120,
        suite: 150,
        moderna: 110,
        rustica: 105
    };

    let preciosExtra = {
        desayuno: 25,
        spa: 80,
        tour: 40,
        canopy: 120,
        "": 0 
    };

    function calcularComboDoble() {
        let hab = selectHabitacion.value;
        let noches = parseInt(inputNoches.value);
        let extra = selectExtra.value;

        if (hab === "" || isNaN(noches) || noches < 1) {
            totalOutput.innerHTML = "$0";
            resumenOutput.innerHTML = "Complete la información.";
            return;
        }

        let precioBase = preciosHabitacion[hab] * noches;
        let precioExtra = preciosExtra[extra];
        let total = precioBase + precioExtra;

        totalOutput.innerHTML = `$${total}`;
        resumenOutput.innerHTML = `
            Habitación: ${hab.charAt(0).toUpperCase() + hab.slice(1)} <br>
            Noches: ${noches} <br>
            Extra: ${extra === "" ? "Ninguno" : extra} <br>
            <strong>Total: $${total}</strong>
        `;
    }

    selectHabitacion.addEventListener("change", calcularComboDoble);
    inputNoches.addEventListener("input", calcularComboDoble);
    selectExtra.addEventListener("change", calcularComboDoble);

    btnLimpiar.addEventListener("click", function () {
        selectHabitacion.value = "";
        inputNoches.value = "";
        selectExtra.value = "";
        totalOutput.innerHTML = "$0";
        resumenOutput.innerHTML = "";
    });
});


/* COMBO INTERACTIVO — ZONAS CERCANAS AL HOTEL */
document.addEventListener("DOMContentLoaded", function () {

    const comboZonas = document.getElementById("combo-zonas");
    const btnZonasIr = document.getElementById("btn-zonas-ir");

    if (!comboZonas || !btnZonasIr) return;

    btnZonasIr.addEventListener("click", function () {
        const seleccion = comboZonas.value;

        if (seleccion === "") {
            Swal.fire({
                icon: "warning",
                title: "Selecciona una zona",
                text: "Elige una opción para continuar.",
            });
            return;
        }

        switch (seleccion) {
            case "chirripo":
                Swal.fire({
                    icon: "success",
                    title: "Abriendo Parque Nacional Chirripó...",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.open(
                        "https://www.google.com/maps/search/Parque+Nacional+Chirrip%C3%B3",
                        "_blank"
                    );
                });
                break;

            case "cloudbridge":
                Swal.fire({
                    icon: "success",
                    title: "Abriendo Reserva Cloudbridge...",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.open(
                        "https://www.google.com/maps/search/Cloudbridge+Nature+Reserve",
                        "_blank"
                    );
                });
                break;

            case "quetzales":
                Swal.fire({
                    icon: "success",
                    title: "Abriendo Parque Nacional Los Quetzales...",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.open(
                        "https://www.google.com/maps/search/Parque+Nacional+Los+Quetzales",
                        "_blank"
                    );
                });
                break;

            case "san_gerardo":
                Swal.fire({
                    icon: "success",
                    title: "Abriendo San Gerardo de Rivas...",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    window.open(
                        "https://www.google.com/maps/search/San+Gerardo+de+Rivas",
                        "_blank"
                    );
                });
                break;

            case "mapa_hotel":
                Swal.fire({
                    icon: "success",
                    title: "Mostrando el mapa del hotel...",
                    showConfirmButton: false,
                    timer: 1000,
                }).then(() => {
                    window.location.hash = "mapa";
                });
                break;
        }
    });
});
