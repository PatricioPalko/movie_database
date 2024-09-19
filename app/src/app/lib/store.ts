import { configureStore } from '@reduxjs/toolkit'
import InsertValueSlice from '../components/InsertValueSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      movieFilter: InsertValueSlice,
    },
  })
}
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']