import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICar } from '../../types'
import axios from '../../utils/axios'

interface ICarCardState {
	cars: ICar[]
	status: string
	sortOption: string
}

export const fetchAllCars = createAsyncThunk('cars/fetchAllCars', async () => {
	const { data } = await axios.get('/cars')
	return data
})

const initialState: ICarCardState = {
	cars: [],
	status: 'loading',
	sortOption: ''
}

export const carsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		setSortOption: (state, action) => {
			state.sortOption = action.payload
		}
	},
	extraReducers: builder => {
		builder
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
	},
})

export const {} = carsSlice.actions

export default carsSlice.reducer
