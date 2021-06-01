import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Homepage from './Homepage/Homepage';


const Root = () => (
    <BrowserRouter>
        <MainTemplate>
            <Switch>
                <Route exact path='/' component={Homepage} />
            </Switch>
        </MainTemplate>
    </BrowserRouter>
);

export default Root;
