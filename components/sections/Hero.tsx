const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden group">

      {/* ── FULL-BLEED BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dimmed slightly by default, brightens to full on hover */}
        <img
          src="/hero-bg.png"
          alt="W4NT3D Hero Background"
          className="w-full h-full object-cover object-center brightness-80 group-hover:brightness-95 transition-all duration-700 ease-in-out"
        />

        {/* Gradient overlays so text stays readable (reduced intensity for better visibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-10 pointer-events-none" />

        {/* ── HEADLIGHT GLOW OVERLAYS (turn on independently on hover) ──
            Using a container that matches the exact aspect ratio of the 1:1 image
            to keep the glows perfectly aligned on all screen sizes.
        */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square min-w-full min-h-full pointer-events-none z-20">

          {/* Mercedes — Left headlight trigger area */}
          <div
            className="absolute group/left-light cursor-pointer pointer-events-auto"
            style={{
              left: '24%',
              top: '57%',
              width: '14%',
              height: '14%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Mercedes — Left headlight glow */}
            <div
              className="w-full h-full opacity-0 group-hover/left-light:opacity-100 transition-opacity duration-300 pointer-events-none animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,230,180,0.85) 30%, rgba(255,180,100,0.35) 60%, transparent 80%)',
                mixBlendMode: 'screen',
                borderRadius: '50%',
              }}
            />
          </div>

          {/* Mercedes — Right headlight trigger area */}
          <div
            className="absolute group/right-light cursor-pointer pointer-events-auto"
            style={{
              left: '49%',
              top: '58%',
              width: '12%',
              height: '12%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Mercedes — Right headlight glow */}
            <div
              className="w-full h-full opacity-0 group-hover/right-light:opacity-100 transition-opacity duration-300 pointer-events-none animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,230,180,0.85) 30%, rgba(255,180,100,0.35) 60%, transparent 80%)',
                mixBlendMode: 'screen',
                borderRadius: '50%',
                animationDelay: '0.15s',
              }}
            />
          </div>

          {/* Motorcycle — Main headlight trigger area */}
          <div
            className="absolute group/moto-light cursor-pointer pointer-events-auto"
            style={{
              left: '61%',
              top: '60%',
              width: '18%',
              height: '18%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Motorcycle — Main headlight glow */}
            <div
              className="w-full h-full opacity-0 group-hover/moto-light:opacity-100 transition-opacity duration-300 pointer-events-none animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,150,0.9) 25%, rgba(255,200,50,0.45) 50%, transparent 75%)',
                mixBlendMode: 'screen',
                borderRadius: '50%',
                animationDelay: '0.08s',
              }}
            />
          </div>
        </div>
      </div>

      {/* ── FOREGROUND CONTENT ── */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-between px-6 md:px-12 pt-28 pb-12 md:pt-32 md:pb-20">

        {/* Top tagline */}
        <div className="text-center">
          <p className="text-gray-400 tracking-[0.25em] md:tracking-[0.4em] text-xs sm:text-sm font-heading">
            DREAM IT. BUILD IT. LIVE IT.
          </p>
        </div>

        {/* Big background word mark */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
          <h1
            className="text-[6rem] sm:text-[10rem] md:text-[18rem] font-heading font-bold text-transparent tracking-widest leading-none opacity-10"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}
          >
            W<span style={{ WebkitTextStroke: '2px #e60000', WebkitTextFillColor: '#e60000' }}>4</span>NT3D
          </h1>
        </div>

        {/* Bottom text row */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-xs md:text-sm tracking-widest font-heading leading-relaxed">
              NOT EVERYONE<br />UNDERSTANDS.<br />
              THAT'S <span className="text-brand">THE POINT.</span>
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-gray-400 text-xs md:text-sm tracking-widest font-heading leading-relaxed">
              WE DON'T FOLLOW<br />THE GAME.<br />
              <span className="text-brand">WE CHANGE IT.</span>
            </p>
            <div className="mt-3 opacity-60 flex justify-center sm:justify-end">
              <span className="font-['Brush_Script_MT'] italic text-brand text-xl md:text-2xl">W4NT3D</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  )
}

export default Hero