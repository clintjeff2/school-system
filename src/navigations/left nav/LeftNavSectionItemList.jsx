import React from 'react';
import { NavLink } from 'react-router-dom';

function LeftNavSectionItemList() {
	return (
		<>
			<NavLink to="/admin" className="link">
				<li className="active">Admin Dashboard</li>
			</NavLink>
			<NavLink to="/teacher" className="link">
				<li>Teacher Dashboard</li>
			</NavLink>
			<NavLink to="/student" className="link">
				<li>Student Dashboard</li>
			</NavLink>
		</>
	);
}

export default LeftNavSectionItemList;
