import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: 'login',
  reducers: {
    setCurrentPage: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { setCurrentPage } = navigationSlice.actions;
export default navigationSlice.reducer;
