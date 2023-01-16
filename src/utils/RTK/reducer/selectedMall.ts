import { createSlice } from "@reduxjs/toolkit";
import { mallItemType } from "types/mall";

const initialState: mallItemType | null = {
  createdTime: "",
  domain: "",
  mallId: "",
  shopId: null,
};

export const selectedMall = createSlice({
  name: "selectedMall",
  initialState,
  reducers: {
    setSelectedMallId(state, action) {
      state = action.payload;
      return state;
    },
    resetSelectedMallId(state) {
      state = initialState;
      return state;
    },
  },
});

export const { setSelectedMallId, resetSelectedMallId } = selectedMall.actions;

export default selectedMall.reducer;
