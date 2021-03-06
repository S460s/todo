import { projectForm } from "./projectsForm";
import { projectLogic } from "./createProjects";
import { projectsDOM } from "./projectsDOM";
import { localStorageLogic } from "./localStorage";
import { todoForm } from "./todoForm";
import { selectProjectLogic } from "./selectProject";

const appFlow = (function () {
	const form = document.getElementById("projectForm");
	const dateInput = document.getElementById("dateInput");

	const checkStorage = function () {
		if (localStorageLogic.checkStorage(projectLogic.projectList, "projectList")) {
			projectsDOM.start();
		}
	};

	const handleAddProject = function (e) {
		e.preventDefault();
		let newProject = projectLogic.handleAddProject();
		projectsDOM.displayProject(newProject);
		form.style.cssText = "display: none";
		addProjectBtn.style.cssText = "display: block";
		selectProjectLogic.selectProject(newProject);
		form.reset();
	};

	const dateLimit = function () {
		let today = new Date().toISOString().substr(0, 10);
		dateInput.setAttribute("min", today);
	};

	const startApp = function () {
		dateLimit();
		checkStorage();
		projectForm.startForm();
		projectForm.addProject(handleAddProject);
		todoForm.startForm();
		selectProjectLogic.defaultProject();
	};

	return { startApp };
})();

appFlow.startApp();
