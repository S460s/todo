const projectForm = (function () {
	const addProjectBtn = document.getElementById("addProjectBtn");
	const popUp = document.getElementById("projectPopUp");
	const cancelBtn = document.getElementById("cancelNewProject");
	const form = document.getElementById("projectForm");

	const handleShowPopUp = function () {
		popUp.style.cssText = "display: flex";
	};

	const showPopUp = function () {
		addProjectBtn.addEventListener("click", handleShowPopUp);
	};

	const handleHideForm = function () {
		popUp.style.cssText = "display: none";
		form.reset();
	};

	const hideForm = function () {
		cancelBtn.addEventListener("click", handleHideForm);
	};

	const addProject = function (callback) {
		form.addEventListener("submit", callback);
	};

	const startForm = function () {
		showPopUp();
		hideForm();
	};

	return { startForm, addProject };
})();

export { projectForm };
