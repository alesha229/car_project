import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICar } from "../../types";
import axios from "../../utils/axios";

interface ICarResultState {
  results: ICar[];
  currentCar: ICar | null;
  status: string;
}

export interface SearchStates {
  brand: string;
  model: string;
  year?: string;
  bodyType?: string;
  transmission?: string;
  driveType?: string;
  engineType?: string;
  volume?: string;
  priceFrom?: string;
  priceTo?: string;
  mileageFrom?: string;
  mileageTo?: string;
  condition?: string;
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
        if(state == "condition" && value == "all") {
          baseLink += `&condition=new&condition=used`
        }
        isfirst = false;
      }
    });
    const { data } = await axios.get(baseLink);
    return data;
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (id: string) => {
    const { data } = await axios.get(`/cars/${id}`);
    return data;
  }
);

const initialState: ICarResultState = {
  results: [],
  currentCar: null,
  status: "waiting",
};

export const carResSlice = createSlice({
  name: "carsResult",
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Select Cars
      .addCase(fetchSelectCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSelectCars.fulfilled, (state, action) => {
        state.status = "success";
        state.results = action.payload;
      })
      .addCase(fetchSelectCars.rejected, (state) => {
        state.status = "error";
      })
      // Fetch Car By Id
      .addCase(fetchCarById.pending, (state) => {
        state.status = "loading";
        state.currentCar = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.status = "success";
        state.currentCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state) => {
        state.status = "error";
        state.currentCar = null;
      });
  },
});

export const { setResults } = carResSlice.actions;

export default carResSlice.reducer;
