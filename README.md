# Learning Design Boutique - Landing Page

A modern, responsive landing page for Learning Design Boutique built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Beautiful gradient backgrounds and glass morphism effects
- **Responsive**: Perfect adaptation across all devices (mobile, tablet, desktop)
- **Interactive**: Smooth animations, hover effects, and carousel functionality
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **Accessible**: Keyboard navigation and screen reader support

## 🚀 Live Demo

Visit the live website: [https://mohamedmosilhy.github.io/LDB-Landing-Page/](https://mohamedmosilhy.github.io/LDB-Landing-Page/)

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **GitHub Pages** - Hosting platform

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/mohamedmosilhy/LDB-Landing-Page.git
cd LDB-Landing-Page
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

The website is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment is handled by GitHub Actions.

### Manual Deployment

#### Option 1: Using npm scripts (Recommended)
```bash
# Deploy with one command
npm run deploy

# Or specifically for GitHub Pages
npm run deploy:gh-pages
```

#### Option 2: Manual steps
1. Build the project:
```bash
npm run build
```

2. Push changes to GitHub:
```bash
git add .
git commit -m "Update website"
git push origin main
```

3. The GitHub Actions workflow will automatically deploy to GitHub Pages.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── WhyChooseLDB.jsx # Features section
│   ├── CoreValues.jsx  # Company values
│   ├── ClientLogos.jsx # Partner logos
│   ├── Services.jsx    # Services showcase
│   ├── Projects.jsx    # Project portfolio
│   ├── Testimonials.jsx # Customer reviews
│   ├── Footer.jsx      # Contact and info
│   └── ScrollToTop.jsx # Scroll to top button
├── assets/             # Images and static files
│   ├── logos/          # Client logos
│   └── ...             # Other assets
├── constants/          # Data and constants
│   └── data.js         # Website content
├── styles/             # CSS files
│   ├── base.css        # Base styles and typography
│   └── main.css        # Main styles
└── App.jsx             # Main app component
```

## 🎨 Design System

### Colors
- **Primary**: `#0f596d` (Deep Teal)
- **Secondary**: `#1a7a8f` (Medium Teal)
- **Accent**: `#2a9bb3` (Light Teal)
- **Light Accent**: `#3bb8d4` (Very Light Teal)
- **Text**: `#2d3748` (Dark Gray)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Poppins (Sans-serif)
- **Subtitle**: Inter (Sans-serif)

## 🔧 Configuration

### Vite Configuration
The project is configured for GitHub Pages deployment with the base URL set to `/LDB-Landing-Page/` in `vite.config.js`.

### GitHub Pages
- **Source**: GitHub Actions (gh-pages branch)
- **Deployment Branch**: gh-pages
- **URL**: https://mohamedmosilhy.github.io/LDB-Landing-Page/

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please contact Learning Design Boutique.

---

**Built with ❤️ by Learning Design Boutique**
