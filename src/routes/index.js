import React from 'react';

//PAGES
import StudentRoute from './pages/students';
import TeacherRoute from './pages/teachers';

function Router() {
	return (
		<>
			<StudentRoute />
			<TeacherRoute />
		</>
	);
}

export default Router;
