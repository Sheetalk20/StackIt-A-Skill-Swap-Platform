# StackIt - Skill Swap Platform

A full-stack MERN application that allows users to exchange skills with each other. Users can offer their skills and request to learn new ones from other community members.

## 🚀 Features

### User Features
- **User Registration**: Create profile with skills offered, skills wanted, availability, and location
- **Skill Discovery**: Browse and search users by skills
- **Swap Requests**: Send and manage skill swap requests
- **Rating System**: Rate and review completed swaps
- **Profile Management**: Update skills, availability, and privacy settings

### Admin Features
- **User Management**: View, ban users, and remove inappropriate skills
- **Swap Monitoring**: Track all swap requests and their status
- **Analytics**: Generate reports on user activity and platform statistics

## 🛠️ Tech Stack

- **Frontend**: React 18, TailwindCSS, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT tokens
- **UI Components**: Heroicons, React Hook Form, React Hot Toast

## 📁 Project Structure

```
StackIt-A-Skill-Swap-Platform-main/
├── server.js                 # Backend entry point
├── package.json              # Backend dependencies
├── models/                   # MongoDB models
│   ├── User.js
│   └── Swap.js
├── routes/                   # API routes
│   ├── userRoutes.js
│   ├── swapRoutes.js
│   └── adminRoutes.js
├── controllers/              # Route handlers
│   ├── userController.js
│   ├── swapController.js
│   └── adminController.js
├── middleware/               # Custom middleware
│   └── authMiddleware.js
├── frontend/                 # React frontend
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   └── src/
│       ├── components/
│       │   ├── Navbar.js
│       │   └── ProtectedRoute.js
│       ├── pages/
│       │   ├── HomePage.js
│       │   ├── UserRegistration.js
│       │   ├── UserList.js
│       │   ├── SwapRequests.js
│       │   ├── RatingsFeedback.js
│       │   └── AdminDashboard.js
│       ├── context/
│       │   └── AuthContext.js
│       ├── services/
│       │   └── api.js
│       ├── App.js
│       ├── index.js
│       └── index.css
└── env.example               # Environment variables template
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Quick Start (MongoDB Atlas - Recommended)
1. Create a free MongoDB Atlas account at https://www.mongodb.com/atlas
2. Create a new cluster
3. Get your connection string
4. Follow the installation steps below

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd StackIt-A-Skill-Swap-Platform-main
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/stackit-skill-swap
   JWT_SECRET=your_jwt_secret_key_here
   ```

5. **Start MongoDB**
   - Local: Make sure MongoDB is running on your system
   - Atlas: Use your MongoDB Atlas connection string

6. **Start the backend server**
   ```bash
   npm run dev
   ```
   The backend will run on http://localhost:5000

7. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on http://localhost:3000

## 📚 API Endpoints

### User Endpoints
- `POST /api/users` - Register new user
- `GET /api/users` - Get all users
- `GET /api/users/search?skill=skillName` - Search users by skill
- `GET /api/users/profile/:id` - Get user profile (public)
- `GET /api/users/:id` - Get user by ID (protected)
- `PUT /api/users/:id` - Update user (protected)
- `DELETE /api/users/:id` - Delete user (protected)

### Swap Endpoints
- `POST /api/swaps` - Create swap request (protected)
- `GET /api/swaps/user/:userId` - Get swaps by user (protected)
- `GET /api/swaps/:id` - Get swap by ID (protected)
- `PUT /api/swaps/:id` - Update swap status (protected)
- `PUT /api/swaps/:id/feedback` - Add feedback (protected)
- `DELETE /api/swaps/:id` - Delete swap (protected)

### Admin Endpoints
- `GET /api/admin/users` - Get all users (admin)
- `GET /api/admin/users/:id/stats` - Get user stats (admin)
- `DELETE /api/admin/user/:id` - Ban user (admin)
- `DELETE /api/admin/skill/:userId/:skill` - Remove skill (admin)
- `GET /api/admin/swaps` - Get all swaps (admin)
- `GET /api/admin/reports` - Generate reports (admin)

## 🎯 Usage

1. **Register**: Create an account with your skills and preferences
2. **Browse Users**: Find people with skills you want to learn
3. **Request Swaps**: Send swap requests to other users
4. **Manage Swaps**: Accept, reject, or complete swap requests
5. **Leave Feedback**: Rate and review completed swaps
6. **Admin Panel**: Manage the platform (admin users only)

## 🔧 Development

### Backend Development
```bash
npm run dev  # Start with nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend
npm start    # Start React development server
```

### Building for Production
```bash
# Backend
npm start

# Frontend
cd frontend
npm run build
```

## 🚀 Deployment

### Backend (Render/Railway)
1. Connect your GitHub repository
2. Set environment variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A secure random string
   - `NODE_ENV`: production
3. Deploy

### Frontend (Vercel)
1. Connect your GitHub repository
2. Set build command: `cd frontend && npm run build`
3. Set output directory: `frontend/build`
4. Set environment variable: `REACT_APP_API_URL`: Your backend URL
5. Deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.

## 🔮 Future Features

- Real-time notifications
- Video call integration for skill sessions
- Skill verification system
- Mobile app
- Advanced search filters
- Skill categories and tags
- Group skill swaps
- Calendar integration for scheduling