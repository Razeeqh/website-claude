# Contemporary Interiors - Portfolio Website

A modern, responsive interior design portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- 🎨 Modern, clean design optimized for interior design portfolios
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔧 Easy configuration via YAML file
- 🖼️ Portfolio gallery with filtering
- 📧 Contact form
- ⚡ Fast loading, no external dependencies (except Google Fonts)
- 🎯 SEO-friendly structure

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── config.yml          # Editable contact information
└── README.md           # This file
```

## Configuration

Edit `config.yml` to update contact information and company details:

```yaml
contact:
  office: "Your office address"
  phone: "+1 (555) 123-4567"
  email: "your@email.com"
  hours: "Monday - Friday: 9:00 AM - 6:00 PM"
```

The website will automatically load and display these details in the Contact section.

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `interior-design-portfolio`)
4. Make it public
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. In your new repository, click "uploading an existing file"
2. Drag and drop all files:
   - index.html
   - styles.css
   - script.js
   - config.yml
   - README.md
3. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Contemporary Interiors website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your GitHub repository, go to **Settings**
2. Scroll down to **Pages** section (in the left sidebar)
3. Under **Source**, select **main** branch
4. Select **/ (root)** folder
5. Click **Save**

### Step 4: Access Your Website

After a few minutes, your website will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example: `https://johnsmith.github.io/interior-design-portfolio/`

## Customization Guide

### Update Contact Information
Edit `config.yml` and commit the changes to GitHub.

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #c9a96e;    /* Accent gold color */
    --accent-color: #8b7355;       /* Secondary accent */
}
```

### Add Portfolio Items
Edit the `portfolioData` array in `script.js`:
```javascript
const portfolioData = [
    {
        id: 1,
        title: "Your Project Name",
        category: "residential", // or "commercial" or "hospitality"
        image: "placeholder-1"
    },
    // Add more projects...
];
```

### Replace Placeholder Images
Upload your project images to the repository and update the image references in the code.

### Update Company Name/Logo
Edit the logo section in `index.html`:
```html
<div class="logo">
    <h1>Your Company Name</h1>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No heavy frameworks
- Optimized CSS and JavaScript
- Lazy loading ready
- Mobile-first responsive design

## Future Enhancements

Consider adding:
- Image gallery lightbox
- Backend integration for contact form
- CMS integration (Netlify CMS, Forestry)
- Blog section
- Client testimonials
- Before/after sliders
- Google Analytics

## Support

For questions or issues, please open an issue on GitHub or contact support.

## License

This project is open source and available for personal and commercial use.

---

Built with ❤️ for interior designers
