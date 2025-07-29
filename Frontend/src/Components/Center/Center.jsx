import React from "react";
import "./Center.css";
import Featured_Images from "../Featured_Images/Featured_Images";
function Center() {
  return (
    <>
      <>
        <div className="Center_Container">
          <div className="Center_Heading">
            <h1>
              <b>Welcome to ThoughtVerse</b>
            </h1>
            <div>
              <p className="text">
                <b>“Where every word finds its echo.”</b>
              </p>
            </div>
          </div>
        </div>
        <Featured_Images />
      </>    


    </>
  );
}

export default Center;
