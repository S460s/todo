const editProjectLogic = (function () {
	const saveProjectEvent = function (btn, titleInput, project) {
		btn.addEventListener("click", () => {
			if (titleInput.value) {
				project.title = titleInput.value;
				localStorageLogic.populateStorage(projectLogic.projectList, "projectList");
				start();
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

	const stopEdit = function (card) {
		card.addEventListener("mouseleave", () => {
			addProjectBtn.style.display = "block";
			start();
		});
	};

	const editProjectEvent = function (card, title, editBtn, delBtn, project) {
		editBtn.addEventListener("click", () => {
			addProjectBtn.style.display = "none";
			let editTitle = document.createElement("input");
			editTitle.setAttribute("type", "text");
			editTitle.setAttribute("id", "editProjectTitleInpu");
			editTitle.setAttribute("placeholder", "Project Title");
			title = card.replaceChild(editTitle, title);

			let saveBtn = document.createElement("button");
			saveBtn.setAttribute("id", "saveProjectTitleBtn");
			saveBtn.textContent = "Save";
			editBtn = card.replaceChild(saveBtn, editBtn);

			let cancelBtn = document.createElement("button");
			cancelBtn.setAttribute("id", "cancelEditProjectBtn");
			cancelBtn.textContent = "Cancel";
			delBtn = card.replaceChild(cancelBtn, delBtn);

			saveProjectEvent(saveBtn, editTitle, project);
			cancelProjectEdit(cancelBtn);
			stopEdit(card);
		});
	};

	const showHideBtns = function (card) {
		showBtns(card);
		hideBtns(card);
	};

	return { editProjectEvent, showHideBtns };
})();

export { editProjectLogic };
