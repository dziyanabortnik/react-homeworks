import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface IMenuItem {
  id: string;
  category: string;
  img?: string;
  meal?: string;
  price?: number;
  instructions?: string;
}

interface MenuState {
  items: IMenuItem[];
  selectedCategory: string;
  loading: boolean;
  currentPage: number;
}

const initialState: MenuState = {
  items: [],
  selectedCategory: 'Dessert',
  loading: false,
  currentPage: 0,
};

export const fetchMenuItems = createAsyncThunk('menu/fetchItems', async (selectedCategory: string) => {
  const response = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');
  const data: IMenuItem[] = await response.json();
  return data.filter((item) => item.category === selectedCategory);
});

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
      state.currentPage = 0;
    },
    incrementPage(state) {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchMenuItems.rejected, (state) => {
        state.items = [];
        state.loading = false;
      });
  },
});

export const { setCategory, incrementPage } = menuSlice.actions;
export default menuSlice.reducer;
