import Image from 'next/image';
import { Code, Languages, Palette, Heart, Camera, Clock, BarChart2, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    badge: 'Darmowy',
    category: 'PROGRAMOWANIE',
    categoryIcon: Code,
    title: 'Podstawy Pythona',
    description: 'Poznaj podstawy języka Python i napisz swoje pierwsze programy.',
    duration: '4 godz.',
    level: 'Początkujący',
    imageSrc: '/courses/programming.jpg',
  },
  {
    id: 2,
    badge: 'Darmowy',
    category: 'JĘZYKI',
    categoryIcon: Languages,
    title: 'Japoński od podstaw',
    description: 'Naucz się podstaw języka japońskiego – zwrotów, pisma i kultury.',
    duration: '6 godz.',
    level: 'Początkujący',
    imageSrc: '/courses/japan.jpg',
  },
  {
    id: 3,
    badge: 'Darmowy',
    category: 'KREATYWNOŚĆ',
    categoryIcon: Palette,
    title: 'Rysunek cyfrowy',
    description: 'Poznaj podstawy rysunku cyfrowego i naucz się tworzyć własne ilustracje.',
    duration: '5 godz.',
    level: 'Początkujący',
    imageSrc: '/courses/drawing.jpg',
  },
  {
    id: 4,
    badge: 'Darmowy',
    category: 'ROZWÓJ OSOBISTY',
    categoryIcon: Heart,
    title: 'Siła nawyków',
    description: 'Zbuduj lepsze nawyki i osiągaj swoje cele krok po kroku.',
    duration: '3 godz.',
    level: 'Początkujący',
    imageSrc: '/courses/climbing.jpg',
  },
  {
    id: 5,
    badge: 'Darmowy',
    category: 'FOTOGRAFIA',
    categoryIcon: Camera,
    title: 'Fotografia od podstaw',
    description: 'Poznaj zasady kompozycji, światła i obróbki zdjęć.',
    duration: '4 godz.',
    level: 'Początkujący',
    imageSrc: '/courses/photography.jpg',
  },
];

/* Smuga farby przed nagłówkiem */
const PaintStroke = () => (
  <svg
    viewBox="0 0 72 48"
    className="w-12 h-8 sm:w-[72px] sm:h-12 shrink-0"
    aria-hidden="true"
  >
    <defs>
      <filter id="course-paint-rough" x="-10%" y="-20%" width="120%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="3" seed="4" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <g filter="url(#course-paint-rough)" fill="#dc2626">
      <path d="M4 20 C 16 10, 40 8, 66 13 L 64 30 C 44 34, 20 36, 6 38 Z" />
      <path d="M8 30 C 24 26, 46 27, 62 24 L 61 32 C 44 36, 24 38, 10 40 Z" opacity="0.8" />
      <path d="M62 12 L 70 11 L 69 18 L 63 19 Z" opacity="0.7" />
      <path d="M1 24 L 7 22 L 8 32 L 2 33 Z" opacity="0.7" />
    </g>
  </svg>
);

export default function CourseSection() {
  return (
    <section className="mx-4 sm:mx-8 my-6 sm:my-8">
      {/* Nagłówek sekcji */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6">
        <div className="flex items-center space-x-2">
          <PaintStroke />
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Popularne kursy
          </h2>
        </div>

        <a
          href="#kursy"
          className="self-end sm:self-auto text-sm sm:text-base font-bold text-stone-700 hover:text-red-600 flex items-center space-x-1.5 transition-colors"
        >
          <span className="sm:hidden">Wszystkie kursy</span>
          <span className="hidden sm:inline">Zobacz wszystkie kursy</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>

      {/* Lista kafelków */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {courses.map((course) => {
          const CategoryIcon = course.categoryIcon;
          return (
            <div
              key={course.id}
              className="bg-[#f9f8f3] rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-all flex flex-row sm:flex-col group cursor-pointer"
            >
              {/* Miniaturka: po lewej na mobile, u góry od sm */}
              <div className="relative shrink-0 w-32 min-h-[150px] sm:w-full sm:h-56 sm:min-h-0 bg-stone-300 overflow-hidden">
                <span className="absolute top-2 left-2 sm:left-auto sm:top-3 sm:right-3 z-10 bg-white/95 backdrop-blur-md text-stone-900 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-sm">
                  {course.badge}
                </span>

                <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 group-hover:scale-105 transition-transform duration-300">
                  {course.imageSrc && (
                    <Image
                      src={course.imageSrc}
                      alt={course.title}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 128px"
                      className="object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Treść + stopka */}
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div className="p-4 sm:p-5">
                  <div className="flex items-center space-x-2 text-stone-600 text-[11px] sm:text-xs font-extrabold tracking-wider uppercase mb-1.5 sm:mb-2">
                    <CategoryIcon className="w-4 h-4 text-stone-700 shrink-0" />
                    <span className="truncate">{course.category}</span>
                  </div>

                  <h3 className="font-extrabold text-stone-900 text-base sm:text-lg leading-snug mb-1.5 sm:mb-2 group-hover:text-red-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-stone-600 text-sm line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-stone-200/40 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs text-stone-600 font-bold">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-stone-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <BarChart2 className="w-4 h-4 text-stone-500" />
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}