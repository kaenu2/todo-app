import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./FormAddTodo.scss";
import "../Input/Input.scss";

export const FormAddTodo = ({ openFormAdd }) => {
	const dispatch = useDispatch();

	const [valueInputText, setValueInput] = useState('');
	const [valueInputDate, setValueInputDate] = useState('');

	const onChengeValueDate = (e) => {
		setValueInputDate(e.target.value);
	};
	const onChengeValueText = (e) => {
		setValueInput(e.target.value);
	};
	const onSubmitForm = (e) => {
		e.preventDefault();

		const newObj = { text: valueInputText, date: valueInputDate };

		dispatch({ type: 'ADD_TO_DO', payload: newObj });

		setValueInput('');
		setValueInputDate('');
	};

	return (
		<form className={openFormAdd ? "form-add-todo _active" : "form-add-todo"} onSubmit={(e) => onSubmitForm(e)}>
			<button>
				<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#000000" />
				</svg>
			</button>
			<input type="text" onChange={(e) => onChengeValueText(e)} value={valueInputText} name="label" />
			<input type="date" onChange={(e) => onChengeValueDate(e)} value={valueInputDate} name="date" />
		</form>
	);
};