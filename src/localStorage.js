const localStorage = (function () {
	const setList = function (array, listName) {
		objects = JSON.parse(localStorage.getItem(listName));
		objects.forEach((book) => {
			array.push(book);
		});
	};
})();
