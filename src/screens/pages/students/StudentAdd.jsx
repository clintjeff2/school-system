import React from 'react';
import { Layout, SectionIntro } from '../../../components/layout';
import { StudentForm } from '../../../components/form';

function StudentAdd() {
	return (
		<Layout>
			<SectionIntro title="Add Students" main="Student" sub="add" />
			<section className="students mg-top">
				<h2 className="header-secondary">Student Information</h2>
				<StudentForm />
			</section>
		</Layout>
	);
}

export default StudentAdd;
