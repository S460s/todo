import { Project } from "./projects";
import { localStorageLogic } from "./localStorage";

const projectLogic = (function () {
	const titleInput = document.getElementById("projectTitleInput");
	const projectList = [];

	const deleteProject = function (project) {
		let num = projectList.indexOf(project);
		projectList.splice(num, 1);
		localStorageLogic.populateStorage(projectList, "projectList");
	};

	const handleAddProject = function () {
		let newProject = new Project(titleInput.value);
		projectList.push(newProject);
		localStorageLogic.populateStorage(projectList, "projectList");
		console.table(projectList);
	};

	return { deleteProject, projectList, handleAddProject };
})();

export { projectLogic };
