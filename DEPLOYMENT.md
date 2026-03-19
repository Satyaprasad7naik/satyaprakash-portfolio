# Deployment Guide — Satyaprakash Digital Marketing Portfolio

## ✅ Pre-Deployment Checklist

- [x] `npm run build` produces dist/ folder with zero errors
- [x] All sections implemented and responsive
- [x] GSAP animations working (no trial plugins — using open-source GSAP)
- [x] Git repository initialized with .gitignore
- [x] Environment variables configured (if using EmailJS)
- [x] Vercel.json configured for rewrites & caching

---

## Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "chore: satyaprakash portfolio v1.0.0 complete"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/satyaprakash-portfolio.git
git push -u origin main
```

### Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Select your GitHub repository (`satyaprakash-portfolio`)
4. Click **Import**

### Step 3: Configure Build Settings

Vercel auto-detects Vite. Verify:
- **Framework Preset:** Other (Vite)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 18.x or higher

### Step 4: Environment Variables (Optional — for EmailJS)

If implementing EmailJS contact form:

1. In Vercel Dashboard → Project Settings → Environment Variables
2. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=public_key_xxxxxxxxx
   ```

Get these from [emailjs.com](https://www.emailjs.com) after account creation.

### Step 5: Deploy

1. Click **Deploy**
2. Vercel builds and deploys automatically
3. Your site is live at: `satyaprakash-portfolio.vercel.app`

### Step 6: Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., `satyaprakash.com`)
3. Follow DNS configuration steps (provided by Vercel)

---

## Deploy to Render (Backup)

### Step 1: Create Render Account

Go to [render.com](https://render.com) and sign up.

### Step 2: Create Web Service

1. Click **New +** → **Web Service**
2. Connect your GitHub repository
3. Select the repository

### Step 3: Configure Service

- **Name:** `satyaprakash-portfolio`
- **Environment:** `Node`
- **Build Command:** `npm run build`
- **Start Command:** `npm run preview` (Vite preview server)
- **Publish Directory:** `dist`

### Step 4: Deploy

1. Click **Create Web Service**
2. Render builds and deploys
3. Your site is live at: `satyaprakash-portfolio.onrender.com`

---

## Production Checklist

Before going live:

1. **Performance Audit:**
   ```bash
   npm run build
   npm run preview
   # Test in browser, check Network tab for load times
   ```

2. **Mobile Responsiveness:**
   - Test on iPhone (375px)
   - Test on iPad (768px)
   - Test on desktop (1920px)

3. **Forms & EmailJS:**
   - If using contact form, add real EmailJS credentials
   - Test form submission end-to-end

4. **SEO & Meta Tags:**
   - Verify og:title, og:description in index.html
   - Add og:image for social sharing

5. **Analytics (Optional):**
   - Add Google Analytics or Vercel Analytics
   - Track page views and user behavior

---

## Post-Deployment

### Monitor Performance

- **Vercel Analytics:** Dashboard → Analytics tab
- **Web Vitals:** Check Core Web Vitals in Vercel Dashboard
- **Error Monitoring:** Configure Sentry or similar

### Update Content

To update portfolio content:

1. Edit `src/constants/index.ts` (hero, projects, testimonials, etc.)
2. Run `npm run build`
3. Push to GitHub: `git push`
4. Vercel auto-deploys (no manual action needed)

### Update Images/Assets

1. Add images to `public/images/` folder
2. Reference in `constants/index.ts`
3. Commit and push
4. Vercel auto-deploys

---

## Troubleshooting

### Build Fails with TypeScript Errors

```bash
npm run build 2>&1 | head -50
# Check error output, fix issues, then re-deploy
```

### Site loads slow

- Check `dist/` folder size: `du -sh dist/`
- Optimize images: convert to WebP format
- Remove unused imports: `npm run build`

### EmailJS Form Not Working

- Verify `VITE_EMAILJS_*` environment variables in Vercel
- Check EmailJS account has correct service/template IDs
- Test locally with `.env.local` file

### Responsive Design Issues

- Run `npm run build && npm run preview`
- Open DevTools → Toggle device toolbar
- Test each breakpoint (375px, 768px, 1024px, 1280px)

---

## Performance Optimization Tips

1. **Lazy Load Images:**
   ```html
   <img src="..." loading="lazy" />
   ```

2. **Image Optimization:**
   - Use WebP format for smaller file sizes
   - Resize images to actual display size
   - Use tools like TinyPNG for compression

3. **GSAP Optimization:**
   - No over-animating (can impact perf on low-end devices)
   - Use `will-change: transform` sparingly
   - Test on throttled network/slow CPU

4. **Code Splitting:**
   - Vite already splits vendor/three/gsap chunks
   - Monitor chunk sizes: `npm run build` output shows sizes

---

## 📞 Support & Resources

- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **Three.js Docs:** https://threejs.org/docs
- **GSAP Docs:** https://gsap.com/docs/v3
- **EmailJS Docs:** https://www.emailjs.com/docs
- **Vercel Docs:** https://vercel.com/docs

---

**Built with ❤️ for Satyaprakash — Digital Marketing @ AirDesk**
