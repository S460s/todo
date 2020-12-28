import { todoDOMLogic } from "./todoDOM";

const selectProjectLogic = (function () {
	const todoSide = document.getElementById("todoSide");
	const currentProject = document.getElementById("currentProject");

	const selectProject = function (card, project) {
		card.addEventListener("click", () => {
			currentProject.textContent = project.title;
			todoDOMLogic.addTodo(project);
		});
	};

	return { selectProject };
})();

export { selectProjectLogic };
