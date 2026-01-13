const Footer = () => {
  return (
    <footer className="Footer relative z-10 mt-32 border-t border-white/10 bg-black/30
 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide">
            
            Ritam Maty
          </h2>
          <p className="mt-2 max-w-md text-sm text-white/60">
            Creative Developer focused on building emotional,
            immersive web experiences using React, Three.js & GSAP.
          </p>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <a
            href="https://www.linkedin.com/in/ritammaty/"
            // target="_blank"
            className="text-sm text-white/70 transition hover:text-white"
          >
            <i className="ri-linkedin-fill"></i>
           
          </a>

          <a
            href="https://github.com/ritam-g"
            // target="_blank"
            className="text-sm text-white/70 transition hover:text-white"
          >
            <i className="ri-github-line"></i>
          </a>

          <a
            href="https://www.instagram.com/ritam.maty/"
            target="_blank"
            className="text-sm text-white/70 transition hover:text-white"
          >
            <a href=""><i className="ri-instagram-line"></i></a>
            
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Ritam Maty. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
