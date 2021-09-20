import React from 'react'
import { useSelector} from 'react-redux';

import {  selectUser } from '../store/User/index'
import { selectProject } from 'store/Project';

function DashboardView () {

    const { name } = useSelector(selectUser)


    const {Call} = useSelector(selectProject)
    console.log(Call)
    return(
        <div>
            Olá, {name}
            <ul>
            {Call.map((call) => <li>{call.descricao}</li>)}
            </ul>

        </div>
    )
}

export default DashboardView;