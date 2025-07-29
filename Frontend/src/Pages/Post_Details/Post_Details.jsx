import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Post_Details.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.userData);
const handleEdit = () => {
  navigate(`/editpost/${id}`);
};

  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    console.log({ id });

    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8000/api/posts/delete/${id}`);
      alert("Post deleted successfully");
      navigate("/mypost");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/posts/${id}`);

        setPost(res.data.data);
      } catch (err) {
        console.error("Post fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <h2 className="loading-text">Loading post...</h2>;
  if (!post) return <h2 className="not-found-text">Post not found</h2>;
  console.log("Id with Post", typeof post.userId);

  console.log(" id from store", typeof user._id);

  return (
    <>
      <div className="post-detail-page">
        {post?.userId === user?._id && (
          <div className="post-actions-detail">
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
        <img src={post.image} alt={post.title} className="post-image-full" />
        <h1 className="post-title">{post.title}</h1>
        <div className="post-content">{post.content}</div>
      </div>
    </>
  );
};

export default PostDetail;
