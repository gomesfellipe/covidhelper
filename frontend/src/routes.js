import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import AppIndex from './pages/AppIndex';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/appindex" component={AppIndex}/>
            </Switch>
        </BrowserRouter>
    );
}