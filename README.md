# DogStudio 3D Clone 🐕

A high-fidelity clone of the iconic DogStudio website interactive experience, built with **React**, **Three.js**, and **GSAP**. This project features a stunning 3D dog model with custom shader transitions, immersive scroll-based animations, and a rich, interactive user interface.

![DogStudio Clone Preview](/public/preview_placeholder.png) *(Note: Add a real preview image here if available)*

## 🌟 Key Features

- **Interactive 3D Scene**: Powered by `@react-three/fiber` and `@react-three/drei`, featuring a GLTF dog model with realistic textures and animations.
- **Custom Shader Transitions**: Advanced GLSL shaders implemented in `Dog.jsx` for smooth "matcap" transitions between different visual states based on user interaction (hovering over titles).
- **Scroll-Driven Animations**: Seamless integration of `GSAP` and `ScrollTrigger` to animate the 3D model's position, rotation, and scale as the user moves through the page.
- **Dynamic CSS UI**: A premium, responsive interface styled with **Tailwind CSS**, featuring glassmorphism and smooth hover effects.
- **Audio Experience**: Interactive sound effects (wolf howl) triggered on user interaction.

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
   git clone <repository-url>
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

## 📂 Project Structure

```
React-Dog/
├── public/              # Static assets (3D models, textures, sounds)
├── src/
│   ├── components/      # React components
│   │   ├── Dog.jsx      # Core 3D scene & GSAP logic
│   │   ├── Nav.jsx      # Navigation component
│   │   ├── SectionX.jsx # Content sections
│   │   └── Footer.jsx   # Footer component
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
