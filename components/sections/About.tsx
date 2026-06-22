import Card from '../ui/cardabout'

const cards = [
  { image: '/img1.png', title: 'STAY FOCUSED', description: 'Block out the noise.\nLock in on your goals.' },
  { image: '/img2.png', title: 'STAY HUNGRY', description: 'Comfort is the enemy.\nHunger is the fuel.' },
  { image: '/img3.png', title: 'STAY W4NT3D', description: 'Be unforgettable.\nLeave your mark.' },
]

const About = () => {
  return (
    <section id="about" className="relative bg-black pt-32 pb-20 px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column Text */}
          <div className="flex flex-col gap-6">
            <p className="text-brand font-heading tracking-widest text-sm">ABOUT</p>
            <h2 className="text-5xl md:text-6xl font-heading font-bold leading-none tracking-wide text-gray-200">
              BUILT DIFFERENT.<br />
              MADE TO <span className="text-brand">STAND OUT.</span>
            </h2>
            
            <div className="text-gray-400 font-body text-sm leading-relaxed max-w-md mt-4 space-y-4">
              <p>W4NT3D is more than a name - it's a mindset.</p>
              <p>For the ones who move in silence, grind in private, and let success make the noise.</p>
              <p>This is for the visionaries, the risk-takers, the ones who never ask for permission.</p>
              <p>This is our world. Welcome to it.</p>
            </div>
            
            <a href="https://x.com/willrunnnn" className="mt-4 border border-brand/50 hover:border-brand text-white font-heading tracking-widest text-sm py-3 px-8 w-max flex items-center gap-4 transition-all group">
              LEARN MORE 
              <span className="text-brand group-hover:translate-x-1 transition-transform">❯</span>
            </a>
          </div>

          {/* Right Column Image */}
          <div className="relative">
            <div className="absolute -top-10 right-0 text-right z-20">
              <p className="font-['Brush_Script_MT'] italic text-gray-300 text-3xl md:text-4xl transform -rotate-2">
                NO HANDOUTS<br/>
                ONLY TAKEOVERS
              </p>
              <div className="h-0.5 w-full bg-brand mt-2 transform -rotate-2 origin-right"></div>
            </div>
            
            <div className="relative z-10 opacity-80 filter grayscale hover:grayscale-0 transition-all duration-500">
              {/* Torn edge effect could be achieved with SVG mask or just clip-path for simplicity */}
              <div className="border-l border-white/20 p-2" style={{ clipPath: 'polygon(0% 10%, 100% 0%, 100% 100%, 0% 95%, 5% 50%)' }}>
                <img src="/about-car.png" alt="Mustang Burnout" className="w-full h-auto object-cover opacity-60 mix-blend-lighten" onError={(e) => {e.currentTarget.src = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop'}} />
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About