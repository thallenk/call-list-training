import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

function DashboardView () {
    const user = useSelector((state: RootState) => state.user.user)
    return(
        <div>
            Olá, {user}
        </div>
    )
}

export default DashboardView;