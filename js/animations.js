const infoBtn = document.getElementById("infoBtn");
const scrollElement = document.getElementById("main-intro");
infoBtn.addEventListener('click', (e) => {
	e.preventDefault();

	scrollElement.scrollIntoView({behavior: "smooth"});
})

