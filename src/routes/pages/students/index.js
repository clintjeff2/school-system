import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	StudentAdd,
	StudentList,
	StudentView,
} from '../../../screens/pages/students';

function StudentRoute() {
	return (
		<Routes>
			<Route path="/students">
				<Route path="list" element={<StudentList />} />
				<Route path="view" element={<StudentView />} />
				<Route path="add" element={<StudentAdd />} />
				<Route path="edit" element={<StudentAdd />} />
			</Route>
		</Routes>
	);
}

export default StudentRoute;
