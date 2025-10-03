# Deployment Guide for Vercel

## Prerequisites

- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)
- Git repository connected to Vercel

## Quick Deployment

### Option 1: Deploy via Vercel CLI

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically detect it's a Vite project
4. Deploy with default settings

## Configuration Files

### `vercel.json`

- Configures build settings and routing
- Sets up proper caching for static assets
- Includes security headers

### `vite.config.ts`

- Optimized for production builds
- Code splitting for better performance
- Proper chunking strategy

### `package.json`

- Updated with proper project name
- Added deploy script for convenience

## Environment Variables (Optional)

If you need environment variables, create a `.env.local` file:

```
VITE_APP_TITLE=Allain's Portfolio
VITE_CONTACT_EMAIL=allainralphlegaspi@gmail.com
```

## Performance Optimizations

- Static assets cached for 1 year
- Code splitting for faster loading
- Minification enabled
- Security headers included

## Custom Domain

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain (e.g., developkreativity.com)

## Troubleshooting

- Ensure all dependencies are in `package.json`
- Check build logs in Vercel dashboard
- Verify `dist` folder is generated after build
- Make sure all imports are correct
