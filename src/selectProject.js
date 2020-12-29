import { projectLogic } from "./createProjects";
import { todoLogic } from "./createTodos";

const selectProjectLogic = (function () {
	const currentProjectTitle = document.getElementById("currentProject");
	const addTodoBtn = document.getElementById("addTodoBtn");
	const todoForm = document.getElementById("todoForm");
	const popUp = document.getElementById("todoPopUp");
	const cancelNewTodo = document.getElementById("cancelNewTodo");
	const todoList = document.getElementById("todoList");

	let currentProject;

	const defaultProject = function () {
		currentProject.textContent = projectLogic.projectList[0].title;
	};

	const handleFormSubmission = function (e) {
		e.preventDefault();
		console.log(currentProject);
		todoLogic.handleAddTodo(currentProject);
		todoForm.reset();
		popUp.style.display = "none";
		addTodoBtn.style.display = "block";
		//	todoForm.removeEventListener("submit", handleFormSubmission);
	};

	const submitProjectEvent = function () {
		todoForm.addEventListener("submit", handleFormSubmission);
	};

	const test = function () {
		console.log(currentProject);
	};

	const selectProject = function (project) {
		currentProjectTitle.textContent = project.title;
		currentProject = project;
		test();
	};

	const startLogic = function (project) {
		selectProject(project);
	};

	return { startLogic, defaultProject, submitProjectEvent };
})();

export { selectProjectLogic };
