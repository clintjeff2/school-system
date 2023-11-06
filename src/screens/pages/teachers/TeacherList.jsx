import React from 'react';

import {
	Layout,
	SectionIntro,
	SectionMainIntro,
} from '../../../components/layout/';
import { PaggingNumSelect, Paggination } from './../../../components/pagging/';
import SearchCategory from '../../../components/search/SearchCategory';
import { StandardTable } from '../../../components/tables/';

function TeacherList() {
	return (
		<Layout>
			<SectionIntro title="Teachers" main="Teacher" sub="List" />
			<SearchCategory styles={'mg-top-md mg-bt-md'} />
			<section className="teachers">
				<SectionMainIntro title="Teachers" styles="mg-bt" />
				<PaggingNumSelect />
				<StandardTable styles="mg-top" />
				<Paggination styles="mg-top" />
			</section>
		</Layout>
	);
}
export default TeacherList;
