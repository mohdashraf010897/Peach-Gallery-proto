import React, { useState } from "react";
import swal from "sweetalert";

import "./../styles/loginAndRegister.styles.scss";

var CryptoJS = require("crypto-js");

const LoginAndRegister = () => {
  // fundamental state of the component
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
  });

  //setting whether user wants to register or login
  const [loginOrRegister, setloginOrRegister] = useState("login");

  // state to toggle password visibility
  const [passVisible, setpassVisible] = useState(false);

  // onchange handler for input fields
  const onChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  // checking the database if user is registered or not
  const verifyUser = (user) => {
    //fetching all registered users
    const usersList = JSON.parse(localStorage.getItem("users"));

    if (usersList[user.email]) {
      //decrypting stored password
      var bytes = CryptoJS.AES.decrypt(
        usersList[user.email].password,
        "secretPassword"
      );
      var passwordDecrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      //verifying Password
      if (passwordDecrypted === user.password) {
        //setting loggedInuser in session storage
        sessionStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            email: user.email,
            username: usersList[user.email].username,
            account: usersList[user.email].account,
          })
        );
        return true;
      } else {
        swal("Error", "Please Enter Correct Password", "error");
      }
    }

    return false;
  };

  //hndling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //If user is trying to login
    if (loginOrRegister === "login") {
      //return if no users are registered
      if (!localStorage.getItem("users")) {
        swal("Error", "No Users Registered yet.", "Error");
        return;
      }

      const user = { email: state.email, password: state.password };
      if (verifyUser(user)) {
        swal("Nice!!", "Login Succesful!", "success");

        // resetting local state
        setState({
          email: "",
          username: "",
          password: "",
        });
        window.location.href = "/gallery";
        return;
      } else {
        swal("error", "Please check your credentials", "error");
        return;
      }
    }
    // user trying to register
    else {
      //user object to be saved with encrypted password
      const user = {
        username: state.username,
        password: CryptoJS.AES.encrypt(
          JSON.stringify(state.password),
          "secretPassword"
        ).toString(),
        email: state.email,
        account: { balance: 3000 },
      };

      // if already users are registered
      if (localStorage.getItem("users")) {
        console.log(localStorage.getItem("users"));
        localStorage.setItem(
          "users",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("users")),
            [user.email]: { user },
          })
        );
        sessionStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            username: user.username,
            email: user.email,
            account: user.account,
          })
        );
      }
      //if no users are registered : you are my first user
      else {
        localStorage.setItem("users", JSON.stringify({ [user.email]: user }));
        sessionStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            username: user.username,
            email: user.email,
            account: user.account,
          })
        );
      }

      swal("Nice!!", "Registeration Succesful!", "success");
      // clearing local state
      setState({
        email: "",
        username: "",
        password: "",
      });

      // Autologin and redirect to transaction page
      window.location.href = "/gallery";
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} method="POST">
      <div className="login-form__header">
        {loginOrRegister === "login" ? "Login" : "Register"}
      </div>

      <div className="login-type-tabs">
        <span
          className={loginOrRegister === "login" ? "active-tab" : ""}
          onClick={() => {
            setloginOrRegister("login");
          }}
        >
          Login
        </span>
        <span
          className={loginOrRegister === "register" ? "active-tab" : ""}
          onClick={() => {
            setloginOrRegister("register");
          }}
        >
          Register
        </span>
      </div>

      <div className="login-form__content">
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={onChange}
            value={state.email}
            required
          />
        </div>
        {loginOrRegister === "register" && (
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={onChange}
              value={state.username}
              minLength="3"
              maxLength="12"
              required
            />
          </div>
        )}

        <div className="field password">
          {" "}
          <div
            onClick={() => setpassVisible(!passVisible)}
            className={
              !passVisible
                ? "password-visibility-toggler-icon password-visibility-toggler-icon__not-visible"
                : "password-visibility-toggler-icon password-visibility-toggler-icon__visible"
            }
          />
          <label>Password</label>
          <input
            type={passVisible ? "text" : "password"}
            name="password"
            onChange={onChange}
            value={state.password}
            minLength="8"
            maxLength="16"
            required
          />
        </div>
      </div>
      <div className="login-form__submit ">
        <input
          type="submit"
          className="login-form__submit--btn "
          value={loginOrRegister === "login" ? "Login" : "Register"}
        />
      </div>
    </form>
  );
};

export default LoginAndRegister;
