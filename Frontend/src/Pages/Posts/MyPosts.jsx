import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./MyPosts.css";

const MyPosts = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!userData?._id) return;

      setLoading(true); 

      try {
        const res = await axios.get(
          `http://localhost:8000/api/posts/user/${userData._id}`,
          { withCredentials: true }
        );
        console.log("Fetched posts:", res.data);
        setPosts(res.data.data || []);
      } catch (err) {
        console.error(
          "Post fetch error:",
          err.response?.data || err.message
        );
      } finally {
        setLoading(false); 
      }
    };

    fetchUserPosts();
  }, [userData]);

  return (
    <div className="my-posts-container">
      {/* <h2>Your Posts</h2> */}

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>Loading posts...</p>
      ) : posts.length > 0 ? (
        <div className="posts-wrapper">
          {posts.map((post) => (
            <div
              key={post._id}
              className="post-preview"
              onClick={() => navigate(`/post/${post._id}`)}
            >
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px" }}>No posts found.</p>
      )}
    </div>
  );
};

export default MyPosts;
