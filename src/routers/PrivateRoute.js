import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component,
    isAuthenticated,
    ...rest
 }) {
    return (
        <Route 
        {...rest} 
        component={(props) =>
            isAuthenticated ? 
            (<Component {...props} />) 
            : 
            (<Redirect to="/landingpage"/>)
        } />
    )
}
