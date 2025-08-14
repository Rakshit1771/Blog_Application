import { Router } from "express";
import { upload } from "../Utils/Multer.js";

import {
  createPost,
  getUserPosts,
  getSinglePost,
  deletePost,
  editPost
} from "../Controllers/Post_controler.js";

const router = Router();

// 🔐 Protected Routes
router.route("/add").post(upload.single("image"), createPost);
router.route("/delete/:id").delete(deletePost);
router.route("/editpost/:id").put(upload.single("image"), editPost);

// 🌐 Public Routes
router.route("/user/:id").get(getUserPosts);
router.route("/:id").get(getSinglePost);

export default router;
