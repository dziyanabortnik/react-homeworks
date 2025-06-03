import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenuItem } from './menuSlice';

interface CartItem {
  item: IMenuItem;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ item: IMenuItem; quantity: number }>) {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.item.id === item.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ item, quantity });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
