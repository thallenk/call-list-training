import React from 'react'
import { useSelector } from 'react-redux';
import {  selectUser } from '../store/User/index';

function DashboardView () {
    const { user } = useSelector(selectUser)
    return(
        <div>
            Olá, {user}
        </div>
    )
}

export default DashboardView;