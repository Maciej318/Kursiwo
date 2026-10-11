import React from 'react';
import Image from 'next/image';

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="mx-8 mt-8 mb-6 pt-4 border-t border-stone-300/60 flex flex-col md:flex-row items-center justify-between text-sm text-stone-700 gap-4">
      
      <div className="flex items-center space-x-3">
        <Image
          src="/MainLogo.png"
          alt="Logo Kursiwo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
        <Image
          src="/NameKursiwo.png"
          alt="Kursiwo"
          width={120}
          height={36}
          className="h-7 w-auto object-contain"
        />
      </div>

      
      <p className="text-stone-700 font-normal text-center">
        © 2026 Kursiwo. Wszelkie prawa zastrzeżone.
      </p>

      
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <div className="flex items-center space-x-4 text-stone-900">
          <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
            <YouTubeIcon />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-red-600 transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="Discord" className="hover:text-red-600 transition-colors">
            <DiscordIcon />
          </a>
        </div>

        <span className="text-stone-700 font-normal text-center">
          Razem do{' '}
          <span className="relative inline-block">
            lepszej wersji
            <svg
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              className="absolute left-0 -bottom-2 w-full h-2"
              aria-hidden="true"
            >
              <path
                d="M1 5 C 25 1.5, 70 1.5, 99 4"
                fill="none"
                stroke="#dc2626"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          siebie.
        </span>
      </div>
    </footer>
  );
}