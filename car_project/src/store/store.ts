import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./slices/сarSlice";
import carResSlice from "./slices/сarResSlice";
import selectSlice from "./slices/selectSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { IRootState } from "./types/stateTypes";

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    result: carResSlice,
    select: selectSlice,
  },
});

export type RootState = IRootState;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
