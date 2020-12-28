import { projectLogic } from "./createProjects";

const selectProjectLogic = (function () {
	const currentProject = document.getElementById("currentProject");

	const defaultProject = function () {
		currentProject.textContent = projectLogic.projectList[0].title;
	};

	const selectProject = function (project) {
		currentProject.textContent = project.title;
	};

	const startLogic = function (project) {
		selectProject(project);
	};

	return { selectProject, defaultProject };
})();

export { selectProjectLogic };
