# 🚀 Vercel Deployment Guide - Twitter Clone

This guide will walk you through deploying your Twitter Clone application to Vercel (free tier) with MongoDB Atlas.

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free)
3. **MongoDB Atlas Account** - You mentioned you already have this set up
4. **MongoDB Connection String** - Your MongoDB Atlas connection URI

---

## 🔧 Step 1: Prepare MongoDB Atlas

### 1.1 Get Your MongoDB Connection String

1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Go to your cluster and click **"Connect"**
3. Choose **"Connect your application"**
4. Copy the connection string (it looks like: `mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority`)
5. Replace `<password>` with your actual database password
6. Replace `<database>` with your database name (e.g., `twitter-clone`)

**Example connection string:**
```
mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/twitter-clone?retryWrites=true&w=majority
```

### 1.2 Configure Network Access

1. In MongoDB Atlas, go to **Network Access**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for Vercel deployment) or add Vercel's IP ranges
4. Click **"Confirm"**

### 1.3 Configure Database User

1. Go to **Database Access**
2. Ensure you have a database user with read/write permissions
3. Note down the username and password

---

## 🚀 Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account

3. **Import Your Project**:
   - Click **"Add New..."** → **"Project"**
   - Select your GitHub repository
   - Click **"Import"**

4. **Configure Project Settings**:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `twitter-clone` ⚠️ **IMPORTANT: Set this to `twitter-clone`**
   - **Build Command**: Leave default (or `npm run build`)
   - **Output Directory**: Leave default (`.next`)
   - **Install Command**: Leave default (or `npm install`)

5. **Add Environment Variables**:
   Click **"Environment Variables"** and add:

   | Name | Value | Description |
   |------|-------|-------------|
   | `MONGODB_URI` | `mongodb+srv://...` | Your MongoDB Atlas connection string |
   | `JWT_SECRET` | `your-secret-key-here` | A random secret string for JWT tokens (generate a strong random string) |

   **To generate JWT_SECRET**, you can use:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
   Or use any random string generator.

6. **Deploy**:
   - Click **"Deploy"**
   - Wait for the build to complete (usually 2-3 minutes)

7. **Verify Deployment**:
   - Once deployed, Vercel will provide you with a URL (e.g., `your-app.vercel.app`)
   - Visit the URL to test your application

---

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Navigate to project root**:
   ```bash
   cd /Users/gokcedogan/Documents/twitter-clone
   ```

4. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked for root directory, enter: `twitter-clone`
   - Add environment variables when prompted:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: Your JWT secret

5. **Set Environment Variables** (if not set during deployment):
   ```bash
   vercel env add MONGODB_URI
   vercel env add JWT_SECRET
   ```

6. **Deploy to production**:
   ```bash
   vercel --prod
   ```

---

## 🔍 Step 3: Verify Environment Variables

After deployment, verify your environment variables are set:

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Ensure both `MONGODB_URI` and `JWT_SECRET` are present
4. Make sure they're available for **Production**, **Preview**, and **Development** environments

---

## 🧪 Step 4: Test Your Deployment

1. **Visit your Vercel URL** (e.g., `https://your-app.vercel.app`)
2. **Test Sign Up**: Create a new account
3. **Test Login**: Log in with your credentials
4. **Test Features**: Try creating tweets, liking, etc.
5. **Check MongoDB Atlas**: Verify data is being saved to your database

---

## 🔄 Step 5: Update MongoDB Atlas Network Access (If Needed)

If you encounter connection errors:

1. Go to MongoDB Atlas → **Network Access**
2. Ensure **"Allow Access from Anywhere"** is enabled (0.0.0.0/0)
3. Or add Vercel's specific IP ranges if you prefer more security

---

## 🐛 Troubleshooting

### Build Fails

- **Check Root Directory**: Ensure it's set to `twitter-clone` in Vercel settings
- **Check Build Logs**: Go to Vercel Dashboard → Your Project → Deployments → Click on failed deployment → View logs
- **Verify package.json**: Ensure all dependencies are listed

### Database Connection Errors

- **Check MONGODB_URI**: Verify the connection string is correct in Vercel environment variables
- **Check Network Access**: Ensure MongoDB Atlas allows connections from anywhere
- **Check Database User**: Verify username and password are correct

### Authentication Not Working

- **Check JWT_SECRET**: Ensure it's set in Vercel environment variables
- **Check Cookie Settings**: The app uses secure cookies in production (HTTPS), which Vercel provides automatically

### 404 Errors on Routes

- **Check Next.js Version**: Ensure you're using a compatible Next.js version (you're on 15.5.6, which is good)
- **Check File Structure**: Ensure all routes are properly structured in the `app` directory

---

## 📝 Important Notes

1. **Free Tier Limits**:
   - Vercel Free Tier: 100GB bandwidth/month, unlimited deployments
   - MongoDB Atlas Free Tier: 512MB storage, shared cluster
   - Both are sufficient for development and small projects

2. **Environment Variables**:
   - Never commit `.env` files to Git (they're already in `.gitignore`)
   - Always set environment variables in Vercel Dashboard

3. **Custom Domain** (Optional):
   - Vercel allows custom domains on free tier
   - Go to Settings → Domains to add your custom domain

4. **Automatic Deployments**:
   - Vercel automatically deploys on every push to your main branch
   - Preview deployments are created for pull requests

---

## ✅ Checklist

Before deploying, ensure:

- [ ] Code is pushed to GitHub
- [ ] MongoDB Atlas cluster is running
- [ ] MongoDB Atlas network access is configured (0.0.0.0/0)
- [ ] MongoDB connection string is ready
- [ ] JWT_SECRET is generated
- [ ] Vercel account is created
- [ ] Root directory is set to `twitter-clone` in Vercel
- [ ] Environment variables are added in Vercel
- [ ] Build completes successfully
- [ ] Application is accessible via Vercel URL
- [ ] Sign up/login works
- [ ] Database operations work (create tweets, etc.)

---

## 🎉 You're Done!

Your Twitter Clone should now be live on Vercel! Share your URL and start tweeting! 🐦

---

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **MongoDB Atlas Docs**: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

