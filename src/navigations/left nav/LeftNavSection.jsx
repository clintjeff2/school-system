import React from 'react';
import LeftNavSectionItem from './LeftNavSectionItem';

function LeftNavSection({ menu, items }) {
	return (
		<section className="section section-main">
			<h3 className="header-tertiary">{menu} menu</h3>
			{items.map((item, index) => {
				return <LeftNavSectionItem list={item} icon={item.icon} key={index} />;
			})}
		</section>
	);
}

export default LeftNavSection;
