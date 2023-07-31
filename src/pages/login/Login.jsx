import React, { useCallback, useRef, useState } from "react";
import "./login.scss";

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const emailRef=useRef();
    const passwordRef=useRef();

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="container">
         <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="email/phone numer" />
            <input type="password" placeholder="password" />
            <button className="loginButton">Sign In</button>
            <span>New TO Netflix? <b>Sign Up now.</b> </span>
            <small>This page is protected by Google reCAPATCHA to ensure you're not a bot. <b>Learn more</b></small>
         </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
