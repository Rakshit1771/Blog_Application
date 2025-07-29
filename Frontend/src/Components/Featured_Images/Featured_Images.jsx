import React from "react";
import "./Featured_Images.css";

function Featured_Images() {
  const blogs = [
    {
      title: "Food Blogs",
      image:
        "https://media.istockphoto.com/id/1027101164/photo/cropped-shot-of-food-blogger-taking-picture-of-cooked-pizza-on-baking-paper-on-wooden-surface.jpg?s=612x612&w=0&k=20&c=zTuoSb8WbkudOQUW_32BfeDdjDE2rDEZNI2Z4YGDU0g=",
    },
    {
      title: "Travel Blogs",
      image:
        "https://monetizzare.com/wp-content/uploads/2015/09/Travel-Blogger.jpg",
    },
    {
      title: "Tech Blogs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnKdSYkA2SBlSsPN-3kW44Mt8u0DVl0YAAQLWqcdJ_QP0KNa5F5ASf9j0nsOYRITr-60&usqp=CAU",
    },
    {
      title: "Fashion Blogs",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbO5QtgUOYJpuM1chbsWCqkeZyMkJxJ-wq_p4mAm-evlPVpxLRoyfcGUul1pAlhX1mOk&usqp=CAU",
    },
    {
      title: "Fitness Blogs",
      image:
        "https://cdn.prod.website-files.com/5ca5fe687e34be0992df1fbe/5ce1acd7956e9a52d9fd780d_muscler-ses-pectoraux-en-4-exercices-1.jpeg",
    },

    {
      title: "Finance Blogs",
      image:
        "https://framerusercontent.com/images/zqDclvPwrELtER8GFwALn2uWyZI.jpeg",
    },
  ];

  return (
    <>
      <div className="Image_heading">
        <b>Featured Blogs</b>
      </div>
      <div className="Featured_Images">
        {blogs.map((blog, index) => (
          <div
            className="card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img className="card-image" src={blog.image} alt={blog.title} />
            <div className="card-title">{blog.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Featured_Images;
