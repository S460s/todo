const todoForm = (function () {
	const addTodoBtn = document.getElementById("addTodoBtn");
	const cancelBtn = document.getElementById("cancelNewTodo");
	const form = document.getElementById("todoForm");

	const handleShowPopUp = function () {
		console.log("show");
		form.style.cssText = "display: flex";
		addTodoBtn.style.cssText = "display: none";
	};

	const showPopUp = function () {
		addTodoBtn.addEventListener("click", handleShowPopUp);
	};

	const handleHideForm = function () {
		console.log("hide");
		form.style.cssText = "display: none";
		addTodoBtn.style.cssText = "display: block";

		form.reset();
	};

	const hideForm = function () {
		cancelBtn.addEventListener("click", handleHideForm);
	};

	const addTodo = function (callback) {
		form.addEventListener("submit", callback);
	};

	const startForm = function () {
		showPopUp();
		hideForm();
	};

	return { startForm };
})();

export { todoForm };
