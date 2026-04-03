# Deployment Guide for English Learning Site

This document describes how to deploy the English Learning Site to Netlify.

## Prequisites

- GitHub account with access to the repository
- Netlify account (created by EnglishSiteHosting)
- Domain name: `english.agems.ai` (already configured)

## Deployment Steps

### 1. Create Netlify Project

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site"
   - Select "Import an existing project"
   - Choose "GitHub" as the provider
   - Authorize Netlify to access your GitHub repositories
3. Select the repository: `seret/english-learning-site-mvp`
4. Configure build settings:
   - **Build command**: `npm run build` 
   - **Publish directory**: `dist` 
   - **Node.js version**: `18` (LTR)
5. Click "Deploy site"

### 2. Configure Domain

1. Once the site is deployed, go to "Site settings"
   - Select "Domain management"
   - Click "Add custom domain"
   - Enter `english.agems.ai`
   - Follow the DNS instructions to point the domain to Netlify

2. Set up SSL:
   - Netlify will automatically provision a Let's Encrypt SSL certificate
   - Enable "Force HTTPS" to redirect all traffic to HTTPS

### 3. Configure Environment Variables

Add these environment variables in Netlify site settings:

```env
VITE_API_URL=https://api.englishlearning.site
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXX-Y
NODE_ENV=production
```

### 4. Set up CI/CD Auto-Deploy

1. Netlify will automatically deploy from the `main` branch
2. For deploy previews from Pull Requests:
   - Enable "Build deploy previews" in build settings
   - Each PR will get a unique preview URL

### 5. Monitoring and Analytics

1. Enable Netlify Analytics (free)
   - Provides basic traffic and performance metrics

2. Set up Google Analytics 4 (GA4)
   - Add the GA4 tracking code to the site
   - Configure in Google Analytics console

3. Set up Google Search Console
   - Verify ownership of the domain
   - Submit the sitemap: `https://english.agems.ai/sitemap.xml`

## Build Process

The project uses Vite for building. The build process:

```bash
npm run build
```

This will:

1. Transpile TypeScript code
   - Uses `tsc` configured in `tsconfig.json`
2. Build the React application
   - Uses Vite with optimizations for production
   - Output is placed in the `dist` directory

## File Structure

```
english-learning-site-mvp/
�• .github/workflows/
• • ci.yml                 # Basic CI pipeline
• • deploy.yml            # Enhanced CI/CD pipeline

• scripts/
• • monitoring.js       # Performance monitoring

• public/
• • robots.txt          # SEO file
• • sitemap.xml         # SEO file
• • favicon.ico         # Site icon

• src/
• • components/          # React components

• netlify.toml           # Netlify configuration
• package.json          # Project dependencies

• vite.config.ts        # Vite configuration

• tailwind.config.js    # Tailwind CSS configuration

 • tsconfig.json         # TypeScript configuration

• DEPLOYMENT.md         # This file

• README.md             # Project documentation
```

## Troubleshooting

### Build Failures

- **Error:** Cannot find module 'react'
  - Solution: Run `npm ci` to install dependencies

- **Error:** TypeScript compilation failed
  - Solution: Check `tsconfig.json` for correct configuration

- **Error:** Tailwind CSS not working
  - Solution: Verify `tailwind.config.js` configuration

### Deployment Failures

- **Error:** Domain not resolving
  - Solution: Check DNS settings and wait for propagation (up to 48 hours)

- **Error:** SSL certificate not issued
  - Solution: Check Netlify SSL status and ensure domain is properly configured

- **Error:** 404 errors on page refresh
  - Solution: Verify that `netlify.toml` has correct SPA redirects

## Contact

For deployment issues, contact:

- **EnglishSiteHosting** - DevOps / Hosting manager
  - Responsible for Infrastructure, deployment, and monitoring

- **EnglishSiteFrontend** - Frontend developer
   - Responsible for code, build process, and testing

- **Olivia** - QA
  - Responsible for quality assurance and testing

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.