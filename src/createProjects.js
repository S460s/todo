import { Project } from "./projects";
import { projectForm } from "./projectsForm";
import { projectsDOM } from "./projectsDOM";
import { localStorageLogic } from "./localStorage";

const createProjects = (function () {
	const form = document.getElementById("projectForm");
	const titleInput = document.getElementById("projectTitleInput");
	const addProjectBtn = document.getElementById("addProjectBtn");
	const projectList = [];

	const checkStorage = function () {
		if (localStorageLogic.checkStorage(projectList, "projectList")) {
			projectsDOM.start(projectList, deleteProject);
		}
	};

	const deleteProject = function (project) {
		let num = projectList.indexOf(project);
		projectList.splice(num, 1);
		localStorageLogic.populateStorage(projectList, "projectList");
		projectsDOM.start(projectList, deleteProject);
	};

	const handleAddProject = function (e) {
		e.preventDefault();
		let newProject = new Project(titleInput.value);
		projectList.push(newProject);
		localStorageLogic.populateStorage(projectList, "projectList");
		console.table(projectList);
		form.reset();
		projectsDOM.start(projectList, deleteProject);
		form.style.cssText = "display: none";
		addProjectBtn.style.cssText = "display: block";
	};

	const startLogic = function () {
		checkStorage();
		projectForm.addProject(handleAddProject);
	};

	return { startLogic };
})();

export { createProjects };
