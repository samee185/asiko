import React, { useEffect, useRef, useState } from 'react';
import testimonials from '../config/testimonials';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = ({ autoplay = true, interval = 6000 }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!autoplay) return;
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoplay]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    node.addEventListener('keydown', onKey);
    return () => node.removeEventListener('keydown', onKey);
  }, []);

  function startTimer() {
    stopTimer();
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), interval);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-12 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-extrabold text-blue-900 text-center">
              Trusted by founders and practitioners
            </h2>
            <p className="mt-2 text-blue-900 text-center max-w-xl">
              Real experiences from the community — concise, practical feedback from those who've been there.
            </p>
          </div>
        </div>

        {/* Desktop: show 3-card grid. Mobile: show single carousel */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <blockquote key={t.id} className="bg-linear-to-b from-white to-blue-50 rounded-2xl p-6 border border-transparent shadow-sm">
              <div className="flex items-start gap-4">
                <Avatar name={t.name} />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-[#111827]">{t.name}</h3>
                    <span className="text-sm text-gray-500">· {t.role}</span>
                  </div>
                  <div className="mt-3 text-gray-700">{t.quote}</div>
                </div>
              </div>
              <footer className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Stars rating={t.rating} />
                  <span className="text-sm text-gray-500">{t.company}</span>
                </div>
                <a href={`mailto:${t.email}`} className="text-sm text-blue-600 hover:underline">
                  Contact
                </a>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Mobile / tablet carousel (improved) */}
        <div
          ref={containerRef}
          className="relative lg:hidden"
          tabIndex={0}
          onMouseEnter={stopTimer}
          onMouseLeave={() => autoplay && startTimer()}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="min-w-full shrink-0 px-4">
                  <div className="bg-linear-to-b from-white to-blue-50 rounded-2xl p-6 border border-transparent shadow-sm">
                    <div className="flex items-start gap-4">
                      <Avatar name={t.name} />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-[#111827]">{t.name}</h3>
                          <span className="text-sm text-gray-500">· {t.role}</span>
                        </div>
                        <div className="mt-3 text-gray-700">{t.quote}</div>
                      </div>
                    </div>
                    <footer className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Stars rating={t.rating} />
                        <span className="text-sm text-gray-500">{t.company}</span>
                      </div>
                      <a href={`mailto:${t.email}`} className="text-sm text-pink-600 hover:underline">
                        Contact
                      </a>
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next controls - larger touch targets and centered vertically */}
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <button
              onClick={() => {
                prev();
                if (autoplay) startTimer();
              }}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center touch-manipulation"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <button
              onClick={() => {
                next();
                if (autoplay) startTimer();
              }}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center touch-manipulation"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* dots */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  if (autoplay) startTimer();
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-pink-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Avatar = ({ name }) => {
  const initials = (name || '')
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="h-12 w-12 rounded-full bg-linear-to-br from-pink-50 to-pink-100 flex items-center justify-center text-pink-600 font-semibold">
      {initials}
    </div>
  );
};

const Stars = ({ rating = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: Math.max(0, Math.min(5, rating)) }).map((_, i) => (
      <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
    ))}
  </div>
);

export default Testimonials;
