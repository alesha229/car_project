import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICar, SelectOption } from '../../types'
import axios from '../../utils/axios'

interface ICarCardState {
	cars: ICar[]
	selects: SelectOption[]
	status: string
	sortOption: string
}

export const fetchAllCars = createAsyncThunk('cars/fetchAllCars', async () => {
	const { data } = await axios.get('/cars')
	return data
})

export const fetchSelect = createAsyncThunk('select/fetchSelect', async () => {
	const { data } = await axios.get('/select')
	return data
})

const initialState: ICarCardState = {
	cars: [],
	selects: [],
	status: 'loading',
	sortOption: '',
}

export const carsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		setSortOption: (state, action) => {
			state.sortOption = action.payload
		},
	},
	extraReducers: builder => {
		builder
			// fetchAllCars
			.addCase(fetchAllCars.pending, (state, action) => {
				state.cars = []
				state.status = 'loading'
			})
			.addCase(fetchAllCars.fulfilled, (state, action) => {
				state.cars = action.payload
				state.status = 'success'
			})
			.addCase(fetchAllCars.rejected, (state, action) => {
				state.cars = []
				state.status = 'error'
			})

			// fetchSelect
			.addCase(fetchSelect.pending, (state, action) => {
				state.selects = []
				state.status = 'loading'
			})
			.addCase(fetchSelect.fulfilled, (state, action) => {
				state.selects = action.payload
				state.status = 'success'
			})
			.addCase(fetchSelect.rejected, (state, action) => {
				state.selects = []
				state.status = 'error'
			})
	},
})

export const {} = carsSlice.actions

export default carsSlice.reducer
