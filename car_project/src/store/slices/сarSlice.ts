import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICar, ISelectOption } from "../../types";
import axios from "../../utils/axios";

interface ICarCardState {
  cars: ICar[];
  selects: ISelectOption[];
  status: string;
  results: ICar[];
}

export const fetchAllCars = createAsyncThunk("cars/fetchAllCars", async () => {
  const { data } = await axios.get("/cars");
  return data;
});

export const fetchSelect = createAsyncThunk("select/fetchSelect", async () => {
  const { data } = await axios.get("/select");
  return data;
});

const initialState: ICarCardState = {
  cars: [],
  selects: [],
  status: "loading",
  results: [],
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchAllCars
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
      })

      // fetchSelect
      .addCase(fetchSelect.pending, (state) => {
        state.selects = [];
        state.status = "loading";
      })
      .addCase(fetchSelect.fulfilled, (state, action) => {
        state.selects = action.payload;
        state.status = "success";
      })
      .addCase(fetchSelect.rejected, (state) => {
        state.selects = [];
        state.status = "error";
      });
  },
});

export const {} = carsSlice.actions;

export default carsSlice.reducer;
