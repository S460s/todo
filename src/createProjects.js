import { Project } from "./projects";
import { projectForm } from "./projectsForm";
import { projectsDOM } from "./projectsDOM";
import { localStorageLogic } from "./localStorage";

const createProjects = (function () {
	const titleInput = document.getElementById("projectTitleInput");
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
		//		projectsDOM.start(projectList, deleteProject);
	};

	const handleAddProject = function () {
		let newProject = new Project(titleInput.value);
		projectList.push(newProject);
		localStorageLogic.populateStorage(projectList, "projectList");
		console.table(projectList);
	};

	const startLogic = function () {
		checkStorage();
	};

	return { startLogic, deleteProject, projectList, handleAddProject };
})();

export { createProjects };
