texte = document.getElementById("txt");
color = document.getElementById("couleur");
size = document.getElementById("size");
font = document.getElementById("liste");
setInterval(() => {
    texte.style.fontFamily = font.value;
    texte.style.color = color.value;
    texte.style.fontSize = size.value;

}, 25);