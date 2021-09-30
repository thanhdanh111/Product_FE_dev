import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunkUser } from "../logic/login_reducer";
export default function LoginUI() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const login = () => {
    dispatch(loginThunkUser(user.email, user.password));
  };

  return (
    <div className="register-form" style={{ position: "absolute", top: "0px" }}>
      <div className="register-left-container">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" />
        <h3>Welcome!</h3>
        <p>You are 30 seconds away from earning your own money!</p>
        <a
          href="/register"
          className="register-button-container register-button-container__login"
          type="submit"
        >
          Register
        </a>
      </div>
      <div className="register-right-container">
        <div className="register-container">
          <img
            className="register-logo"
            src="https://img.icons8.com/color/100/000000/twitter--v2.png"
          />
          <h1 className="title">My Chanel</h1>
          <label className="register-label-container">Email</label>
          <input
            className="register-input-container"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="example@test.com"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label className="register-label-container">Password</label>
          <input
            className="register-input-container"
            type="password"
            placeholder="min 6 letter"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button className="register-button-container" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
