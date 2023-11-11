import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import getApiError from '../../utilities/getApiError';

const initialState = {
	teachers: [],
	error: false,
	isLoading: false,
};

export const getStaffs = createAsyncThunk(
	'staff/getStaffs',
	async (thunkAPI) => {
		try {
			const res = await axios({
				method: 'get',
				url: `http://127.0.0.1:8001/api/v1/staff`,
			});
			console.log(res.data);
			return res.data;
		} catch (err) {
			console.log(err);
			// const msg = getApiError();
			return thunkAPI.rejectWithValue({ error: err.message });
		}
	}
);
export const addStaff = createAsyncThunk(
	'staff/addStaff',
	async (
		{
			gender,
			matricule,
			name,
			department,
			address,
			dob,
			pob,
			email,
			tel,
			password,
			confirmPassword,
			high_certificate,
			marital_status,
			role,
			picture,
		},
		thunkAPI
	) => {
		try {
			const res = await axios({
				method: 'post',
				url: `http://127.0.0.1:8001/api/v1/staff/register`,
				data: {
					gender,
					matricule,
					name,
					department,
					address,
					dob,
					pob,
					email,
					tel,
					password,
					confirmPassword,
					high_certificate,
					marital_status,
					role,
					picture,
				},
			});
			console.log(res.data)
			return res.data;
		} catch (err) {
			console.log(err);
			// const msg = getApiError();
			return thunkAPI.rejectWithValue({ error: err.message });
		}
	}
);

const staffSlice = createSlice({
	name: 'staff',
	initialState,
	reducers: {
		removeStaffs: (state, action) => {
			state.teachers = [];
		},
		// removeStaffs() {

		// }
	},
	extraReducers: (builder) => {
		builder
			.addCase(getStaffs.fulfilled, (state, action) => {
				state.teachers = action.payload;
				state.isLoading = false;
			})
			.addCase(getStaffs.pending, (state, action) => {
				// console.log(action.payload);
				state.isLoading = true;
			})
			.addCase(getStaffs.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			}).addCase(addStaff.pending, (state) => {
				state.isLoading = true;
			}).addCase(addStaff.rejected, (state) => {
				state.error = true;
				state.isLoading = false;
			}).addCase(addStaff.fulfilled, (state, action) => {
				state.isLoading = false;
			})
	},
});

// console.log()
//import.meta.env

const { reducer } = staffSlice;
export const { removeStaffs } = staffSlice.actions;

export default reducer;
