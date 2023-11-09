import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecialties } from '../../store/specialty/specialtySlice';
import { addStudent } from '../../store/students/studentSlice';

const defaultInfo = {
	level: '200',
	gender: 'male',
	matricule: '',
	name: '',
	specialty: '',
	address: '',
	dob: '',
	pob: '',
	email: '',
	tel: '',
	parent_name: '',
	parent_email: '',
	parent_tel: '',
	entry_certificate: '',
};

function StudentForm({ styles }) {
	const dispatch = useDispatch();
	const specialties = useSelector((state) => state.specialty.specialties.data);
	console.log(specialties);
	const [studentData, setStudentData] = useState(defaultInfo);
	const specialty = useRef();
	console.log(studentData, 'DATA');

	useEffect(() => {
		dispatch(getSpecialties());
	}, [dispatch]);

	const registerStudent = (e) => {
		e.preventDefault();

		// setStudentData((prev) => {
		// 	return { ...prev, specialty: specialty.current.value };
		// });

		dispatch(
			addStudent({ ...studentData, specialty: specialty.current.value })
		);

		console.log(studentData);
		// setStudentData(defaultInfo);
	};
	return (
		<form
			action=""
			name="form"
			id="student"
			className={`${styles ? styles : ''}`}
			onSubmit={registerStudent}
		>
			<div className="form">
				<div className="form-item">
					<span className="desc">
						Matricule <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter matricule"
						name="matricule"
						required
						value={studentData.matricule}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, matricule: e.target.value };
							})
						}
						//autoComplete="first-name"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Student name <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter student name"
						required
						name="name"
						value={studentData.name}
						onChange={(e) =>
							setStudentData((prev) => {
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
						placeholder="Enter address"
						name="address"
						required
						value={studentData.address}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, address: e.target.value };
							})
						}
						autoComplete="address"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Date of Birth <em>*</em>
					</span>
					<input
						type="date"
						placeholder="Enter date of birth"
						required
						name="date-of-birth"
						value={studentData.dob}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, dob: e.target.value };
							})
						}
						autoComplete="first-name"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Place of birth <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter place of birth"
						required
						name="place-of-birth"
						value={studentData.pob}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, pob: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Email <em>*</em>
					</span>
					<input
						type="email"
						placeholder="Enter email"
						name="email"
						required
						value={studentData.email}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, email: e.target.value };
							})
						}
						autoComplete="email"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Student Tel <em>*</em>
					</span>
					<input
						type="number"
						placeholder="Enter student tel"
						required
						name="student-tel"
						value={studentData.tel}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, tel: e.target.value };
							})
						}
						autoComplete="first-name"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Parent name <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter parent name"
						required
						name="parent-name"
						value={studentData.parent_name}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, parent_name: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Parent email <em>*</em>
					</span>
					<input
						type="email"
						placeholder="Enter parent email"
						required
						name="parent-email"
						value={studentData.parent_email}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, parent_email: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Parent tel <em>*</em>
					</span>
					<input
						type="number"
						placeholder="Enter parent tel"
						required
						name="parent-tel"
						value={studentData.parent_tel}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, parent_tel: e.target.value };
							})
						}
						autoComplete="parent tel"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Highest education level <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter highest education level"
						required
						name="entry-level"
						value={studentData.entry_certificate}
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, entry_certificate: e.target.value };
							})
						}
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						Gender <em>*</em>
					</span>
					<select
						name="gender"
						id=""
						onChange={(e) =>
							setStudentData((prev) => {
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
						Level <em>*</em>
					</span>
					<select
						name="level"
						id=""
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, level: e.target.value };
							})
						}
					>
						<option value="200">200</option>
						<option value="300">300</option>
						<option value="400">400</option>
					</select>
				</div>
				<div className="form-item">
					<span className="desc">
						Specialty <em>*</em>
					</span>
					<select
						name="specialty"
						id=""
						onChange={(e) =>
							setStudentData((prev) => {
								return { ...prev, specialty: e.target.value };
							})
						}
						value={specialties ? specialties[0]._id : ''}
						ref={specialty}
					>
						{specialties?.map((specialty) => {
							return (
								<option key={specialty._id} value={specialty._id}>
									{specialty.name}
								</option>
							);
						})}
					</select>
				</div>
				{/* <div className="form-item">
					<span className="desc">
						First name <em>*</em>
					</span>
					<input type="text" placeholder="Enter your first name" name="test" />
				</div>
				<div className="form-item">
					<span className="desc">
						First name <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter your first name"
						name="first-name"
						autoComplete="first-name"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						First name <em>*</em>
					</span>
					<input
						type="text"
						placeholder="Enter your first name"
						name="last-name"
					/>
				</div>
				<div className="form-item">
					<span className="desc">
						First name <em>*</em>
					</span>
					<input type="text" placeholder="Enter your first name" name="test" />
				</div>*/}
				<div className="form-item mg-top form-file">
					<span className="text">Upload Student Photo (200px X 200px) </span>
					<input type="file" name="profile" className="mg-top" />
				</div>
			</div>
			<button className="button-main button-main-medium mg-top-md">
				submit
			</button>
		</form>
	);
}

export default StudentForm;
