import { configureStore } from "@reduxjs/toolkit";
import InsertValueSlice from "../helpers/InsertValueSlice";
import likeSlice from "../helpers/LikeSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      movieFilter: InsertValueSlice,
      like: likeSlice,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
