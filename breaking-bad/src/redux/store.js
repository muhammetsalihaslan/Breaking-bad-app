import { configureStore } from "@reduxjs/toolkit";
import coffeesSlice from "./coffeesSlice";

export const store = configureStore({
  reducer: {
    coffees: coffeesSlice,
  },
});
