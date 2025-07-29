import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userRegister = await axios.post("http://localhost:8000/api/users/register", {
        username: data.username,
        password: data.password,
        email: data.email,
      });
      if (userRegister.data.success) {
        navigate("/login");
      }
    } catch (error) {
      alert("User not registered successfully");
    }
  };

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter Your Username"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && <p className="error">{errors.username.message}</p>}

        <input
          type="email"
          placeholder="Enter Your Email Address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Create  Password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters required" },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <input
          type="password"
          placeholder="Confirm Your Password"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}

        <button type="submit">Create Account</button>
      </form>

      <p className="signin-link">
        Already have an account? <span onClick={() => navigate("/login")}>Sign in</span>
      </p>
    </div>
  );
}

export default Register;
