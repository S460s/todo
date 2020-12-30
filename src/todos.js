function Todo(title, dueDate, priority, description) {
	this.title = title;
	this.dueDate = dueDate;
	this.priority = priority;
	this.description = description;
	this.done = false;
}

export { Todo };
