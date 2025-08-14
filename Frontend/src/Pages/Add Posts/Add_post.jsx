import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddPost.css";
import { useSelector } from "react-redux";
function AddPost() {
  const { register, handleSubmit, reset } = useForm();
  const userData = useSelector((state) => state.auth.userData);
  console.log("Redux user:", userData);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", data.image[0]);
    formData.append("userId", userData._id);
    // console.log(userData._id);

    try {
      await axios.post("http://localhost:8000/api/posts/add", formData, {
        withCredentials: true,
      });
      alert("Post uploaded successfully!");
      reset();
    } catch (error) {
      console.error("Post upload failed:", error);
      alert("Failed to upload post.");
    }
  };

  return (
    <div className="add-post-container">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="post-form">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          {...register("title", { required: true })}
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          placeholder="Write content here"
          {...register("content", { required: true })}
        />

        <label htmlFor="image">Upload Image</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          {...register("image", { required: true })}
        />

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default AddPost;
