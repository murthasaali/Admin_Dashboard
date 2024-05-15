import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAdminLoggedIn: JSON.parse(localStorage.getItem('isAdminLoggedIn')) || false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminLoggedIn(state, action) {
      state.isAdminLoggedIn = action.payload;
      localStorage.setItem('isAdminLoggedIn', JSON.stringify(action.payload));
    },
  },
});

export const { setAdminLoggedIn } = adminSlice.actions;
export default adminSlice.reducer;
