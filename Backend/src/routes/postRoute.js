import { Router } from "express";
import { createPost, getPosts, updatePost, deletePost } from "../controllers/postController.js";

const router = Router();

router.post("/register", createPost);
router.get("/getposts", getPosts);
router.put("/updatepost/:id", updatePost);
router.delete("/deletepost/:id", deletePost);

export default router;
