# Deployment Guide

This guide covers deploying the Cudago web application to various platforms.

## Prerequisites

- Node.js 18+
- Git
- Vercel account (for Vercel deployment)
- npm or pnpm

## Building for Production

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Test the production build locally
npm start
```

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the optimal choice as it's built by the creators of Next.js.

#### Steps:

1. **Push to GitHub:**
```bash
git remote add origin https://github.com/cudago/cudago-web.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import the GitHub repository
   - Configure environment variables
   - Click "Deploy"

3. **Set Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add variables from `.env.example`
   - Redeploy

#### Automatic Deployments:
- Vercel automatically deploys when you push to `main`
- Preview deployments are created for pull requests

### 2. Docker Deployment

#### Create Dockerfile:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

#### Build and Run:

```bash
# Build the image
docker build -t cudago-web .

# Run the container
docker run -p 3000:3000 -e NODE_ENV=production cudago-web
```

### 3. AWS EC2/ECS

#### Using AWS EC2:

1. Launch an EC2 instance (Ubuntu 20.04 or later)
2. SSH into the instance
3. Install Node.js and Git
4. Clone the repository
5. Install dependencies: `npm install`
6. Build: `npm run build`
7. Use PM2 to manage the process:

```bash
npm install -g pm2
pm2 start npm --name "cudago" -- start
pm2 startup
pm2 save
```

8. Set up Nginx reverse proxy
9. Configure SSL with Let's Encrypt

### 4. Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create a new Heroku app
heroku create cudago-web

# Set environment variables
heroku config:set NEXT_PUBLIC_APP_URL=https://cudago-web.herokuapp.com

# Deploy
git push heroku main
```

### 5. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the site
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

## Performance Optimization

### Before Deployment

1. **Run Lighthouse Audit:**
```bash
npm install -g lighthouse
lighthouse https://cudago.com --view
```

2. **Check Build Size:**
```bash
npm run build
# Check `.next` folder size
du -sh .next
```

3. **Enable Caching:**
   - Set appropriate cache headers
   - Enable compression
   - Use CDN for static assets

### Recommended Settings

#### Vercel:
- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Start Command: `npm start`
- Output Directory: `.next`

#### Environment Variables:
```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Monitoring and Logging

### Vercel Analytics
- Real-time monitoring dashboard
- Error tracking
- Performance metrics

### Application Logging
Consider integrating:
- Sentry for error tracking
- LogRocket for user session recording
- Google Analytics for user behavior

## Security Checklist

- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set secure headers (Content Security Policy, etc.)
- [ ] Implement rate limiting
- [ ] Add CORS policies
- [ ] Sanitize user inputs
- [ ] Use environment variables for secrets
- [ ] Enable Web Application Firewall (WAF)
- [ ] Regular security audits

## Continuous Integration/Deployment (CI/CD)

### GitHub Actions Example:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## Database Setup

When implementing backend services:

1. **Set up Database:**
   - Vercel Postgres
   - Supabase
   - MongoDB Atlas
   - PlanetScale

2. **Run Migrations:**
```bash
npm run migrate
```

3. **Seed Database:**
```bash
npm run seed
```

## Rollback Procedure

### Vercel:
1. Go to Deployments
2. Click on the previous deployment
3. Click "Redeploy"

### Manual Rollback:
```bash
git revert <commit-hash>
git push origin main
```

## Support

- Documentation: [Next.js Docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Issues: [GitHub Repository](https://github.com/cudago/cudago-web/issues)

---

Last Updated: 2024
