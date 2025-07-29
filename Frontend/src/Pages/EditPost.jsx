import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Add Posts/AddPost.css";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
       const res = await axios.get(`http://localhost:8000/api/posts/${id}`);

        const post = res.data.data;
        console.log("Title of post",post.title);
        console.log("Image",post.image);
        
        setTitle(post.title);
        setContent(post.content);
        setExistingImage(post.image);
      } catch (err) {
        console.error("Error fetching post:", err);
        alert("Post not found");
        navigate("/mypost");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (image) {
      formData.append("image", image); 
    }

    await axios.put(
      `http://localhost:8000/api/posts/editpost/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert("Post updated successfully!");
    navigate(`/post/${id}`);
  } catch (err) {
    console.error("Error updating post:", err);
    alert("Failed to update post");
  }
};


  if (loading)
    return <h2 className="loading-text">Loading post for editing...</h2>;

  return (
    <div className="add-post-container">
      <h2>Edit Post</h2>
      <form className="post-form" onSubmit={handleUpdate}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label>Update Image (optional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {existingImage && !image && (
          <img
            src={existingImage}
            alt="Old"
            className="image-preview"
            style={{
              maxHeight: "200px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          />
        )}

        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
