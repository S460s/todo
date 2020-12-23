const selectProjectLogic = (function () {
	const todoSide = document.getElementById("todoSide");
	const projectName = document.getElementById("currentProject");

	const selectProject = function (project, card) {
		card.addEventListener("click", () => {
			projectName.textContent = project.title;
		});
	};

	return { selectProject };
})();

export { selectProjectLogic };
