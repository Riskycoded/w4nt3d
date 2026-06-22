interface MerchItem {
  id: number;
  name: string;
  src: string;
  tag: string;
  spec: string;
  status: string;
}

const merchItems: MerchItem[] = [
  {
    id: 1,
    name: 'WILL RUN LEATHER JACKET',
    src: '/merch-1.jpg',
    tag: 'W4N.JKT.01',
    spec: 'PREMIUM CALFSKIN // SILK LINING',
    status: 'LIMITED EDITION',
  },
  {
    id: 2,
    name: 'SOVRN FUTURISTIC HOODIE',
    src: '/merch-2.jpg',
    tag: 'W4N.HD.SVRN1',
    spec: 'GLOSS TECH PANELS // UTILITY DESIGN',
    status: 'DROP_01 // SOVRN',
  },
  {
    id: 3,
    name: 'W4NT3D TRUCKER CAP',
    src: '/merch-3.jpg',
    tag: 'W4N.CAP.WHTPK',
    spec: 'TRUCKER CAP // EMBROIDERED',
    status: 'LOW STOCK',
  },
  {
    id: 4,
    name: 'WILL RUN HOODIE (GREY)',
    src: '/merch-4.jpg',
    tag: 'W4N.HD.RUN',
    spec: 'HEAVY FLEECE // BACK GRAPHIC',
    status: 'RESTOCKED',
  },
  {
    id: 5,
    name: 'SOVRN OVERSIZED HOODIE',
    src: '/merch-5.jpg',
    tag: 'W4N.HD.SVRN2',
    spec: 'TECH STITCH // SIGNATURE IDENTITY',
    status: 'DROP_01 // SOVRN',
  },
];

const Store = () => {
  return (
    <section id="store" className="bg-black pt-24 pb-32 px-8 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-brand font-heading tracking-widest text-sm uppercase">STREETWEAR drops</p>
            <h2 className="text-5xl md:text-7xl font-heading font-bold leading-none tracking-wide text-gray-100 mt-2">
              W4NT3D <span className="text-brand">GEAR.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-body text-sm max-w-md md:text-right leading-relaxed">
            High-fabric utility wear designed for the road and engineered for the street. Drop 01 is strictly limited.
          </p>
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item) => (
            <div key={item.id} className="relative overflow-hidden group border border-white/5 bg-black/40 hover:border-brand/40 shadow-lg hover:shadow-[0_0_30px_rgba(230,0,0,0.15)] transition-all duration-500 flex flex-col justify-between">
              
              {/* Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-brand transition-all duration-300 z-30" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-brand transition-all duration-300 z-30" />

              {/* Tag overlays */}
              <div className="absolute top-4 left-4 z-20 bg-black/80 border border-white/10 px-3 py-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ping" />
                <span className="text-[10px] tracking-[0.15em] font-heading font-semibold text-white">{item.status}</span>
              </div>
              <div className="absolute top-4 right-4 z-20 bg-black/80 border border-white/10 px-3 py-1">
                <span className="text-[10px] tracking-[0.15em] font-heading font-semibold text-brand">{item.tag}</span>
              </div>

              {/* Product Image */}
              <div className="h-[380px] w-full overflow-hidden relative bg-neutral-950 flex items-center justify-center">
                <img 
                  src={item.src} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-[0.95] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-60 pointer-events-none" />
              </div>

              {/* Product Info */}
              <div className="p-6 bg-neutral-900/30 flex-1 flex flex-col justify-between gap-6 border-t border-white/5">
                <div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white tracking-wider leading-none">
                    {item.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.15em] font-heading text-gray-400 mt-2">
                    {item.spec}
                  </p>
                </div>

                <a 
                  href="https://x.com/willrunnnn" 
                  className="border border-white/15 text-white font-heading tracking-widest text-xs py-3 w-full text-center hover:bg-brand hover:border-brand transition-all duration-300 cursor-pointer block"
                >
                  SECURE ITEM
                </a>
              </div>

            </div>
          ))}

          {/* Slot 6 — Special Promo Card */}
          <div className="relative overflow-hidden border border-white/5 bg-neutral-900/20 p-8 flex flex-col justify-between h-full group hover:border-brand/40 shadow-lg hover:shadow-[0_0_30px_rgba(230,0,0,0.15)] transition-all duration-500 min-h-[500px]">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-brand transition-all duration-300 z-30" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-brand transition-all duration-300 z-30" />
            
            {/* Background watermark */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 z-0">
              <span className="text-9xl font-heading font-black tracking-widest text-white">SOVRN</span>
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <p className="text-brand font-heading tracking-widest text-xs uppercase">MEMBERSHIP ACCESS</p>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-200 leading-none">
                UNLOCK<br />
                <span className="text-brand">PRIVILEGES.</span>
              </h3>
            </div>

            <div className="relative z-10 mt-auto flex flex-col gap-4">
              <p className="text-gray-400 font-body text-xs leading-relaxed">
                Join our private drop notifications and obtain exclusive codes for early access to SOVRN streetwear releases.
              </p>
              <a href="https://x.com/willrunnnn" className="border border-brand text-white font-heading tracking-widest text-xs py-3 px-6 w-full text-center hover:bg-brand transition-all duration-300 cursor-pointer block">
                JOIN THE LIST
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Store;