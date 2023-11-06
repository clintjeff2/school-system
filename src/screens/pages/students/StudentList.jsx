import React from 'react';

import {
	Layout,
	SectionIntro,
	SectionMainIntro,
} from '../../../components/layout/';
import { PaggingNumSelect, Paggination } from './../../../components/pagging/';
import SearchCategory from '../../../components/search/SearchCategory';
import { StandardTable } from '../../../components/tables/';

function StudentList() {
	return (
		<Layout>
			<SectionIntro title="Students" main="Student" sub="List" />
			<SearchCategory styles={'mg-top-md mg-bt-md'} />
			<section className="student">
				<SectionMainIntro title="Students" styles="mg-bt" />
				<PaggingNumSelect />
				<StandardTable styles="mg-top" />
				<Paggination styles="mg-top" />
			</section>
		</Layout>
	);
}

export default StudentList;
