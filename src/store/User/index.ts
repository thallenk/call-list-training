import { createSlice } from '@reduxjs/toolkit'

export interface GetState {
    user: string,
    isLogged: boolean
  }

  const initialState: GetState = {
    user: '',
    isLogged: false,
  }

export const slice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        getUser (state, {payload}) {
            return { ...state, isLogged: true, user: payload}
        },
        logout(state){
            return {...state, isLogged: false, user: ''}
        }
    }
})

export const { getUser, logout } = slice.actions


export default slice.reducer