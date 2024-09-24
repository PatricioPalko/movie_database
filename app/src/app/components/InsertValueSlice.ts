"use client";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ValueState } from "../../../types/Types";

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