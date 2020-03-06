document.getElementById('contact-info').style.display = "none";
document.getElementById('contact-button').addEventListener('click', () => { document.getElementById('gallery').style.display = "none"; document.getElementById('contact-info').style.display = null; });
document.getElementById('gallery-button').addEventListener('click', () => { document.getElementById('gallery').style.display = null; document.getElementById('contact-info').style.display = "none"; });
