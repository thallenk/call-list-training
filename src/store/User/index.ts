import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'


export interface GetState {
    name: string,
    isLogged: boolean
  }

  const initialState: GetState = {
    name: '',
    isLogged: false,
  }

export const slice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        getUser (state, {payload}) {
            return { ...state, isLogged: true, name: payload}
        },
        logout(state){
            return { ...state, isLogged: false, name: ''}
        }
    }
})

export const { getUser, logout } = slice.actions

export const selectUser = (state: RootState)=> state.user


export default slice.reducer

