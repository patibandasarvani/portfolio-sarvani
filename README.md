# Patibanda Sarvani - Portfolio Website

A modern full-stack portfolio website built with the MERN stack, featuring dark/light mode, smooth animations, and an admin dashboard for project management.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Built with Framer Motion for engaging user experience
- **Admin Dashboard**: Secure admin panel to manage projects dynamically
- **Contact Form**: Functional contact form (messages stored in MongoDB)
- **Modern UI**: Clean design using Tailwind CSS
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/       # React context
│   │   ├── types/         # TypeScript types
│   │   └── App.tsx        # Main app component
│   └── package.json
├── server/                # Node.js backend
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── index.js          # Server entry point
├── package.json           # Root package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your_jwt_secret_key_here
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   PORT=5000
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```
   This will start both the frontend (http://localhost:3000) and backend (http://localhost:5000) servers.

## 🌐 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set the build command: `npm run build`
3. Set the output directory: `client/build`
4. Deploy!

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set the build command: `npm install`
3. Set the start command: `node server/index.js`
4. Add environment variables
5. Deploy!

### Database (MongoDB Atlas)
1. Create a free MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to your environment variables

## 🔐 Admin Dashboard

Access the admin dashboard at `/admin`

**Default Login:**
- Username: `admin`
- Password: `admin123`

⚠️ **Important:** Change the default credentials in production!

## 📧 Contact Form

Messages from the contact form are stored in the MongoDB database. You can view them by adding a messages endpoint to the admin dashboard.

## 🎨 Customization

### Personal Information
Update your personal details in the following components:
- `Hero.tsx` - Name, role, and profile
- `About.tsx` - About section content
- `Contact.tsx` - Email and social links
- `Footer.tsx` - Footer links

### Skills
Update your skills in `Skills.tsx`:
```typescript
const skills = [
  { name: 'Your Skill', level: 85, category: 'Category' },
  // Add more skills
];
```

### Projects
Projects are managed through the admin dashboard. You can add, edit, and delete projects dynamically.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [React](https://reactjs.org/) for the UI framework
- [MongoDB](https://www.mongodb.com/) for the database

---

**Built with ❤️ by Patibanda Sarvani**
