import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./slices/сarSlice";
import carResSlice from "./slices/сarResSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    result: carResSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
