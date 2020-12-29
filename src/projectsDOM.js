import { projectLogic } from "./createProjects";
import { selectProjectLogic } from "./selectProject";

const projectsDOM = (function () {
	const projectSection = document.getElementById("projectSection");
	const addProjectBtn = document.getElementById("addProjectBtn");

	const clearDiv = function (div) {
		while (div.childNodes.length !== 0) {
			div.removeChild(div.lastChild);
		}
	};

	const deleteProjectEvent = function (btn, project, card) {
		btn.addEventListener("click", () => {
			projectLogic.deleteProject(project);
			card.remove();
		});
	};

	const saveProjectEvent = function (btn, titleInput, project, card) {
		btn.addEventListener("click", () => {
			if (titleInput.value) {
				projectLogic.updateProject(project, titleInput.value);
				clearDiv(card);
				createElementParts(card, project);

				addProjectBtn.style.display = "block";
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
		editBtn.addEventListener("click", (e) => {
			e.stopPropagation();
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
		console.log("display project, DOM project");
		console.log(project);

		card.addEventListener("click", () => {
			selectProjectLogic.startLogic(project);
		});
	};

	const renderProjects = function (projectList) {
		//selectProjectLogic.defaultProject();
		projectList.forEach((project) => {
			displayProject(project);
		});
	};

	const start = function () {
		clearDiv(projectSection);
		renderProjects(projectLogic.projectList);
		selectProjectLogic.submitProjectEvent();
	};

	return { start, displayProject };
})();

export { projectsDOM };
