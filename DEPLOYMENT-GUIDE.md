# Cloudflare Deployment Guide

This guide will help you deploy your portfolio website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Your project code ready for deployment

## Deployment Steps

1. **Build your project locally first**:
   ```bash
   npm run build
   # or if you're using yarn
   yarn build
   # or if you're using pnpm (which you seem to be using)
   pnpm build
   ```

2. **Go to Cloudflare Dashboard**:
   - Visit [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Select your account
   - Go to "Workers & Pages" section

3. **Create a new Pages project**:
   - Click "Create application"
   - Select "Pages"
   - Connect your Git provider (GitHub, GitLab, etc.) or upload your code manually

4. **Configure build settings** (if connecting via Git):
   - **Framework preset**: None (or select Vite if available)
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave as is)

5. **Environment variables** (if needed):
   - Add any environment variables your application requires

6. **Deploy**:
   - Click "Save and Deploy"
   - Wait for the build to complete

## Troubleshooting Common Issues

### Asset Loading Problems
We've already fixed the most common asset loading issues by:
- Correcting paths in [index.html](file:///d%3A/Floder/Programming%20projects/new%20account/index.html) to use relative paths
- Updating CSS font paths to use relative paths
- Configuring Vite with proper asset handling
- Adding base path configuration in Vite

### Path-related Issues
If you encounter issues with routing or asset paths:
1. Make sure the `base` property in [vite.config.js](file:///d%3A/Floder/Programming%20projects/new%20account/vite.config.js) is set to `'./'`
2. Ensure all asset paths in your code use relative paths (starting with `./`)

### Custom Domain
To use a custom domain:
1. In your Cloudflare Pages project, go to "Custom domains"
2. Add your domain
3. Follow Cloudflare's instructions to update your DNS records

## Build Optimization

Your Vite configuration now includes optimized asset naming which will help with caching:
- JavaScript files: `assets/js/[name]-[hash].js`
- Images: `assets/img/[name]-[hash].[ext]`
- Other assets: `assets/[ext]/[name]-[hash].[ext]`

This ensures better cache invalidation when you update your site.