import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

//Styled in the paging sass file in the component section
function Paggination({ styles, paggingNum, totalData }) {
	const tabs = Math.ceil(totalData / paggingNum);
	const [searchParams] = useSearchParams();
	let cur = Number(searchParams.get('curPage') || 1);
	const curMaxEntries = cur * paggingNum;
	return (
		<div className={`pagging ${styles ? styles : ''}`}>
			<span className="text">
				Showing {(cur - 1) * paggingNum + 1} to{' '}
				{curMaxEntries > totalData ? totalData : curMaxEntries} of {totalData}{' '}
				entries
			</span>
			<div className="pagging-links">
				{cur > 1 && <NavLink to={`?curPage=${cur - 1}`}>Prev</NavLink>}

				{Array.from({ length: tabs }).map((_, index) => {
					return (
						<NavLink
							to={`?curPage=${index + 1}`}
							className={`${cur === index + 1 ? 'page-active' : ''}`}
							key={index}
						>
							{index + 1}
						</NavLink>
					);
				})}

				{cur < tabs && <NavLink to={`?curPage=${cur + 1}`}>Next</NavLink>}
			</div>
		</div>
	);
}

export default Paggination;
