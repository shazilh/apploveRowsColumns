/*
 * Archivo principal de funcionalidad de JS*/
 alert("hola");
 var img = document.getElementsByClassName("imagen");
 var lengthImg = img.length;

 for (var i = 0; i<lengthImg;i++) {
 	img[i].addEventListener('click', openModal)
 }

 function openModal(){
 	document.getElementById("imgModal").style.display = "block";
 	document.getElementById("imagenZoom").src= this.src
 }

 var span = document.getElementsByClassName("cerrar")[0];
 span.onclick = function() {
     document.getElementById("imgModal").style.display = "none";
 }
