import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  currentPage: string;
}

const initialState: IState = {
  currentPage: localStorage.getItem('currentPage') || 'home',
};

const navbarSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { getCurrentPage } = navbarSlice.actions;
export default navbarSlice.reducer;
