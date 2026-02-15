# 🏠 Contemporary Interiors Website - Complete Setup Guide

## 📋 What You've Got

Your professional interior design portfolio website is ready! Here's what's included:

### Files Overview:
- **index.html** - Main website structure with all sections (Home, About, Portfolio, Services, Contact)
- **styles.css** - Professional styling with responsive design
- **script.js** - Interactive functionality and YAML config loader
- **config.yml** - ⭐ YOUR EDITABLE CONTACT INFORMATION FILE
- **README.md** - Documentation
- **.gitignore** - Git configuration
- **deploy-help.sh** - Deployment helper script

---

## 🚀 Quick Start - Deploy to GitHub Pages (5 minutes)

### Step 1: Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `interior-design-portfolio` (or any name you like)
3. Make it **PUBLIC**
4. ❌ Do NOT check "Initialize with README"
5. Click **Create repository**

### Step 2: Upload Files

**Method A: Web Upload (Easiest)**
1. On your new repo page, click **"uploading an existing file"**
2. Drag ALL these files into the upload box:
   - index.html
   - styles.css
   - script.js
   - config.yml
   - README.md
   - .gitignore
3. Click **"Commit changes"**

**Method B: Command Line**
```bash
# In the folder with your website files:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click **Settings** (top menu)
2. Click **Pages** (left sidebar)
3. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 4: View Your Live Site! 🎉

Your website will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

Example: `https://johnsmith.github.io/interior-design-portfolio/`

⏱️ Wait 2-3 minutes for the first deployment.

---

## ⚙️ Customize Your Website

### 1. Update Contact Information (IMPORTANT!)

Edit `config.yml`:

```yaml
contact:
  office: "Your Office Address Here"
  phone: "+1 (555) 123-4567"
  email: "your-email@example.com"
  hours: "Monday - Friday: 9:00 AM - 6:00 PM"
```

💡 The website automatically reads this file and displays the info in the Contact section!

### 2. Change Company Name

Edit `index.html`, find:
```html
<div class="logo">
    <h1>Contemporary Interiors</h1>
</div>
```
Replace with your company name.

### 3. Update Color Scheme

Edit `styles.css`, find the `:root` section:
```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #c9a96e;    /* Gold accent */
    --accent-color: #8b7355;       /* Brown accent */
}
```

Try these color schemes:
- **Modern Blue**: `#1e3a8a`, `#60a5fa`, `#3b82f6`
- **Elegant Purple**: `#6b21a8`, `#c084fc`, `#9333ea`
- **Warm Neutral**: `#78716c`, `#d6d3d1`, `#a8a29e`

### 4. Add Your Portfolio Projects

Edit `script.js`, find `portfolioData`:
```javascript
const portfolioData = [
    {
        id: 1,
        title: "Modern Loft Living",
        category: "residential",  // residential, commercial, or hospitality
        image: "placeholder-1"
    },
    // Add more projects here
];
```

### 5. Replace Placeholder Images

Later, upload your project images and update image references.

---

## 🔄 Update Your Live Website

After making changes:

1. Edit files locally
2. Go to your GitHub repository
3. Click on the file you changed
4. Click the pencil icon (Edit)
5. Paste your updated content
6. Click **Commit changes**

Your site updates automatically in 1-2 minutes!

---

## 📱 Features Included

✅ Fully responsive (works on phone, tablet, desktop)
✅ Smooth scrolling navigation
✅ Portfolio gallery with filters
✅ Contact form (ready for backend integration)
✅ YAML-based configuration
✅ Clean, professional design
✅ Fast loading (no heavy frameworks)
✅ SEO-friendly structure

---

## 🎨 Website Sections

1. **Home/Hero** - Eye-catching introduction
2. **About** - Your story and experience stats
3. **Portfolio** - Project showcase with filtering
4. **Services** - What you offer
5. **Contact** - Contact info + form

---

## 💡 Pro Tips

### Add Google Analytics
Add before `</head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Custom Domain
1. Buy domain (e.g., from Namecheap, GoDaddy)
2. In GitHub repo: Settings > Pages > Custom domain
3. Add your domain and follow DNS instructions

### Make Contact Form Work
The form currently shows an alert. To actually receive emails:
- Use **Formspree** (https://formspree.io)
- Use **Netlify Forms** (if you move to Netlify)
- Use **EmailJS** (https://www.emailjs.com)

---

## 🆘 Troubleshooting

**Site not showing?**
- Wait 3-5 minutes after enabling Pages
- Check Settings > Pages shows green "Your site is published"
- Make sure repository is PUBLIC

**Contact info not showing?**
- Check `config.yml` is uploaded
- Check file is named exactly `config.yml` (not .txt)
- Look in browser console (F12) for errors

**Changes not appearing?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-3 minutes for GitHub to rebuild

---

## 🔮 Future Enhancements

Consider adding:
- Image lightbox/gallery viewer
- Blog section for design tips
- Client testimonials slider
- Before/after comparison tool
- Instagram feed integration
- Backend for contact form emails

---

## 📞 Need Help?

If you get stuck:
1. Check the README.md file
2. Open an issue on GitHub
3. Search GitHub Discussions
4. Stack Overflow with tag `github-pages`

---

## 🎯 Next Steps

1. ✅ Upload files to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Edit config.yml with your contact info
4. ✅ Share your new website!

**Good luck with your interior design portfolio! 🏡✨**
