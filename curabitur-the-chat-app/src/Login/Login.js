import { Button } from '@material-ui/core';
import React from 'react';
import { actionTypes } from '../DataLayerConfig/Reducer';
import { useStateValue } from '../DataLayerConfig/StateProvider';
import { auth, provider } from '../Hosting/Firebase';
import './Login.css';

function Login() {

    let [{ user }, dispatch] = useStateValue();
    let signIn = (event) => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
                <h1>Sign In to Artiligence HQ</h1>
                <p>artiligence.curabitur.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login;
