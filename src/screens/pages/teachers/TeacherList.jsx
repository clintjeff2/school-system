import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getStaffs } from '../../../store/staffs/staffSlice';

import {
	Layout,
	SectionIntro,
	SectionMainIntro,
} from '../../../components/layout/';
import { PaggingNumSelect, Paggination } from './../../../components/pagging/';
import SearchCategory from '../../../components/search/SearchCategory';
// import { StandardTable } from '../../../components/tables/';

function TeacherList() {
	// const staffs = useSelector((state) => state.staffs);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getStaffs());
	}, [dispatch]);
	return (
		<Layout>
			<SectionIntro title="Teachers" main="Teacher" sub="List" />
			<SearchCategory styles={'mg-top-md mg-bt-md'} />
			<section className="teachers">
				<SectionMainIntro title="Teachers" styles="mg-bt" />
				<PaggingNumSelect />
				{/* <StandardTable styles="mg-top" data={staffs} /> */}
				<Paggination styles="mg-top" />
			</section>
		</Layout>
	);
}

export default TeacherList;
