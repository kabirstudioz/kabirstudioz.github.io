# Deployment Guide — Kabir Raj Singh Portfolio

This guide covers how to deploy the portfolio to Vercel, set up custom domain, and manage environment variables.

## Quick Start Deployment

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd /path/to/portfolio

# Deploy
vercel deploy

# For production deployment
vercel deploy --prod
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

### Option 3: Direct Git Connection

```bash
# In your project directory
vercel link

# Deploy (asks for confirmation)
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

No environment variables are required for the basic portfolio. However, if you want to add analytics or other services:

### Optional: Vercel Analytics

Already integrated — no additional setup needed. Analytics will start tracking automatically.

### Optional: Custom Services

If adding third-party services, create a `.env.local` file:

```env
# Example — add as needed
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

To set environment variables in Vercel Dashboard:
1. Go to project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy project

## Custom Domain

### Using Vercel's Nameservers

1. Purchase domain from any registrar
2. In Vercel project settings, go to "Domains"
3. Enter your domain (e.g., `kabirrajsingh.com`)
4. Click "Add"
5. Copy Vercel's nameservers
6. Update nameservers in your domain registrar
7. Wait 24-48 hours for DNS propagation
8. Add www subdomain if needed (Vercel handles redirects)

### Using CNAME Records

1. In Vercel project settings, go to "Domains"
2. Enter your domain
3. Select "CNAME" option
4. Copy the CNAME record value
5. In your domain registrar, create CNAME record pointing to Vercel
6. Add SSL certificate (Vercel handles this automatically)

## Build Settings

The portfolio is configured with these build settings in `next.config.mjs`:

```javascript
export default {
  // Production optimizations enabled
  // Static site generation (SSG) for most pages
  // Dynamic rendering for /contact page
}
```

### Preview Deployments

Every push to non-main branch creates a preview deployment:
- URL: `https://project-[random].vercel.app`
- Accessible via GitHub PR
- Full staging environment

### Production Deployment

Push to `main` branch triggers production deployment:
- URL: `https://yourdomain.com`
- All optimizations enabled
- Automatic SSL certificate

## Performance Optimization

### Already Configured

✅ Image optimization (Next.js Image component ready)
✅ CSS minification (Tailwind)
✅ JavaScript minification (Vercel)
✅ Static prerendering (8 pages)
✅ Gzip compression
✅ Caching headers

### Additional Optimization (if needed)

1. **Image Compression** — Replace placeholder images with optimized versions
   ```bash
   # Using imagemin
   npx imagemin public/images/* --out-dir=public/images
   ```

2. **Dynamic Imports** — For large components, use dynamic imports:
   ```javascript
   import dynamic from 'next/dynamic'
   const HeavyComponent = dynamic(() => import('@/components/heavy'), {
     loading: () => <p>Loading...</p>
   })
   ```

3. **API Route Caching** — Add cache headers to API routes

## Monitoring & Analytics

### Built-in Vercel Analytics

- Real User Monitoring (RUM)
- Web Vitals tracking
- Performance insights
- Deployment analytics

Access via Vercel Dashboard:
1. Select project
2. Click "Analytics" tab
3. View real-time metrics

### Environment Insights

View in Vercel Dashboard:
- Build times
- Deployment frequency
- Function execution time
- Edge Network performance

## Troubleshooting

### Build Failures

```bash
# Check build logs
vercel logs --state building

# Rebuild
vercel deploy --prod --force
```

### Slow Performance

1. Check Web Vitals in Vercel Analytics
2. Verify images are optimized
3. Review bundle size: `npm run build`
4. Use Lighthouse audit

### DNS Issues

```bash
# Check DNS propagation
nslookup yourdomain.com
dig yourdomain.com

# Vercel nameservers should appear
ns1.vercel.com
ns2.vercel.com
```

### SSL Certificate Issues

- Vercel auto-provisions SSL certificates
- Wait up to 15 minutes for certificate generation
- If stuck, try removing and re-adding domain

## Rollback to Previous Deployment

1. Go to Vercel project dashboard
2. Navigate to "Deployments"
3. Find the deployment you want to restore
4. Click the three dots menu
5. Select "Promote to Production"

## GitHub Actions (Optional CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

Get tokens from Vercel account settings.

## Maintenance

### Weekly
- Monitor analytics
- Check error logs
- Verify form submissions

### Monthly
- Review performance metrics
- Update content/portfolio items
- Check SSL certificate expiry (auto-renews)

### Quarterly
- Update dependencies
- Security audit
- Performance optimization review

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Project Issues**: Check Vercel dashboard logs
- **Emergency**: Contact Vercel support via dashboard

---

For questions about the portfolio structure, refer to `README.md`.
