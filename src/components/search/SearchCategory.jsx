//importing react application
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//importing the dispatcher functions
import { getSpecialties } from '../../store/specialty/specialtySlice';
import { getDepartments } from './../../store/departments/departmentSlice';

//Styled in the search sass component file
function SearchCategory({ styles, dropDown, data, setData }) {
	//create dispatch to dispatch actions and useSelect for getting out information
	const dispatch = useDispatch();
	const dropDownData = useSelector((state) => {
		const specialty =
			state.specialty.specialties.length !== 0 ? state.specialty : null;
		const departments =
			state.departments.departments.length !== 0 ? state.departments : null;

		return { specialty, departments };
	});

	//Initialzing hooks
	const dropDn = useRef();
	const name = useRef();
	const level = useRef();

	//Get all specialties after initial render
	useEffect(() => {
		if (dropDown === 'specialty') {
			dispatch(getSpecialties());
		} else if (dropDown === 'department') {
			dispatch(getDepartments());
		}

		// eslint-disable-next-line
	}, [dispatch]);

	//Search algorithm
	const handleSearch = (e) => {
		e.preventDefault();
		let fakeValue;
		if (name.current.value !== '') {
			let { value } = name.current;
			value = value.toLowerCase();

			// eslint-disable-next-line
			const students = data.filter((std) => {
				fakeValue = std.name.toLowerCase();
				let found =
					fakeValue.startsWith(value) ||
					fakeValue.endsWith(value) ||
					fakeValue.includes(value);
				if (found) return std;
			});
			setData(students);
			// console.log(students);
		} else if (level?.current?.value !== '' && level?.current?.value) {
			let { value } = level.current;

			value = value.toString().toLowerCase();

			// eslint-disable-next-line
			const students = data.filter((std) => {
				fakeValue = std.level.toString().toLowerCase();
				let found = fakeValue === value;

				if (found) return std;
			});
			setData(students);
			// console.log(students)
		} else if (dropDn.current.value) {
			let { value } = dropDn.current;

			value = value.toString().toLowerCase();

			// eslint-disable-next-line
			const students = data.filter((std) => {
				fakeValue = std[dropDown]._id.toString().toLowerCase();
				let found = fakeValue === value;

				if (found) return std;
			});
			setData(students);
			// console.log(students)
		} else {
			setData(data);
		}
	};
	return (
		<form
			action=""
			name="search-category"
			className={`search-category ${styles ? styles : ''}`}
			onSubmit={handleSearch}
		>
			<input placeholder="Search by name" type="text" name="name" ref={name} />
			{dropDown === 'specialty' && (
				<select name="level" ref={level}>
					<option value="">Search by Level</option>
					<option value="200">Level 200</option>
					<option value="300">Level 300</option>
					<option value="400">Level 400</option>
				</select>
			)}
			{dropDown === 'specialty' && (
				<select name="specialty" ref={dropDn}>
					<option value="">Search by specialty</option>

					{dropDownData?.specialty?.specialties?.data?.map((specialty) => {
						return (
							<option key={specialty._id} value={specialty._id}>
								{specialty.name}
							</option>
						);
					})}
				</select>
			)}
			{dropDown === 'department' && (
				<select name="department" ref={dropDn}>
					<option value="">Search by departments</option>

					{dropDownData?.departments?.departments?.data?.map((department) => {
						return (
							<option key={department._id} value={department._id}>
								{department.name}
							</option>
						);
					})}
				</select>
			)}
			<button className="button-main button-main-medium">Search</button>
		</form>
	);
}

export default SearchCategory;
