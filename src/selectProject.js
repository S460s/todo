import { projectLogic } from "./createProjects";
import { todoLogic } from "./createTodos";

const selectProjectLogic = (function () {
	const currentProject = document.getElementById("currentProject");
	const addTodoBtn = document.getElementById("addTodoBtn");
	const todoForm = document.getElementById("todoForm");

	const defaultProject = function () {
		currentProject.textContent = projectLogic.projectList[0].title;
	};
	const handleFormSubmission = function (e) {
		e.preventDefault();
		todoLogic.handleAddTodo(this);
		todoForm.reset();
	};

	const handleCreateTodo = function () {
		todoForm.addEventListener("submit", handleFormSubmission.bind(this));
	};

	const createTodoEvent = function (project) {
		addTodoBtn.addEventListener("click", handleCreateTodo.bind(project));
	};

	const selectProject = function (project) {
		currentProject.textContent = project.title;
		createTodoEvent(project);
	};

	const startLogic = function (project) {
		selectProject(project);
	};

	return { selectProject, defaultProject };
})();

export { selectProjectLogic };
