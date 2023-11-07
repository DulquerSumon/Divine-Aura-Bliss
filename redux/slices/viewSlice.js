import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: "h",
};

export const viewSlice = createSlice({
  name: "viewSlice",
  initialState,
  reducers: {
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { setCurrentAccount } = viewSlice.actions;

export default viewSlice.reducer;
