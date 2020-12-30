const projectForm = (function () {
	const addProjectBtn = document.getElementById("addProjectBtn");
	const cancelBtn = document.getElementById("cancelNewProject");
	const form = document.getElementById("projectForm");

	const handleShowPopUp = function () {
		form.style.cssText = "display: flex";
		addProjectBtn.style.cssText = "display: none";
	};

	const showPopUp = function () {
		addProjectBtn.addEventListener("click", handleShowPopUp);
	};

	const handleHideForm = function () {
		console.log("hide");
		form.style.cssText = "display: none";
		addProjectBtn.style.cssText = "display: block";

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
