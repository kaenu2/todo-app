import React from "react";

import AddTodo from "../../components/AddTodo";
import ReadyTodo from '../../components/ReadyTodo';

import "./Actions.scss";

export const Actions = () => {
	return (
		<div className="actions">
			<AddTodo />
			<ReadyTodo />
		</div>
	);
};