const localStorageLogic = (function () {
	const setList = function (array, listName) {
		let objects = JSON.parse(localStorage.getItem(listName));
		objects.forEach((item) => {
			array.push(item);
		});
	};

	const populateStorage = function (array, listName) {
		localStorage.setItem(listName, JSON.stringify(array));
	};

	const checkStorage = function (array, listName) {
		if (!localStorage.getItem(listName)) {
			array = [];
		} else {
			setList(array, listName);
			return true;
		}
	};

	return { setList, populateStorage, checkStorage };
})();

export { localStorageLogic };
