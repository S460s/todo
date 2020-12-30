import { projectLogic } from "./createProjects";
import { selectProjectLogic } from "./selectProject";

const projectsDOM = (function () {
	const projectSection = document.getElementById("projectSection");

	const clearDiv = function (div) {
		while (div.childNodes.length !== 0) {
			div.removeChild(div.lastChild);
		}
	};

	const deleteProjectEvent = function (btn, project, card) {
		btn.addEventListener("click", (e) => {
			e.stopPropagation();
			projectLogic.deleteProject(project);
			card.remove();

			if (!projectLogic.projectList[0]) {
				selectProjectLogic.defaultProject();
			}
		});
	};

	const saveProjectEvent = function (btn, titleInput, project, card) {
		btn.addEventListener("click", (e) => {
			e.stopPropagation();
			if (titleInput.value) {
				projectLogic.updateProject(project, titleInput.value);
				clearDiv(card);
				createElementParts(card, project);
				selectProjectLogic.selectProject(project);
			} else {
				alert("Please enter a name for the project");
			}
		});
	};

	const cancelProjectEdit = function (btn, card, project) {
		btn.addEventListener("click", (e) => {
			e.stopPropagation();
			clearDiv(card);
			createElementParts(card, project);
		});
	};

	const editProjectEvent = function (card, title, editBtn, delBtn, project) {
		editBtn.addEventListener("click", () => {
			let editTitle = document.createElement("input");
			editTitle.setAttribute("type", "text");
			editTitle.setAttribute("id", "editProjectTitleInpu");
			editTitle.setAttribute("placeholder", "Project Title");
			editTitle.value = project.title;
			title = card.replaceChild(editTitle, title);

			let saveBtn = document.createElement("button");
			saveBtn.setAttribute("id", "saveProjectTitleBtn");
			saveBtn.textContent = "Save";
			editBtn = card.replaceChild(saveBtn, editBtn);

			let cancelBtn = document.createElement("button");
			cancelBtn.setAttribute("id", "cancelEditProjectBtn");
			cancelBtn.textContent = "Cancel";
			delBtn = card.replaceChild(cancelBtn, delBtn);

			saveProjectEvent(saveBtn, editTitle, project, card);
			cancelProjectEdit(cancelBtn, card, project);
			selectProjectLogic.selectProject(project);
		});
	};

	const createElementParts = function (card, project) {
		const projectTitle = document.createElement("p");
		projectTitle.setAttribute("id", "projectTitle");
		projectTitle.textContent = project.title;

		const editBtn = document.createElement("button");
		editBtn.setAttribute("id", "projectEditBtn");
		editBtn.textContent = "Edit";

		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";
		deleteBtn.setAttribute("id", "deleteProjectBtn");

		card.appendChild(projectTitle);
		card.appendChild(editBtn);
		card.appendChild(deleteBtn);

		deleteProjectEvent(deleteBtn, project, card);
		editProjectEvent(card, projectTitle, editBtn, deleteBtn, project);
	};

	const displayProject = function (project) {
		const card = document.createElement("div");
		card.setAttribute("id", "projectCard");
		projectSection.appendChild(card);
		createElementParts(card, project);

		card.addEventListener("click", () => {
			selectProjectLogic.selectProject(project);
		});
	};

	const renderProjects = function (projectList) {
		projectList.forEach((project) => {
			displayProject(project);
		});
	};

	const start = function () {
		clearDiv(projectSection);
		renderProjects(projectLogic.projectList);
		selectProjectLogic.submitProjectEvent();
		selectProjectLogic.defaultProject();
	};

	return { start, displayProject };
})();

export { projectsDOM };
