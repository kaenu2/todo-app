const initialState = {
	todo: JSON.parse(localStorage.getItem('todo')) || [
		{id: 1, label:'Выкинуть мусор', date: '2023-03-28', like: false, important: false, done: false, edit: false},
		{id: 2, label: 'Сходить в магазин', date: '2023-03-29', like: false, important: false, done: false, edit: false},
	],
	siteBarMenu: [
		{name: 'all', label: 'Все', active: true},
		{name: 'active', label: 'Активные', active: false},
		{name: 'important', label: 'Важные', active: false},
		{name: 'yesterday', label: 'Вчера', active: false},
		{name: 'today', label: 'Сегодня', active: false},
		{name: 'tomorrow', label: 'Завтра', active: false},
		{name: 'sevenDays', label: '7 дней', active: false},
		{name: 'done', label: 'Выполненные', active: false},
	],
	filter: '',
	termSearch: '',
};

const reducer = (state = initialState, action) => {
	const { payload } = action;
	const { todo, siteBarMenu, termSearch, filter } = state;

	switch (action.type) {
		case 'ADD_TO_DO':
			if (!payload.text.length) return {...state};
			if (payload.date.length) {
				const newObj = {
					id: `${payload.text}${payload.date}${new Date()}`,
					label: payload.text,
					date: payload.date,
					like: false,
					important: false,
					done: false,
					edit: false,
				};
				const newArr = [...todo, newObj];
				localStorage.setItem('todo', JSON.stringify(newArr));
				return {
					...state,
					todo: newArr,
				};
			} else {
				const newDate = new Date();
				const newDateArr = [newDate.getFullYear(), newDate.getMonth(), newDate.getDate()].join('-');
				const newObj = {
					id: `${payload.text}${payload.date}${new Date()}`,
					label: payload.text,
					date: newDate,
					like: false,
					important: false,
					done: false,
				};
				const newArr = [...todo, newObj];
				localStorage.setItem('todo', JSON.stringify(newArr));
				return {
					...state,
					todo: newArr,
				};
			};
			case 'IMPORTANT_TO_DO':
				const indexImportant = todo.findIndex(elem => elem.id === payload.id);
				const oldItemImportant = todo[indexImportant];
				const newObj = {...oldItemImportant, important: !oldItemImportant.important};
				const newArr = [...todo.slice(0, indexImportant), newObj, ...todo.slice(indexImportant + 1)];
				localStorage.setItem('todo', JSON.stringify(newArr));
				return {
					...state,
					todo: newArr,
				};
			case 'LIKE_TO_DO': 
				const indexLike = todo.findIndex(elem => elem.id === payload.id);
				const oldItemLike = todo[indexLike];
				const newObjLike = {...oldItemLike, like: !oldItemLike.like};
				const newArrLike = [...todo.slice(0, indexLike), newObjLike, ...todo.slice(indexLike + 1)];
				localStorage.setItem('todo', JSON.stringify(newArrLike));
				return {
					...state,
					todo: newArrLike,
				};
			case 'DONE_TO_DO': 
				const indexDone = todo.findIndex(elem => elem.id === payload.id);
				const oldItemDone = todo[indexDone];
				const newObjDone = {...oldItemDone, done: !oldItemDone.done};
				const newArrDone = [...todo.slice(0, indexDone), newObjDone, ...todo.slice(indexDone + 1)];
				localStorage.setItem('todo', JSON.stringify(newArrDone));
				return {
					...state,
					todo: newArrDone,
				};
			case 'REMOVE_TO_DO':
				const indexRemove = todo.findIndex(el => el.id === payload.id);
				const newArrRemove = [...todo.slice(0, indexRemove), ...todo.slice(indexRemove + 1)];
				localStorage.setItem('todo', JSON.stringify(newArrRemove));
				return {
					...state,
					todo: newArrRemove
				};
			case 'EDIT_TO_DO': 
				const indexEdit = todo.findIndex(elem => elem.id === payload.id);
				const oldItemEdit = todo[indexEdit];
				const newObjEdit = {...oldItemEdit, edit: !oldItemEdit.edit};
				const newArrEdit = [...todo.slice(0, indexEdit), newObjEdit ,...todo.slice(indexEdit + 1)];
				localStorage.setItem('todo', JSON.stringify(newArrEdit));
				return {
					...state,
					todo: newArrEdit,
				};
			case 'UPDATE_EDIT_TO_DO':
				const updateEditIndex = todo.findIndex(elem => elem.id === payload.id);
				const oldItemUpdateEdit = todo[updateEditIndex];
				if (payload.label.length) {
					const newObjUpdateEdit = {...oldItemUpdateEdit, label: payload.label, edit: !oldItemUpdateEdit.edit};
					const newArrUpdateEdit = [...todo.slice(0, updateEditIndex), newObjUpdateEdit, ...todo.slice(updateEditIndex + 1)];
					localStorage.setItem('todo', JSON.stringify(newArrUpdateEdit));
					return {
						...state,
						todo: newArrUpdateEdit,
					};
				} else {
					const newArrUpdateEdit = [...todo.slice(0, updateEditIndex), ...todo.slice(updateEditIndex + 1)];
					localStorage.setItem('todo', JSON.stringify(newArrUpdateEdit));
					return {
						...state,
						todo: newArrUpdateEdit,
					};
				};
			case 'UPDATE_TERM_SEARCH':
				return {
					...state,
					termSearch: payload,
				};
			case 'UPDATE_FILTER':
				return {
					...state,
					filter: payload,
				};
			case 'UPDATE_ACTION_SITE_BAR_LIST':
				const newArrSiteBarMenu = siteBarMenu.map((elem) => {
					if (elem.name === payload) {
						elem.active = true;
					} else {
						elem.active = false;
					}
					return elem;
				});
				return {
					...state,
					siteBarMenu: newArrSiteBarMenu,
				};
		default:
			return state;
	}
};

export default reducer;