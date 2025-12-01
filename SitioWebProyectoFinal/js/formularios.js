
emailjs.init("WhyeBByhLKD17JG0P");

// FORMULARIO DE CONTACTO

const formContacto = document.getElementById("form-contacto");

formContacto.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre-contacto").value.trim();
    const email = document.getElementById("email-contacto").value.trim();
    const telefono = document.getElementById("telefono-contacto").value.trim();
    const asunto = document.getElementById("asunto-contacto").value.trim();
    const mensaje = document.getElementById("mensaje-contacto").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !email || !asunto || !mensaje) {
        return Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor completa todos los campos obligatorios."
        });
    }

    if (!emailRegex.test(email)) {
        return Swal.fire({
            icon: "error",
            title: "Correo inválido",
            text: "Por favor ingresa un correo electrónico válido."
        });
    }

    emailjs.sendForm(
        "service_besxars",
        "template_0isbqyv",
        "#form-contacto",
        "WhyeBByhLKD17JG0P"
    )
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Mensaje enviado",
                text: "Gracias por contactarnos. Te responderemos pronto.",
                confirmButtonColor: "#d4af37"
            });
            formContacto.reset();
        })
        .catch(() => {
            Swal.fire({
                icon: "error",
                title: "Error al enviar",
                text: "Ocurrió un problema al enviar tu mensaje. Inténtalo más tarde."
            });
        });
});


// FORMULARIO DE SUSCRIPCIÓN

const formSus = document.getElementById("form-suscripcion");

formSus.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre-suscripcion").value.trim();
    const email = document.getElementById("email-suscripcion").value.trim();
    const interesesSeleccionados = [...document.querySelectorAll("input[name='interes']:checked")]
                                    .map(i => i.value)
                                    .join(", ");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !email) {
        return Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor ingresa tu nombre y correo."
        });
    }

    if (!emailRegex.test(email)) {
        return Swal.fire({
            icon: "error",
            title: "Correo inválido",
            text: "Por favor ingresa un correo electrónico válido."
        });
    }

    const interesesFinal = interesesSeleccionados || "No especificado";

    emailjs.send("service_besxars", "template_ksisl2r", {
        nombre: nombre,
        email: email,
        intereses: interesesFinal
    })
    .then(() => {
        Swal.fire({
            icon: "success",
            title: "¡Suscripción exitosa!",
            text: "Gracias por unirte al boletín de Nostra.",
            confirmButtonColor: "#d4af37"
        });
        formSus.reset();
    })
    .catch(() => {
        Swal.fire({
            icon: "error",
            title: "Error al suscribirte",
            text: "Hubo un problema al procesar tu solicitud."
        });
    });
});
