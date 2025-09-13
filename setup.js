#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 StackIt Skill Swap Platform Setup');
console.log('=====================================\n');

// Check if .env exists
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env file...');
  const envContent = `NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/stackit-skill-swap
JWT_SECRET=${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}

# For MongoDB Atlas, replace MONGO_URI with your Atlas connection string
# Example: MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/stackit-skill-swap`;
  
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created');
} else {
  console.log('✅ .env file already exists');
}

console.log('\n📋 Next Steps:');
console.log('1. Install dependencies: npm install');
console.log('2. Install frontend dependencies: cd frontend && npm install');
console.log('3. Set up MongoDB:');
console.log('   - Option A: Install MongoDB locally');
console.log('   - Option B: Use MongoDB Atlas (recommended)');
console.log('     * Go to https://www.mongodb.com/atlas');
console.log('     * Create a free account and cluster');
console.log('     * Get your connection string');
console.log('     * Update MONGO_URI in .env file');
console.log('4. Start the backend: npm start');
console.log('5. Start the frontend: cd frontend && npm start');
console.log('\n🎉 Happy coding!');
