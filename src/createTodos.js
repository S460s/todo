import { Todo } from "./todos";
import { localStorageLogic } from "./localStorage";
import { projectLogic } from "./createProjects";

const todoLogic = (function () {
	const titleInput = document.getElementById("todoTitleInput");
	const dueDate = document.getElementById("dateInput");
	const priorities = document.getElementById("priorities");
	const description = document.getElementById("todoDescInput");

	const deleteTodo = function (project, todo) {
		let num = project.todoList.indexOf(todo);
		project.todoList.splice(num, 1);
		localStorageLogic.populateStorage(projectLogic.projectList, "projectList");
	};

	const handleChangeState = function (todo, box) {
		todo.done = box.value;
		localStorageLogic.populateStorage(projectLogic.projectList, "projectList");
	};

	const handleAddTodo = function (project) {
		let priority = priorities.options[priorities.selectedIndex].text;
		let newTodo = new Todo(titleInput.value, dueDate.value, priority, description.value);
		project.todoList.push(newTodo);
		localStorageLogic.populateStorage(projectLogic.projectList, "projectList");

		console.log(project.title);
		console.table(project.todoList);
		console.log("TEST");

		return newTodo;
	};

	return { deleteTodo, handleAddTodo, handleChangeState };
})();

export { todoLogic };