import { createSlice } from "@reduxjs/toolkit";

var defaultState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};

var cartSlice = createSlice({
    name: 'cart',
    initialState: defaultState,
    reducers: {
        addItem (state, action) {
            const item = action.payload;
            var existingItem = state.items.find(x => x.id === item.id);

            if (!existingItem) {
                //non inmutable cant do if you are using just redux
                state.items.push({
                    itemId: item.id,
                    price: item.price,
                    quantity: 1,
                    title: item.title
                });
            }
            else {
                existingItem.quantity ++;
            }

            state.totalPrice += item.price;

        },
        removeItem (state, action) {
            const id = action.payload;
            var existingItem = state.items.find(x => x.id === id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(x => x.id !== id);
            }
            else {
                existingItem.quantity --;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;