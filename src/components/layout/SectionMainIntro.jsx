import React from 'react';
import { FaArrowDown, FaPlus } from 'react-icons/fa6';

//Styled in the layout sass file in components stying

//Sections name, download button and Add button
function SectionMainIntro({ title, styles }) {
	return (
		<div className={`section-main-intro ${styles ? styles : ''}`}>
			<h2 className="header-secondary">{title}</h2>
			<div className="actions">
				<button className="button-main button-main-small">
					<FaArrowDown />
					<span className="text">Download</span>
				</button>
				<button className="button-main button-main-small">
					<FaPlus />
					<span className="text">Add</span>
				</button>
			</div>
		</div>
	);
}

export default SectionMainIntro;
