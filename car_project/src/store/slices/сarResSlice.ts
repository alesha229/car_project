import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICar } from "../../types";
import axios from "../../utils/axios";

interface ICarResultState {
  results: ICar[];
  status: string;
}

export const fetchSelectCars = createAsyncThunk(
  "select/fetchSelectCars",
  async (states: any) => {
    let baseLink = `/cars?`;
    let isfirst: boolean = true;
    for (const state in states) {
      if (state != "") {
        if (isfirst) {
          baseLink += state + `=` + states[state];
          isfirst = false;
        } else {
          baseLink += `&` + state + `=` + states[state];
        }
      }
    }
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
  reducers: {},
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

export const {} = carResSlice.actions;

export default carResSlice.reducer;
