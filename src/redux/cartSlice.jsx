import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
// console.log(initialState)


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload.id);
        },
        incrementQuantity: (state, action) => {
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: (item.quantity || 1) + 1 }; 
                }
                return item;
            });
        },
        decrementQuantity: (state, action) => {
            console.log(state, "decrement from the cartslice");
            return state.map((item) => {
                if (item.id === action.payload) {
                    const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1; // Prevent decrementing below 1
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer