import { projectForm } from "./projectsForm";
import { createProjects } from "./createProjects";
import { projectsDOM } from "./projectsDOM";

const appFlow = (function () {
	const form = document.getElementById("projectForm");

	const handleAddProject = function (e) {
		e.preventDefault();
		createProjects.handleAddProject();
		projectsDOM.start(createProjects.projectList);
		form.style.cssText = "display: none";
		addProjectBtn.style.cssText = "display: block";
		form.reset();
	};

	const startApp = function () {
		projectForm.startForm();
		projectForm.addProject(handleAddProject);
		createProjects.startLogic();
	};

	return { startApp };
})();

appFlow.startApp();
