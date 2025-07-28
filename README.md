# Learning Design Boutique (LDB) Landing Page

A modern, responsive landing page for Learning Design Boutique showcasing their learning and development services, projects, and client testimonials.

## 🌟 Features

### 🎨 **Modern Design**

- **Glassmorphism effects** - Beautiful blur and transparency effects
- **Smooth animations** - CSS animations and transitions throughout
- **Responsive design** - Works perfectly on all devices
- **Professional color scheme** - Teal/blue gradient theme

### 📱 **Interactive Elements**

- **Smooth scrolling navigation** - Connected navbar with section links
- **Scroll-to-top button** - Appears when scrolling down
- **Hover effects** - Interactive cards and buttons
- **Auto-rotating carousels** - Services and testimonials sections

### 🎯 **Website Sections**

#### 1. **Hero Section**

- Animated tagline with typing effect
- Call-to-action buttons
- Floating hero images with animations
- Glassy navbar with backdrop blur

#### 2. **Why Choose LDB?**

- Interactive cards with hover effects
- Central image with overlay
- Floating decorative elements
- 8 core value propositions

#### 3. **Client Logos**

- Grid layout of partner logos
- Fade-in animations
- Hover effects on logo containers
- Responsive grid system

#### 4. **Services**

- Auto-rotating carousel
- 10 comprehensive services
- Professional service cards
- Navigation indicators

#### 5. **Projects**

- 4 featured projects with animations
- Scroll-triggered animations
- Shimmer effects on hover
- Dynamic flowing animations

#### 6. **Testimonials**

- Client feedback carousel
- Smooth transitions between testimonials
- Professional testimonial cards
- Navigation controls

#### 7. **Contact Footer**

- Working email form
- Contact information
- Social media links
- Professional gradient background

## 🛠️ Technologies Used

### **Frontend**

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Bootstrap 5** - Responsive CSS framework
- **Font Awesome** - Icon library

### **Styling**

- **CSS3** - Custom animations and effects
- **Glassmorphism** - Modern blur effects
- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Animations** - Smooth transitions and keyframes

### **Deployment**

- **GitHub Pages** - Free hosting
- **gh-pages** - Deployment automation
- **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure

```
LDB-landing-page/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── WhyChooseLDB.jsx    # Why choose section
│   │   ├── ClientLogos.jsx     # Client logos grid
│   │   ├── Services.jsx        # Services carousel
│   │   ├── Projects.jsx        # Projects section
│   │   ├── Testimonials.jsx    # Testimonials carousel
│   │   ├── Footer.jsx          # Contact section
│   │   └── ScrollToTop.jsx     # Scroll to top button
│   ├── assets/
│   │   ├── hero-*.png          # Hero images
│   │   ├── whyChooseLDB-1.png  # Why choose image
│   │   └── logos/              # Client logo images
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   └── main.jsx                # App entry point
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn

### **Installation**

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

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🌐 Live Website

**Visit the live website:** [https://mohamedmosilhy.github.io/LDB-Landing-Page/](https://mohamedmosilhy.github.io/LDB-Landing-Page/)

## 📋 Key Features

### **Navigation**

- **Smooth scrolling** between sections
- **Active section highlighting**
- **Mobile-responsive navigation**
- **Scroll-to-top functionality**

### **Animations**

- **Fade-in effects** on scroll
- **Hover animations** on cards
- **Floating elements** in sections
- **Shimmer effects** on buttons

### **Performance**

- **Optimized images** with Vite
- **Compressed assets** for fast loading
- **Lazy loading** for better performance
- **Minified CSS/JS** for production

### **Accessibility**

- **Semantic HTML** structure
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Color contrast** compliance

## 🎨 Design System

### **Color Palette**

- **Primary**: `#0f596d` (Dark Teal)
- **Secondary**: `#1a7a8f` (Medium Teal)
- **Accent**: `#2a9bb3` (Light Teal)
- **Background**: `#f8f9fa` (Light Gray)

### **Typography**

- **Font Family**: Inter (Sans-serif)
- **Headings**: Bold weights (700-800)
- **Body Text**: Regular weight (400-500)

### **Spacing**

- **Consistent padding** and margins
- **Responsive breakpoints** for all devices
- **Grid system** for layout consistency

## 🔧 Customization

### **Adding New Sections**

1. Create new component in `src/components/`
2. Add section ID for navigation
3. Import and add to `App.jsx`
4. Add corresponding CSS styles

### **Modifying Colors**

1. Update CSS custom properties in `App.css`
2. Modify gradient definitions
3. Update component-specific colors

### **Adding Animations**

1. Create new keyframes in `App.css`
2. Apply animations to components
3. Test on different screen sizes

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 576px - 767px
- **Small Mobile**: Below 576px

## 🚀 Deployment

### **Automatic Deployment**

The website automatically deploys to GitHub Pages when changes are pushed to the main branch.

### **Manual Deployment**

```bash
npm run deploy
```

### **Build Process**

1. **Development**: `npm run dev`
2. **Build**: `npm run build`
3. **Preview**: `npm run preview`
4. **Deploy**: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: [https://mohamedmosilhy.github.io/LDB-Landing-Page/](https://mohamedmosilhy.github.io/LDB-Landing-Page/)
- **GitHub**: [https://github.com/mohamedmosilhy/LDB-Landing-Page](https://github.com/mohamedmosilhy/LDB-Landing-Page)

---

**Built with ❤️ using React, Vite, and modern web technologies**
