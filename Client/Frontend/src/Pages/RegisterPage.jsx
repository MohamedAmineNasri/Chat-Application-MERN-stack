import React from "react";
import axios from "axios";
import makeToast from "../Toaster";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const nameref = React.createRef();
  const emailref = React.createRef();
  const passwordref = React.createRef();
  const navigate = useNavigate();
  const registerUser = () => {
    const name = nameref.current.value;
    const email = emailref.current.value;
    const password = passwordref.current.value;

    axios
      .post("http://localhost:8000/user/register", {
        name,
        email,
        password,
      })
      .then((response) => {
        makeToast("success", response.data.message);
        navigate("/login");
      })
      .catch((err) => {
        makeToast("error", err.response.data.message);
      });
  };
  return (
    <div className="card">
      <div className="cardHeader">Registration</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            ref={nameref}
          />
        </div>
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
        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
};

export default RegisterPage;
