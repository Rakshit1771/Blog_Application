// import React, { useState } from "react";
import "./Profile.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Store/authSlice";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const user = useSelector((state) => state.auth.userData);
  console.log(user.username);

  const onsubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("bio", data.bio);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/posts/addavtar",
        formData,
        {
          withCredentials: true,
        }
      );
      if (res) {
        console.log("Avatar Uploded Successfulluy");
        reset();
      }
    } catch (error) {
      console.log("Avatar not Uploded Sucesfully", error);
    }
  };

  return (
    <div className="profile_conatiner">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="profile_image">
          <img
            src="https://www.jokescoff.com/wp-content/uploads/profile-whatsapp-dp-1.jpg"
            alt="Profile"
          />
        </div>
        <div className="Username">{user.username}</div>
        <label htmlFor="image" className="avtattext">
          Upload Avatar
        </label>
        <input
          className="UplodeAvtar"
          id="image"
          type="file"
          accept="image/*"
          {...register("image", { required: true })}
        />
        <button type="submit">Upload Avatar</button>
      </form>
    </div>
  );
}
