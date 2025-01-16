import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feeedReducer from './feedSlice'
 const appStore = configureStore({
  reducer: {
    user:userReducer,
    feed:feeedReducer
  }
})
export default appStore;