import { configureStore } from '@reduxjs/toolkit';

//IMPORT SLICE FEATURES
import staffReducer from './staffs/staffSlice';
import studentReducer from './students/studentSlice';
import specialtyReducer from './specialty/specialtySlice';
import departmentReducer from './departments/departmentSlice';

//CREATING THE VARIOUS REDUCERS
const store = configureStore({
	reducer: {
		staffs: staffReducer,
		students: studentReducer,
		specialty: specialtyReducer,
		departments: departmentReducer,
	},
});

export default store;
