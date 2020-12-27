import { localStorageLogic } from "./localStorage";
import { createProjects } from "./createProjects";

const selectProjectLogic = (function () {
	const todoSide = document.getElementById("todoSide");
	const currentProject = document.getElementById("currentProject");
	let selectedProject;

	const selectProject = function (card, project) {
		card.addEventListener("click", () => {
			currentProject.textContent = project.title;
		});
	};

	return { selectProject };
})();

export { selectProjectLogic };
