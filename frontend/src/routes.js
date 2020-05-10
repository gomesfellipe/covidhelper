import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import DashBoard from './pages/DashBoard';
import AppIndex3 from './pages/AppIndex3';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={DashBoard}/>
                <Route path="/appindex3" component={AppIndex3}/>
            </Switch>
        </BrowserRouter>
    );
}