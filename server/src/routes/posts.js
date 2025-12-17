import express from "express";
import Post from "../models/post.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = await Post.create({ title, content, author });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

