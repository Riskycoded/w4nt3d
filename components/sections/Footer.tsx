const Footer = () => {
    return (
        <footer id="footer" className="relative bg-[#050505] pt-24 pb-8 px-8 border-t border-white/10 overflow-hidden">
            
            {/* Drifting Exhaust Smoke behind the rider */}
            <div className="absolute bottom-4 right-10 md:right-20 lg:right-32 w-16 h-16 pointer-events-none z-0">
                <div className="smoke-particle smoke-1 bottom-0 right-0" />
                <div className="smoke-particle smoke-2 bottom-0 right-0" />
                <div className="smoke-particle smoke-3 bottom-0 right-0" />
            </div>

            {/* Transparent/Blend-mode Wheelie Rider Video */}
            <div className="absolute bottom-0 right-0 md:right-8 lg:right-16 w-[180px] md:w-[280px] h-[120px] md:h-[180px] pointer-events-none z-10 select-none overflow-hidden flex items-end justify-center">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-contain mix-blend-screen opacity-90 transition-opacity duration-700"
                >
                    <source src="/footer-wheelie.webm" type="video/webm" />
                    <source src="/footer-wheelie.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto max-w-7xl flex flex-col items-center relative z-20">

                {/* Top Call to Action */}
                <div className="text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-widest text-gray-200 mb-8">
                        YOU DON'T NEED <span className="text-brand">PERMISSION</span> TO BE GREAT.
                    </h3>
                    <a href="https://x.com/willrunnnn" className="border border-brand/50 hover:border-brand text-white font-heading tracking-widest text-sm py-3 px-8 mx-auto flex items-center gap-4 transition-all group">
                        JOIN THE MOVEMENT
                        <span className="text-brand group-hover:translate-x-1 transition-transform">❯</span>
                    </a>
                </div>

                {/* Bottom Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
                    {/* Logo */}
                    <div className="text-2xl font-heading font-bold tracking-widest">
                        W<span className="text-brand">4</span>NT3D
                    </div>

                    {/* Copyright */}
                    <div className="text-gray-500 font-heading tracking-widest text-xs">
                        © 2026 W4NT3D. ALL RIGHTS RESERVED.
                    </div>

                    {/* Socials Placeholder */}
                    <div className="flex gap-6">
                        <a href="https://www.snapchat.com/@threee59?sender_web_id=b236dd9c-0af6-45ed-9d4b-927e3d3cb6a1&device_type=desktop&is_copy_url=true" className="text-gray-400 hover:text-white transition-colors" aria-label="Snapchat">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 .157-.142z"/>
                            </svg>
                        </a>
                        <a href="https://x.com/willrunnnn" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer