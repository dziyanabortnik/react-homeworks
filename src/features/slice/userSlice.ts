import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  authError: null as string | null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.authError = null;
    },
    clearUser(state) {
      state.user = null;
    },
    setAuthError(state, action) {
      state.authError = action.payload;
    },
    clearAuthError(state) {
      state.authError = null;
    },
  },
});

export const { setUser, clearUser, setAuthError, clearAuthError } = userSlice.actions;

export default userSlice.reducer;
