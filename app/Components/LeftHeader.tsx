'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Home, BookOpen, Bookmark, Users, HelpCircle } from 'lucide-react';

const menuItems = [
  { name: 'Strona główna', icon: Home, active: true },
  { name: 'Kursy', icon: BookOpen, active: false },
  { name: 'Moje kursy', icon: Bookmark, active: false },
  { name: 'O nas', icon: Users, active: false },
  { name: 'FAQ', icon: HelpCircle, active: false },
];

/* Hamburger: 3 smugi farby */
const PaintHamburger = () => (
  <svg viewBox="0 0 40 32" className="w-9 h-8" fill="#dc2626" aria-hidden="true">
    <g filter="url(#paint-rough)">
      <path d="M3 7 C 12 4, 26 5, 37 6 L 36 9 C 26 10, 12 10, 4 11 Z" />
      <path d="M5 16 C 14 14, 24 15, 35 14.5 L 34 18 C 24 18.5, 14 19, 6 20 Z" />
      <path d="M3 25 C 12 23, 26 24, 37 23 L 36 27 C 26 28, 12 28.5, 4 29.5 Z" />
    </g>
  </svg>
);

/* X: 2 skrzyżowane smugi farby */
const PaintClose = () => (
  <svg viewBox="0 0 40 40" className="w-8 h-8" fill="#dc2626" aria-hidden="true">
    <g filter="url(#paint-rough)">
      <path d="M5 5 C 12 11, 22 21, 35 33 L 32 36 C 20 26, 12 18, 3 8 Z" />
      <path d="M34 4 C 28 12, 16 24, 5 35 L 8 37 C 18 28, 28 18, 37 7 Z" />
    </g>
  </svg>
);

export default function LeftHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Wspólny filtr rozdartych krawędzi farby (jedna definicja na cały komponent) */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="paint-rough" x="-5%" y="-30%" width="110%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Pasek mobilny */}
      <div className="md:hidden sticky top-0 z-40 h-14 px-4 flex items-center justify-between bg-[#EDE6DA] border-b border-stone-300">
        <Image src="/MainLogo.png" alt="Logo Kursiwo" width={40} height={40} className="object-contain" />
        <button
          onClick={() => setOpen(true)}
          aria-label="Otwórz menu"
          aria-expanded={open}
          className="p-1"
        >
          <PaintHamburger />
        </button>
      </div>

      {/* Przyciemnienie tła na mobile */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Sidebar: szuflada na mobile, stały panel od md */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto transform transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:z-auto md:min-h-screen md:overflow-hidden md:shrink-0
          bg-[#EDE6DA] border-r border-stone-300 flex flex-col justify-between select-none`}
      >
        {/* Zamknięcie – tylko mobile */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Zamknij menu"
          className="md:hidden absolute top-3 right-3 z-20 p-1"
        >
          <PaintClose />
        </button>

        <div>
          {/* Logo + nazwa */}
          <div className="flex flex-col items-center mb-6 pt-6 px-6">
            <Image
              src="/MainLogo.png"
              alt="Logo Kursiwo"
              width={160}
              height={160}
              priority
              className="w-32 h-auto object-contain"
            />
            <Image
              src="/NameKursiwo.png"
              alt="Kursiwo"
              width={200}
              height={60}
              priority
              className="w-40 h-auto object-contain mt-2"
            />
          </div>

          {/* Menu */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => setOpen(false)}
                  className={`w-full flex items-center space-x-3 px-6 py-3.5 text-sm font-medium transition-colors relative ${
                    item.active
                      ? 'text-red-600 font-semibold'
                      : 'text-stone-700 hover:text-red-600'
                  }`}
                >
                  {item.active && (
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-red-600 rounded-r-md"></div>
                  )}
                  <Icon className={`w-5 h-5 ${item.active ? 'text-red-600' : 'text-stone-600'}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Zdjęcie z gradientem od dołu */}
          <div className="relative w-full mt-4">
            <Image
              src="/LeftHeader.png"
              alt="Grafika japońska"
              width={256}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#EDE6DA] via-[#EDE6DA]/70 to-transparent backdrop-blur-[1px]" />
          </div>
        </div>

        {/* Decorative Bottom Section */}
        <div className="relative z-10 px-6 pt-4 pb-8 text-left">
          <svg viewBox="0 0 160 24" className="w-40 h-6 mb-3 -ml-1" aria-hidden="true">
            <g filter="url(#paint-rough)" fill="#dc2626">
              <path d="M3 13 C 20 7, 50 5, 90 7 C 120 8, 142 6, 157 9 L 154 12 C 140 11, 118 13, 92 13 C 60 14, 30 16, 6 17 Z" />
              <path d="M14 15 C 45 12, 85 13, 125 12 C 138 12, 147 13, 152 14 L 148 16 C 125 16, 90 17, 55 18 C 38 18.5, 24 19, 16 19 Z" opacity="0.85" />
              <path d="M150 8 L 158 8.5 L 156 10 L 149 10.5 Z" opacity="0.7" />
              <path d="M1 14 L 8 12.5 L 9 15 L 2 16.5 Z" opacity="0.7" />
            </g>
          </svg>
          <p className="text-lg text-stone-800 font-normal leading-snug whitespace-nowrap">
            Ucz się<br />na własnych zasadach.
          </p>
        </div>
      </aside>
    </>
  );
}