// Cambio link del logo a principal intranet
var enlace = document.querySelector('.navbar-brand');
enlace.href = 'https://intranet.grupotsk.com/';


//Oculto anuncio en pagina principal si esta vacio
document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('.course-content').forEach(function(div1) {
		if (!div1.querySelector('.activity')) {
			div1.style.display = 'none';
		}
	});
});


// Si el curso no tiene imagen, añadir una default
document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('.coursebox .content .d-flex').forEach(function(dFlexDiv) {
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
document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('.d-flex').forEach(function(dFlexDiv) {
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
document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('.coursebox').forEach(function(coursebox) {
		const linkInH3 = coursebox.querySelector('.info h3 a');
		if (linkInH3) {
			const href = linkInH3.href;
			const courseImageDiv = coursebox.querySelector('.content .d-flex .courseimage');
			if (courseImageDiv) {
				// Crea una etiqueta a
				const link = document.createElement('a');
				link.href = href;
				link.style.display = 'block'; // Enlace que cubra todo el div
				link.style.width = '100%';
				link.style.height = '100%';

				// Mueve el contenido de courseimage dentro del enlace
				while (courseImageDiv.firstChild) {
					link.appendChild(courseImageDiv.firstChild);
				}

				// Añade el enlace dentro decourseimage
				courseImageDiv.appendChild(link);
			}
		}
	});
});


// Arreglar HTML que muestra .dropdown .show al cargar la pagina, eliminar ese .show para que aparezca solo al hacer click
document.addEventListener("DOMContentLoaded", function() {
	const usermenu = document.querySelector('.usermenu');
	if (usermenu) {
		const dropdown = usermenu.querySelector('.dropdown.show');
		if (dropdown) {
			dropdown.classList.remove('show');
		}
	}
});


// Cambiar todos los btn-secondary por btn-outline-primary, ya que no es necesario tanto tipo distinto de botones
document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('.btn-secondary').forEach(function(btn) {
		btn.classList.remove('btn-secondary');
		btn.classList.add('btn-outline-primary');
	});
});


// Cerrar popover al hacer clic fuera de él. 
// El popover se comporta de forma rara, al abrirlo no puedo cerrarlo no importa donde haga click, 
// pero si hago otro un segundo en el propio icono del pop y luego hago click fuera si que se cierra,
// entonces hago una simulacion de segundo click despues de dar el primero para que entre en el estado adecuado para cerrarse al hacer click fuera,
// hago que esto pase solo al hacer click un numero impar de veces, para evitar errores al hacer clicks en otros popover o en el mismo popover una segunda vez
document.addEventListener("DOMContentLoaded", function() {
	const popoverTriggers = document.querySelectorAll('[data-toggle="popover"]');
	popoverTriggers.forEach(function(popoverTrigger) {
		let clickCount = 0;
		popoverTrigger.addEventListener("click", function() {
			clickCount++;
			if (clickCount % 2 !== 0) {
				setTimeout(() => {
					popoverTrigger.click();
				}, 0);
			}
		});
	});
});


//Animacion alertas
document.addEventListener("DOMContentLoaded", function () {
	const successAlerts = document.querySelectorAll('.alert-success');
	const dangerAlerts = document.querySelectorAll('.alert-danger');
  
	function animateBackgroundAndShadow(element, bgColor1, bgColor2, shadow1, shadow2, duration) {
	  let toggle = false;
	  setInterval(() => {
		// Cambia el background-color y el box-shadow
		element.setAttribute(
		  'style',
		  `
		  background-color: ${toggle ? bgColor1 : bgColor2} !important;
		  box-shadow: ${toggle ? shadow1 : shadow2} !important;
		  `
		);
		toggle = !toggle;
	  }, duration);
	}
  
	successAlerts.forEach(alert => {
	  animateBackgroundAndShadow(
		alert,
		'rgba(1, 197, 82, 0.3)', // Color 1
		'rgba(1, 197, 82, 0.6)', // Color 2
		'rgba(1, 197, 82, 0.12) 0px 2px 4px 0px, rgba(1, 197, 82, 0.32) 0px 2px 16px 0px', // Sombra 1
		'rgba(1, 197, 82, 0.32) 0px 4px 8px 0px, rgba(1, 197, 82, 0.6) 0px 4px 20px 0px', // Sombra 2
		1000
	  );
	});
  
	dangerAlerts.forEach(alert => {
	  animateBackgroundAndShadow(
		alert,
		'rgba(248, 1, 23, 0.5)', // Color 1
		'rgba(248, 1, 23, 0.7)', // Color 2
		'rgba(248, 1, 23, 0.32) 0px 2px 4px 0px, rgba(248, 1, 23, 0.52) 0px 2px 16px 0px', // Sombra 1
		'rgba(248, 1, 23, 0.52) 0px 4px 8px 0px, rgba(248, 1, 23, 0.62) 0px 4px 20px 0px', // Sombra 2
		1000
	  );
	});
  });