import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: undefined
  },
  reducers: {
    addUser: (state, action) => {
      state.userData = action.payload;
    }
  }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

