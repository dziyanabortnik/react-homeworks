import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMenuItem } from './menuSlice';

interface CartItem {
  item: IMenuItem;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const savedCart = localStorage.getItem('cart');

const initialState: CartState = savedCart ? JSON.parse(savedCart) : {
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

    updateCartQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;
