import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Users from './containers/Users/Users'
import SearchUser from './containers/SearchUser/SearchUser'

function AppRoutes(){
    return(
        <Switch>
            <Route path="/" exact render={() => <Redirect to="/search-user" />} />
            <Route path="/users" component={Users} />
            <Route path="/search-user" component={SearchUser} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

const NotFound = () => (
    <center>
        <div><b>" {window.location.href} " is not found</b></div>
        <br/>
        <Link to='/'>
            <button>
                Click for Home Page
            </button>
        </Link>
    </center>
);

export default AppRoutes;