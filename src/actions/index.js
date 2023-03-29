const addToDo = (body) => {
	return {
		type: 'ADD_TO_DO',
		payload: body,
	};
};
const doneToDo = (id) => {
	return {
		type: 'DONE_TO_DO',
		payload: id
	};
};
const removeToDo = (id) => {
	return {
		type: 'REMOVE_TO_DO',
		payload: id
	};
};
const importantToDo = (id) => {
	return {
		type: 'IMPORTANT_TO_DO',
		payload: id,
	};
};
const likeToDo = (id) => {
	return {
		type: 'LIKE_TO_DO',
		payload: id,
	};
};
const editToDo = (id) => {
	return {
		type: 'EDIT_TO_DO',
		payload: id
	};
};
const updateEditToDo = (body) => {
	return {
		type: 'UPDATE_EDIT_TO_DO',
		payload: body,
	};
};

const updateTermSearch = (term) => {
	return {
		type: 'UPDATE_TERM_SEARCH',
		payload: term,
	};
};
const updateFilter = (filter) => {
	return {
		type: 'UPDATE_FILTER',
		payload: filter,
	};
};
const updateActionSiteBarList = (name) => {
	return {
		type: 'UPDATE_ACTION_SITE_BAR_LIST',
		payload: name,
	};
};

export {
	addToDo,
	doneToDo,
	removeToDo,
	importantToDo,
	likeToDo,
	editToDo,
	updateEditToDo,
	updateTermSearch,
	updateFilter,
	updateActionSiteBarList,
};