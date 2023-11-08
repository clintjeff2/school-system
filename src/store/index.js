import { configureStore } from '@reduxjs/toolkit';
import staffReducer from './staffs/staffSlice';
import studentReducer from './students/studentSlice';
const store = configureStore({
	reducer: {
		staffs: staffReducer,
		students: studentReducer,
	},
});

export default store;
