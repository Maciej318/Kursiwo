import React from 'react';
import Image from 'next/image';
import { BookOpen, Activity, Users } from 'lucide-react';
import BrushStroke from './BrushStroke';

export default function InformationSection() {
  return (
    <section className="relative mx-8 my-6 flex items-center min-h-[150px] px-8 lg:px-12 py-8">
      {/* Filtr SVG do rozdartych krawędzi */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <filter id="rough-edge" x="-5%" y="-20%" width="110%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Tło: zdjęcie + przyciemnienie + szary pas – z postrzępionymi krawędziami */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ filter: 'url(#rough-edge)' }}
      >
        <div className="absolute inset-[-6px]">
          <Image
            src="/Info.png"
            alt="Tło sekcji informacyjnej"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(41,37,36,0.65) 22%, rgba(41,37,36,0.65) 78%, rgba(0,0,0,0.15) 100%)',
            }}
          />
        </div>
      </div>

      {/* Treść */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {/* Kolumny informacyjne – na środku sekcji */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 w-full max-w-3xl xl:max-w-4xl mx-auto">
          {/* Item 1 */}
          <div className="flex items-center justify-center space-x-4 md:px-6">
            <BookOpen className="w-8 h-8 text-white shrink-0 stroke-[1.5]" />
            <div>
              <h4 className="font-bold text-sm text-white leading-tight">100% za darmo</h4>
              <p className="text-xs text-stone-200 mt-1 leading-snug">
                Wszystkie kursy są bezpłatne.<br />Bez ukrytych kosztów.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-center space-x-4 md:px-6 md:border-x md:border-white/25">
            <Activity className="w-8 h-8 text-white shrink-0 stroke-[1.5]" />
            <div>
              <h4 className="font-bold text-sm text-white leading-tight">Ucz się w swoim tempie</h4>
              <p className="text-xs text-stone-200 mt-1 leading-snug">
                Dostęp do kursów 24/7.<br />Kiedy chcesz, gdzie chcesz.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-center space-x-4 md:px-6">
            <Users className="w-8 h-8 text-white shrink-0 stroke-[1.5]" />
            <div>
              <h4 className="font-bold text-sm text-white leading-tight">Dla każdego</h4>
              <p className="text-xs text-stone-200 mt-1 leading-snug">
                Kursy dla początkujących<br />i zaawansowanych.
              </p>
            </div>
          </div>
        </div>

        {/* BrushStroke po prawej */}
        <div className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 flex-col items-center justify-center">
          <BrushStroke text="歩ず" size="lg" className="!w-56 !h-20" />
          <span className="text-[10px] tracking-[0.25em] text-stone-200 uppercase -mt-1 font-bold">
            KROK PO KROKU
          </span>
        </div>
      </div>
    </section>
  );
}