import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticate,
    component: Component,
    ...rest

}) => {

    const a = rest.location.pathname;
    localStorage.setItem('lastpath', a);

    return (
        <Route {...rest}
        component={ (props) => (
            ( isAuthenticate )
                ? ( <Component { ...props } /> )
                : ( <Redirect to="/login" /> )
        )}

        />

        
    )
}

PrivateRoute.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
