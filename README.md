# Omprakash Indla - Portfolio Website

A professional personal portfolio website built with pure HTML5, CSS3, and vanilla JavaScript. Features a modern blue and black design with subtle glowing effects, smooth animations, and full responsiveness.

## 🚀 Live Demo

[View Live Site](https://omprakash-indla.netlify.app/)

## ✨ Features

- **Pure Static Site**: No build tools or frameworks required
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD schema
- **Smooth Animations**: Intersection Observer fade-ins and micro-interactions
- **Contact Form**: Formspree integration for reliable form handling
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with proper landmarks
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No external dependencies
- **Formspree**: Contact form backend
- **Netlify/GitHub Pages**: Easy deployment

## 📁 Project Structure

```
portfolio-om/
├── index.html              # Main HTML file
├── assets/
│   ├── styles.css          # All styles and animations
│   ├── script.js           # JavaScript functionality
│   ├── favicon.svg         # OI monogram favicon
│   └── og-cover.png        # Open Graph image
├── assets/Omprakash-Indla-Resume.pdf  # Resume PDF (placeholder)
└── README.md               # This file
```

## 🎨 Design System

### Colors
- **Background**: `#0b0f14` (Dark blue-black)
- **Cards**: `#111827` (Slightly lighter)
- **Text**: `#e5e7eb` (Light gray)
- **Muted**: `#9ca3af` (Medium gray)
- **Brand**: `#2563eb` (Blue)
- **Accent**: `#60a5fa` (Light blue)
- **Glow**: `rgba(37, 99, 235, 0.6)` (Blue glow)

### Typography
- **Font Stack**: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto
- **Responsive**: Fluid typography with clamp() functions
- **Hierarchy**: Clear heading structure for accessibility

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: (leave empty)
   - Set publish directory: `/` (root)

2. **Custom Domain** (Optional):
   - Go to Site settings → Domain management
   - Add your custom domain
   - Configure DNS settings

### GitHub Pages

1. **Enable Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/` folder

2. **Custom Domain** (Optional):
   - Add `CNAME` file with your domain
   - Configure DNS settings

## ⚙️ Configuration

### 1. Update Contact Form Endpoint

Edit `assets/script.js` and replace the form endpoint:

```javascript
// Replace with your actual Formspree endpoint
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

**To get a Formspree endpoint:**
1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy the form endpoint URL

### 2. Update Resume PDF

1. Replace `assets/Omprakash-Indla-Resume.pdf` with your actual resume
2. Ensure the filename matches exactly: `Omprakash-Indla-Resume.pdf`

### 3. Update Social Links

Edit `index.html` and update these sections:

```html
<!-- Update LinkedIn URL -->
<a href="https://linkedin.com/in/omprakash-indla" class="social-link">

<!-- Update email -->
<a href="mailto:oindla@uab.edu" class="social-link">

<!-- Update phone -->
<a href="tel:+12058737963" class="social-link">
```

### 4. Update Meta Tags

Edit the `<head>` section in `index.html`:

```html
<!-- Update URLs for your domain -->
<meta property="og:url" content="https://your-domain.com/">
<link rel="canonical" href="https://your-domain.com/">

<!-- Update Open Graph image URL -->
<meta property="og:image" content="https://your-domain.com/assets/og-cover.png">
```

### 5. Create Open Graph Image

Create `assets/og-cover.png` (1200x630px) with:
- Your name: "Omprakash Indla"
- Your title: "Electrical & Computer Engineer"
- Blue gradient background matching the site theme
- Professional headshot (optional)

## 🎯 Content Customization

### Quick Content Checklist

Edit the content in `index.html`:

- [ ] **Hero Section**: Update name, title, location
- [ ] **About Section**: Customize bio text
- [ ] **Skills**: Add/remove skill categories and tags
- [ ] **Experience**: Update job history and descriptions
- [ ] **Projects**: Add your projects with descriptions and tags
- [ ] **Education**: Update degrees and coursework
- [ ] **Achievements**: Add your accomplishments
- [ ] **Contact**: Update contact information

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding CSS in `assets/styles.css`
3. Update navigation in the `<nav>` element
4. Add smooth scroll functionality in `assets/script.js`

## 🔧 Development

### Local Development

1. **Clone Repository**:
   ```bash
   git clone https://github.com/your-username/portfolio-om.git
   cd portfolio-om
   ```

2. **Serve Locally**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using VS Code Live Server extension
   ```

3. **Open Browser**: Navigate to `http://localhost:8000`

### Customization Tips

1. **Colors**: Update CSS custom properties in `:root`
2. **Animations**: Modify transition durations and effects
3. **Layout**: Adjust grid and flexbox properties
4. **Typography**: Change font sizes and weights
5. **Spacing**: Update padding and margin values

## 📱 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+
- **Features**: CSS Grid, Flexbox, Intersection Observer, ES6+

## ♿ Accessibility Features

- **Semantic HTML**: Proper landmarks and heading hierarchy
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Focus Management**: Visible focus indicators
- **Skip Links**: Quick navigation to main content
- **Reduced Motion**: Respects user motion preferences

## 🚀 Performance

- **No External Dependencies**: Faster loading times
- **Optimized Images**: Proper sizing and lazy loading
- **Efficient CSS**: Minimal and optimized styles
- **Smooth Animations**: Hardware-accelerated transitions
- **Mobile Optimized**: Touch-friendly interactions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:
- **Email**: oindla@uab.edu
- **LinkedIn**: [Omprakash Indla](https://linkedin.com/in/omprakash-indla)

---

**Built with ❤️ by Omprakash Indla**
