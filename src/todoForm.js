const todoForm = (function () {
	const addTodoBtn = document.getElementById("addTodoBtn");
	const cancelBtn = document.getElementById("cancelNewTodo");
	const form = document.getElementById("todoForm");
	const popUp = document.getElementById("todoPopUp");

	const handleShowPopUp = function () {
		popUp.style.cssText = "display: flex";
		addTodoBtn.style.cssText = "display: none";
	};

	const showPopUp = function () {
		addTodoBtn.addEventListener("click", handleShowPopUp);
	};

	const handleHideForm = function () {
		popUp.style.cssText = "display: none";
		addTodoBtn.style.cssText = "display: block";

		form.reset();
	};

	const hideForm = function () {
		cancelBtn.addEventListener("click", handleHideForm);
	};

	const startForm = function () {
		showPopUp();
		hideForm();
	};

	return { startForm };
})();

export { todoForm };
