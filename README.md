# LDB Landing Page

A modern, responsive landing page for LDB (Learning Development Business) built with React and Vite.

## 🚀 Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive Sections**:
  - Hero section with animated typing effect
  - Interactive "Why Choose LDB" section with hover effects
  - Client logos showcase
  - Auto-rotating services carousel
- **Smooth Animations**: CSS animations and transitions throughout
- **Professional Color Scheme**: Teal/blue theme with consistent branding

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Bootstrap 5** - Responsive CSS framework
- **Font Awesome** - Icons
- **CSS3** - Custom animations and styling

## 📁 Project Structure

```
LDB-landing-page/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Main hero section
│   │   ├── Header.jsx        # Navigation header
│   │   ├── WhyChooseLDB.jsx  # Interactive values section
│   │   ├── ClientLogos.jsx   # Client logos showcase
│   │   └── Services.jsx      # Services carousel
│   ├── assets/
│   │   ├── logos/            # Client logo images
│   │   └── *.png             # Hero and other images
│   ├── App.jsx               # Main app component
│   ├── App.css               # Main styles
│   └── main.jsx              # App entry point
├── .github/workflows/        # GitHub Actions deployment
└── dist/                     # Built files (generated)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mohamedmosilhy/LDB-Landing-Page.git
cd LDB-Landing-Page
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages.

### GitHub Pages

The site is automatically deployed to GitHub Pages when you push to the `main` branch. The deployment workflow:

1. Builds the project using Vite
2. Deploys to the `gh-pages` branch
3. Makes the site available at: `https://mohamedmosilhy.github.io/LDB-Landing-Page/`

### Manual Deployment

If you want to deploy manually:

1. Build the project: `npm run build`
2. The built files are in the `dist/` directory
3. Upload the contents of `dist/` to your web server

## 🎨 Customization

### Colors

The main color scheme uses teal/blue gradients:

- Primary: `#0f596d` (Dark Teal)
- Secondary: `#1a7a8f` (Medium Teal)
- Accent: `#2a9bb3` (Light Teal)

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add corresponding styles to `src/App.css`

### Adding New Services

Edit the `services` array in `src/components/Services.jsx` to add new services.

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses ESLint for code quality. Run `npm run lint` to check for issues.

## 📄 License

This project is private and proprietary to LDB.

## 🤝 Contributing

This is a private project. For any issues or suggestions, please contact the development team.

---

**Built with ❤️ for LDB**
