import React from 'react';
import { Link } from 'react-router-dom';
import { FaRightLeft } from 'react-icons/fa6';
import { BsEyeFill, BsFillPenFill } from 'react-icons/bs';

import { profile_default } from '../../assets/images';
//Styled in the table sass file of the component styles

import { getDateFromDateObject } from '../../utilities/getDate';

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
								<span className="text">{row.matricule}</span>
							</td>
							<td>
								<div className="profile">
									<img
										src={row?.profile ? row.profile : profile_default}
										alt="Student Pic"
									/>
									<span className="text">{row.name}</span>
								</div>
							</td>
							<td>
								<span className="text">Level {row.level}</span>
							</td>
							<td>
								<span className="text">{getDateFromDateObject(row.dob)}</span>
							</td>
							<td>
								<span className="text">{row.parent_name}</span>
							</td>
							<td>
								<span className="text">{row.tel}</span>
							</td>
							<td>
								<span className="text">{row.specialty?.name}</span>
							</td>
							<td>
								<span className="text">{row.address}</span>
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
