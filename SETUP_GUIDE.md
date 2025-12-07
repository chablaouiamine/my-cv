# CV Automation Setup Guide

This guide will help you set up automated CV generation and deployment.

## Quick Start

### Step 1: Push to GitHub

```bash
# If you haven't set up a remote yet
git remote add origin https://github.com/chablaouiamine/my-cv.git

# Push your code
git add .
git commit -m "Add automated CV generation and deployment"
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to https://github.com/chablaouiamine/my-cv/settings/pages
2. Under **Source**, select **GitHub Actions**
3. Save the settings

### Step 3: Verify Deployment

After pushing, the GitHub Actions workflow will run automatically. You can monitor it at:
https://github.com/chablaouiamine/my-cv/actions

Once complete, your CV will be available at:
- **Live CV**: https://chablaouiamine.github.io/my-cv/
- **PDF**: https://chablaouiamine.github.io/my-cv/cv.pdf

## Integration with Your Portfolio

To add your CV to your portfolio website (https://chablaouiamine.github.io/amine-portfolio), you can:

### Option 1: Direct Download Link

Add this to your portfolio:

```html
<a href="https://chablaouiamine.github.io/my-cv/cv.pdf" 
   download="Chablaoui_Amine_CV.pdf"
   class="cv-download-button">
  <i class="fas fa-download"></i> Download CV
</a>
```

### Option 2: Embed CV Viewer

```html
<div class="cv-viewer">
  <iframe 
    src="https://chablaouiamine.github.io/my-cv/" 
    width="100%" 
    height="800px"
    frameborder="0">
  </iframe>
</div>
```

### Option 3: Copy PDF to Portfolio Repository

If you want the PDF directly in your portfolio repo, you can set up a workflow to copy it automatically. Let me know if you'd like me to create that!

## Workflow Behavior

Every time you push changes to this repository:

1. ✅ GitHub Actions runs automatically
2. ✅ Generates a fresh PDF from your HTML
3. ✅ Commits the PDF back to the repo
4. ✅ Deploys everything to GitHub Pages
5. ✅ Your portfolio always has the latest CV

## Troubleshooting

### Workflow doesn't run?
- Check that you've pushed to `main` or `master` branch
- Verify GitHub Actions is enabled in repository settings

### PDF not generating?
- Check the Actions logs for errors
- Ensure all dependencies are in package.json

### Pages not deploying?
- Verify GitHub Pages is set to "GitHub Actions" source
- Check repository permissions (Settings → Actions → General)

## Next Steps

1. Push this repository to GitHub
2. Enable GitHub Pages
3. Update your portfolio website to link to the CV
4. Test by making a small change and pushing

Need help? Check the GitHub Actions logs or the README.md for more details!
