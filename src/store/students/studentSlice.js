import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import getApiError from '../../utilities/getApiError';

const initialState = {
	students: {},
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

const studentSlice = createSlice({
	name: 'student',
	initialState,
	reducers: {
		removeStudent() {},
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
			});
	},
});

const { reducer } = studentSlice;
export const { removeStudent } = studentSlice.actions;

export default reducer;
