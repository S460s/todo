import { todoLogic } from "./createTodos";

const todoDOM = (function () {
	const todoSection = document.getElementById("todoList");

	const clearDiv = function (div, elementNum) {
		while (div.childNodes.length !== elementNum) {
			div.removeChild(div.lastChild);
		}
	};

	const deleteTodoEvent = function (btn, todo, project, card) {
		btn.addEventListener("click", () => {
			todoLogic.deleteTodo(project, todo);
			card.remove();
		});
	};

	const changeStateEvent = function (todo, checkbox) {
		checkbox.addEventListener("change", () => {
			todoLogic.handleChangeState(todo, checkbox);
		});
	};

	const displayTodo = function (todo, project) {
		let card = document.createElement("div");
		card.setAttribute("id", "todoCard");

		let title = document.createElement("p");
		title.setAttribute("id", "todoTitleP");
		title.textContent = todo.title;

		let dueDate = document.createElement("p");
		dueDate.setAttribute("id", "todoDueDateP");
		dueDate.textContent = todo.dueDate;

		let priority = document.createElement("p");
		priority.setAttribute("id", "todoPriorityP");
		priority.textContent = todo.priority;

		let editBtn = document.createElement("p");
		editBtn.setAttribute("id", "editTodoBtn");
		editBtn.textContent = "edit";

		let delBtn = document.createElement("p");
		delBtn.setAttribute("id", "todoDelBtn");
		delBtn.textContent = "x";

		let doneCheckbox = document.createElement("input");
		doneCheckbox.setAttribute("type", "checkbox");
		doneCheckbox.setAttribute("id", "doneCheck");
		doneCheckbox.checked = todo.done;

		todoSection.appendChild(card);
		card.appendChild(doneCheckbox);
		card.appendChild(title);
		card.appendChild(dueDate);
		card.appendChild(priority);
		card.appendChild(editBtn);
		card.appendChild(delBtn);

		deleteTodoEvent(delBtn, todo, project, card);
		changeStateEvent(todo, doneCheckbox);
		editTodo(editBtn, card, todo);
	};

	const editTodo = function (btn, card, todo) {
		btn.addEventListener("click", () => {
			clearDiv(card, 1);
			let titleEdit = document.createElement("input");
			titleEdit.setAttribute("id", "todoTitleEdit");
			titleEdit.value = todo.title;

			let dueDateEdit = document.createElement("input");
			dueDateEdit.setAttribute("id", "todoDueDateEdit");
			dueDateEdit.setAttribute("type", "date");
			dueDateEdit;

			let priorityEdit = document.createElement("select");
			priorityEdit.setAttribute("id", "todoPriorityEdit");
			let priorityOptions = ["High", "Medium", "Low"];

			let saveEdit = document.createElement("p");
			saveEdit.setAttribute("id", "saveEditedTodo");
			saveEdit.textContent = "save";

			let cancel = document.createElement("p");
			cancel.setAttribute("id", "todoDelBtn");
			cancel.textContent = "cancel";

			card.appendChild(titleEdit);
			card.appendChild(dueDateEdit);
			card.appendChild(priorityEdit);
			priorityOptions.forEach((opt) => {
				console.log(opt);
				let option = document.createElement("option");
				option.textContent = `${opt} Priority`;
				option.value = opt;
				priorityEdit.append(option);
			});
			card.appendChild(saveEdit);
			card.appendChild(cancel);
		});
	};

	const renderTodos = function (project) {
		clearDiv(todoSection, 0);
		project.todoList.forEach((todo) => {
			displayTodo(todo, project);
		});
	};

	return { renderTodos, displayTodo };
})();

export { todoDOM };
