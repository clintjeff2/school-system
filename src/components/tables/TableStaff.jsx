import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRightLeft } from 'react-icons/fa6';
import { BsEyeFill, BsFillPenFill } from 'react-icons/bs';

import { profile_default } from '../../assets/images';
//Styled in the table sass file of the component styles

//Utility functions
import { getDateFromDateObject } from '../../utilities/getDate';
import { sortArrayObject } from '../../utilities/sortingInfo';

let DATA_CONST;
function TableStaff({ styles, tableData, header }) {
	const [isSortedBy, setIsSortedBy] = useState('');
	const [staffData, setStaffData] = useState(tableData.map((dt) => dt));

	console.log(staffData);
	if (tableData.length === staffData.length) {
		DATA_CONST = staffData;
	} else {
		DATA_CONST = tableData;
	}
	const handleSort = (field, fieldOpt = undefined) => {
		sortArrayObject(DATA_CONST, setStaffData, setIsSortedBy, field, fieldOpt);
	};

	return (
		<table className={`standard ${styles ? styles : ''}`}>
			<thead>
				<tr className="head">
					{/* <th>
						<input type="checkbox" name="check" id="check-all" />
					</th> */}
					<th className={`${isSortedBy === 'matricule' ? 'sorted' : ''}`}>
						<FaRightLeft onClick={() => handleSort('matricule')} />
						<span className="text">{header.id}</span>
					</th>
					<th className={`${isSortedBy === 'name' ? 'sorted' : ''}`}>
						<FaRightLeft onClick={() => handleSort('name')} />
						<span className="text">{header.name}</span>
					</th>
					<th className={`${isSortedBy === 'email' ? 'sorted' : ''}`}>
						<FaRightLeft onClick={() => handleSort('email')} />
						<span className="text">{header.email}</span>
					</th>
					<th className={`${isSortedBy === 'dob' ? 'sorted' : ''}`}>
						<FaRightLeft onClick={() => handleSort('dob')} />
						<span className="text">{header.dob}</span>
					</th>
					<th className={`${isSortedBy === 'gender' ? 'sorted' : ''}`}>
						<FaRightLeft onClick={() => handleSort('gender')} />
						<span className="text">{header.gender}</span>
					</th>
					<th className={`${isSortedBy === 'role' ? 'sorted' : ''}`}>
						<FaRightLeft onClick={() => handleSort('role')} />
						<span className="text">{header.role}</span>
					</th>
					<th className={`${isSortedBy === 'department' ? 'sorted' : ''}`}>
						<FaRightLeft onClick={() => handleSort('department')} />
						<span className="text">{header.department}</span>
					</th>
					{/* <th>
						<FaRightLeft />
						<span className="text">{header.address}</span>
					</th> */}
					<th className={`${isSortedBy === 'tel' ? 'sorted' : ''}`}>
						<FaRightLeft onClick={() => handleSort('tel')} />
						<span className="text">{header.tel}</span>
					</th>
					<th>
						<span className="text">{header.acts}</span>
					</th>
				</tr>
			</thead>

			<tbody>
				{DATA_CONST.map((row, index) => {
					return (
						<tr key={index}>
							{/* <td>
								<input type="checkbox" name="check-1" />
							</td> */}
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
								<span className="text">{row.email}</span>
							</td>
							<td>
								<span className="text">{getDateFromDateObject(row.dob)}</span>
							</td>
							<td>
								<span className="text caps">{row.gender}</span>
							</td>
							<td>
								<span className="text caps">{row.role}</span>
							</td>
							<td>
								<span className="text">{row.department?.name}</span>
							</td>
							{/* <td>
								<span className="text">{row.address}</span>
							</td> */}
							<td>
								<span className="text">{row.tel}</span>
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

export default TableStaff;
