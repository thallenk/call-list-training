import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/index'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
};

const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig,userReducer),
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;