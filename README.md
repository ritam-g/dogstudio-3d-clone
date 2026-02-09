# DogStudio 3D Clone 🐕

A high-fidelity clone of the iconic DogStudio website interactive experience, built with **React**, **Three.js**, and **GSAP**. This project features a stunning 3D dog model with custom shader transitions, immersive scroll-based animations, and a rich, interactive user interface.

![DogStudio Clone Preview](/public/preview_placeholder.png) *(Note: Add a real preview image here if available)*

## 🌟 Key Features

- **Interactive 3D Scene**: Powered by `@react-three/fiber` and `@react-three/drei`, featuring a GLTF dog model with realistic textures and animations.
- **Custom Shader Transitions**: Advanced GLSL shaders implemented in `Dog.jsx` for smooth "matcap" transitions between different visual states based on user interaction (hovering over titles).
- **Scroll-Driven Animations**: Seamless integration of `GSAP` and `ScrollTrigger` to animate the 3D model's position, rotation, and scale as the user moves through the page.
- **Dynamic CSS UI**: A premium, responsive interface styled with **Tailwind CSS**, featuring glassmorphism and smooth hover effects.
- **Audio Experience**: Interactive sound effects (wolf howl) triggered on user interaction.
- **Professional Loading States**: Animated progress indicator with smooth transitions during 3D asset loading.
- **Mobile Optimization**: Device-based quality settings for optimal performance across all devices.
- **Error Handling**: Graceful error boundaries to prevent crashes and provide user-friendly fallbacks.
- **Performance Monitoring**: FPS tracking in development mode to ensure smooth 60fps experience.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) 
- **3D Engine**: [Three.js](https://threejs.org/) with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Animation**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger, useGSAP)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ritam-g/dogstudio-3d-clone.git
   cd React-Dog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## ⚡ Performance Features

### Loading States
- **Progress Indicator**: Real-time loading progress with animated progress bar
- **Smooth Transitions**: Fade-in animation after 3D assets load
- **Suspense Boundaries**: React Suspense integration for optimal UX

### Mobile Optimization
- **Device Detection**: Automatic detection of mobile devices
- **Quality Presets**: Dynamic quality adjustment (low/high) based on device
- **Adaptive Rendering**: Lower pixel ratio on mobile for better performance
- **Scale Adjustment**: Optimized model scale for different screen sizes

### Error Handling
- **Error Boundaries**: Graceful handling of WebGL/3D failures
- **User-Friendly Fallbacks**: Clear error messages with reload option
- **Crash Prevention**: Isolated 3D errors don't break the entire app

### Performance Monitoring
- **FPS Tracking**: Real-time FPS monitoring in development mode
- **Performance Warnings**: Console warnings when FPS drops below 30
- **Optimized Rendering**: Canvas performance configuration for smooth 60fps

## 📂 Project Structure

```
React-Dog/
├── public/              # Static assets (3D models, textures, sounds)
├── src/
│   ├── components/      # React components
│   │   ├── Dog.jsx      # Core 3D scene & GSAP logic
│   │   ├── Loader.jsx   # Loading progress component
│   │   ├── CanvasErrorBoundary.jsx  # Error handling
│   │   ├── Nav.jsx      # Navigation component
│   │   ├── SectionX.jsx # Content sections
│   │   └── Footer.jsx   # Footer component
│   ├── utils/           # Utility functions
│   │   └── deviceDetection.js  # Device & quality detection
│   ├── App.jsx          # Main application entry
│   ├── main.jsx         # React mounting point
│   └── App.css          # Global styles & Tailwind imports
├── package.json         # Dependencies & scripts
└── vite.config.js       # Vite configuration
```

## 🎨 Credits & Assets

- **3D Model**: Dog model (DRC compressed GLB) located in `public/models/`.
- **Textures**: Normal maps and matcaps used for the procedural material effects.
- **Inspired by**: [Dogstudio](https://dogstudio.co/)

---

Made with ❤️ by [Your Name/Username]
