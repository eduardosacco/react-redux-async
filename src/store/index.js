import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

var store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
    }
});

export default store;