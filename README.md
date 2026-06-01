# Prep DELE C2 — Marketing Site

Static marketing website for the Prep DELE C2 iOS app.

**Domain:** C2.prepdele.com  
**Repo:** omaracgithub/dele-c2-site  
**GA4:** G-YB13BHW7X5  
**Brand color:** #2d6a4f

## Structure

- `/` — Homepage (Spanish)
- `/en/` — Homepage (English)
- `/blog/` — 8 SEO articles (Spanish)
- `/en/blog/` — 4 SEO articles (English)
- `/modelo-examen/` — Free exam model (Spanish)
- `/en/sample-exam/` — Free exam model (English)
- `/support/` — FAQ (Spanish)
- `/en/support/` — FAQ (English)
- `/privacy/` & `/en/privacy/` — Privacy policy
- `/terms/` & `/en/terms/` — Terms of use

## Deployment

Hosted on GitHub Pages with custom domain via Cloudflare DNS.

### Setup steps:
1. Push to GitHub: `gh repo create omaracgithub/dele-c2-site --public --source . --push`
2. Enable GitHub Pages (main branch, root)
3. Add CNAME record in Cloudflare: `C2` → `omaracgithub.github.io`
4. Wait for SSL provisioning

## Post-launch TODO

- [ ] Add screenshots to `/screenshots/` folder
- [ ] Add favicon-light.png, favicon-dark.png, apple-touch-icon.png
- [ ] Replace `id0000000000` with real App Store ID once published
- [ ] Verify domain in Google Search Console
- [ ] Submit sitemap.xml

## Tech

- Pure static HTML/CSS/JS (no build step)
- GA4 for analytics
- iOS-only (no Android/Play Store references)
