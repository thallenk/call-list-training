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
    Call: call[];
    CallStatus: callStatus[];
    Project: project[];
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
        getProject: (state, action) => {
            const call = {
                id: Math.floor(Date.now() * Math.random()).toString(36),
                idProject: action.payload.idProject,
                idStatus: '63a347e9-c42a-451e-bd1c-b0dd30c26894',
                descricao:action.payload.descricao
            };
            state.Call.push(call)
        }
    }
})

export const { getProject } = slice.actions

export const selectProject = (state: RootState)=> state.project
export default slice.reducer