import React from "react";
import home1 from "../assets/home1.jpeg";
// import { Button } from "../../utils/Button"; // Uncomment if you have a reusable Button

const About = () => {
  return (
    <section className="py-16 md:px-8 bg-gray-50 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="about-heading"
          className="text-center text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl md:text-5xl"
        >
          About Asiko
        </h2>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:mt-16 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Text content first on mobile for better SEO/reading order */}
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <p className="text-md leading-8 text-gray-700 md:text-xl">
              Asiko is a youth-focused organization committed to unlocking Africa’s potential by empowering its young people with the skills, networks, and opportunities to thrive.
            </p>
            <p className="text-md leading-8 text-gray-700 md:text-xl">
              Since 2018, Asiko has reached over 5,000 youth through mentorship programs, leadership summits, and capacity-building initiatives designed to foster employability, entrepreneurship, and purposeful leadership.
            </p>
            <p className="text-md leading-8 text-gray-700 md:text-xl">
              With a vision for a prosperous Africa led by prosperous Africans, Asiko is building a generation ready to drive sustainable change across the continent.
            </p>

            {/* CTA Button - replace with your reusable component if available */}
            <div className="mt-6">
              <a
                href="/about"
                className="inline-flex items-center rounded-md bg-blue-700 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Learn More About Us
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image - rounded with subtle shadow for modern nonprofit feel */}
          <div className="order-1 md:order-2">
            <figure className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={home1}
                alt="Youth participants at an Asiko leadership summit or mentorship event, representing empowerment and community impact in Africa"
                className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                width="800"
                height="600"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;