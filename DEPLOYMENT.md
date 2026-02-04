# Deploying MADC Website to Vercel

This guide covers three methods to deploy your MADC website to Vercel.

---

## Prerequisites

- Node.js installed
- npm or yarn package manager
- A Vercel account (free at [vercel.com](https://vercel.com))

---

## Option 1: Deploy via Vercel CLI (Quickest)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

Navigate to your project folder and run:

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No** (for first deployment)
- Project name? Press Enter for default or type a custom name
- Directory? Press Enter (current directory)

Vercel will auto-detect Vite and configure everything automatically.

### For Production Deployment

```bash
vercel --prod
```

---

## Option 2: Deploy via GitHub (Recommended)

This method enables **automatic deployments** whenever you push changes.

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Don't initialize with README (your project already has files)

### Step 3: Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 4: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Click **"Import"** next to your GitHub repository
4. Configure project settings:
   - **Framework Preset:** Vite (auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**

### Automatic Deployments

After initial setup:
- **Push to `main`** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull requests** → Preview deployment with unique URL

---

## Option 3: Deploy via Drag & Drop

### Step 1: Build Your Project

```bash
npm run build
```

This creates a `dist` folder with production-ready files.

### Step 2: Upload to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop the `dist` folder onto the page
3. Wait for deployment to complete

---

## Project Configuration

Your Vite project is already configured correctly. Vercel will use these settings:

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node.js Version | 18.x (or latest LTS) |

---

## Custom Domain (Optional)

### Add Your Domain

1. Go to your project on Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `madc.example.com`)
4. Update DNS records as instructed by Vercel

### DNS Configuration

Add these records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.19.19 |
| CNAME | www | cname.vercel-dns.com |

---

## Environment Variables (If Needed)

If your project uses environment variables:

1. Go to **Project Settings** → **Environment Variables**
2. Add variables for:
   - Production
   - Preview
   - Development

Example:
```
VITE_API_URL=https://api.example.com
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### 404 on Page Refresh (SPA)

Create `vercel.json` in project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Images Not Loading

Ensure images are in the `public` folder and referenced with absolute paths:
```jsx
<img src="/kecimage.jpg" alt="KEC Logo" />
```

---

## Useful Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# List deployments
vercel ls

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel remove [project-name]
```

---

## Live URL

After deployment, your site will be available at:

```
https://[project-name].vercel.app
```

---

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

*Last updated: February 2, 2026*
