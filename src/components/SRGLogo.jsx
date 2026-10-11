export default function SRGLogo({ className = "w-9 h-9" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-[0_2px_10px_rgba(59,130,246,0.35)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="srgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
          <linearGradient id="innerArc" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer Circular Shield Frame */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke="url(#srgGradient)" 
          strokeWidth="3" 
          className="opacity-80"
        />

        {/* Technical Mechanical Crosshairs */}
        <line x1="50" y1="2" x2="50" y2="10" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="90" x2="50" y2="98" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="2" y1="50" x2="10" y2="50" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="90" y1="50" x2="98" y2="50" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />

        {/* Dynamic Aerodynamic Swirls (matching user's favicon/logo silhouette) */}
        <path 
          d="M 50 16 A 34 34 0 0 1 84 50 C 84 62 76 72 65 72 C 55 72 50 63 46 56 C 42 49 37 42 27 42 C 20 42 16 46 16 50 A 34 34 0 0 1 50 16 Z" 
          fill="url(#srgGradient)"
        />
        
        <path 
          d="M 50 84 A 34 34 0 0 1 16 50 C 16 38 24 28 35 28 C 45 28 50 37 54 44 C 58 51 63 58 73 58 C 80 58 84 54 84 50 A 34 34 0 0 1 50 84 Z" 
          fill="url(#innerArc)"
        />

        {/* Center Precise Core Orbit */}
        <circle cx="50" cy="50" r="4.5" fill="#ffffff" />
      </svg>
    </div>
  );
}
