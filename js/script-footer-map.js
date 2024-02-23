var mapLink_footer = document.querySelector(".modal-map-footer");
var mapPopup_footer = document.querySelector(".modal-map");
var mapClose_footer = mapPopup.querySelector(".modal-close")

mapLink_footer.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup_footer.classList.add("modal-show");
});

mapClose_footer.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup_footer.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (mapPopup_footer.classList.contains("modal-show")) {
			evt.preventDefault();
			mapPopup_footer.classList.remove("modal-show");
		}
	}})