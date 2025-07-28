# LDB Landing Page

A modern, responsive landing page for LDB Learning & Development with smooth GSAP animations and clean, organized code structure.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **GSAP Animations**: Scroll-triggered animations for enhanced user experience
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Efficient code structure with proper cleanup
- **Accessible**: WCAG compliant with proper ARIA labels
- **Form Validation**: Client-side validation with error handling
- **TypeScript Ready**: Well-structured codebase ready for TypeScript migration

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with typing animation
│   ├── Services.jsx    # Services carousel
│   ├── WhyChooseLDB.jsx # Core values section
│   ├── ClientLogos.jsx # Client logos grid
│   ├── Projects.jsx    # Projects showcase
│   ├── Testimonials.jsx # Customer testimonials
│   ├── Footer.jsx      # Contact form and company info
│   └── ScrollToTop.jsx # Scroll to top button
├── hooks/              # Custom React hooks
│   ├── useGSAPAnimation.js    # GSAP animation hook
│   ├── useTypingAnimation.js  # Typing effect hook
│   ├── useCarousel.js         # Carousel functionality
│   └── useForm.js             # Form handling hook
├── constants/          # Data and configuration
│   └── data.js        # All static data and animation config
├── utils/              # Utility functions
│   └── helpers.js     # Common helper functions
├── assets/             # Images and static assets
└── styles/             # CSS files
```

## 🎨 Animation System

### GSAP Animation Hook

The `useGSAPAnimation` hook provides a clean interface for creating scroll-triggered animations:

```javascript
const elementRef = useGSAPAnimation("fadeInUp", 0.2);
```

### Available Animation Types

- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale in with bounce effect
- `slideInUp` - Slide in from bottom
- `slideInDown` - Slide in from top
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `rotateIn` - Rotate in with scale
- `bounceIn` - Bounce in effect
- `flipInX` - Flip in on X axis
- `flipInY` - Flip in on Y axis

### Stagger Animations

For multiple elements, use the `useStaggerAnimation` hook:

```javascript
const containerRef = useStaggerAnimation("fadeInUp", 0.2, 0.5);
```

## 🛠️ Custom Hooks

### useTypingAnimation

Creates a typing effect for text:

```javascript
const { text } = useTypingAnimation("Your text here", 100);
```

### useCarousel

Manages carousel state and navigation:

```javascript
const { currentSlide, nextSlide, prevSlide, goToSlide } = useCarousel(items);
```

### useForm

Handles form state, validation, and submission:

```javascript
const { formData, errors, handleChange, handleSubmit } = useForm({
  email: "",
  message: "",
});
```

## 📊 Data Management

All static data is centralized in `src/constants/data.js`:

- **HERO_DATA**: Hero section content
- **SERVICES_DATA**: Services information
- **WHY_CHOOSE_LDB_DATA**: Core values and features
- **PROJECTS_DATA**: Project showcase data
- **TESTIMONIALS_DATA**: Customer testimonials
- **FOOTER_DATA**: Footer content and contact info
- **ANIMATION_CONFIG**: Animation configurations

## 🎯 Key Improvements

### Code Organization

- ✅ Centralized data management
- ✅ Reusable custom hooks
- ✅ Utility functions for common operations
- ✅ Clean component structure
- ✅ Consistent naming conventions

### Performance

- ✅ Optimized GSAP animations
- ✅ Proper cleanup of event listeners
- ✅ Debounced scroll handlers
- ✅ Efficient re-renders

### Maintainability

- ✅ Modular component structure
- ✅ Separation of concerns
- ✅ Easy to extend and modify
- ✅ Well-documented code
- ✅ TypeScript ready structure

### User Experience

- ✅ Smooth scroll animations
- ✅ Form validation with error messages
- ✅ Loading states
- ✅ Responsive design
- ✅ Accessibility features

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Adding New Animations

1. Add animation type to `useGSAPAnimation.js`
2. Update `ANIMATION_CONFIG` in `data.js`
3. Apply to component

### Adding New Sections

1. Create component in `components/`
2. Add data to `constants/data.js`
3. Import and use in `App.jsx`

### Modifying Content

All content is in `src/constants/data.js` - simply update the data objects.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using React, Vite, and GSAP**
