import { configureStore } from '@reduxjs/toolkit'
import userReducer from './User/index'
import projectReducer from './Project/index'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch } from 'react-redux'



const persistConfig = {
  key: 'root',
  storage:storage,
  version: 1
};

const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig,userReducer),
    project: persistReducer(persistConfig,projectReducer)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;