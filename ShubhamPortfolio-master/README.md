# Shubham Jakhmola - Portfolio Website

A modern, responsive portfolio website showcasing my skills as a Cloud Engineer, Web Developer, and System Administrator.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Contact Form**: Integrated EmailJS for direct email communication
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Performance**: Optimized images, lazy loading, and fast load times
- **Accessibility**: WCAG compliant with proper ARIA attributes

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Font Awesome 6
- **Email Service**: EmailJS
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── main.css        # Main stylesheet
│   ├── js/
│   │   └── main.js         # Main JavaScript file
│   ├── images/             # Image assets
│   │   ├── hero-image.png  # Professional headshot (transparent PNG)
│   │   ├── project-*.jpg   # Project screenshots
│   │   └── *-cert.png      # Certification badges
│   └── resume.pdf          # Resume PDF file
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
└── README.md               # This file
```

## 🎨 Customization Guide

### 1. Personal Information
Update the following in `index.html`:
- Name and title in the hero section
- About section content
- Experience and education details
- Contact information
- Social media links

### 2. Images
Replace the following images in `assets/images/`:
- `hero-image.png`: Your professional headshot (transparent PNG, facing slightly right)
- `project-*.jpg`: Screenshots of your projects
- `*-cert.png`: Your certification badges

### 3. EmailJS Configuration
Update the EmailJS credentials in `assets/js/main.js`:
```javascript
const EMAILJS_CONFIG = {
    serviceId: 'your_service_id',
    templateId: 'your_template_id',
    publicKey: 'your_public_key'
};
```

### 4. Resume
Replace `assets/resume.pdf` with your actual resume file.

### 5. SEO Meta Tags
Update the following in `index.html`:
- Meta description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty for static sites)
3. Set publish directory: `/` (root)
4. Deploy!

### Vercel
1. Import your GitHub repository to Vercel
2. Configure build settings (none needed for static sites)
3. Deploy!

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🎯 Performance Optimization

- Lazy loading for images
- Optimized CSS with minimal unused styles
- Compressed JavaScript
- WebP image format support
- Efficient animations using CSS transforms

## 🔧 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📞 Contact

- **Email**: shubhamjakhmola008@gmail.com
- **LinkedIn**: [linkedin.com/in/shubhamjakhmola](https://www.linkedin.com/in/shubhamjakhmola/)
- **GitHub**: [github.com/ShubhamJakhmola](https://github.com/ShubhamJakhmola)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Remember to replace placeholder images and update personal information before deploying to production.