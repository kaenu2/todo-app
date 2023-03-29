import React from "react";

import Actions from "./modules/Actions";

import "./Header.scss";

export const Header = ({ onActiveClick, open }) => {
	return (
		<header className="header">
			<div className="header__container _container">
				<div
					className={open ? "header__icb _active" : "header__icb"}
					onClick={() => onActiveClick()}>
					<div
						className="header__icon"><span></span>
					</div>
				</div>
				<Actions />
			</div>
		</header>
	)
}