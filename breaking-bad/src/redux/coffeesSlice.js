import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoffees = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/hot`);
    return res.data;
  }
);

export const coffeesSlice = createSlice({
  name: "coffees",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCoffees.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCoffees.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchCoffees.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.massage;
    },
  },
});

export default coffeesSlice.reducer;
