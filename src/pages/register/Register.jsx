import React, { useCallback, useRef, useState } from "react";
import "./register.scss";

const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const emailRef=useRef();
    const passwordRef=useRef();

    const handleStart=()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish=()=>{
        setPassword(passwordRef.current.value)
    }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            className="logo"
          />
          <button className="loginButton">Sign In</button>
        </div>
        <div className="container">
          <h1>Unlimited movies, Tv shows, and more.</h1>
          <h2>watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart you membership
          </p>
          {!email ?(
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>Get Started</button>
          </div>
          ):  (<form className="input">
          <input type="password" placeholder="password" ref={passwordRef} />
          <button className="registerButton" onClick={handleFinish}>Start Membership</button>
        </form>)}
        </div>
      </div>
    </div>
  );
};

export default Register;
