import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import ThiemeIcon from "../../components/ThemeIcon";
import Search from "../AppBar/Search";

import "./AppBar.scss";


export const AppBar = ({ openState }) => {
	const siteBarMenu = useSelector(state => state.siteBarMenu);
	const dispatch = useDispatch();

	const onUpdateFilterState = (name) => {
		dispatch({ type: 'UPDATE_ACTION_SITE_BAR_LIST', payload: name });
		dispatch({ type: 'UPDATE_FILTER', payload: name });
	};

	return (
		<div
			className={openState ? "site-bar _active" : "site-bar"}>
			<div>
				<Search />
				<ul>
					{
						siteBarMenu.map(item => {
							const { name, label, active } = item;
							return (
								<li className={active ? '_active' : ''} key={name} onClick={() => onUpdateFilterState(name)}>{label}</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	);
};
