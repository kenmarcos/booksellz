import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Cart, CartItem } from "@/types/cart";
import {
  calculateDiscount,
  calculateTotalCost,
} from "@/utils/cartCalculations";

const initialState: Cart = {
  cartItems: [],
  totalItems: 0,
  distinctItems: 0,
  subtotal: 0,
  discount: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const isbn13 = action.payload.book.isbn13;

      const existingItem = state.cartItems.find(
        (item) => item.book.isbn13 === isbn13
      );

      if (existingItem) {
        existingItem.quantity++;

        existingItem.totalPrice += Number(existingItem.book.price.slice(1));

        state.subtotal += Number(existingItem.book.price.slice(1));
      } else {
        state.cartItems.push(action.payload);

        state.distinctItems = state.cartItems.length;

        state.subtotal += action.payload.totalPrice;
      }

      state.totalItems = state.cartItems
        .map((item) => item.quantity)
        .reduce((total, quantity) => total + quantity);

      state.discount = calculateDiscount(state.distinctItems, state.subtotal);

      state.totalCost = calculateTotalCost(state.subtotal, state.discount);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.book.isbn13 !== action.payload
      );

      state.cartItems = filteredCartItems;

      state.distinctItems = state.cartItems.length;

      state.totalItems = filteredCartItems.length
        ? filteredCartItems
            .map((item) => item.quantity)
            .reduce((acc, cur) => acc + cur)
        : initialState.subtotal;

      state.subtotal = filteredCartItems.length
        ? filteredCartItems
            .map((item) => item.totalPrice)
            .reduce((acc, cur) => acc + cur, initialState.subtotal)
        : initialState.subtotal;

      state.discount = calculateDiscount(state.distinctItems, state.subtotal);

      state.totalCost = calculateTotalCost(state.subtotal, state.discount);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(
        (item) => item.book.isbn13 === action.payload
      );

      if (existingItem) {
        existingItem.quantity++;

        existingItem.totalPrice += Number(existingItem.book.price.slice(1));

        state.subtotal += Number(existingItem.book.price.slice(1));
      }

      state.totalItems = state.cartItems
        .map((item) => item.quantity)
        .reduce((total, quantity) => total + quantity);

      state.discount = calculateDiscount(state.distinctItems, state.subtotal);

      state.totalCost = calculateTotalCost(state.subtotal, state.discount);
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.cartItems.find(
        (item) => item.book.isbn13 === action.payload
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;

        existingItem.totalPrice -= Number(existingItem.book.price.slice(1));

        state.subtotal -= Number(existingItem.book.price.slice(1));

        state.totalItems--;
      }

      state.discount = calculateDiscount(state.distinctItems, state.subtotal);

      state.totalCost = calculateTotalCost(state.subtotal, state.discount);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
