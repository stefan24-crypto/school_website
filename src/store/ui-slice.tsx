import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: "UI",
  initialState: { showSidebar: false },
  reducers: {
    setShowSidebar(state, action) {
      state.showSidebar = action.payload;
    },
  },
});

export const UIActions = UISlice.actions;
export default UISlice;
