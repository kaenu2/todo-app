import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./TodoItem.scss";

export const TodoItem = ({ todoProps, id }) => {
	const dispatch = useDispatch();

	const { done, important, label, like, edit } = todoProps;

	const [term, setTerm] = useState(label);

	const onActive = (id, type) => {
		dispatch({ type, payload: id });
	};


	return (
		<>
			<li className="todo-item">
				<span className={done ? "todo-item__done-icon _active" : "todo-item__done-icon"} onClick={() => onActive({ id }, 'DONE_TO_DO')}></span>
				{edit ? <ViewEditInput term={term} setTerm={setTerm} id={id} /> : <p className={done ? "todo-item__label-done _activeDone" : "todo-item__label-done "} onClick={() => onActive({ id }, 'EDIT_TO_DO')}>{label}</p>}
				<div className="todo-item__actions">
					<span className={like ? "icon-btn heart _active" : "icon-btn heart"} onClick={() => onActive({ id }, 'LIKE_TO_DO')}>
						<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.996 12.898c-.064-2.207-1.084-4.021-2.527-5.13-1.856-1.428-4.415-1.69-6.542-.132-.702.516-1.359 1.23-1.927 2.168-.568-.938-1.224-1.652-1.927-2.167-2.127-1.559-4.685-1.297-6.542.132-1.444 1.109-2.463 2.923-2.527 5.13-.035 1.172.145 2.48.788 3.803 1.01 2.077 5.755 6.695 10.171 10.683l.035.038.002-.002.002.002.036-.038c4.415-3.987 9.159-8.605 10.17-10.683.644-1.323.822-2.632.788-3.804z" /></svg>
					</span>
					<span className={important ? "icon-btn star _active" : "icon-btn star"} onClick={() => onActive({ id }, 'IMPORTANT_TO_DO')}>
						<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21.12 9.88005C21.0781 9.74719 20.9996 9.62884 20.8935 9.53862C20.7873 9.4484 20.6579 9.38997 20.52 9.37005L15.1 8.58005L12.67 3.67005C12.6008 3.55403 12.5027 3.45795 12.3853 3.39123C12.2678 3.32451 12.1351 3.28943 12 3.28943C11.8649 3.28943 11.7322 3.32451 11.6147 3.39123C11.4973 3.45795 11.3991 3.55403 11.33 3.67005L8.89999 8.58005L3.47999 9.37005C3.34211 9.38997 3.21266 9.4484 3.10652 9.53862C3.00038 9.62884 2.92186 9.74719 2.87999 9.88005C2.83529 10.0124 2.82846 10.1547 2.86027 10.2907C2.89207 10.4268 2.96124 10.5512 3.05999 10.6501L6.99999 14.4701L6.06999 19.8701C6.04642 20.0091 6.06199 20.1519 6.11497 20.2826C6.16796 20.4133 6.25625 20.5267 6.36999 20.6101C6.48391 20.6912 6.61825 20.7389 6.75785 20.7478C6.89746 20.7566 7.03675 20.7262 7.15999 20.6601L12 18.1101L16.85 20.6601C16.9573 20.7189 17.0776 20.7499 17.2 20.7501C17.3573 20.7482 17.5105 20.6995 17.64 20.6101C17.7537 20.5267 17.842 20.4133 17.895 20.2826C17.948 20.1519 17.9636 20.0091 17.94 19.8701L17 14.4701L20.93 10.6501C21.0305 10.5523 21.1015 10.4283 21.1351 10.2922C21.1687 10.1561 21.1634 10.0133 21.12 9.88005Z" fill="#000000" />
						</svg>
					</span>
					<span className="remove" onClick={() => onActive({ id }, 'REMOVE_TO_DO')}>
						<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 511.998 511.998">
							<g>
								<g>
									<path d="M440.06,81.654h-58.266V58.208C381.794,26.112,355.681,0,323.586,0H188.414c-32.096,0-58.208,26.112-58.208,58.208v23.447
										H71.94c-24.001,0-43.526,19.525-43.526,43.526v31.57c0,24.001,19.525,43.526,43.526,43.526h3.012l41.063,297.432
										c1.131,8.189,8.13,14.288,16.397,14.288h247.17c8.267,0,15.266-6.1,16.397-14.288l41.063-297.432h3.014
										c24.001,0,43.526-19.525,43.526-43.526v-31.57C483.586,101.181,464.061,81.654,440.06,81.654z M176.553,58.208
										c0-6.54,5.32-11.861,11.861-11.861h135.172c6.54,0,11.861,5.32,11.861,11.861v23.447H176.553V58.208z M193.467,437.286
										c-8.098,0-15.175-5.947-16.363-14.195l-24.482-170.015c-1.302-9.048,4.975-17.439,14.024-18.742
										c9.055-1.308,17.439,4.975,18.742,14.024l24.482,170.015C211.302,428.317,203.602,437.286,193.467,437.286z M271.701,420.731
										c0,9.141-7.411,16.552-16.552,16.552c-9.141,0-16.552-7.411-16.552-16.552V250.717c0-9.141,7.411-16.552,16.552-16.552
										c9.141,0,16.552,7.411,16.552,16.552V420.731z M359.379,253.076l-24.482,170.015c-1.303,9.054-9.702,15.328-18.742,14.024
										c-9.048-1.302-15.327-9.694-14.024-18.742l24.482-170.015c1.302-9.047,9.71-15.327,18.742-14.024
										C354.403,235.636,360.681,244.027,359.379,253.076z"/>
								</g>
							</g>
						</svg>
					</span>
				</div>
			</li>
		</>
	);
};

const ViewEditInput = ({ term, setTerm, id }) => {
	const dispatch = useDispatch();

	const onChangeValue = (e) => {
		setTerm(e.target.value);
	}
	const onSubmitForm = (e) => {
		e.preventDefault();

		dispatch({ type: 'UPDATE_EDIT_TO_DO', payload: { id: id, label: term } });

	}
	return (
		<form onSubmit={(e) => onSubmitForm(e)} className="todo-item__form-label">
			<input value={term} onChange={(e) => onChangeValue(e)} name="term" autoFocus />
		</form>
	);
}