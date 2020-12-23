import { projectForm } from "./projectsForm";
import { createProjects } from "./createProjects";

const appFlow = (function () {
	const startApp = function () {
		projectForm.startForm();
		createProjects.startLogic();
	};

	return { startApp };
})();

appFlow.startApp();
