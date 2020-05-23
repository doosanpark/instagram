import React from 'react';
import '../css/Login.css'
import Phone from './Phone';
import Footer from './Footer';
import LoginForm from './LoginForm';

function Login() {
    return (
        <div className={"Login"}>
            <div className={"Login__Frame"}>
                <Phone/>
                <LoginForm/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Login;
