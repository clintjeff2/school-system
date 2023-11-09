import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	specialties: [],
	isLoading: false,
	error: false,
};

export const getSpecialties = createAsyncThunk(
	'specialty/getSpecialties',
	async (thunkAPI) => {
		try {
			const res = await axios({
				method: 'get',
				url: 'http://localhost:8001/api/v1/specialty',
			});

			// console.log(res.data);
			return res.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue({ error: err.message });
		}
	}
);

const specialtySlice = createSlice({
	name: 'specialty',
	initialState,
	reducers: {
		removeSpecialties: (state, action) => {
			state.specialties = [];
			state.isLoading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getSpecialties.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getSpecialties.fulfilled, (state, action) => {
				state.specialties = action.payload;
				state.isLoading = false;
			})
			.addCase(getSpecialties.rejected, (state, action) => {
				state.error = true;
				state.isLoading = false;
			});
	},
});

const {reducer} = specialtySlice ;

export const {removeSpecialties} = specialtySlice.actions;

export default reducer;