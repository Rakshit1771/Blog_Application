import React from "react";
import "./Blog_Card.css";
import { useNavigate } from 'react-router-dom';
function Blog_Card({ title, description, image }) {
  const navigate = useNavigate();
  return (
    <div className="Card_Container">
      <div className="Blog_image">
        <img src={image} alt="img" />
      </div>
      <div className="Blog_Image_Heading"><b>{title}</b></div>
      <div className="Subheading_div"><p>{description}</p></div>
      <div className="readmore"><button onClick={()=> navigate("/login")}>
        <b>Read More..</b></button></div>
    </div>
  );
}

export default Blog_Card;
