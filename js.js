// Cambio link del logo a principal intranet
var enlace = document.querySelector('.navbar-brand');
enlace.href = 'https://intranet.grupotsk.com/';


//Oculto anuncio en pagina principal si esta vacio
document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll('.course-content').forEach(function (div1) {
      if (!div1.querySelector('.activity')) {
         div1.style.display = 'none';
      }
   });
});


// Si el curso no tiene imagen, añadir una default
document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll('.coursebox .content .d-flex').forEach(function (dFlexDiv) {
      // Verifica si no contiene un div courseimage
      if (!dFlexDiv.querySelector('.courseimage')) {
         // Crea el div courseimage
         const courseImageDiv = document.createElement('div');
         courseImageDiv.classList.add('courseimage');

         // Crea img
         const img = document.createElement('img');
         img.src = "https://i.ibb.co/V0DxZ1cq/istockphoto-1290864946-612x612.jpg";

         // Añade la imagen al courseimage
         courseImageDiv.appendChild(img);

         // Inserta courseimage como el primer hijo de d-flex
         dFlexDiv.insertBefore(courseImageDiv, dFlexDiv.firstChild);
      }
   });
});


// Mostrar descripcion del curso al hover
document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll('.d-flex').forEach(function (dFlexDiv) {
      const courseImageDiv = dFlexDiv.querySelector('.courseimage');
      const flexGrowDiv = dFlexDiv.querySelector('.flex-grow-1');
      const summaryDiv = flexGrowDiv?.querySelector('.summary');

      if (courseImageDiv && summaryDiv) {
         // Mueve el div summary dentro de courseimage
         courseImageDiv.appendChild(summaryDiv);

         // Añade una clase para ocultar el texto inicialmente
         summaryDiv.classList.add('hidden-summary');

         // Añade una clase al courseimage para indicar que tiene un summary
         courseImageDiv.classList.add('has-summary');
      }
   });
});


// Hacer imagenes de pagina principal clickables
document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll('.coursebox').forEach(function (coursebox) {
      // Selecciona el enlace dentro del h3 en el div con la clase info
      const linkInH3 = coursebox.querySelector('.info h3 a');
      if (linkInH3) {
         // Obtiene el href del enlace
         const href = linkInH3.href;

         // Selecciona el div con la clase courseimage
         const courseImageDiv = coursebox.querySelector('.content .d-flex .courseimage');
         if (courseImageDiv) {
            // Crea una etiqueta a
            const link = document.createElement('a');
            link.href = href;
            link.style.display = 'block'; // Enlace que cubra todo el div
            link.style.width = '100%';
            link.style.height = '100%';

            // Mueve el contenido del div courseimage dentro del enlace
            while (courseImageDiv.firstChild) {
               link.appendChild(courseImageDiv.firstChild);
            }

            // Añade el enlace dentro del div courseimage
            courseImageDiv.appendChild(link);
         }
      }
   });
});
