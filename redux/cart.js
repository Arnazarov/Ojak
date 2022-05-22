import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        qty: 0,
        totalPrice: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.qty += 1;
            state.totalPrice += action.payload.price * action.payload.qty;
        },
        resetCart: (state, action) => {
            state = initialState;
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer} = cartSlice;

// Extract and export each action creator by name
export const {addProduct, resetCart} = actions;

// Export the reducer, either as a default or named export
export default reducer;