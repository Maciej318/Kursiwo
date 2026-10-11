import React from 'react';
import Image from 'next/image';

interface BrushStrokeProps {
  /** Tekst wyświetlany wewnątrz maźnięcia */
  text: string;
  /** Rozmiar w pikselach lub klasach Tailwind (domyślnie 'md') */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Dodatkowe własne klasy CSS (np. marginesy) */
  className?: string;
  /** Opcjonalne przesunięcie tekstu, gdyby sama plama na zdjęciu była asymetryczna */
  textOffsetX?: string;
}

const sizeClasses = {
  sm: {
    container: 'w-[140px] h-[48px]',
    text: 'text-xs sm:text-sm',
  },
  md: {
    container: 'w-[280px] sm:w-[320px] h-[100px] sm:h-[120px]',
    text: 'text-lg sm:text-xl',
  },
  lg: {
    container: 'w-[380px] sm:w-[440px] h-[140px] sm:h-[160px]',
    text: 'text-xl sm:text-2xl',
  },
  xl: {
    container: 'w-[480px] sm:w-[540px] h-[170px] sm:h-[200px]',
    text: 'text-2xl sm:text-3xl',
  },
};

export default function BrushStroke({
  text,
  size = 'md',
  className = '',
  textOffsetX = '',
}: BrushStrokeProps) {
  const currentSize = sizeClasses[size];

  return (
    <div
      className={`relative ${currentSize.container} flex items-center justify-center select-none ${className}`}
    >
      <Image
        src="/BrushStroke.png"
        alt="Maźnięcie pędzlem"
        fill
        className="object-contain object-center"
        priority
      />
      <span
        className={`relative z-10 text-white font-bold tracking-widest text-center ${currentSize.text} ${textOffsetX}`}
      >
        {text}
      </span>
    </div>
  );
}