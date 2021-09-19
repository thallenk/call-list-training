import React from 'react'
import { useSelector} from 'react-redux';

import {  selectUser } from '../store/User/index'
import { selectProject } from 'store/Project';

function DashboardView () {

    const { user } = useSelector(selectUser)


    const {Call} = useSelector(selectProject)
    return(
        <div>
            Olá, {user}
            {Call}
        </div>
    )
}

export default DashboardView;