import { todoLogic } from "./createTodos";

const todoDOM = (function () {
	const todoSection = document.getElementById("todoList");

	const clearDiv = function (div) {
		while (div.childNodes.length !== 0) {
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

		let showInfoBtn = document.createElement("p");
		showInfoBtn.setAttribute("id", "todoInfo");
		showInfoBtn.textContent = "i";

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
		card.appendChild(showInfoBtn);
		card.appendChild(delBtn);

		deleteTodoEvent(delBtn, todo, project, card);
		changeStateEvent(todo, doneCheckbox);
	};

	const renderTodos = function (project) {
		clearDiv(todoSection);
		project.todoList.forEach((todo) => {
			displayTodo(todo, project);
		});
	};

	return { renderTodos, displayTodo };
})();

export { todoDOM };
