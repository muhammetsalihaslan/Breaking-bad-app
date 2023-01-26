import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
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
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default coffeesSlice.reducer;
