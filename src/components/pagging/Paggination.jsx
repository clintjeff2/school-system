import React from 'react';
import { NavLink } from 'react-router-dom';

//Styled in the pagin sass file in the component section
function Paggination({ styles }) {
	return (
		<div className={`pagging ${styles ? styles : ''}`}>
			<span className="text">Showing x to X of Y entries</span>
			<div className="pagging-links">
				<NavLink to="?start=x&end=y">Prev</NavLink>
				<NavLink to="?start=x&end=y">1</NavLink>
				<NavLink to="?start=x&end=y">2</NavLink>
				<NavLink to="?start=x&end=y">3</NavLink>
				<NavLink to="?start=x&end=y">4</NavLink>
				<NavLink to="?start=x&end=y">Next</NavLink>
			</div>
		</div>
	);
}

export default Paggination;
