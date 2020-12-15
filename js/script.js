
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


// date counter
var targetDate = new Date("Jan 01, 2021 00:00:01").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = targetDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "DONE";
    }
}, 1000);

