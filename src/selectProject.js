import { projectLogic } from "./createProjects";
import { todoLogic } from "./createTodos";
import { todoDOM } from "./todoDOM";

const selectProjectLogic = (function () {
	const currentProjectTitle = document.getElementById("currentProject");
	const addTodoBtn = document.getElementById("addTodoBtn");
	const todoForm = document.getElementById("todoForm");
	const popUp = document.getElementById("todoPopUp");

	let currentProject;

	const defaultProject = function () {
		currentProjectTitle.textContent = projectLogic.projectList[0].title;
		currentProject = projectLogic.projectList[0];
		todoDOM.renderTodos(currentProject);
	};

	const handleFormSubmission = function (e) {
		e.preventDefault();
		console.log(currentProject);
		popUp.style.display = "none";
		addTodoBtn.style.display = "block";
		let todo = todoLogic.handleAddTodo(currentProject);
		console.log(todo);
		todoDOM.displayTodo(todo, currentProject);
		todoForm.reset();
	};

	const submitProjectEvent = function () {
		todoForm.addEventListener("submit", handleFormSubmission);
	};

	const selectProject = function (project) {
		currentProjectTitle.textContent = project.title;
		currentProject = project;
		todoDOM.renderTodos(currentProject);
	};

	const startLogic = function (project) {
		selectProject(project);
	};

	return { startLogic, defaultProject, submitProjectEvent };
})();

export { selectProjectLogic };
