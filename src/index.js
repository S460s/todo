import { projectForm } from "./projectsForm";
import { projectLogic } from "./createProjects";
import { projectsDOM } from "./projectsDOM";
import { localStorageLogic } from "./localStorage";
import { todoForm } from "./todoForm";
import { selectProjectLogic } from "./selectProject";

const appFlow = (function () {
	const form = document.getElementById("projectForm");

	const checkStorage = function () {
		if (localStorageLogic.checkStorage(projectLogic.projectList, "projectList")) {
			projectsDOM.start();
		}
	};

	const handleAddProject = function (e) {
		e.preventDefault();
		projectsDOM.displayProject(projectLogic.handleAddProject());
		form.style.cssText = "display: none";
		addProjectBtn.style.cssText = "display: block";
		form.reset();
	};

	const startApp = function () {
		checkStorage();
		projectForm.startForm();
		projectForm.addProject(handleAddProject);
		todoForm.startForm();
		selectProjectLogic.defaultProject();
	};

	return { startApp };
})();

appFlow.startApp();
