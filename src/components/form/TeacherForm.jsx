import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import action creator slices
import { getDepartments } from '../../store/departments/departmentSlice';
import { addStaff } from '../../store/staffs/staffSlice';

//initialize default information
const defaultInfo = {
	gender: 'male',
	matricule: '',
	name: '',
	department: '',
	address: '',
	dob: '',
	pob: '',
	email: '',
	tel: '',
	password: '',
	confirmPassword: '',
	high_certificate: '',
	marital_status: 'married',
	role: 'lecturer',
	picture: 'n/a',
};

function StaffForm() {
	//initialize the main hooks
	const [staffData, setStaffData] = useState(defaultInfo);
	const department = useRef();

	//create dispatch to dispatch actions and useSelect for getting out information
	const dispatch = useDispatch();
	const departments = useSelector(
		(state) => state.departments.departments.data
	);

	//Get all departments after initial render
	useEffect(() => {
		dispatch(getDepartments());
	}, [dispatch]);

	//Execute this function when you click submit, to add a teacher
	const handleAddStaff = (e) => {
		e.preventDefault();

		dispatch(addStaff({ ...staffData, department: department.current.value }));
		setStaffData(defaultInfo);
	};

	return (
		<form action="" name="form" id="teacher" onSubmit={handleAddStaff}>
			<h2 className="mg-top-md mg-bt-md">Basic Details</h2>
			<div className="form">
				<div className="form-item">
					<span className="desc">
						Full names <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter staff fullnames"
						name="name"
						value={staffData.name}
						required
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, name: e.target.value };
							})
						}
						autoComplete="name"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Address <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter staff address"
						name="address"
						value={staffData.address}
						required
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, address: e.target.value };
							})
						}
						autoComplete="address"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Matricule <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter staff matricule"
						name="matricule"
						value={staffData.matricule}
						required
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, matricule: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Department <em>*</em>
					</span>
					<select
						name="department"
						required
						ref={department}
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, department: e.target.value };
							})
						}
					>
						{departments?.map((dept) => {
							return (
								<option value={dept._id} key={dept._id}>
									{dept.name}
								</option>
							);
						})}

						{departments?.length === 0 && (
							<option value="null">No department Available</option>
						)}
					</select>
				</div>
				<div className="form-item">
					<span className="desc">
						Date of birth <em>*</em>
					</span>
					<input
						type="date"
						placeholder="Enter staff Date of birth"
						name="dob"
						autoComplete="dob"
						value={staffData.dob}
						required
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, dob: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Place of birth <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter staff Place of birth"
						name="pob"
						value={staffData.pob}
						required
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, pob: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Phone number <em>*</em>
					</span>
					<input
						type="number"
						placeholder="Enter staff phone number"
						name="test"
						value={staffData.tel}
						required
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, tel: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Highest certificate <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter staff highest certificate"
						name="high_certificate"
						required
						value={staffData.high_certificate}
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, high_certificate: e.target.value };
							})
						}
						autoComplete="first-name"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Gender <em>*</em>
					</span>
					<select
						name="gender"
						required
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, gender: e.target.value };
							})
						}
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
				<div className="form-item">
					<span className="desc">
						Role <em>*</em>
					</span>
					<select
						name="role"
						required
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, role: e.target.value };
							})
						}
					>
						<option value="lecturer">Lecturer</option>
						<option value="secreteriat">Secreteriat</option>
						<option value="hod">HOD</option>
						<option value="director">Director</option>
						<option value="admin">Admin</option>
					</select>
				</div>
				<div className="form-item">
					<span className="desc">
						Marital status <em>*</em>
					</span>
					<select
						name="marital_status"
						required
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, marital_status: e.target.value };
							})
						}
					>
						<option value="married">Married</option>
						<option value="not married">Not Married</option>
						<option value="seperated">Seperated</option>
						<option value="devorced">Devorced</option>
					</select>
				</div>
			</div>

			<h2 className="mg-top-md mg-bt-md">Login Details</h2>
			<div className="form">
				<div className="form-item">
					<span className="desc">
						Email <em>*</em>
					</span>
					<input
						type="email"
						placeholder="Enter staff email"
						name="email"
						required
						value={staffData.email}
						autoComplete="email"
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, email: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Password <em>*</em>
					</span>
					<input
						type="password"
						placeholder="Enter staff password"
						name="password"
						required
						value={staffData.password}
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, password: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Confirm password <em>*</em>
					</span>
					<input
						type="password"
						placeholder="Confirm staff password"
						name="cpassword"
						required
						value={staffData.confirmPassword}
						onChange={(e) =>
							setStaffData((prev) => {
								return { ...prev, confirmPassword: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item mg-top form-file">
					<span className="text">Upload Teacher Photo (200px X 200px) </span>
					<input type="file" name="profile" className="mg-top" />
				</div>
			</div>

			<button className="button-main button-main-medium mg-top-md">
				submit
			</button>
		</form>
	);
}
export default StaffForm;
