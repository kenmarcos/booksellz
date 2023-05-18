import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "@/types/cart";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const isbn13 = action.payload.book.isbn13;

      const existingItem = state.find((item) => item.book.isbn13 === isbn13);

      if (existingItem) {
        existingItem.quantity++;

        existingItem.totalPrice =
          existingItem.totalPrice * existingItem.quantity;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const newCart = state.filter(
        (item) => item.book.isbn13 !== action.payload
      );

      return newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
