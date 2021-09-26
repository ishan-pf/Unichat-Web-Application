import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

import  "firebase/app";

import { auth } from './firebase';
import firebase from 'firebase/app';



function Login() {
    return (
        <div id="login__page">
            <div id="login__card">
                <h2>Welcome to UniChat!</h2>

                <div className="login__button google"

                    onClick={ () => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) }
                >

                    <GoogleOutlined /> Sign-in With Google
                </div>
                <br/><br/>

                
                <div className="login__button facebook"

                    onClick={ () => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
                >

                    <FacebookOutlined /> Sign-in With Facebook
                </div>

                
            </div>
            
        </div>
    )
}

export default Login
