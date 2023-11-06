import React from 'react';

import { lmuLogo } from '../../assets/logos';
import leftNavData from './../../assets/data/leftNavigationData';
import LeftNavSection from './LeftNavSection';

//height auto, 0, transition
import './../styles/left-nav.scss';
function LeftNav() {
	return (
		<nav className="left-nav">
			<header className="header-logo">
				<img src={lmuLogo} alt="Landmark Logo" className="logo-pic rounded" />
				<span className="logo">lmu</span>
			</header>
			<br />
			<br />
			<br />
			<br />
			{leftNavData.map((item, index) => {
				return (
					<LeftNavSection menu={item.menu} items={item.items} key={index} />
				);
			})}
		</nav>
	);
}

export default LeftNav;
