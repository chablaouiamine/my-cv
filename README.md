# ATS-Optimized CV Template

A professional, ATS-friendly CV template with automated PDF generation and deployment to GitHub Pages.

## 🚀 Features

- **ATS-Optimized**: Semantic HTML structure that works perfectly with Applicant Tracking Systems
- **Automated PDF Generation**: Automatically generates PDF on every push
- **Auto-Deploy**: Deploys to GitHub Pages with the latest CV version
- **Modern Design**: Clean, professional look with Font Awesome icons
- **Responsive**: Works on all devices

## 📁 Files

- `index.html`: CV content using semantic HTML5
- `style.css`: Professional styling
- `generate_pdf.js`: Puppeteer script for PDF generation
- `.github/workflows/deploy-cv.yml`: GitHub Actions workflow for automation

## 🎯 Key Features for ATS Optimization

1. **Semantic Structure**: 
   - `<h1>` for name, `<h2>` for section headers
   - `<ul>` for lists of skills and job descriptions
   - Proper hierarchy for ATS parsing

2. **Clean Layout**: 
   - No complex multi-column layouts or text boxes
   - Linear code structure for easy parsing

3. **Standard Typography**: 
   - Modern fonts with standard fallbacks
   - OCR-friendly text rendering

4. **No Tables**: 
   - CSS Flexbox for layout instead of HTML tables

## 🛠️ Setup Instructions

### 1. Initial Setup

```bash
# Clone or initialize your repository
git init
git add .
git commit -m "Initial commit"

# Install dependencies
npm install
```

### 2. GitHub Repository Setup

1. Create a new repository on GitHub
2. Add the remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/my-cv.git
   git branch -M main
   git push -u origin main
   ```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 4. Automated Workflow

Once set up, the GitHub Actions workflow will automatically:
- ✅ Generate a fresh PDF from your HTML CV
- ✅ Commit the PDF back to the repository
- ✅ Deploy everything to GitHub Pages

**Your CV will be available at:**
- **Live CV**: `https://YOUR_USERNAME.github.io/my-cv/`
- **PDF Download**: `https://YOUR_USERNAME.github.io/my-cv/cv.pdf`

## 📝 How to Update Your CV

1. Edit `index.html` with your information
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update CV content"
   git push
   ```
3. GitHub Actions will automatically:
   - Generate the new PDF
   - Deploy to GitHub Pages
   - Update your portfolio website

## 🔧 Local Development

### Generate PDF Locally

```bash
npm run pdf
```

### Preview Locally

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

## 🔗 Integration with Portfolio Website

To include your CV in your portfolio website, add a link to:

```html
<a href="https://YOUR_USERNAME.github.io/my-cv/cv.pdf" download>
  Download CV
</a>
```

Or embed it:

```html
<iframe src="https://YOUR_USERNAME.github.io/my-cv/" width="100%" height="800px"></iframe>
```

## 📋 Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy-cv.yml`) runs on:
- Every push to `main` or `master` branch
- Manual trigger via GitHub Actions UI

**Workflow Steps:**
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Generate PDF using Puppeteer
5. Commit PDF back to repository
6. Deploy to GitHub Pages

## 🎨 Customization

### Update Profile Photo
Replace `profile.jpg` with your own photo (recommended: 300x300px)

### Modify Styling
Edit `style.css` to customize colors, fonts, and layout

### Adjust PDF Settings
Edit `generate_pdf.js` to change:
- Page format (Letter/A4)
- Margins
- Print background settings

## 📦 Dependencies

- **puppeteer**: For automated PDF generation
- **Node.js**: Runtime environment

## 🤝 Contributing

Feel free to fork and customize this template for your own use!

## 📄 License

ISC
