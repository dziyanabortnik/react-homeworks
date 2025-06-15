import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

interface UserState {
  user: { uid: string; email: string } | null;
  authError: string | null;
  isLoading: boolean;
}

const initialState = {
  user: null,
  authError: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.authError = null;
      state.isLoading = false;
    },
    clearUser(state) {
      state.user = null;
      state.isLoading = false;
    },
    setAuthError(state, action) {
      state.authError = action.payload;
    },
    clearAuthError(state) {
      state.authError = null;
    },

    logout(state) {
      state.user = null;
      state.isLoading = false;
      localStorage.removeItem('cart');
      
      signOut(auth).catch((err) => {
        console.error('Ошибка при выходе из Firebase:', err);
      });
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  },
});

export const { setUser, clearUser, setAuthError, clearAuthError, logout, setLoading } = userSlice.actions;

export default userSlice.reducer;
