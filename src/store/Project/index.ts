import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'


import callMock from '../../mocks/call.json'
import callStatusMock from '../../mocks/call.json'
import projectMock from '../../mocks/call.json'

interface call {
    id: string;
    descricao: string;
}

interface callStatus {
    id: string;
    descricao: string;
}

interface project {
    id: string;
    descricao: string;
}


interface getState {
    Call: Array<call>;
    CallStatus: Array<callStatus>;
    Project: Array<project>;
}

  const initialState: getState = {
    Call: callMock,
    CallStatus: callStatusMock,
    Project: projectMock
  }

  export const slice = createSlice({
    name: 'project',
    initialState,

    reducers: {
        getProject (state) {
            return { ...state}

        }
    }
})

export const { getProject } = slice.actions

export const selectProject = (state: RootState)=> state.project
export default slice.reducer