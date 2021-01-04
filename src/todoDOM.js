import { todoLogic } from './createTodos';

const todoDOM = (function () {
	const todoSection = document.getElementById('todoList');

	const clearDiv = function (div, elementNum) {
		while (div.childNodes.length !== elementNum) {
			div.removeChild(div.lastChild);
		}
	};

	const deleteTodoEvent = function (btn, todo, project, card) {
		btn.addEventListener('click', () => {
			todoLogic.deleteTodo(project, todo);
			card.remove();
		});
	};

	const changeStateEvent = function (todo, checkbox) {
		checkbox.addEventListener('change', () => {
			todoLogic.handleChangeState(todo, checkbox);
		});
	};

	const cancelEditEvent = function (btn, card, todo, project) {
		btn.addEventListener('click', () => {
			card.setAttribute('id', 'todoCard');
			clearDiv(card, 0);
			displayElements(card, todo, project);
		});
	};

	const saveEditEvent = function (
		card,
		btn,
		todo,
		project,
		titleE,
		dateE,
		priorityE,
		descE
	) {
		//	let priority = priorities.options[priorities.selectedIndex].text;
		btn.addEventListener('click', () => {
			card.setAttribute('id', 'todoCard');
			let title = titleE.value;
			let date = dateE.value;
			let priority = `${priorityE.value} Priority`;
			let description = descE.value;
			todoLogic.updateTodo(todo, title, date, priority, description);
			clearDiv(card, 0);
			displayElements(card, todo, project);
		});
	};

	const displayElements = function (card, todo, project) {
		let title = document.createElement('p');
		title.setAttribute('id', 'todoTitleP');
		title.textContent = todo.title;

		let dueDate = document.createElement('p');
		dueDate.setAttribute('id', 'todoDueDateP');
		dueDate.textContent = todo.dueDate;

		let priority = document.createElement('p');
		priority.setAttribute('id', 'todoPriorityP');
		priority.textContent = todo.priority;

		let editBtn = document.createElement('button');
		editBtn.setAttribute('id', 'editTodoBtn');
		editBtn.textContent = 'Edit';

		let delBtn = document.createElement('button');
		delBtn.setAttribute('id', 'todoDelBtn');
		delBtn.textContent = 'Delete';

		let doneCheckbox = document.createElement('input');
		doneCheckbox.setAttribute('type', 'checkbox');
		doneCheckbox.setAttribute('id', 'doneCheck');
		doneCheckbox.checked = todo.done;

		doneCheckbox.addEventListener('change', () => {
			todoLogic.handleChecked(doneCheckbox, todo);
		});

		card.appendChild(doneCheckbox);
		card.appendChild(title);
		card.appendChild(dueDate);
		card.appendChild(priority);
		card.appendChild(editBtn);
		card.appendChild(delBtn);

		deleteTodoEvent(delBtn, todo, project, card);
		changeStateEvent(todo, doneCheckbox);
		editTodo(editBtn, card, todo, project);
	};

	const displayTodo = function (todo, project) {
		let card = document.createElement('div');
		card.setAttribute('id', 'todoCard');
		todoSection.appendChild(card);
		displayElements(card, todo, project);
	};

	const editTodo = function (btn, card, todo, project) {
		btn.addEventListener('click', () => {
			clearDiv(card, 0);
			card.setAttribute('id', 'test');
			let editForm = document.createElement('form');
			editForm.setAttribute('id', 'todoEditForm');

			let titleEdit = document.createElement('input');
			titleEdit.setAttribute('id', 'todoTitleEdit');
			titleEdit.value = todo.title;

			let dueDateEdit = document.createElement('input');
			let today = new Date().toISOString().substr(0, 10);
			dueDateEdit.setAttribute('id', 'todoDueDateEdit');
			dueDateEdit.setAttribute('type', 'date');
			dueDateEdit.setAttribute('min', today);
			dueDateEdit.value = todo.dueDate;

			let priorityEdit = document.createElement('select');
			priorityEdit.setAttribute('id', 'todoPriorityEdit');
			let priorityOptions = ['High', 'Medium', 'Low'];

			let saveEdit = document.createElement('button');
			saveEdit.setAttribute('id', 'saveEditedTodo');
			saveEdit.textContent = 'save';

			let cancel = document.createElement('button');
			cancel.setAttribute('id', 'todoDelBtn');
			cancel.textContent = 'Cancel';

			let description = document.createElement('textarea');
			description.setAttribute('id', 'todoDescription');
			description.setAttribute('placeholder', 'Description');
			description.textContent = todo.description;

			card.appendChild(editForm);
			editForm.appendChild(titleEdit);
			editForm.appendChild(dueDateEdit);
			editForm.appendChild(priorityEdit);

			priorityOptions.forEach((opt) => {
				let option = document.createElement('option');
				option.textContent = `${opt} Priority`;
				option.value = opt;
				priorityEdit.append(option);
			});
			editForm.appendChild(saveEdit);
			editForm.appendChild(cancel);
			editForm.appendChild(description);

			saveEditEvent(
				card,
				saveEdit,
				todo,
				project,
				titleEdit,
				dueDateEdit,
				priorityEdit,
				description
			);
			cancelEditEvent(cancel, card, todo, project);
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
