import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "../TodoItem";
import FormAddTodo from "../../components/FormAddToDo";

import "./TodoList.scss";

export const TodoList = ({ openFormAdd }) => {
	const todo = useSelector(state => state.todo);
	const termSearch = useSelector(state => state.termSearch);
	const filter = useSelector(state => state.filter);


	const filterTodo = (todo, filter) => {
		switch (filter) {
			case 'all':
				return todo;
			case 'active':
				return todo.filter(elem => !elem.done);
			case 'yesterday':
				return todo.filter(elem => {
					const t = Date.parse(elem.date) - Date.parse(new Date());
					const day = Math.floor(t / (1000 * 60 * 60 * 24));
					return !elem.done && day === -2;
				});
			case 'today':
				return todo.filter(elem => {
					const t = Date.parse(elem.date) - Date.parse(new Date());
					const day = Math.floor(t / (1000 * 60 * 60 * 24));
					return !elem.done && day === -1;
				});
			case 'tomorrow':
				return todo.filter(elem => {
					const t = Date.parse(elem.date) - Date.parse(new Date());
					const day = Math.floor(t / (1000 * 60 * 60 * 24));
					return !elem.done && day === 0;
				});
			case 'sevenDays':
				return todo.filter(elem => {
					const t = Date.parse(elem.date) - Date.parse(new Date());
					const day = Math.floor(t / (1000 * 60 * 60 * 24));
					return !elem.done && (day >= -1 && 6 >= day);
				});
			case 'important':
				return todo.filter(elem => elem.important);
			case 'done':
				return todo.filter(elem => elem.done);
			case 'like':
				return todo.filter(elem => elem.like);
			default:
				return todo;
		}
	};

	const searchTodo = (todo, term) => {
		if (!term.length) {
			return todo;
		}
		return todo.filter(item => {
			return item.label.indexOf(term) > -1;
		});
	};

	const visableTodo = filterTodo(searchTodo(todo, termSearch), filter);

	return (
		<div className="todo-list">
			<div className="todo-list__container">
				<FormAddTodo openFormAdd={openFormAdd} />
				<ul className={openFormAdd ? "todo-list__list _active" : "todo-list__list"}>
					{
						visableTodo.map(elem => {
							const { id, ...todoProps } = elem;
							return <TodoItem key={id} todoProps={todoProps} id={id} />
						})
					}
				</ul>
			</div>
		</div>
	);
};