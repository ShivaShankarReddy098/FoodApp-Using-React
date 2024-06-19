import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  items: [],
};

export const counterSlice = createSlice({
  name: "newCart",
  initialState,
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
      const item = action.payload;
      const existingItem = state.items.find((item) => item.id === item.id);
      if (!existingItem) {
        state.items.push({
          itemId: item.id,
          name: item.name,
          quantity: 1,
          price: item.price,
          totalPrice: item.Price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.totalPrice + item.price;
      }
    },
    decrement: (state, action) => {
      state.value -= 1;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
