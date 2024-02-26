import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./homeSlice";

export const store = configureStore({
    reducer: {
        home: HomeSlice,
    }
})