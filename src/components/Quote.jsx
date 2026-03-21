import React from 'react';
import founderImg from '../assets/founder.jpeg';

const Quote = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-linear-to-br from-blue-50 via-white to-green-50">
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* Elegant card with decorative frame effect */}
        <div className="relative bg-white shadow-2xl rounded-3xl p-10 md:p-16 lg:p-20 border border-gray-200">
          {/* Decorative corner borders for "picture frame" feel */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-blue-900 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-blue-900 rounded-tr-3xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-blue-900 rounded-bl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-blue-900 rounded-br-3xl"></div>

          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-10 tracking-tight">
              Founder's Address
            </h1>

            {/* Founder Portrait - using a professional placeholder (replace with actual photo URL) */}
            <div className="mb-12 mx-auto w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
              <img
                src={founderImg}
                alt="Oluwatobilola Onigbogi Esq., CEO - Asiko"
                className="w-full h-full object-cover rounded-full shadow-xl border-8 border-white"
              />
            </div>

            {/* Quote with large opening quote mark */}
            <div className="relative max-w-4xl mx-auto">
              <span className="absolute -top-8 -left-4 md:-top-12 md:-left-8 text-6xl md:text-8xl lg:text-9xl text-blue-900 opacity-20 font-serif">“</span>
              <blockquote className="text-md leading-relaxed text-gray-800 italic relative z-10">
                Asiko is a movement grounded in one belief: Africa’s greatest resource is her people, especially her young people.

This is our moment -
Asiko ti ya - it’s time to build. With over 500 million young Africans, we have a unique opportunity to shape the future we want. But shaping it requires more than inspiration; it demands innovation, action, and the courage to build what does not yet exist.

At Asiko, we are raising a generation that is skilled, self-aware, and globally competitive. We are building ecosystems where young people are mentored to solve real problems and given the opportunities to shape their own paths; because every time we invest in a young person, we are building the rails of Africa.

But this vision is bigger than us. It requires all of us.

So we ask you: don’t just believe in this vision; be part of it.

Mentor. Volunteer. Partner with us.

Because when young Africans rise, Africa rises. And when Africa rises, the world rises with her.

Thank you for building with us.
              </blockquote>
            </div>

            {/* Signature */}
            <div className="mt-12 space-y-2">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">Oluwatobilola Onigbogi Esq.</p>
              <p className="text-md md:text-xl text-blue-700 font-medium">CEO - Asiko</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;