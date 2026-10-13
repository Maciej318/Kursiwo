import React from 'react';
import { Search, User } from 'lucide-react';

export default function SearchSection() {
  return (
    <header className="w-full flex flex-col gap-3 md:flex-row md:items-center md:justify-between py-4 px-4 md:px-8 bg-[#f6f4ee]">
      
      <div className="relative inline-flex flex-col items-start pb-3 self-start">
        <span className="relative z-10 text-xs sm:text-sm font-bold tracking-wider text-stone-800 uppercase">
          Darmowe kursy. Większe możliwości.
        </span>

        <svg
          viewBox="0 0 160 24"
          preserveAspectRatio="none"
          className="absolute left-0 bottom-0 w-full h-4 -ml-1"
          aria-hidden="true"
        >
          <defs>
            <filter id="search-paint-rough" x="-5%" y="-30%" width="110%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" seed="7" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <g filter="url(#search-paint-rough)" fill="#dc2626">
            
            <path d="M3 13 C 20 7, 50 5, 90 7 C 120 8, 142 6, 157 9 L 154 12 C 140 11, 118 13, 92 13 C 60 14, 30 16, 6 17 Z" />
            
            <path d="M14 15 C 45 12, 85 13, 125 12 C 138 12, 147 13, 152 14 L 148 16 C 125 16, 90 17, 55 18 C 38 18.5, 24 19, 16 19 Z" opacity="0.85" />
            
            <path d="M150 8 L 158 8.5 L 156 10 L 149 10.5 Z" opacity="0.7" />
            <path d="M1 14 L 8 12.5 L 9 15 L 2 16.5 Z" opacity="0.7" />
          </g>
        </svg>
      </div>

      
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Szukaj kursu..."
            className="w-full pl-9 pr-4 py-2 bg-stone-100 border border-stone-300 rounded-full text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
          />
        </div>

        <button
          aria-label="Profil"
          className="p-2 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-200 transition-colors shrink-0"
        >
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}