import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/slice/userSlice';
import menuReducer from '../features/slice/menuSlice';
import cartReducer from '../features/slice/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;