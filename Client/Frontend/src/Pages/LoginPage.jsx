import axios from "axios";
import React from "react";
import makeToast from "../Toaster";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const emailref = React.createRef();
  const passwordref = React.createRef();
  const navigate = useNavigate();
  const loginUser = () => {
    const email = emailref.current.value;
    const password = passwordref.current.value;

    axios
      .post("http://localhost:8000/user/login", {
        email,
        password,
      })
      .then((response) => {
        makeToast("success", response.data.message);
        localStorage.setItem("token", response.data.token);
        //console.log(response.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        makeToast("error", err.response.data.message);
      });
  };

  return (
    <div className="card">
      <div className="cardHeader">Login</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@example.com"
            ref={emailref}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={passwordref}
          />
        </div>
        <button onClick={loginUser}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
