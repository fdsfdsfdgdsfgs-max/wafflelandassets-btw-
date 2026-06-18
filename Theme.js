var ToDream = document.getElementById("WAFFLES");
ToDream.play()
const MS = 30000

	setInterval(() => {
	ToDream.currentTime = 0;
		ToDream.play();
}, MS)