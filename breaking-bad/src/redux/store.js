import { configureStore } from "@reduxjs/toolkit";
import coffeesSlice from "./coffeesSlice";
import icedCoffeesSlice from "./icedCoffeesSlice";

export const store = configureStore({
  reducer: {
    coffees: coffeesSlice,
    icedCoffees: icedCoffeesSlice,
  },
});
