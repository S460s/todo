const projectForm = (function () {
	const addProjectBtn = document.getElementById("addProjectBtn");
	const popUp = document.getElementById("projectPopUp");

	const handleShowPopUp = function () {
		popUp.style.cssText = "display: flex";
	};

	const showPopUp = function () {
		addProjectBtn.addEventListener("click", handleShowPopUp);
	};

	return { showPopUp };
})();

export { projectForm };
