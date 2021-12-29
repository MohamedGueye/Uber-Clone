import { configureStore } from "@reduxjs/toolkit"; // Allows us to create data layer
import navReducer from "./slices/navSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});