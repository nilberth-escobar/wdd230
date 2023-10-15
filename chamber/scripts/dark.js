const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const eventsNow = document.querySelector(".events-now");
const h4 = document.querySelector("h4");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#2f4858";
		main.style.color = "#fff";
        eventsNow.style.color = "#2f4858";
        h4.style.backgroundColor = "#2f4858";
        h4.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
        eventsNow.style.color = "#fff";
        h4.style.backgroundColor = "#fff";
        h4.style.color = "#2f4858";
	}
});