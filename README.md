# 🎓 Learning Design Boutique - Landing Page

<div align="center">

![LDB Logo](src/assets/LDB-logo.jpg)

**Your Trusted Partner in Learning Transformation**

*A modern, responsive landing page showcasing Learning Design Boutique's innovative approach to education and organizational development.*

[![React](https://img.shields.io/badge/React-18.0.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC.svg)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green.svg)](https://greensock.com/gsap/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[🌐 Live Demo](https://mohamedmosilhy.github.io/LDB-Landing-Page/) • [📖 Documentation](#documentation) • [🚀 Quick Start](#quick-start)

</div>

---

## ✨ Features

### 🎨 **Modern Design & UX**
- **Glass Morphism Effects** - Beautiful backdrop blur and transparency
- **Gradient Backgrounds** - Dynamic color transitions throughout
- **Smooth Animations** - GSAP-powered scroll-triggered animations
- **Interactive Elements** - Hover effects, carousels, and micro-interactions
- **Responsive Design** - Perfect adaptation across all devices

### 🚀 **Performance & Optimization**
- **Fast Loading** - Optimized assets and lazy loading
- **SEO Optimized** - Semantic HTML and meta tags
- **Accessibility** - Keyboard navigation and screen reader support
- **Modern Build** - Vite for lightning-fast development and builds

### 🛠️ **Technical Excellence**
- **React 18** - Latest React features with hooks
- **Tailwind CSS 4** - Utility-first styling approach
- **GSAP Animations** - Professional-grade animations
- **GitHub Pages** - Automatic deployment pipeline

---

## 🎯 What We Do

Learning Design Boutique specializes in transforming how individuals, communities, and institutions grow through:

- **🎨 Learning Design** - ADLX-based architecture and gamification
- **🎓 Training Programs** - VFC framework and experiential learning
- **🤝 Coaching & Mentoring** - Executive and youth development
- **🏢 Organizational Transformation** - Competence-based systems
- **📊 Assessment & Diagnostics** - LIFTS evaluation framework

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohamedmosilhy/LDB-Landing-Page.git
   cd LDB-Landing-Page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## 📁 Project Structure

```
LDB-landing-page/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 assets/            # Images and media files
│   │   ├── 📁 logos/         # Client logos
│   │   └── *.png             # Hero and content images
│   ├── 📁 components/        # React components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero section with animations
│   │   ├── WhyChooseLDB.jsx  # Features showcase
│   │   ├── CoreValues.jsx    # Company values
│   │   ├── ClientLogos.jsx   # Partner logos carousel
│   │   ├── Services.jsx      # Services portfolio
│   │   ├── Projects.jsx      # Project showcase
│   │   ├── Testimonials.jsx  # Customer reviews
│   │   ├── Footer.jsx        # Contact and info
│   │   └── ScrollToTop.jsx   # Scroll to top button
│   ├── 📁 constants/         # Data and configuration
│   │   ├── data.js           # Website content
│   │   └── googleFormConfig.js # Form configuration
│   ├── 📁 hooks/             # Custom React hooks
│   │   └── useGSAPAnimations.js # Animation utilities
│   ├── 📁 styles/            # CSS files
│   │   ├── base.css          # Base styles and typography
│   │   └── main.css          # Main stylesheet
│   ├── App.jsx               # Main app component
│   └── main.jsx              # App entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

---

## 🎨 Design System

### Color Palette
```css
Primary:     #0f596d (Deep Teal)
Secondary:   #1a7a8f (Medium Teal)
Accent:      #2a9bb3 (Light Teal)
Light:       #3bb8d4 (Very Light Teal)
Lighter:     #4dd4f7 (Lightest Teal)
Text:        #2d3748 (Dark Gray)
```

### Typography
- **Headings**: Playfair Display (Serif) - Elegant and professional
- **Body**: Poppins (Sans-serif) - Clean and readable
- **Subtitle**: Inter (Sans-serif) - Modern and versatile

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.1.0 | UI Framework |
| **Vite** | 7.0.4 | Build Tool & Dev Server |
| **Tailwind CSS** | 4.1.11 | Utility-first CSS |
| **GSAP** | 3.13.0 | Professional Animations |
| **Font Awesome** | Latest | Icon Library |
| **GitHub Pages** | - | Hosting Platform |

---

## 🚀 Deployment

### Automatic Deployment
The website is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch.

### Manual Deployment
```bash
# Build and deploy in one command
npm run deploy

# Or build first, then deploy
npm run build
npm run deploy
```

### Deployment URL
🌐 **Live Site**: https://mohamedmosilhy.github.io/LDB-Landing-Page/

---

## 📱 Features Overview

### 🎯 Hero Section
- **Typewriter Effect** - Dynamic text animation
- **Parallax Background** - Depth and movement
- **Interactive Images** - Hover effects and transitions
- **Call-to-Action** - Engaging user interaction

### 🏢 Services Showcase
- **3D Card Effects** - Modern card design
- **Hover Animations** - Interactive elements
- **Feature Lists** - Detailed service descriptions
- **Methodology Badges** - Professional credentials

### 👥 Client Portfolio
- **Logo Carousel** - Smooth scrolling display
- **Partner Showcase** - Trust and credibility
- **Responsive Grid** - Adaptive layout

### 💬 Testimonials
- **Auto-rotating Carousel** - Dynamic content
- **Customer Reviews** - Social proof
- **Professional Quotes** - Credibility building

---

## 🔧 Configuration

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/LDB-Landing-Page/', // GitHub Pages base path
});
```

### Tailwind Configuration
The project uses Tailwind CSS 4 with custom color palette and typography settings.

### GSAP Animations
Professional-grade animations using GSAP ScrollTrigger for scroll-based effects.

---

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test on multiple devices
- Ensure accessibility compliance

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

### Learning Design Boutique
- **🌍 Website**: [LDB Corporate](https://ldb-corp.com)
- **📧 Email**: m.haymna@ldb-corp.com
- **📱 Phone**: +968 7609 9366
- **📍 Locations**: 
  - Muscat, Bawshar, Oman
  - Cairo, Egypt
  - Tucson, AZ, USA

### Social Media
- **LinkedIn**: [LDB Corporation](https://www.linkedin.com/company/ldbcorp/)

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern web design trends
- **Animation Library**: GSAP for professional animations
- **Icons**: Font Awesome for beautiful icons
- **Fonts**: Google Fonts for typography
- **Hosting**: GitHub Pages for reliable hosting

---

<div align="center">

**Built with ❤️ by Learning Design Boutique**

*Transforming learning experiences, one design at a time.*

[⬆️ Back to Top](#-learning-design-boutique---landing-page)

</div>
