import { todoLogic } from "./createTodos";

const todoDOMLogic = (function () {
	const form = document.getElementById("todoForm");
	const popUp = document.getElementById("todoPopUp");
	const addTodoBtn = document.getElementById("addTodoBtn");

	const addTodo = function (project) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			todoLogic.handleAddTodo(project);
			popUp.style.display = "none";
			addTodoBtn.style.display = "block";
			form.reset();
		});
	};

	return { addTodo };
})();
export { todoDOMLogic };
