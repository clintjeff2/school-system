import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../../../store/students/studentSlice';
import {
	Layout,
	SectionIntro,
	SectionMainIntro,
} from '../../../components/layout/';
import { PaggingNumSelect, Paggination } from './../../../components/pagging/';
import SearchCategory from '../../../components/search/SearchCategory';
import { TableStudents } from '../../../components/tables/';

const studentHeader = {
	id: 'ID',
	name: 'Name',
	level: 'class',
	dob: 'DoB',
	parent: 'Parent name',
	tel: 'phone Number',
	acts: 'actions',
	specialty: 'specialty',
	address: 'address',
};

function StudentList() {
	const dispatch = useDispatch();
	const {students} = useSelector((state) => state.students);
	console.log(students);
	useEffect(() => {
		dispatch(getStudents());
	}, [dispatch]);

	return (
		<Layout>
			<SectionIntro title="Students" main="Student" sub="List" />
			<SearchCategory styles={'mg-top-md mg-bt-md'} />
			<section className="student">
				<SectionMainIntro title="Students" styles="mg-bt" />
				<PaggingNumSelect />
				<TableStudents
					styles="mg-top"
					tableData={students}
					header={studentHeader}
				/>
				<Paggination styles="mg-top" />
			</section>
		</Layout>
	);
}

export default StudentList;
