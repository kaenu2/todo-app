import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Search.scss";
import "../../../components/Input/Input.scss";

export const Search = () => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const onOpen = () => {
		setOpen(prev => !prev);
	};

	const onChangeValue = (e) => {
		dispatch({ type: 'UPDATE_TERM_SEARCH', payload: e.target.value });
	};


	return (
		<div className="search">
			<input type='search' className={open ? 'custom-input _active' : `custom-input`} onChange={(e) => onChangeValue(e)} />
			<span onClick={() => onOpen()}>
				<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#fff" />
				</svg>
			</span>
		</div>
	)
};

