# Deployment Guide for Oaklane Store

## ✅ Fixed Issues

The deployment issue has been resolved! The problem was in `index.html` where the script tag had an absolute path `/src/main.jsx` instead of a relative path `./src/main.jsx`.

**What was changed:**
- `index.html`: Changed `src="/src/main.jsx"` to `src="./src/main.jsx"`
- Added `netlify.toml` for proper Netlify configuration
- Added `.gitignore` to exclude build files and dependencies

## 🚀 Deploy to Netlify

### Option 1: Via Git (Recommended)

1. **Commit and push your changes to GitHub**:
```bash
git add .
git commit -m "Fix build path and add Netlify config"
git push origin main
```

2. **Trigger a new deploy on Netlify**:
   - Go to your Netlify dashboard
   - Click on your site
   - Click "Trigger deploy" → "Deploy site"
   - Or it will auto-deploy if you have auto-deploy enabled

### Option 2: Manual Deploy via Netlify CLI

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Deploy**:
```bash
netlify deploy --prod
```

### Option 3: Drag and Drop

1. **Build the project locally**:
```bash
npm run build
```

2. **Go to Netlify**:
   - Visit [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder

## 📋 Build Configuration

The `netlify.toml` file contains:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures:
- ✅ Correct build command
- ✅ Correct publish directory
- ✅ Client-side routing works (all routes redirect to index.html)

## ✅ Verification

After deployment, verify:
1. Homepage loads correctly
2. Navigation works (Shop, New Arrivals, About, Contact, Cart, Checkout)
3. Product filtering works
4. Images load properly
5. Responsive design works on mobile

## 🔧 Troubleshooting

### Build fails with "Rollup failed to resolve import"
- ✅ **Fixed!** The script path in `index.html` is now relative (`./src/main.jsx`)

### 404 errors on page refresh
- ✅ **Fixed!** The `netlify.toml` includes redirect rules for client-side routing

### Images not loading
- Check that image URLs are correct
- Ensure images are in the `public` folder or use absolute URLs

### Build takes too long
- This is normal for first deploy (installing dependencies)
- Subsequent builds will be faster due to caching

## 🎉 Success!

Your Oaklane Store website should now deploy successfully on Netlify!

**Live URL**: Your site will be available at `https://your-site-name.netlify.app`

You can customize the domain in Netlify settings:
- Site settings → Domain management → Add custom domain

