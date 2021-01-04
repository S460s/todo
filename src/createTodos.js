import { Todo } from './todos';
import { localStorageLogic } from './localStorage';
import { projectLogic } from './createProjects';

const todoLogic = (function () {
	const titleInput = document.getElementById('todoTitleInput');
	const dueDate = document.getElementById('dateInput');
	const priorities = document.getElementById('priorities');
	const description = document.getElementById('todoDescInput');

	const deleteTodo = function (project, todo) {
		let num = project.todoList.indexOf(todo);
		project.todoList.splice(num, 1);
		localStorageLogic.populateStorage(projectLogic.projectList, 'projectList');
	};

	const handleChecked = function (input, todo) {
		todo.done = input.checked;
		localStorageLogic.populateStorage(projectLogic.projectList, 'projectList');
	};

	const updateTodo = function (todo, title, date, priority, description) {
		todo.title = title;
		todo.dueDate = date;
		todo.priority = priority;
		todo.description = description;
		localStorageLogic.populateStorage(projectLogic.projectList, 'projectList');
	};

	const handleChangeState = function (todo, box) {
		todo.done = box.checked;
		console.log(todo.done);
		localStorageLogic.populateStorage(projectLogic.projectList, 'projectList');
	};

	const handleAddTodo = function (project) {
		let priority = priorities.options[priorities.selectedIndex].text;
		let newTodo = new Todo(
			titleInput.value,
			dueDate.value,
			priority,
			description.value
		);
		project.todoList.push(newTodo);
		localStorageLogic.populateStorage(projectLogic.projectList, 'projectList');

		return newTodo;
	};

	return {
		deleteTodo,
		handleAddTodo,
		handleChangeState,
		updateTodo,
		handleChecked,
	};
})();

export { todoLogic };
