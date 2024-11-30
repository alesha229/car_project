import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { ICarState } from "../types/stateTypes";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllCars",
  async () => {
    const { data } = await axios.get("/cars");
    return data;
  }
);

const initialState: ICarState = {
  cars: [],
  status: "loading"
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state) => {
        state.cars = [];
        state.status = "loading";
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.status = "success";
      })
      .addCase(fetchAllCars.rejected, (state) => {
        state.cars = [];
        state.status = "error";
      });
  },
});

export default carsSlice.reducer;
