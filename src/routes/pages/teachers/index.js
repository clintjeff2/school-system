import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	TeacherAdd,
	TeacherList,
	TeacherView,
} from '../../../screens/pages/teachers';

function TeacherRoute() {
	return (
		<Routes>
			<Route path="/teachers">
				<Route path="add" element={<TeacherAdd />} />
				<Route path="list" element={<TeacherList />} />
				<Route path="view" element={<TeacherView />} />
			</Route>
		</Routes>
	);
}

export default TeacherRoute;
