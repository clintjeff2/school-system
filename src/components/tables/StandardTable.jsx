import React from 'react';
import { FaRightLeft } from 'react-icons/fa6';
import { BsEyeFill, BsFillPenFill } from 'react-icons/bs';

import { profile13 } from '../../assets/images';
import { Link } from 'react-router-dom';
//Styled in the table sass file of the component styles

//Reusable table for all pages
function StandardTable({ styles }) {
	return (
		<table className={`standard ${styles ? styles : ''}`}>
			<thead>
				<tr className="head">
					<th>
						<input type="checkbox" name="check" id="check-all" />
					</th>
					<th>
						<FaRightLeft />
						<span className="text">ID</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">Name</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">class</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">doB</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">Parent Name</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">mobile number</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">address</span>
					</th>
					<th>
						<FaRightLeft />
						<span className="text">actions</span>
					</th>
				</tr>
			</thead>

			<tbody>
				{Array.from({ length: 200 }).map((_, index) => {
					return (
						<tr key={index}>
							<td>
								<input type="checkbox" name="check-1" />
							</td>
							<td>
								<span className="text">123DAS</span>
							</td>
							<td>
								<div className="profile">
									<img src={profile13} alt="Student Pic" />
									<span className="text">Lucida Sans</span>
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
								<span className="text">698753441</span>
							</td>
							<td>
								<span className="text">
									Bacardi Rd P.O. Box N-4880, New Providence
								</span>
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
