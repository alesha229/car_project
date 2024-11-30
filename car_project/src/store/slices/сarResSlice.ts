import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICar } from "../../types";
import axios from "../../utils/axios";

interface ICarResultState {
  results: ICar[];
  status: string;
}

export interface SearchStates {
  brand: string;
  model: string;
}

export const fetchSelectCars = createAsyncThunk(
  "select/fetchSelectCars",
  async (states: SearchStates) => {
    let baseLink = `/cars?`;
    let isfirst: boolean = true;
    (Object.keys(states) as Array<keyof SearchStates>).forEach((state) => {
      const value = states[state];
      if (value !== "") {
        baseLink += isfirst 
          ? `${state}=${value}` 
          : `&${state}=${value}`;
        isfirst = false;
      }
    });
    const { data } = await axios.get(baseLink);
    return data;
  }
);

const initialState: ICarResultState = {
  results: [],
  status: "loading",
};

export const carResSlice = createSlice({
  name: "carsResult",
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
      state.status = "success";
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchSelectCars
      .addCase(fetchSelectCars.pending, (state) => {
        state.results = [];
        state.status = "loading";
      })
      .addCase(fetchSelectCars.fulfilled, (state, action) => {
        state.results = action.payload;
        state.status = "success";
      })
      .addCase(fetchSelectCars.rejected, (state) => {
        state.results = [];
        state.status = "error";
      });
  },
});

export const { setResults } = carResSlice.actions;

export default carResSlice.reducer;
