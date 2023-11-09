import { configureStore } from '@reduxjs/toolkit';
import staffReducer from './staffs/staffSlice';
import studentReducer from './students/studentSlice';
import specialtyReducer from './specialty/specialtySlice';

const store = configureStore({
	reducer: {
		staffs: staffReducer,
		students: studentReducer,
		specialty: specialtyReducer,
	},
});

export default store;
