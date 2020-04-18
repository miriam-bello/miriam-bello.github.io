//Eventos de click para mostrar secciones de galería, contacto y currículum
document.getElementById('contact-info').style.display = "none";
document.getElementById('cv-info').style.display = "none";

document.getElementById('contact-button').addEventListener('click', () => {
    document.getElementById('gallery').style.display = "none";
    document.getElementById('cv-info').style.display = "none";
    document.getElementById('contact-info').style.display = null;
});
document.getElementById('gallery-button').addEventListener('click', () => {
    document.getElementById('contact-info').style.display = "none";
    document.getElementById('cv-info').style.display = "none";
    document.getElementById('gallery').style.display = null; 
});
document.getElementById('cv-button').addEventListener('click', () => {
    document.getElementById('gallery').style.display = "none";
    document.getElementById('contact-info').style.display = "none"; 
    document.getElementById('cv-info').style.display = null;
});