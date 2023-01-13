import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";
const Auth = () => {
  const dispatch = useDispatch();
  //authreducer me jo bhi state chal rahi ho use utha ke lao means ke start, success, fail pe loading ki value
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignup, setIsSignup] = useState(true);
  const [data, setdata] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);

  const inputHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (isSignup) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setdata({
      username: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
    });
  };
  return (
    <div className="Auth">
      {/* left side bar */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world.</h6>
        </div>
      </div>

      {/* right side bar */}
      <div className="a-right">
        <form action="" className="infoForm authForm" onSubmit={submitHandler}>
          <h3>{isSignup ? "Sign up" : "Signin"}</h3>
          {isSignup && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                className="infoInput"
                onChange={inputHandler}
                value={data.firstname} // isliye lagai hai jisse ki value apni state ke according input me aati rahe jaise ki submit ke bad "" ana chahiye
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                className="infoInput"
                onChange={inputHandler}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="infoInput"
              onChange={inputHandler}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="infoInput"
              onChange={inputHandler}
              value={data.password}
            />
            {isSignup && (
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpass"
                className="infoInput"
                onChange={inputHandler}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm password mismatch!
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignup(!isSignup);
                resetForm();
              }}
            >
              {loading
                ? "Loading..."
                : isSignup
                ? "Already have an account.Login!"
                : "Don't have an account? Sign Up!"}
            </span>
          </div>
          <button
            className="button  infoButton"
            type="submit"
            disabled={loading}
          >
            {" "}
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
