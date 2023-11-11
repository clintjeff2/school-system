import React, { useState, useEffect } from 'react';
import { Layout, SectionIntro } from '../../../components/layout';
import { TeacherForm } from '../../../components/form';

function TeacherAdd() {
	return (
		// Application layout
		<Layout>
			<SectionIntro title="Add Teachers" main="Teacher" sub="add" />
			<section className="teachers mg-top">
				<h2 className="header-secondary">Teacher Information</h2>

				{/* Form for the creation of teachers by the admin */}
				<TeacherForm />
			</section>
		</Layout>
	);
}

export default TeacherAdd;
