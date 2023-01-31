import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIcedCoffees = createAsyncThunk(
  "icedCoffees/getIcedCoffees",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/iced`);
    return res.data;
  }
);

export const icedCoffeesSlice = createSlice({
  name: "icedCoffees",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchIcedCoffees.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchIcedCoffees.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchIcedCoffees.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.massage;
    },
  },
});

export const icedSelector = (state) => state.icedCoffees.items;

export const statusSelector = (state) => state.icedCoffees.status;

export const errorSelector = (state) => state.icedCoffees.error;

export default icedCoffeesSlice.reducer;
