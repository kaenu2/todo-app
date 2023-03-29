import React from 'react';

import "./Input.scss";

export const Input = ({ type, stateClass, placeholder, className, onActive }) => {
	return (
		<>
			<input type={type} className={stateClass ? 'custom-input _active' : `${className} custom-input`} placeholder={placeholder} onChange={(e) => onActive(e)} />
		</>
	);
};
