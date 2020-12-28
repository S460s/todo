import { Todo } from "./todos";

const todoLogic = (function () {
	const titleInput = document.getElementById("todoTitleInput");
	const dueDate = document.getElementById("dateInput");
	const priorities = document.getElementsByName("priorities");
	const description = document.getElementById("todoDescInput");

	const deleteTodo = function (project, todo) {
		let num = project.todoList.indexOf(todo);
		project.todoList.splice(num, 1);
	};

	const handleAddTodo = function (project) {
		let newTodo = new Todo(titleInput.value, dueDate.value, "high", description.value);
		project.todoList.push(newTodo);
		console.table(project.todoList);
		return newTodo;
	};

	return { deleteTodo, handleAddTodo };
})();

export { todoLogic };
