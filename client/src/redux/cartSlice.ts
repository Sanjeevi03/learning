import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  name: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action: { payload: CartItem }) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    }
  }
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
