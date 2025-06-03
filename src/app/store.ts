import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../features/slice/navigationSlice';
import userReducer from '../features/slice/userSlice';
import menuReducer from '../features/slice/menuSlice';
import cartReducer from '../features/slice/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    navigation: navigationReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
