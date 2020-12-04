
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
