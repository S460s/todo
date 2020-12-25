import { createProjects } from "./createProjects";

const projectsDOM = (function () {
	const projectSection = document.getElementById("projectSection");

	const clearDiv = function (div) {
		while (div.childNodes.length !== 0) {
			div.removeChild(div.lastChild);
		}
	};

	const displayProject = function (project) {
		const card = document.createElement("div");
		card.setAttribute("id", "projectCard");

		const projectTitle = document.createElement("p");
		projectTitle.setAttribute("id", "projectTitle");
		projectTitle.textContent = project.title;

		const editBtn = document.createElement("button");
		editBtn.setAttribute("id", "projectEditBtn");
		editBtn.textContent = "Edit";

		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";
		deleteBtn.setAttribute("id", "deleteProjectBtn");

		deleteBtn.addEventListener("click", () => {
			createProjects.deleteProject(project);
			start(createProjects.projectList);
		});

		projectSection.appendChild(card);
		card.appendChild(projectTitle);
		card.appendChild(editBtn);
		card.appendChild(deleteBtn);
	};

	const renderProjects = function (projectList) {
		projectList.forEach((project) => {
			displayProject(project);
		});
	};

	const start = function (projectList) {
		clearDiv(projectSection);
		renderProjects(projectList);
	};

	return { start };
})();

export { projectsDOM };
