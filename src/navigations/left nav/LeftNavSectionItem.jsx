import React, { useState } from 'react';

import * as BootstrapIcons from 'react-icons/bs';

import LeftNavSectionItemList from './LeftNavSectionItemList';

function LeftNavSectionItem() {
	const [isItemOpen, setIsItemOpen] = useState(false);

	return (
		<div className="section-item">
			<h2
				className={`header-secondary ${isItemOpen ? 'open' : ''}`}
				onClick={() => setIsItemOpen((prev) => !prev)}
			>
				<span className="icons">
					<BootstrapIcons.BsFillGridFill />
				</span>
				<span className="text">Dashboard</span>
				<span className="icons">
					{!isItemOpen && (
						<BootstrapIcons.BsCaretRightFill className="icon-closed" />
					)}
					{isItemOpen && <BootstrapIcons.BsCaretDownFill />}
				</span>
			</h2>
			<ul className={`left-list ${isItemOpen ? 'open' : ''}`}>
				<LeftNavSectionItemList />
			</ul>
		</div>
	);
}

export default LeftNavSectionItem;
