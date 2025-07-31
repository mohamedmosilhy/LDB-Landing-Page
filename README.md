# LDB Landing Page

A modern, responsive landing page for LDB (Learning & Development Business) built with React and Vite.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Engaging animations and hover effects
- **Performance Optimized**: Fast loading with optimized assets
- **Accessibility**: WCAG compliant with proper focus states and screen reader support
- **Cross-browser Compatible**: Works on all modern browsers

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Bootstrap 5** - CSS framework for responsive design
- **GSAP** - Professional animations
- **CSS3** - Modern styling with custom animations
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── WhyChooseLDB.jsx # Why choose us section
│   ├── CoreValues.jsx  # Core values section
│   ├── Services.jsx    # Services showcase
│   ├── Projects.jsx    # Projects display
│   ├── ClientLogos.jsx # Client logos grid
│   ├── Testimonials.jsx # Customer testimonials
│   ├── Footer.jsx      # Footer with contact form
│   └── ScrollToTop.jsx # Scroll to top button
├── styles/             # Organized CSS files
│   ├── global.css      # Global styles and utilities
│   ├── Header.css      # Header component styles
│   ├── Hero.css        # Hero section styles
│   ├── WhyChooseLDB.css # Why choose us styles
│   ├── CoreValues.css  # Core values styles
│   ├── Services.css    # Services styles
│   ├── Projects.css    # Projects styles
│   ├── ClientLogos.css # Client logos styles
│   ├── Testimonials.css # Testimonials styles
│   ├── Footer.css      # Footer styles
│   └── ScrollToTop.css # Scroll to top styles
├── hooks/              # Custom React hooks
│   ├── useForm.js      # Form handling hook
│   ├── useGSAPAnimation.js # GSAP animation hook
│   ├── useSmoothScroll.js # Smooth scrolling hook
│   └── useTypingAnimation.js # Typing animation hook
├── constants/          # Data and configuration
│   └── data.js         # Static data for components
├── utils/              # Utility functions
│   └── helpers.js      # Helper functions
└── assets/             # Images and static assets
    ├── logos/          # Client logo images
    ├── hero-*.png      # Hero section images
    └── whyChooseLDB-1.png # Core values image
```

## 🎨 Design Features

### Sections

1. **Header** - Glassy navigation with mobile menu
2. **Hero** - Animated hero section with typing effect
3. **Why Choose LDB** - Interactive geometric layout
4. **Core Values** - Card-based layout with hover effects
5. **Services** - Grid layout with overlay animations
6. **Projects** - Sky-themed section with slide animations
7. **Client Logos** - Staggered logo grid with hover effects
8. **Testimonials** - Carousel with smooth transitions
9. **Footer** - Contact form with validation

### Animations

- **GSAP Animations** - Professional scroll-triggered animations
- **CSS Transitions** - Smooth hover effects and state changes
- **Typing Animation** - Dynamic text typing effect
- **Staggered Animations** - Sequential element animations
- **Parallax Effects** - Depth and movement effects

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/LDB-landing-page.git
   cd LDB-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: > 991px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📦 Deployment

### GitHub Pages (Recommended)

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy using the provided scripts**

   ```bash
   # Windows
   deploy.bat

   # macOS/Linux
   ./deploy.sh
   ```

3. **Manual deployment**
   ```bash
   git add .
   git commit -m "Deploy: $(date)"
   git push origin main
   ```

### Other Platforms

The project can be deployed to any static hosting service:

- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Customization

### Colors

The color scheme can be customized by modifying CSS variables in `src/styles/global.css`:

```css
:root {
  --primary-color: #0f596d;
  --secondary-color: #1a7a8f;
  --accent-color: #2a9bb3;
}
```

### Content

Update content by modifying the data files in `src/constants/data.js`.

### Styling

Each component has its own CSS file in the `src/styles/` directory for easy customization.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: contact@ldb.com
- **Website**: https://ldb.com
- **LinkedIn**: [LDB Company](https://linkedin.com/company/ldb)

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the responsive framework
- [GSAP](https://greensock.com/gsap/) for animations
- [Font Awesome](https://fontawesome.com/) for icons
- [Inter Font](https://rsms.me/inter/) for typography
