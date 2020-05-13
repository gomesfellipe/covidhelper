import React from 'react'
import helpers from '../../services/CheckLogin'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {


    const logged = helpers.isLoggedIn();

    console.log(logged)

    return (
        <Route
            {...rest}
            render={props =>
                logged ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    )
            }
        />
    )
}

export default PrivateRoute