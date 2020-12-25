const projectsDOM = (function () {
	const projectSection = document.getElementById("projectSection");

	const clearDiv = function (div) {
		while (div.childNodes.length !== 0) {
			div.removeChild(div.lastChild);
		}
	};

	const displayProject = function (project, callback) {
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
			callback(project);
		});

		projectSection.appendChild(card);
		card.appendChild(projectTitle);
		card.appendChild(editBtn);
		card.appendChild(deleteBtn);
	};

	const renderProjects = function (projectList, callback) {
		projectList.forEach((project) => {
			displayProject(project, callback);
		});
	};

	const start = function (projectList, callback) {
		clearDiv(projectSection);
		renderProjects(projectList, callback);
	};

	return { start };
})();

export { projectsDOM };
