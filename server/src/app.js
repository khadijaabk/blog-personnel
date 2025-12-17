import postRoutes from "./routes/posts.js";

app.use("/api/posts", postRoutes);
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

export default app;
