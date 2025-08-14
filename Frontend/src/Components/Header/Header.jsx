import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Header">
        <div className="Heading">
          <h1 className="Main_h1">Thought Verse</h1>
          <p className="paragraph">
            Welcome to ThoughtVerse a space where ideas come alive and voices
            are heard. Dive into trending blogs that spark conversations and
            challenge perspectives. Whether you're here to write, read, or
            simply connect,this is your place to belong. Every post is more
            than just content it's a thread that brings people together. Start
            exploring, start connecting your story matters.
          </p>
        </div>
        <div className="Main_image">
          <img
            className="Main_Image"
            src="https://blog-assets.shawacademy.com/uploads/2016/09/blog2.jpg"
            alt=""
          />
        </div>
      </div>
      {/* <div></div> */}
      <div className='center'>
        <div><button className='Sign_Button' onClick={()=> navigate("/register")}> <b>Sign In</b></button></div>
        <div className='Login_text'>Already Have An Account ?<a className='login' href="/login">Login</a> </div>
    {/* <div className='Trending'>Trending On Thought Verse..</div> */}
    </div>
    {/* <div className='Blog_Container'> */}
      {/* <Blog/> */}
    {/* </div> */}
    </>
  );
}

export default Header;
