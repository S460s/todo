import { todoDOMLogic } from "./todoDOM";
import { projectLogic } from "./createProjects";

const selectProjectLogic = (function () {
	const todoSide = document.getElementById("todoSide");
	const currentProject = document.getElementById("currentProject");
	const popUp = document.getElementById("todoPopUp");
	const addTodoBtn = document.getElementById("addTodoBtn");
	const form = document.getElementById("todoForm");

	const defaultProject = function () {
		if (projectLogic.projectList[0]) {
			currentProject.textContent = projectLogic.projectList[0].title;
			//		todoDOMLogic.addTodo(projectLogic.projectList[0]);
		}
	};

	const addTodo = function (project) {
		console.log("addTodo, selectProject");
		const handleAddTodo = function () {
			todoDOMLogic.addTodo(project);
			console.log("test");
		};
		addTodoBtn.addEventListener("click", handleAddTodo);
	};

	const handleSelectProject = function () {
		console.log("hi");
	};

	const selectProject = function (card, project) {
		card.addEventListener("click", handleSelectProject);
	};

	return { selectProject, defaultProject };
})();

export { selectProjectLogic };
