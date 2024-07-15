import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = { items: [], showCart: true };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
    addToCart(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item["title"] === action.payload["title"]
      );
      if (existingItemIndex > -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item["title"] === action.payload
      );

      const existingItem = state.items[existingItemIndex];

      if (existingItem.quantity === 1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        state.items[existingItemIndex].quantity--;
      }
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;
