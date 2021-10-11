import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login">
            <h1>Please Login</h1>
            <form>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <input className="btn-login" type="submit" value="Login" />
            </form>
            <div style={{ margin: "10px" }}>--------------- or ---------------</div>
            <button onClick={signInUsingGoogle} className="btn-login">Signin with Google</button>
        </div>
    );
};

export default Login;