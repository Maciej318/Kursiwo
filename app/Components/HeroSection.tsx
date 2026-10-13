'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const enterRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const events = ['pointerdown', 'click', 'keydown', 'touchstart'];

    const audio = new Audio('/voice/KURSIWO.mp3');
    audio.preload = 'auto';
    audio.volume = 0.5;
    audio.load();
    audioRef.current = audio;

    const enter = enterRef.current;
    if (enter) enter.volume = 0.4;
    let enterPlayed = false;

    const playEnter = () => {
      if (enterPlayed || !enter) return;
      enter
        .play()
        .then(() => {
          enterPlayed = true;
        })
        .catch(() => {
          
        });
    };

    const onFirstInteraction = () => {
      playEnter();

      
      const a = audioRef.current;
      if (a) {
        a.muted = true;
        a.play()
          .then(() => {
            a.pause();
            a.currentTime = 0;
            a.muted = false;
          })
          .catch(() => {
            a.muted = false;
          });
      }

      events.forEach((e) => window.removeEventListener(e, onFirstInteraction));
    };

   
    playEnter();
    events.forEach((e) => window.addEventListener(e, onFirstInteraction));

    return () => {
      events.forEach((e) => window.removeEventListener(e, onFirstInteraction));
      audio.pause();
      enter?.pause();
      audioRef.current = null;
    };
  }, []);

  
  const playLogoSound = () => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    a.play().catch(() => {
      
    });
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[420px] lg:min-h-[480px] flex flex-col md:flex-row items-center justify-between gap-8 px-5 sm:px-8 md:px-12 lg:px-16 py-10 shadow-sm">
      
      <audio ref={enterRef} src="/voice/EnterSound.mp3" autoPlay preload="auto" />

      
      <Image
        src="/HeroBg.png"
        alt="Tło sekcji głównej"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-0"
      />

      
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#f0ece1]/90 via-[#f0ece1]/60 to-transparent z-[1]" />

      
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center md:items-start md:text-left">
        
        <div className="relative w-52 h-20 sm:w-60 sm:h-24 mb-2 flex items-center justify-center">
          <svg
            viewBox="0 0 240 96"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <filter id="hero-paint-rough" x="-5%" y="-20%" width="110%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="5" result="n" />
                <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            <g filter="url(#hero-paint-rough)" fill="#dc2626">
              <path d="M8 30 C 40 14, 100 10, 160 14 C 195 16, 222 12, 234 20 L 230 70 C 200 80, 150 84, 100 82 C 60 81, 28 86, 10 78 Z" />
              <path d="M4 44 C 14 36, 24 34, 30 38 L 28 66 C 20 70, 10 70, 4 64 Z" opacity="0.85" />
              <path d="M226 26 C 234 24, 240 28, 238 36 L 236 62 C 232 66, 228 64, 226 60 Z" opacity="0.85" />
            </g>
          </svg>
          <span className="relative z-10 text-white font-black text-4xl sm:text-5xl tracking-widest drop-shadow">
            学ぶ
          </span>
        </div>

        
        <h1 className="mb-3">
          <Image
            src="/NameKursiwo.png"
            alt="KURSIWO"
            width={480}
            height={140}
            priority
            className="w-64 sm:w-80 lg:w-96 h-auto object-contain"
          />
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 mb-4 leading-snug">
          Darmowe kursy. Większe możliwości.
        </h2>

        <p className="text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 font-medium">
          Rozwijaj swoje pasje, zdobywaj nowe umiejętności i buduj lepszą przyszłość – całkowicie za darmo.
        </p>

        <button className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white text-base font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95">
          <span>Przeglądaj kursy</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      
      <div className="relative z-10 flex items-center justify-center w-full md:w-1/2">
        <div
          className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96 cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onPointerEnter={playLogoSound}
          onClick={playLogoSound}
        >
          <Image
            src="/MainLogo.png"
            alt="Logo Kursiwo"
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 256px, 208px"
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}