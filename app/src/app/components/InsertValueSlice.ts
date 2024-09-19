"use client";

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ValueState {
  value: string;
}
const initialState: ValueState = {
  value: "",
};

export const InsertValueSlice = createSlice({
  name: "insertValue",
  initialState,
  reducers: {
    insertValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    resetState: (state) => {
      state.value = "";
    },
  },
});

export const { insertValue, resetState } = InsertValueSlice.actions;
export default InsertValueSlice.reducer;