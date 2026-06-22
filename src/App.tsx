import { useState } from 'react'
import './App.css'
import Hero from '../components/sections/Hero.tsx'
import About from '../components/sections/About.tsx'
import Store from '../components/sections/Store.tsx'
import Gallery from '../components/sections/Gallery.tsx'
import Footer from '../components/sections/Footer.tsx'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center"> 
          {/* Logo */}
          <div className="text-3xl font-heading font-bold tracking-widest z-50 relative">
            W<span className="text-brand">4</span>NT3D
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-[0.2em] font-heading">
          <a href="#home" className="text-brand transition-colors">HOME</a>
          <a href="#about" className="hover:text-brand transition-colors">ABOUT</a>
          <a href="#store" className="hover:text-brand transition-colors">MERCH</a>
          <a href="#gallery" className="hover:text-brand transition-colors">GALLERY</a>
          <a href="#footer" className="hover:text-brand transition-colors">CONTACT</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="https://x.com/willrunnnn" className="bg-brand text-white px-6 py-2 font-heading tracking-widest text-sm hover:bg-brand/80 transition-colors uppercase">
            JOIN THE MOVEMENT
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden z-50 relative">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-brand transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center min-h-screen">
          <div className="flex flex-col items-center gap-8 text-xl tracking-[0.2em] font-heading">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-brand transition-colors">HOME</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors text-gray-400">ABOUT</a>
            <a href="#store" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors text-gray-400">MERCH</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors text-gray-400">GALLERY</a>
            <a href="#footer" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors text-gray-400">CONTACT</a>
            <a href="https://x.com/willrunnnn" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-brand text-white px-8 py-3 font-heading tracking-widest text-lg hover:bg-brand/80 transition-colors uppercase">
              JOIN THE MOVEMENT
            </a>
          </div>
        </div>
      )}
      
      <main className="pt-20">
        <Hero />
        <About />
        <Store />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
