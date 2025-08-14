import "./Login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Store/authSlice";
import React, { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
  try {
    const loginuser = await axios.post("http://localhost:8000/api/users/login", data ,
      {
        withCredentials: true
      }
    );
   
    

    if (loginuser.data.success === true) {
      const user = {
        _id: loginuser.data.user._id, 
        username: loginuser.data.user.username,
        email: loginuser.data.user.email,
      };

      console.log("Logged in user:", user);
      dispatch(login(user));
      navigate("/mypost"); 
    }
  } catch (err) {
    console.error("Login failed:", err);
    alert("Login failed");
  }
};

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onsubmit)}>
        <h2>Login </h2>
        {errorMessage && <p className="login-error">{errorMessage}</p>}

        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
        />
        {errors.username && <p className="error">Username is required</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="error">Email is required</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <p className="error">Password is required</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
