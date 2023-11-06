import React from 'react';
import { NavLink } from 'react-router-dom';

function LeftNavSectionItemList({ item, itemName }) {
	return (
		<>
			<NavLink to={`/${itemName}/${item.link}`} className="link">
				{/* <li className="active">Admin Dashboard</li> */}
				<li className="">{item.name}</li>
			</NavLink>
		</>
	);
}

export default LeftNavSectionItemList;
