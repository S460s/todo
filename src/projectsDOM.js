import { projectLogic } from "./createProjects";
import { localStorageLogic } from "./localStorage";

const projectsDOM = (function () {
	const projectSection = document.getElementById("projectSection");
	const addProjectBtn = document.getElementById("addProjectBtn");

	const clearDiv = function (div) {
		while (div.childNodes.length !== 0) {
			div.removeChild(div.lastChild);
		}
	};

	const deleteProjectEvent = function (btn, project) {
		btn.addEventListener("click", () => {
			projectLogic.deleteProject(project);
			start(projectLogic.projectList);
		});
	};

	const saveProjectEvent = function (btn, titleInput, project, card) {
		btn.addEventListener("click", () => {
			if (titleInput.value) {
				project.title = titleInput.value;
				localStorageLogic.populateStorage(projectLogic.projectList, "projectList");
				clearDiv(card);
				createElementParts(card, project);

				addProjectBtn.style.display = "block";
			} else {
				alert("Please enter a name for the project");
			}
		});
	};

	const cancelProjectEdit = function (btn) {
		btn.addEventListener("click", () => {
			start();
			addProjectBtn.style.display = "block";
		});
	};

	const showBtns = function (card) {
		card.addEventListener("mouseenter", () => {
			card.children[1].style.display = "block";
			card.children[2].style.display = "block";
		});
	};

	const hideBtns = function (card) {
		card.addEventListener("mouseleave", () => {
			card.children[1].style.display = "none";
			card.children[2].style.display = "none";
		});
	};

	const editProjectEvent = function (card, title, editBtn, delBtn, project) {
		editBtn.addEventListener("click", () => {
			addProjectBtn.style.display = "none";
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
			cancelProjectEdit(cancelBtn);
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

		deleteProjectEvent(deleteBtn, project);
		editProjectEvent(card, projectTitle, editBtn, deleteBtn, project);
	};

	const displayProject = function (project) {
		const card = document.createElement("div");
		card.setAttribute("id", "projectCard");
		projectSection.appendChild(card);

		createElementParts(card, project);

		showBtns(card);
		hideBtns(card);
	};

	const renderProjects = function (projectList) {
		projectList.forEach((project) => {
			displayProject(project);
		});
	};

	const start = function () {
		clearDiv(projectSection);
		renderProjects(projectLogic.projectList);
	};

	return { start };
})();

export { projectsDOM };
