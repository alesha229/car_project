import { configureStore } from '@reduxjs/toolkit'
import carsSlice from './slices/сarSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
	reducer: {
		cars: carsSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
