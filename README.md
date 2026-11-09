# TheSuperPoop Art Portfolio

A React-based art portfolio website for displaying artwork under the pen name "TheSuperPoop".

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Custom CSS** - Design system with CSS variables

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd art-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run linter

## Project Structure

```
art-site/
├── src/
│   ├── components/       # Reusable components
│   │   └── BackgroundIllustration.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Sketches.jsx
│   │   ├── Renders.jsx
│   │   ├── Game.jsx
│   │   ├── Commissions.jsx
│   │   └── Contact.jsx
│   ├── assets/          # Static assets
│   │   └── images/
│   ├── App.jsx          # Main app shell
│   ├── App.css          # Component styles
│   ├── main.jsx         # Entry point with routing
│   └── index.css        # Global CSS variables
├── public/              # Public static files
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Pages

- **Home** (`/`) - Main landing page with navigation
- **Sketches** (`/sketches`) - Sketch artwork gallery
- **Renders** (`/renders`) - Full render artwork gallery
- **Game** (`/game`) - Idle Clicker RPG game
- **Commissions** (`/commissions`) - Commission information
- **Contact** (`/contact`) - Contact form and info

## Design System

The site uses a custom CSS design system with:

- **Primary accent**: Purple (#a855f7)
- **Secondary accent**: Teal (#14b8a6)
- **Fonts**: Chakra Petch (display), JetBrains Mono (mono), Inter (body)
- **Dark theme** with purple/pink glow effects

## Background System

The `BackgroundIllustration` component supports easy background customization:

- `type="pattern"` - Grid or dot patterns
- `type="gradient"` - Gradient orbs

Usage:
```jsx
<BackgroundIllustration type="pattern" variant="default" />
```

## Next Steps

1. Add navigation tiles to Home page
2. Build gallery components for Sketches and Renders pages
3. Implement the Idle Clicker RPG game
4. Create commission pricing page
5. Build contact form
6. Add artwork images to `src/assets/images/`
