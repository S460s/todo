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
		if (projectLogic.projectList[0]) {
			console.count("defaultProject");
			currentProjectTitle.textContent = projectLogic.projectList[0].title;
			currentProject = projectLogic.projectList[0];
			todoDOM.renderTodos(currentProject);
		} else {
			currentProjectTitle.innerText =
				'Looks like there are no projects. You can create one by clicking "Add new Project" \n\n (Excuse the bad UI, I will try to make it better later)';
			addTodoBtn.style.display = "none";
		}
	};

	const handleFormSubmission = function (e) {
		e.preventDefault();
		popUp.style.display = "none";
		addTodoBtn.style.display = "block";
		let todo = todoLogic.handleAddTodo(currentProject);
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
		addTodoBtn.style.display = "block";
	};

	return { selectProject, defaultProject, submitProjectEvent };
})();

export { selectProjectLogic };
