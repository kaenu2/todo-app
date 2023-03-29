import React, { useState } from "react";

import Header from "../../modules/Header";
import AppBar from "../../modules/AppBar";

import "./App.scss";
import TodoList from "../../modules/TodoList";

export const App = () => {
	const [open, setOpen] = useState(false);
	const [openFormAdd, setOpenFormAdd] = useState(false);

	const onActiveClick = () => {
		setOpen(prev => !prev);
	};

	const onOpenForm = () => {
		setOpenFormAdd(prev => !prev);
	};

	return (
		<>
			<Header onActiveClick={onActiveClick} open={open} />
			<main className="main">
				<AppBar openState={open} />
				<TodoList openFormAdd={openFormAdd} />
			</main>
			<span className="main__add-todo" onClick={() => onOpenForm()}>
				<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#000000" />
				</svg>
			</span>
		</>
	);
};

