import React from 'react';

//Styled in the the layout scss file in component styling

function SectionIntro({ title, main, sub }) {
	return (
		<div className="section-intro">
			<h1 className="header-primary">{title}</h1>
			<h2 className="header-secondary">
				<span className="main">{main}</span>
				<span> / </span>
				<span className="sub">{sub}</span>
			</h2>
		</div>
	);
}

export default SectionIntro;
