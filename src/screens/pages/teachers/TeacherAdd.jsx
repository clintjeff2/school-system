import React from 'react';
import { Layout, SectionIntro } from '../../../components/layout';
import { TeacherForm } from '../../../components/form';

function TeacherAdd() {
	return (
		<Layout>
			<SectionIntro title="Add Teachers" main="Teacher" sub="add" />
			<section className="teachers mg-top">
				<h2 className="header-secondary">Teacher Information</h2>
				<TeacherForm />
			</section>
		</Layout>
	);
}

export default TeacherAdd;
