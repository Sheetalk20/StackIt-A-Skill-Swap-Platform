import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import swapRoutes from "./routes/swapRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/swaps", swapRoutes);
app.use("/api/admin", adminRoutes);

// Health check or root route
app.get("/", (req, res) => {
  res.json({ 
    message: "📡 StackIt Skill Swap API is live!",
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      swaps: "/api/swaps",
      admin: "/api/admin"
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: "Something went wrong!", 
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// MongoDB Connection + Server Start
const connectDB = async () => {
  try {
    // For demo purposes, let's use a simple in-memory database
    // In production, you should use a real MongoDB instance
    console.log("⚠️  Using demo mode - data will not persist");
    console.log("💡 For production, set up MongoDB Atlas and update MONGO_URI in .env");
    
    // Start server without MongoDB for demo
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📡 API available at http://localhost:${PORT}/api`);
      console.log(`🌐 Frontend should run on http://localhost:3000`);
      console.log(`\n🎉 Demo is ready! Open http://localhost:3000 in your browser`);
    });
    
    return;
    
    // Uncomment below for real MongoDB connection
    /*
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/stackit-skill-swap");
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
    */
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    console.log("💡 Please make sure MongoDB is running or update MONGO_URI in .env file");
    console.log("💡 For local MongoDB: brew services start mongodb-community (Mac) or start MongoDB service (Windows)");
    console.log("💡 For MongoDB Atlas: Update MONGO_URI with your Atlas connection string");
    process.exit(1);
  }
};

// Start server
const startServer = async () => {
  await connectDB();
};

startServer();
