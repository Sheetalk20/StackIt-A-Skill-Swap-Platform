import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Mock data
const mockUsers = [
  {
    _id: "demo1",
    name: "John Doe",
    email: "john@example.com",
    location: "New York, NY",
    skillsOffered: ["JavaScript", "React", "Node.js"],
    skillsWanted: ["Python", "Machine Learning"],
    availability: ["weekends", "evenings"],
    isPublic: true,
    averageRating: 4.5,
    ratings: [4, 5, 4, 5],
    createdAt: new Date()
  },
  {
    _id: "demo2",
    name: "Jane Smith",
    email: "jane@example.com",
    location: "San Francisco, CA",
    skillsOffered: ["Python", "Data Science", "SQL"],
    skillsWanted: ["React", "JavaScript"],
    availability: ["weekdays", "flexible"],
    isPublic: true,
    averageRating: 4.8,
    ratings: [5, 5, 4, 5],
    createdAt: new Date()
  },
  {
    _id: "demo3",
    name: "Mike Johnson",
    email: "mike@example.com",
    location: "Chicago, IL",
    skillsOffered: ["Photography", "Design", "Photoshop"],
    skillsWanted: ["Cooking", "Guitar"],
    availability: ["weekends", "mornings"],
    isPublic: true,
    averageRating: 4.2,
    ratings: [4, 4, 4, 5],
    createdAt: new Date()
  },
  {
    _id: "demo4",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    location: "Austin, TX",
    skillsOffered: ["Cooking", "Baking", "Nutrition"],
    skillsWanted: ["Photography", "Design"],
    availability: ["evenings", "weekends"],
    isPublic: true,
    averageRating: 4.7,
    ratings: [5, 4, 5, 5],
    createdAt: new Date()
  },
  {
    _id: "demo5",
    name: "Alex Chen",
    email: "alex@example.com",
    location: "Seattle, WA",
    skillsOffered: ["Guitar", "Piano", "Music Production"],
    skillsWanted: ["JavaScript", "Web Development"],
    availability: ["weekdays", "evenings"],
    isPublic: true,
    averageRating: 4.3,
    ratings: [4, 4, 5, 4],
    createdAt: new Date()
  }
];

// API Routes
app.get("/", (req, res) => {
  res.json({ 
    message: "📡 StackIt Skill Swap API is live!",
    version: "1.0.0",
    mode: "DEMO",
    endpoints: {
      users: "/api/users",
      search: "/api/users/search?skill=skillName"
    }
  });
});

// Get all users
app.get("/api/users", (req, res) => {
  res.json(mockUsers);
});

// Search users by skill
app.get("/api/users/search", (req, res) => {
  const { skill } = req.query;
  
  if (!skill) {
    return res.status(400).json({ message: "Skill parameter is required" });
  }

  const filteredUsers = mockUsers.filter(user => 
    user.skillsOffered.some(s => s.toLowerCase().includes(skill.toLowerCase())) ||
    user.skillsWanted.some(s => s.toLowerCase().includes(skill.toLowerCase()))
  );
  
  res.json(filteredUsers);
});

// Get user profile
app.get("/api/users/profile/:id", (req, res) => {
  const { id } = req.params;
  const user = mockUsers.find(u => u._id === id);
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  res.json(user);
});

// Register user (demo - just returns success)
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  
  res.status(201).json({
    message: "User registered successfully (demo mode)",
    user: {
      _id: "demo_" + Date.now(),
      name,
      email,
      token: "demo_token_" + Date.now()
    }
  });
});

// Get swaps (demo - returns empty array)
app.get("/api/swaps/user/:userId", (req, res) => {
  res.json([]);
});

// Create swap (demo - returns success)
app.post("/api/swaps", (req, res) => {
  res.status(201).json({
    message: "Swap request created successfully (demo mode)",
    swap: {
      _id: "swap_" + Date.now(),
      status: "pending",
      ...req.body
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

// Start server
app.listen(PORT, () => {
  console.log("🎉 DEMO SERVER RUNNING!");
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🌐 Frontend should run on http://localhost:3000`);
  console.log(`\n✨ This is a demo version with mock data`);
  console.log(`💡 For production, use the full server with MongoDB`);
});
