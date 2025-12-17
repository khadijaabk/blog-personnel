// ==================== IMPORTS ====================
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import postRoutes from "./routes/posts.js";

// ==================== CONFIG ====================
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==================== MIDDLEWARE ====================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================== MONGODB CONNECTION ====================
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/blog_personnel")
  .then(() => {
    console.log("✅ MongoDB connecté avec succès");
    console.log(`📊 Base: ${mongoose.connection.name}`);
    console.log(`🏠 Hôte: ${mongoose.connection.host}`);
  })
  .catch((err) => {
    console.error("❌ Erreur MongoDB:", err.message);
    process.exit(1);
  });

// ==================== ROUTES ====================

// Route racine
app.get("/", (req, res) => {
  res.json({
    message: "API Blog Personnel 🚀",
    status: "OK",
    mongodb: mongoose.connection.readyState === 1 ? "connecté" : "déconnecté",
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    mongodb: mongoose.connection.readyState === 1 ? "connecté" : "déconnecté",
    timestamp: new Date().toISOString(),
  });
});

// Routes API
app.use("/api/posts", postRoutes);

// ==================== 404 HANDLER ====================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route non trouvée : ${req.method} ${req.originalUrl}`,
  });
});

// ==================== ERROR HANDLER ====================
app.use((err, req, res, next) => {
  console.error("🔥 Erreur serveur :", err);
  res.status(500).json({
    success: false,
    message: "Erreur serveur interne",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// ==================== SERVER START ====================
app.listen(PORT, () => {
  console.log("=".repeat(50));
  console.log("🚀 Serveur Express lancé !");
  console.log(`📡 http://localhost:${PORT}`);
  console.log(`🗄️  MongoDB URI: ${process.env.MONGODB_URI || "mongodb://localhost:27017/blog_personnel"}`);
  console.log("=".repeat(50));
});






