import { useState } from 'react'

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  tag: string;
  title: string;
  spec: string;
  heightClass: string;
  offsetClass: string;
  colSpanClass?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: '/gallery-1.jpg',
    alt: 'Mercedes AMG in garage',
    tag: 'W4N.E63s',
    title: 'MERCEDES AMG E63s',
    spec: 'GARAGE // NIGHT SHIFT',
    heightClass: 'h-[400px]',
    offsetClass: '',
  },
  {
    id: 2,
    src: '/gallery-2.jpg',
    alt: 'Yamaha R1 blue',
    tag: 'W4N.R1',
    title: 'YAMAHA R1',
    spec: 'STREET // APEX PREDATOR',
    heightClass: 'h-[500px]',
    offsetClass: 'lg:translate-y-12',
  },
  {
    id: 3,
    src: '/gallery-3.jpg',
    alt: 'Jaguar squat hoodie',
    tag: 'W4N.JAG',
    title: 'JAGUAR F-TYPE S',
    spec: 'STREET // W4NT3D HOODIE',
    heightClass: 'h-[450px]',
    offsetClass: '',
  },
  {
    id: 4,
    src: '/gallery-4.jpg',
    alt: 'Motorcycle helmet skull',
    tag: 'W4N.MOTO',
    title: 'CUSTOM STREET BRAWLER',
    spec: 'OUTLAW // SKULL SHIELD',
    heightClass: 'h-[400px]',
    offsetClass: 'lg:-translate-y-6',
  },
  {
    id: 5,
    src: '/gallery-5.jpg',
    alt: 'Mustang beach lean',
    tag: 'W4N.50',
    title: 'FORD MUSTANG GT',
    spec: 'SHORELINE // BLACKOUT',
    heightClass: 'h-[500px]',
    offsetClass: '',
  },
  {
    id: 6,
    src: '/gallery-6.jpg',
    alt: 'Carbon custom motorcycle rider',
    tag: 'W4N.S1K',
    title: 'CARBON BMW M1000RR',
    spec: 'STREET // STEALTH RIDER',
    heightClass: 'h-[450px]',
    offsetClass: 'lg:translate-y-6',
  },
  {
    id: 7,
    src: '/gallery-7.jpg',
    alt: 'Sitting on Dodge Challenger SRT hood',
    tag: 'W4N.SRT',
    title: 'DODGE CHALLENGER SRT',
    spec: 'OUTLAW // HOOD SESSION',
    heightClass: 'h-[400px]',
    offsetClass: '',
  },
  {
    id: 9,
    src: '/gallery-9.jpg',
    alt: 'Midnight Mercedes car meet',
    tag: 'W4N.MEETUP',
    title: 'MIDNIGHT MEETUP',
    spec: 'PLAZA // SOCIAL SQUAD',
    heightClass: 'h-[400px]',
    offsetClass: '',
    colSpanClass: 'lg:col-span-2',
  },
  {
    id: 8,
    src: '/gallery-8.jpg',
    alt: 'Mustang and Lexus IS in rain',
    tag: 'W4N.SPECTRE',
    title: 'MUSTANG & LEXUS IS',
    spec: 'RAINY // DUAL SPECTRE',
    heightClass: 'h-[450px]',
    offsetClass: 'lg:-translate-y-6',
  },
];

const Gallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="bg-black pt-24 pb-40 px-6 md:px-12 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-brand font-heading tracking-widest text-sm uppercase">The Archive</p>
            <h2 className="text-5xl md:text-7xl font-heading font-bold leading-none tracking-wide text-gray-100 mt-2">
              W4NT3D <span className="text-brand">RAW.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-body text-sm max-w-md md:text-right leading-relaxed">
            A visual documentation of speed, style, and rebellion. Captured in raw detail, crafted for those who set the pace.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden group border border-white/5 cursor-pointer bg-black/40 hover:border-brand/40 shadow-lg hover:shadow-[0_0_30px_rgba(230,0,0,0.2)] transition-all duration-500 ease-out ${item.heightClass} ${item.offsetClass} ${item.colSpanClass || ''}`}
            >
              {/* Tactical Corners Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-brand group-hover:w-5 group-hover:h-5 transition-all duration-300 z-30" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-brand group-hover:w-5 group-hover:h-5 transition-all duration-300 z-30" />

              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover contrast-[1.15] scale-100 brightness-[0.85] grayscale-0 [@media(hover:hover)]:grayscale [@media(hover:hover)]:brightness-[0.45] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-[0.9] transition-all duration-700 ease-out z-10"
              />

              {/* HUD / Details Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none">
                {/* Top HUD elements */}
                <div className="flex justify-between items-center opacity-100 [@media(hover:hover)]:opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ping" />
                    <span className="text-[10px] tracking-[0.2em] font-heading font-semibold text-white">LIVE_FEED</span>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] font-heading font-semibold text-brand">{item.tag}</span>
                </div>

                {/* Bottom HUD elements */}
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-wider leading-none">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 opacity-100 [@media(hover:hover)]:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] tracking-[0.15em] font-heading text-gray-400">
                      {item.spec}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] font-heading text-brand font-bold">
                      VIEW RAW ❯
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slot 10 — Branding Card */}
          <div className="relative overflow-hidden border border-white/5 bg-neutral-900/20 p-8 flex flex-col justify-between h-[450px] lg:translate-y-6 lg:col-span-2 group hover:border-brand/40 shadow-lg hover:shadow-[0_0_30px_rgba(230,0,0,0.15)] transition-all duration-500">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-brand group-hover:w-5 group-hover:h-5 transition-all duration-300 z-30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-brand group-hover:w-5 group-hover:h-5 transition-all duration-300 z-30" />
            
            {/* Background watermark text */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 z-0">
              <span className="text-9xl font-heading font-black tracking-widest text-white">W4NT3D</span>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between h-full w-full gap-8">
              <div className="flex flex-col gap-2 max-w-sm">
                <p className="text-brand font-heading tracking-widest text-xs uppercase">Join the Movement</p>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-gray-200 leading-none">
                  BECOME<br />
                  <span className="text-brand">WANTED.</span>
                </h3>
              </div>

              <div className="flex flex-col gap-4 max-w-sm lg:mt-auto">
                <p className="text-gray-400 font-body text-xs leading-relaxed">
                  Submit your own custom build or street styling to be featured in the official archive.
                </p>
                <a href="https://x.com/willrunnnn" className="border border-brand text-white font-heading tracking-widest text-xs py-3 px-6 w-full text-center hover:bg-brand transition-all duration-300 cursor-pointer block">
                  SUBMIT SPEC
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 animate-fade-in cursor-zoom-out"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-brand transition-colors text-3xl font-heading focus:outline-none z-50 p-2 cursor-pointer"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-brand hover:scale-110 transition-all text-4xl md:text-6xl font-heading focus:outline-none z-50 p-4 cursor-pointer"
            onClick={showPrev}
          >
            ❮
          </button>
          
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-brand hover:scale-110 transition-all text-4xl md:text-6xl font-heading focus:outline-none z-50 p-4 cursor-pointer"
            onClick={showNext}
          >
            ❯
          </button>

          {/* Image Wrapper */}
          <div 
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center bg-black/80 border border-brand/20 p-2 md:p-4 shadow-[0_0_50px_rgba(230,0,0,0.3)] animate-scale-up cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Brackets in lightbox */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand" />

            <img 
              src={galleryItems[activeImageIndex].src} 
              alt={galleryItems[activeImageIndex].alt} 
              className="max-w-full max-h-[70vh] object-contain"
            />
            
            {/* Info bar */}
            <div className="w-full flex justify-between items-center mt-4 px-2">
              <div>
                <span className="text-brand font-heading text-xs tracking-widest uppercase">{galleryItems[activeImageIndex].tag}</span>
                <h4 className="text-xl md:text-2xl font-heading font-bold text-white tracking-wider leading-none mt-1">{galleryItems[activeImageIndex].title}</h4>
              </div>
              <span className="text-[10px] tracking-[0.2em] font-heading text-gray-500 font-semibold">{galleryItems[activeImageIndex].spec}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery