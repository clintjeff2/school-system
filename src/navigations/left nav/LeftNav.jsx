import React from 'react';

import { lmuLogo } from '../../assets/logos';

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
			<br /><br /><br /><br />
			
			<LeftNavSection />
			<LeftNavSection />
			<LeftNavSection />
		</nav>
	);
}

export default LeftNav;
