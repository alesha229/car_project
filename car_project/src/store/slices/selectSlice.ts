import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { Selects } from "../../types/select.types";

export const fetchSelect = createAsyncThunk(
  "select/fetchSelect",
  async () => {
    const response = await fetch("http://localhost:3000/selects");
    const data = await response.json();
    return data;
  }
);

interface SelectState {
  selects: Selects | null;
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  selectedBody: string;
  selectedTransmission: string;
  selectedDrive: string;
  selectedEngine: string;
  priceFrom: string;
  priceTo: string;
  mileageFrom: string;
  mileageTo: string;
  selectedVolume: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SelectState = {
  selects: null,
  selectedBrand: "",
  selectedModel: "",
  selectedYear: "",
  selectedBody: "",
  selectedTransmission: "",
  selectedDrive: "",
  selectedEngine: "",
  priceFrom: "",
  priceTo: "",
  mileageFrom: "",
  mileageTo: "",
  selectedVolume: "",
  status: "idle",
  error: null,
};

const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    setSelectedBrand: (state, action: PayloadAction<string>) => {
      state.selectedBrand = action.payload;
      state.selectedModel = "";
    },
    setSelectedModel: (state, action: PayloadAction<string>) => {
      state.selectedModel = action.payload;
    },
    setSelectedYear: (state, action: PayloadAction<string>) => {
      state.selectedYear = action.payload;
    },
    setSelectedBody: (state, action: PayloadAction<string>) => {
      state.selectedBody = action.payload;
    },
    setSelectedTransmission: (state, action: PayloadAction<string>) => {
      state.selectedTransmission = action.payload;
    },
    setSelectedDrive: (state, action: PayloadAction<string>) => {
      state.selectedDrive = action.payload;
    },
    setSelectedEngine: (state, action: PayloadAction<string>) => {
      state.selectedEngine = action.payload;
    },
    setPriceFrom: (state, action: PayloadAction<string>) => {
      state.priceFrom = action.payload;
    },
    setPriceTo: (state, action: PayloadAction<string>) => {
      state.priceTo = action.payload;
    },
    setMileageFrom: (state, action: PayloadAction<string>) => {
      state.mileageFrom = action.payload;
    },
    setMileageTo: (state, action: PayloadAction<string>) => {
      state.mileageTo = action.payload;
    },
    setSelectedVolume: (state, action: PayloadAction<string>) => {
      state.selectedVolume = action.payload;
    },
    resetSelections: (state) => {
      state.selectedBrand = "";
      state.selectedModel = "";
      state.selectedYear = "";
      state.selectedBody = "";
      state.selectedTransmission = "";
      state.selectedDrive = "";
      state.selectedEngine = "";
      state.priceFrom = "";
      state.priceTo = "";
      state.mileageFrom = "";
      state.mileageTo = "";
      state.selectedVolume = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelect.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSelect.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selects = action.payload;
      })
      .addCase(fetchSelect.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const {
  setSelectedBrand,
  setSelectedModel,
  setSelectedYear,
  setSelectedBody,
  setSelectedTransmission,
  setSelectedDrive,
  setSelectedEngine,
  setPriceFrom,
  setPriceTo,
  setMileageFrom,
  setMileageTo,
  setSelectedVolume,
  resetSelections,
} = selectSlice.actions;

export default selectSlice.reducer;
