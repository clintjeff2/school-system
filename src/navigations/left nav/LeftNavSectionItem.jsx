import React, { useState } from 'react';

import * as BootstrapIcons from 'react-icons/bs';

import LeftNavSectionItemList from './LeftNavSectionItemList';
import { NavLink } from 'react-router-dom';

function LeftNavSectionItem({ icon, list }) {
	const [isItemOpen, setIsItemOpen] = useState(false);
	return (
		<div className="section-item">
			<h2
				className={`header-secondary ${isItemOpen ? 'open' : ''}`}
				onClick={() => setIsItemOpen((prev) => !prev)}
			>
				<span className="icons">{icon}</span>

				{/* Print a header as a link depending of whether or not it has a list */}
				{list.itemList.length !== 0 && (
					<span className="text">{list.item}</span>
				)}
				{list.itemList.length === 0 && (
					<NavLink to={list.link} className="link-head">
						<span className="text">{list.item}</span>
					</NavLink>
				)}

				{/* Print the icons to indicate whether or not a left nav section is open */}
				{list.itemList.length !== 0 && (
					<span className="icons">
						{!isItemOpen && (
							<BootstrapIcons.BsCaretRightFill className="icon-closed" />
						)}
						{isItemOpen && <BootstrapIcons.BsCaretDownFill />}
					</span>
				)}
			</h2>
			{/* Send down props for the items under the dropdown of a left nav item */}
			<ul className={`left-list ${isItemOpen ? 'open' : ''}`}>
				{list.itemList.length !== 0 &&
					list.itemList.map((it, index) => {
						return <LeftNavSectionItemList item={it} key={index} itemName={list.item} />;
					})}
			</ul>
		</div>
	);
}

export default LeftNavSectionItem;
