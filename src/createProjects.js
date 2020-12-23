import { Project } from "./projects";
import { projectForm } from "./projectsForm";

const createProjects = (function () {
	const form = document.getElementById("projectForm");
	const titleInput = document.getElementById("projectTitleInput");
	const projectList = [];

	const handleAddProject = function (e) {
		e.preventDefault();
		let newProject = new Project(titleInput.value);
		projectList.push(newProject);
		console.table(projectList);
		form.reset();
	};

	const startLogic = function () {
		projectForm.addProject(handleAddProject);
	};

	return { startLogic };
})();

export { createProjects };
