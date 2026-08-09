# Astro + DaisyUI site

This workspace now includes a minimal Astro site scaffolded to modernize the existing static site.

Quick start:

```bash
npm install
npm run dev
```

Notes:
- Pages: `src/pages/index.astro`, `src/pages/resume.astro`
- Components: `src/components/*`
- Styles: `src/styles/global.css` (Tailwind + DaisyUI)

Replace the sample images under `public/images` with your originals and update project data arrays in pages.

Testing pre-deployment:
```bash
npm run build
npm run preview
```

# Personal Setup

## Pre-Commit Checks
A pre-commit script 
```
.git/hooks/pre-commit
```
runs on every commit gating whether the commit will go through. This checks for the following:

### File Size
If commits include any file that exceeds a 300 KB limit, they will be blocked.
```
❌ public/images/gallery/fulls/GetThaSubs_preview.mp4 is too large (10749 KB > 300 KB)
❌ public/images/gallery/thumbs/GetThaSubs_thumb.png is too large (3346 KB > 300 KB)

Commit blocked: some files exceed the 300 KB limit.
Tip: Try reducing image resolution or exporting as WebP.
```

You can use 'public/images/reduce-mp4s-size.sh' to reduce the size of videos.
'public/images/gif-to-mp4.sh' can be used to convert gifs to mp4, whichc can then be reduced in size.

## Deployment
When any commit gets merged into the `main`, `.github/workflows/deploy.yml` runs. This pushes the commit to the branch `gh-pages` and redeploys the site.

