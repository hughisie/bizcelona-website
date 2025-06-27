# Bizcelona Website

A professional website for Bizcelona, Barcelona's exclusive entrepreneurial community. This single-page application showcases the community's value proposition and provides an application process for potential members.

## Features

- **Modern Design**: Clean, professional layout with Barcelona-themed visuals
- **Mobile-First**: Fully responsive design optimized for all devices
- **Interactive Elements**: Smooth scrolling, parallax effects, and hover animations
- **SEO Optimized**: Proper meta tags, Open Graph tags, and semantic HTML
- **Contact Form**: Professional application form (requires form service setup)
- **Performance Optimized**: Fast loading with optimized images and code

## File Structure

```
bizcelona-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── script.js       # JavaScript functionality
├── images/
│   ├── bizcelona-logo.png      # Main logo
│   ├── barcelona-skyline-1.jpg # Hero background
│   ├── barcelona-skyline-2.jpg # About section image
│   ├── barcelona-skyline-3.jpg # Additional background
│   ├── og-image.jpg           # Social media share image
│   └── favicon.png            # Website favicon
└── README.md           # This file
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `bizcelona-website` or `bizcelona.github.io`)
4. Make sure it's set to "Public"
5. Check "Add a README file" (you can replace it later)
6. Click "Create repository"

### Step 2: Upload Website Files

**Option A: Using GitHub Web Interface**
1. In your new repository, click "uploading an existing file"
2. Drag and drop all files from the `bizcelona-website` folder
3. Write a commit message like "Initial website upload"
4. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME

# Copy all website files to the repository folder
# Then commit and push
git add .
git commit -m "Initial website upload"
git push origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to "Settings" tab
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Website

- Your website will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`
- If you named your repository `YOUR_USERNAME.github.io`, it will be available at: `https://YOUR_USERNAME.github.io/`
- It may take a few minutes for the site to become available

## Customization

### Contact Form Setup

The contact form currently uses a placeholder action. To make it functional:

1. **Using Formspree** (Recommended):
   - Sign up at [Formspree.io](https://formspree.io)
   - Create a new form and get your form ID
   - Replace `YOUR_ID` in the form action with your actual Formspree ID:
     ```html
     <form action="https://formspree.io/f/YOUR_ACTUAL_ID" method="POST">
     ```

2. **Using Netlify Forms**:
   - If hosting on Netlify instead of GitHub Pages
   - Add `netlify` attribute to the form tag
   - Netlify will automatically handle form submissions

### Content Updates

- **Logo**: Replace `images/bizcelona-logo.png` with your updated logo
- **Images**: Replace background images in the `images/` folder
- **Content**: Edit the text content directly in `index.html`
- **Colors**: Modify the color scheme in the Tailwind config section of `index.html`
- **Contact Info**: Update form action and any contact details

### SEO and Social Media

- Update the `og:image` URL in the meta tags to match your domain
- Modify the `canonical` URL to your actual website URL
- Update the `og:url` to your actual website URL

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images for web
- Minified CSS and JavaScript
- Efficient loading with proper caching headers
- Mobile-first responsive design

## Maintenance

- Regularly update content as needed
- Monitor form submissions if using a form service
- Keep images optimized for web performance
- Test across different devices and browsers periodically

## Support

For technical issues or customization help, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Formspree Documentation](https://help.formspree.io/)

---

Built with ❤️ for the Barcelona entrepreneurial community.

