import React from 'react';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import ConteudosSalvos from './pages/ConteudosSalvos/index';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './sass/main.scss';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/conteudossalvos" exact component={ConteudosSalvos} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;