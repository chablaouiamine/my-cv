# ✅ CV Automation Setup Complete!

## 📦 What Was Created

I've set up a complete automated workflow for your CV. Here's what was added:

### 1. GitHub Actions Workflow
- **File**: `.github/workflows/deploy-cv.yml`
- **Purpose**: Automatically generates PDF and deploys to GitHub Pages on every push
- **Triggers**: Runs on push to `main` or `master` branch

### 2. Documentation
- **README.md**: Updated with comprehensive setup and usage instructions
- **SETUP_GUIDE.md**: Quick start guide with specific steps for your repositories
- **sync-to-portfolio.yml.example**: Optional workflow for syncing CV to portfolio repo

### 3. Configuration Updates
- **.gitignore**: Updated to allow `cv.pdf` to be committed by the workflow

## 🚀 Next Steps

### Step 1: Commit and Push to GitHub

```bash
# Add all the new files
git add .github/ SETUP_GUIDE.md README.md .gitignore cv.pdf

# Commit the changes
git commit -m "feat: add automated CV generation and deployment workflow"

# Push to your repository (adjust branch name if needed)
git push origin main
```

**Note**: I see you're currently on branch `f_some_ui_fixes`. You may want to:
- Merge this to `main` branch, OR
- Update the workflow file to trigger on your branch

### Step 2: Set Up GitHub Repository (if not already done)

If you haven't pushed this to GitHub yet:

```bash
# Create a new repo on GitHub first, then:
git remote add origin https://github.com/chablaouiamine/my-cv.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to: https://github.com/chablaouiamine/my-cv/settings/pages
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

### Step 4: Verify the Workflow

After pushing:
1. Go to: https://github.com/chablaouiamine/my-cv/actions
2. You should see the workflow running
3. Wait for it to complete (usually takes 1-2 minutes)

### Step 5: Access Your CV

Once deployed, your CV will be available at:
- **Live HTML**: https://chablaouiamine.github.io/my-cv/
- **PDF Download**: https://chablaouiamine.github.io/my-cv/cv.pdf

## 🔗 Integration with Portfolio Website

To add your CV to your portfolio (https://chablaouiamine.github.io/amine-portfolio):

### Option A: Direct Download Link

Add this HTML to your portfolio:

```html
<a href="https://chablaouiamine.github.io/my-cv/cv.pdf" 
   download="Chablaoui_Amine_CV.pdf"
   class="btn btn-primary">
  <i class="fas fa-download"></i> Download My CV
</a>
```

### Option B: View CV Button

```html
<a href="https://chablaouiamine.github.io/my-cv/" 
   target="_blank"
   class="btn btn-secondary">
  <i class="fas fa-file-alt"></i> View My CV
</a>
```

### Option C: Auto-Sync to Portfolio (Advanced)

If you want the PDF automatically copied to your portfolio repo:

1. Rename `.github/workflows/sync-to-portfolio.yml.example` to `.github/workflows/sync-to-portfolio.yml`
2. Create a Personal Access Token (PAT) on GitHub:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scope: `repo`
   - Copy the token
3. Add the token as a secret in your CV repository:
   - Go to: https://github.com/chablaouiamine/my-cv/settings/secrets/actions
   - Click "New repository secret"
   - Name: `PORTFOLIO_PAT`
   - Value: [paste your token]
4. Update the workflow file with the correct path in your portfolio repo

## 🎯 How It Works

Every time you push changes to this repository:

1. ✅ GitHub Actions detects the push
2. ✅ Installs dependencies (Puppeteer)
3. ✅ Generates a fresh PDF from `index.html`
4. ✅ Commits the PDF back to the repository
5. ✅ Deploys everything to GitHub Pages
6. ✅ Your portfolio always has access to the latest CV

## 📝 Making Updates

To update your CV in the future:

```bash
# 1. Edit index.html with your changes
nano index.html  # or use your preferred editor

# 2. Commit and push
git add index.html
git commit -m "Update CV: [describe your changes]"
git push

# 3. That's it! The automation handles the rest.
```

Within a few minutes:
- New PDF will be generated
- Changes will be live on GitHub Pages
- Your portfolio will have the latest version

## 🔍 Troubleshooting

### Workflow not running?
- Check you're pushing to `main` or `master` branch
- Verify GitHub Actions is enabled in repository settings

### PDF not generating?
- Check the Actions tab for error logs
- Ensure `package.json` has puppeteer dependency

### Pages not deploying?
- Verify GitHub Pages source is set to "GitHub Actions"
- Check repository is public (or you have GitHub Pro for private repos)

## 📚 Additional Resources

- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Puppeteer Docs**: https://pptr.dev/

## 🎉 You're All Set!

Your CV automation is ready to go. Just push to GitHub and watch the magic happen!

Questions? Check the README.md or SETUP_GUIDE.md for more details.
