import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStaffs } from '../../../store/staffs/staffSlice';

import {
	Layout,
	SectionIntro,
	SectionMainIntro,
} from '../../../components/layout/';
import { PaggingNumSelect, Paggination } from './../../../components/pagging/';
import SearchCategory from '../../../components/search/SearchCategory';
import { TableStaff } from '../../../components/tables/';

//initializing table header information
const staffHeader = {
	id: 'Matricule',
	name: 'Name',
	email: 'email',
	gender: 'gender',
	role: 'role',
	dob: 'DoB',
	tel: 'phone Number',
	acts: 'actions',
	department: 'department',
	address: 'address',
};

function TeacherList() {
	const staffs = useSelector((state) => state.staffs.teachers.data);
	const dispatch = useDispatch();

	const [staffsData, setStaffsState] = useState([]);
	// console.log(staffs !== undefined ? staffs : 'qqq', 1234);
	console.log(staffs, staffsData, 'DAT');
	useEffect(() => {
		dispatch(getStaffs());
	}, [dispatch]);
	return (
		<Layout>
			<SectionIntro title="Teachers" main="Teacher" sub="List" />
			<SearchCategory
				styles={'mg-top-md mg-bt-md'}
				dropDown="department"
				data={staffs}
				setData={setStaffsState}
			/>
			<section className="teachers">
				<SectionMainIntro title="Teachers" styles="mg-bt" />
				<PaggingNumSelect />
				{staffs !== undefined && (
					<TableStaff
						styles="mg-top"
						tableData={staffsData.length !== 0 ? staffsData : staffs}
						header={staffHeader}
					/>
				)}
				<Paggination styles="mg-top" />
			</section>
		</Layout>
	);
}

export default TeacherList;
