import { configureStore } from '@reduxjs/toolkit'
import InsertValueSlice from '../components/InsertValueSlice'
import likeSlice from '../components/LikeSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      movieFilter: InsertValueSlice,
      like: likeSlice
    },
  })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']