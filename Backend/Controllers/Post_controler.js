import uploadOnCloudinary from "../utils/cloudinary.js";
import { Post } from "../Models/Post_Models.js";

export const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    console.log(userId);

    const localFilePath = req.file?.path;

    const cloudinaryResult = await uploadOnCloudinary(localFilePath);

    if (!cloudinaryResult) {
      return res.status(400).json({ error: "Image upload failed" });
    }

    const newPost = new Post({
      title,
      content,
      image: cloudinaryResult.secure_url,
      userId,
    });

    await newPost.save();

    res.status(201).json({ message: "Post created", post: newPost });
  } catch (error) {
    console.error("Post creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getUserPosts = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("Fetching posts for user ID:", id);

    const userPosts = await Post.find({ userId: id }).sort({ createdAt: -1 });

    console.log("Found posts:", userPosts.length);

    res.status(200).json({ data: userPosts });
  } catch (error) {
    console.error("Error fetching user's posts:", error);
    res.status(500).json({ error: "Failed to fetch user's posts" });
  }
};
export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    res.status(200).json({ success: true, data: post });
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("post is is", { id });

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.title = title;
    post.content = content;


    if (req.file) {
      const localFilePath = req.file.path;
      const cloudinaryResult = await uploadOnCloudinary(localFilePath);

      if (!cloudinaryResult) {
        return res.status(400).json({ error: "Image upload failed" });
      }

      post.image = cloudinaryResult.secure_url;
    }

    const updatedPost = await post.save();

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
