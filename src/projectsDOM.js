const projectsDOM = (function () {
	const projectSection = document.getElementById("projectSection");

	const clearDiv = function (div) {
		while (div.childNodes.length !== 0) {
			div.removeChild(div.lastChild);
		}
	};

	const displayProject = function (title) {
		const card = document.createElement("div");
		card.setAttribute("id", "projectCard");

		const projectTitle = document.createElement("p");
		projectTitle.textContent = title;

		projectSection.appendChild(card);
		card.appendChild(projectTitle);
	};

	const renderProjects = function (projectList) {
		projectList.forEach((project) => {
			displayProject(project.title);
		});
	};

	const start = function (projectList) {
		clearDiv(projectSection);
		renderProjects(projectList);
	};

	return { start };
})();

export { projectsDOM };
