import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomeView from 'views/Home.view';
import DashboardView from 'views/Dashboard.view';

export default function Routes() {
    return (
        <BrowserRouter>      
            <Switch>
                <Route path ='/' exact component = {HomeView}/>
                <Route path = '/dashboard' component = {DashboardView}/>
            </Switch>
        </BrowserRouter>
        


    )

}   