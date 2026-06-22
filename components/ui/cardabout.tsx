type CardProps = {
  image: string
  title: string
  description: string
}

const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="bg-[#0f0f0f] border border-white/5 p-8 flex flex-col items-center text-center group hover:border-brand/30 transition-colors duration-300">
      {/* Icon Placeholder (If image fails to load, we can fall back to an icon, but we use the image prop here) */}
      <div className="w-12 h-12 mb-6 text-brand flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(230,0,0,0.8)] transition-all" 
          onError={(e) => {
            // Fallback SVG if no image
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`;
          }}
        />
      </div>
      
      <h3 className="text-xl font-heading tracking-widest text-white mb-4">{title}</h3>
      <p className="text-gray-400 font-body text-sm leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  )
}

export default Card