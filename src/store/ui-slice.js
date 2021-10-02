import { createSlice } from "@reduxjs/toolkit";

var defaultState = {
    cartIsVisible: false
};

var uiSlice = createSlice({
    name: 'ui',
    initialState: defaultState,
    reducers: {
        toggle(state) {
            // this is actually inmutable since we are using react toolkit
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;