var panorama, viewer, container;
container = document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('imagenes/HabitaciónHotel360.jpg');

var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(500 ,-264 , 17);
infospot1.addHoverText('Cama King Size Premium con sábanas de algodón de alta calidad', -60);

infospot1.element.innerHTML = `
    <div class="infobox bg-gold">
        <strong class="title-16"><i class="fa-solid fa-bed"></i> Suite de Lujo</strong><br>
        Disfrute de nuestra cama King Size con sábanas de algodón egipcio 
        de 600 hilos, almohadas premium y edredón de plumas. Diseñada para 
        garantizar el descanso perfecto.
        <img src="imagenes/cama.jpeg" class="info-image">
    </div>`;
panorama.add(infospot1);

var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(-500 ,60 , -499); 
infospot2.addHoverText('Vista exclusiva a las montañas de Costa Rica', -60);

infospot2.element.innerHTML = `
    <div class="infobox bg-green">
        <strong class="title-16"><i class="fa-solid fa-eye"></i> Vistas Espectaculares</strong><br>
        Despierte cada mañana con vistas panorámicas a las majestuosas montañas costarricenses. Observe el amanecer mientras la niebla se disipa y revela los bosques nubosos llenos de vida silvestre. ¡Un espectáculo natural único!
        <img src="imagenes/vista.jpg" class="info-image">

    </div>`;
panorama.add(infospot2);

var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(263 ,-71 , 500);
infospot3.addHoverText('Balcón privado con muebles de teca', -60);

infospot3.element.innerHTML = `
    <div class="infobox bg-gold">
        <strong class="title-16"><i class="fa-solid fa-binoculars"></i> Balcón Exclusivo</strong><br>
        Relájese en su balcón privado con muebles artesanales de teca costarricense. Relájese en su balcón privado con muebles artesanales de teca costarricense.
        <img src="imagenes/balcón.jpg" class="info-image">
    </div>`;
panorama.add(infospot3);

var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot4.position.set(-308 ,-45 , 500);
infospot4.addHoverText('Smart TV 4K con streaming premium', -60);

infospot4.element.innerHTML = `
    <div class="infobox bg-black">
        <strong class="title-16"><i class="fa-solid fa-tv"></i> Entretenimiento Premium</strong><br><br>
        Smart TV 4K de 55 pulgadas con acceso a Netflix, Amazon Prime y más. Ideal para relajarse después de un día de aventuras en nuestras rutas de senderismo y canopy tours.
        <img src="imagenes/tele.jpg" class="info-image">
    </div>`;
panorama.add(infospot4);

var infospot5 = new PANOLENS. Infospot(50, PANOLENS.DataImage. Info);
infospot5.position.set(-115 ,59 , -500);
infospot5.addHoverText('Video: Descubre Costa Rica', -60);
infospot5.element.innerHTML = `
    <div style="background-color: 
    #0f0f0f; border-radius: 10px; padding: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
        <div style="color: #fff; font-size: 16px; margin-bottom: 10px; text-align: center;">
            <strong><i class="fa-solid fa-mountain"></i> Experiencia en Costa Rica <i class="fa-solid fa-mountain"></i></strong>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LXb3EKWsInQ"
        style="border-radius: 8px;" frameborder="0" allowfullscreen></iframe>
        <p style="color: #fff; font-size: 13px; margin-top: 10px; text-align: center;">
            Conoce la belleza natural de nuestro país
        </p>
    </div>
`;panorama.add(infospot5);

var infospot6 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot6.position.set(276 ,48 , -500);
infospot6.addHoverText('Escucha los sonidos del bosque', -60);

infospot6.element.innerHTML = `
    <div class="infobox bg-nature">
        <strong class="title-16"><i class="fa-solid fa-circle-play"></i> Sonidos de la Naturaleza</strong><br>
        <audio controls class="full-audio">
            <source src="videos/AudioNaturaleza.m4a" type="audio/mpeg">
        </audio>
        <img src="imagenes/ave2.jpg" class="info-image">
        <img src="imagenes/ave1.jpg" class="info-image">
        <p class="small-text">Escuche los sonidos auténticos del bosque nuboso.</p>
    </div>`;
panorama.add(infospot6);

var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(-500 ,244 , 118);
infospot7.addHoverText('Arquitectura sostenible premiada', -60);

infospot7.element.innerHTML = `
    <div class="infobox bg-gold w320">
        <strong class="title-16"><i class="fa-solid fa-people-roof"></i> Diseño Sostenible Premiado</strong><br><br>
        <img src="imagenes/techo.jpeg" class="info-image">
        <p>Nuestro techo curvo está construido con madera certificada de bosques sostenibles de Costa Rica. La arquitectura se integra armoniosamente con el entorno natural, manteniendo la temperatura perfecta durante todo el año.</p>
        <p class="small-text top-divider">100% materiales locales y renovables</p>
    </div>`;
panorama.add(infospot7);

var infospot8 = new PANOLENS.Infospot(50,PANOLENS.DataImage.Info);
infospot8.position.set(500 ,-146 , 401);
infospot8.addHoverText('Mira nuestro brochure completo', 100);

infospot8.element.innerHTML = `
    <div class="infobox bg-gold clickable-box">
        <strong class="title-16"><i class="fa-solid fa-circle-info"></i> Brochure Digital</strong>
        <div class="brochure-inner">
            • Servicios exclusivos<br>
            • Tours de aventura<br>
            • Spa de montaña<br>
            • Restaurante gourmet
        </div>
        <div class="brochure-footer">Haz clic aquí para ver</div>
    </div>`;
infospot8.addEventListener('click', () => {
    window.open("PDF/Brochure_NostraHoteles.pdf", "_blank");
});
panorama.add(infospot8);

var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot9.position.set(500, -116, -292);
infospot9.addHoverText('Servicios de comidas del hotel', -60);

infospot9.element.innerHTML = `
    <div class="infobox bg-darkgray w300">
        <strong class="title-16"><i class="fa-solid fa-bowl-food"></i> Servicio: Comidas por teléfono </strong><br>

        <div style="margin-bottom: 15px;">
            <strong>Desayunos disponibles</strong>

            <div class="thumb-row">
                <img src="imagenes/pinto.jpg">
                <p>• Gallo pinto<br>• Panes artesanales<br>• Jugos naturales</p>
            </div>

            <div class="thumb-row">
                <img src="imagenes/ensaladaFrutas.jpg">
                <p>• Pancakes con miel<br>• Frutas tropicales<br>• Yogurt + granola</p>
            </div>
        </div>

        <strong>Comidas del hotel</strong>

        <div class="thumb-row">
            <img src="imagenes/casado.jpg">
            <p>• Almuerzo liviano<br>• Wraps gourmet<br>• Ensaladas frescas</p>
        </div>

        <div class="thumb-row">
            <img src="imagenes/pasta.jpg">
            <p>• Cena a la carta<br>• Pasta artesanal<br>• Opciones vegetarianas</p>
        </div>
    </div>`;
panorama.add(infospot9);

var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot10.position.set(-500 ,-234 , -377);
infospot10.addHoverText('Galería de fotos del hotel', -60);

infospot10.element.innerHTML = `
    <div class="infobox bg-black w320">
        <strong class="title-16"> <i class="fa-solid fa-camera"></i> Galería del Hotel</strong>
        <div class="gallery-grid">
            <img src="imagenes/spa.jpg" onclick="window.open('imagenes/galeria1.jpg', '_blank')">
            <img src="imagenes/restaurante.jpg" onclick="window.open('imagenes/galeria2.jpg', '_blank')">
            <img src="imagenes/piscina.jpg" onclick="window.open('imagenes/galeria3.jpg', '_blank')">
            <img src="imagenes/jardin.jpg" onclick="window.open('imagenes/galeria4.jpg', '_blank')">
        </div>
    </div>`;
panorama.add(infospot10);

viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);
