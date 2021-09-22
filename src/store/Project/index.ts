import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'


import callMock from '../../mocks/call.json'
import callStatusMock from '../../mocks/callStatus.json'
import projectMock from '../../mocks/project.json'

interface call {
    id: string;
    idProject:string;
    idStatus: string;
    descricao: string;
}

interface callStatus {
    id: string;
    denominacao: string;
}

interface project {
    id: string;
    denominacao: string;
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
            return {...state}

        }
    }
})

export const { getProject } = slice.actions

export const selectProject = (state: RootState)=> state.project
export default slice.reducer