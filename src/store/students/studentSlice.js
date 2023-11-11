import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import getApiError from '../../utilities/getApiError';

const initialState = {
	students: [],
	error: false,
	isLoading: false,
};

export const getStudents = createAsyncThunk(
	'student/getStudents',
	async (thunkAPI) => {
		try {
			const res = await axios({
				method: 'get',
				url: 'http://localhost:8001/api/v1/student',
			});
			// console.log(res.data);
			return res.data;
		} catch (err) {
			// const msg = getApiError();
			return thunkAPI.rejectWithValue({ error: err.message });
		}
	}
);

export const addStudent = createAsyncThunk(
	'student/addStudent',
	async (
		{
			name,
			matricule,
			specialty,
			address,
			gender,
			dob,
			pod,
			email,
			tel,
			parent_name,
			parent_email,
			parent_tel,
			level,
			entry_certificate,
		},
		thunkAPI
	) => {
		try {
			console.log(name, matricule);
			const res = await axios({
				method: 'post',
				url: 'http://localhost:8001/api/v1/student',
				data: {
					name,
					matricule,
					specialty,
					address,
					gender,
					dob,
					pod,
					email,
					tel,
					parent_name,
					parent_email,
					parent_tel,
					level,
					entry_certificate,
				},
			});

			// console.log(res);
			return res.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue({ error: err.message });
		}
	}
);

const studentSlice = createSlice({
	name: 'student',
	initialState,
	reducers: {
		removeStudent() {},
		// searchStudentName(state, action) {
		// 	const student = state.students.filter(
		// 		(std) => std.name === action.payload
		// 	);
		// 	// console.log(student, state.students, action.payload);
		// 	state.students = student;
		// 	console.log(state.students);
		// },
		// searchStudentLevel() {},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getStudents.rejected, (state, action) => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(getStudents.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getStudents.fulfilled, (state, action) => {
				state.students = action.payload.data;
				state.isLoading = false;
			})
			.addCase(addStudent.fulfilled, (state, action) => {
				// state.students = action.payload.data;
				state.isLoading = false;
			})
			.addCase(addStudent.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(addStudent.rejected, (state, action) => {
				state.error = true;
				state.isLoading = false;
			});
	},
});

const { reducer } = studentSlice;
export const { removeStudent } = studentSlice.actions;

export default reducer;
