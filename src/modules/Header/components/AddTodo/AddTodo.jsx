import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./AddTodo.scss";

export const AddTodo = () => {
	const todo = useSelector(state => state.todo);
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [inputValue, setinputValue] = useState('');

	const onOpen = () => {
		setOpen(prev => !prev);
	};

	const onChangeInput = (e) => {
		setinputValue(e.target.value);
	};

	const onSubmitForm = (e) => {
		e.preventDefault();

		const newobj = { text: inputValue, date: '' };

		dispatch({ type: 'ADD_TO_DO', payload: newobj });

		setinputValue('');

	};

	return (
		<form className="add-todo" onSubmit={(e) => onSubmitForm(e)}>
			<input type={'text'} className={open ? 'custom-input _active' : `custom-input`} onChange={(e) => onChangeInput(e)} value={inputValue} name="label" />
			<span
				className="add-todo__add-btn"
				onClick={onOpen}>
				<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#fff" />
				</svg>
			</span>
		</form>
	);
};