---
layout: default
title: abhi named this title
---

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/supersquirrel1/StudySmart/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/supersquirrel1/StudySmart/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.

## Deployment (GitHub Pages)

This site is built with Astro. The repository contains a GitHub Actions workflow that builds the static site and publishes the generated `dist/` output to the `gh-pages` branch.

- Workflow file: `.github/workflows/deploy.yml`
- Published branch: `gh-pages` (Action pushes `dist/` here)

Steps to configure GitHub Pages to serve the built site:

1. Go to your repository on GitHub → Settings → Pages (or Settings → Code and automation → Pages).
2. Under **Source**, select **Branch**: `gh-pages` and **Folder**: `/(root)`.
3. Click **Save**.

Notes:
- The Actions workflow runs `npm ci` and `npm run build`, then publishes `dist/` using `peaceiris/actions-gh-pages`.
- A `.nojekyll` file is added to the published output to prevent Jekyll parsing.
- To trigger a deploy manually, push to `main`/`master` or use the Actions tab to run the workflow.

If you prefer manual deploys you can also run locally and push `dist/` to `gh-pages`:

```bash
npm run build
git add -f dist
git commit -m "deploy: build" || true
git subtree push --prefix dist origin gh-pages
```
