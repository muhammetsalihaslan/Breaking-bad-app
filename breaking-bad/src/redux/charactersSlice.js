import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
  },
  reducers: {},
});

export default charactersSlice.reducer;
