import { createSlice } from "@reduxjs/toolkit";

var defaultState = {
    cartIsVisible: false,
    notification: null
};

var uiSlice = createSlice({
    name: 'ui',
    initialState: defaultState,
    reducers: {
        toggle(state) {
            // this is actually inmutable since we are using react toolkit
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;