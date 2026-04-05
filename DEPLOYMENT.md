# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to production.

## 📋 Prerequisites

- GitHub repository with your code
- MongoDB Atlas account (for database)
- Vercel account (for frontend)
- Render account (for backend)

## 🗄️ Database Setup (MongoDB Atlas)

1. **Create Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free account

2. **Create Cluster**
   - Click "Build a Database"
   - Choose "Free" plan
   - Select a cloud provider and region
   - Give your cluster a name

3. **Get Connection String**
   - Go to Database → Connect → Connect your application
   - Copy the connection string
   - Replace `<password>` with your database password

4. **Update Environment Variables**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

## 🎨 Frontend Deployment (Vercel)

1. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Build Settings**
   - **Framework Preset**: Create React App
   - **Root Directory**: `./client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

3. **Add Environment Variables**
   - Go to Settings → Environment Variables
   - Add your API URL: `REACT_APP_API_URL=https://your-backend-url.onrender.com`

4. **Deploy**
   - Click "Deploy"
   - Your frontend will be live at `https://your-project-name.vercel.app`

## 🔧 Backend Deployment (Render)

1. **Connect to Render**
   - Go to [Render](https://render.com)
   - Sign up with GitHub
   - Click "New" → "Web Service"

2. **Configure Service**
   - **Repository**: Select your portfolio repository
   - **Root Directory**: Leave empty (or `/server` if you organize it that way)
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`

3. **Add Environment Variables**
   - Go to Environment tab
   - Add these variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_email_password
     PORT=5000
     ```

4. **Deploy**
   - Click "Create Web Service"
   - Your backend will be live at `https://your-service-name.onrender.com`

## 🔗 Connecting Frontend to Backend

1. **Update API Calls**
   In your React components, update the API base URL:
   ```typescript
   const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
   ```

2. **CORS Configuration**
   Make sure your backend allows requests from your frontend:
   ```javascript
   // In server/index.js
   const cors = require('cors');
   app.use(cors({
     origin: ['https://your-frontend.vercel.app', 'http://localhost:3000'],
     credentials: true
   }));
   ```

## ✅ Testing Your Deployment

1. **Frontend Test**
   - Visit your Vercel URL
   - Check if all pages load correctly
   - Test dark/light mode toggle
   - Test navigation

2. **Backend Test**
   - Visit `https://your-backend.onrender.com/api/projects`
   - You should see a JSON response with projects

3. **Admin Dashboard Test**
   - Go to `https://your-frontend.vercel.app/admin`
   - Login with admin/admin123
   - Try adding/editing a project

## 📱 Adding to LinkedIn

1. **Get Your Portfolio URL**
   - Copy your Vercel deployment URL
   - Example: `https://sarvani-portfolio.vercel.app`

2. **Add to LinkedIn**
   - Go to your LinkedIn profile
   - Click "Edit Profile"
   - Scroll to "Featured" section
   - Click "Add" → "Link"
   - **Title**: "Portfolio Website"
   - **URL**: Your portfolio URL
   - **Description**: "Full-stack portfolio showcasing my projects and skills"

## 🔄 Continuous Deployment

Both Vercel and Render offer automatic deployments:

- **Vercel**: Automatically deploys when you push to GitHub
- **Render**: Automatically deploys when you push to the main branch

## 🐛 Common Issues & Solutions

### Issue: CORS Errors
**Solution**: Update your backend CORS settings to include your frontend URL

### Issue: Database Connection Failed
**Solution**: 
- Check your MongoDB connection string
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify your database user has correct permissions

### Issue: Build Fails
**Solution**:
- Check all environment variables are set
- Ensure all dependencies are installed
- Check the deployment logs for specific errors

### Issue: Admin Dashboard Not Working
**Solution**:
- Check if JWT_SECRET is set correctly
- Verify the authentication endpoints are working
- Check browser console for JavaScript errors

## 📊 Monitoring

### Vercel Analytics
- Built-in analytics for your frontend
- Track page views, visitors, and performance

### Render Logs
- Monitor your backend performance
- Check error logs in the Render dashboard

### MongoDB Atlas
- Monitor database performance
- Set up alerts for unusual activity

## 🎉 Success!

Your portfolio is now live! 🚀

- **Portfolio URL**: `https://your-name-portfolio.vercel.app`
- **Admin Dashboard**: `https://your-name-portfolio.vercel.app/admin`
- **Backend API**: `https://your-backend.onrender.com`

Don't forget to:
1. Add your portfolio to LinkedIn
2. Share it with your network
3. Update it regularly with new projects

---

**Need help?** Check the [README.md](./README.md) for more details or open an issue on GitHub.
