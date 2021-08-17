
/* SCROLLING ANIMATIONS */
const btn = document.getElementById("infoBtn");
const scrollElement = document.getElementById("main-intro");

if(btn !== null || scrollElement !== null) {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
	
		scrollElement.scrollIntoView({behavior: "smooth"});
	})
}


/* END SCROLLING ANIMATIONS */


lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'albumLabel': "Obrázek %1 ze %2"
})

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}






