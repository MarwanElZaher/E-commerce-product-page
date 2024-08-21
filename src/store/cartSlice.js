import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementItem(state, action) {
      const itemName = action.payload;
      const currentQuantity = state.items[itemName] || 0;
      state.items[itemName] = currentQuantity + 1;
    },
    decrementItem(state, action) {
      const itemName = action.payload;
      const currentQuantity = state.items[itemName] || 0;
      
      if (currentQuantity > 0) {
        const newQuantity = currentQuantity - 1;
        if (newQuantity > 0) {
          state.items[itemName] = newQuantity;
        } else {
          delete state.items[itemName];
        }
      }
    },
    removeFromCart(state, action) {
      const itemName = action.payload;
      delete state.items[itemName];
    },
    clearCart(state) {
      state.items = {};
    },
  },
});

export const { incrementItem, decrementItem, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
