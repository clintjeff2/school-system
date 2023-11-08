import React from 'react';
import { FaRightLeft } from 'react-icons/fa6';
import { BsEyeFill, BsFillPenFill } from 'react-icons/bs';

import { profile13 } from '../../assets/images';
import { Link } from 'react-router-dom';
//Styled in the table sass file of the component styles

//Reusable table for all pages
function StandardTable({ styles, tableData, header }) {
	return (
		<table className={`standard ${styles ? styles : ''}`}>
			<thead>
				<tr className="head">
					<th>
						<input type="checkbox" name="check" id="check-all" />
					</th>
					<th>
						<FaRightLeft />
						<span className="text">{header.id}</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">{header.name}</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">{header.level}</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">{header.dob}</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">{header.parent}</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">{header.tel}</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">{header.specialty}</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">{header.address}</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">{header.acts}</span>
					</th>
				</tr>
			</thead>

			<tbody>
				{tableData.map((row, index) => {
					return (
						<tr key={index}>
							<td>
								<input type="checkbox" name="check-1" />
							</td>
							<td>
								<span className="text">{row._id}</span>
							</td>
							<td>
								<div className="profile">
									<img
										src={row?.profile ? row.profile : profile13}
										alt="Student Pic"
									/>
									<span className="text">{row.name}</span>
								</div>
							</td>
							<td>
								<span className="text">Level 400</span>
							</td>
							<td>
								<span className="text">2000-06-01</span>
							</td>
							<td>
								<span className="text">Josefin Sans</span>
							</td>
							<td>
								<span className="text">{row.tel}</span>
							</td>
							<td>
								<span className="text">{row.specialty?.name}</span>
							</td>
							<td>
								<div className="actions">
									<Link to="/student/view">
										<BsEyeFill />
									</Link>
									<Link to="/student/edit">
										<BsFillPenFill />
									</Link>
								</div>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default StandardTable;
