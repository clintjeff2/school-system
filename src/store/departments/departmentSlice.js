import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	departments: [],
	isLoading: false,
	error: false,
};

export const getDepartments = createAsyncThunk(
	'department/getDepartments',
	async (thunkAPI) => {
		try {
			const res = await axios({
				method: 'get',
				url: 'http://localhost:8001/api/v1/department',
			});
			return res.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue({ error: err.message });
		}
	}
);

const departmentSlice = createSlice({
	name: 'department',
	initialState,
	reducers: {
		removeDepartments: (state, action) => {
			state.departments = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getDepartments.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getDepartments.rejected, (state) => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(getDepartments.fulfilled, (state, action) => {
				state.departments = action.payload;
				state.isLoading = false;
			});
	},
});

const { reducer } = departmentSlice;

export const { removeDepartments } = departmentSlice.actions;

export default reducer;
