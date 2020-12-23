const todoForm = (function () {
	const addTodoBtn = document.getElementById("addTodoBtn");
	const popUp = document.getElementById("todoPopUp");
	const cancelTodoBtn = document.getElementById("cancelNewTodo");
	const form = document.getElementById("todoForm");

	const showTodoForm = function () {
		addTodoBtn.addEventListener("click", () => {
			popUp.style.cssText = "display: flex";
		});
	};

	const hideTodoForm = function () {
		cancelTodoBtn.addEventListener("click", () => {
			popUp.style.cssText = "display: none";
			form.reset();
		});
	};

	const startForm = function () {
		showTodoForm();
		hideTodoForm();
	};
	return { startForm };
})();

export { todoForm };
