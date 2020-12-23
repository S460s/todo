const selectProjectLogic = (function () {
	const todoSide = document.getElementById("todoSide");
	const projectName = document.getElementById("currentProject");
	const addTodoBtn = document.getElementById("addTodoBtn");

	const selectProject = function (project, card) {
		card.addEventListener("click", () => {
			projectName.textContent = project.title;
			addTodoBtn.style.cssText = "display: inline";
		});
	};

	return { selectProject };
})();

export { selectProjectLogic };
