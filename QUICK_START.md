# ⚡ Quick Start - Vercel Deployment

## 🎯 Fast Track (5 minutes)

### 1. Prepare MongoDB Atlas
- Get your connection string: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`
- Allow network access from anywhere (0.0.0.0/0)

### 2. Generate JWT Secret
Run this command to generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Copy the output - you'll need it!

### 3. Deploy to Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your GitHub repo
4. **Set Root Directory to: `twitter-clone`** ⚠️
5. Add Environment Variables:
   - `MONGODB_URI` = your MongoDB connection string
   - `JWT_SECRET` = the secret you generated
6. Click Deploy

### 4. Done! 🎉
Your app will be live at `your-app.vercel.app`

---

## 📋 Environment Variables Checklist

Make sure these are set in Vercel:

- ✅ `MONGODB_URI` - MongoDB Atlas connection string
- ✅ `JWT_SECRET` - Random secret string for JWT tokens

---

## 🔗 Important Links

- **Full Deployment Guide**: See `DEPLOYMENT.md`
- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **MongoDB Atlas**: [cloud.mongodb.com](https://cloud.mongodb.com)

