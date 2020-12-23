import { projectForm } from "./projectsForm";
import { createProjects } from "./createProjects";
import { todoForm } from "./todoForm";

const appFlow = (function () {
	const startApp = function () {
		projectForm.startForm();
		createProjects.startLogic();
		todoForm.startForm();
	};

	return { startApp };
})();

appFlow.startApp();
