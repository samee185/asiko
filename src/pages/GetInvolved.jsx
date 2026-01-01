import React from 'react';

const IconVolunteer = ({ className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconDonate = ({ className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPartner = ({ className = 'h-6 w-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 12a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v3a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Stat = ({ value, label }) => (
  <div className="flex-1 bg-gray-50 dark:bg-gray-200 backdrop-blur rounded-lg p-5 text-center">
    <div className="text-3xl font-bold text-blue-900">{value}</div>
    <div className="mt-1 text-sm text-blue-900 ">{label}</div>
  </div>
);

const GetInvolved = () => {
  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Hero */}
  <section className="rounded-2xl overflow-hidden bg-linear-to-r from-blue-900 to-gray-500 text-white p-10 shadow-lg">
        <div className="md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Get involved — make a measurable impact</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-100">Join our community of changemakers. Volunteer, donate, or partner with us to create opportunities and transform lives.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#ways" className="inline-flex items-center justify-center rounded-md bg-white text-indigo-700 px-5 py-3 font-semibold shadow hover:scale-[1.01] transform transition focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40">How to help</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/20 border border-white/30 text-white px-5 py-3 font-medium hover:bg-white/30 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30">Contact us</a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 grid grid-cols-3 gap-3 w-full md:w-96">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-sm text-indigo-50">Impact</div>
              <div className="mt-2 text-2xl font-bold">20k+</div>
              <div className="mt-1 text-sm text-indigo-100/80">Lives reached</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-sm text-indigo-50">Volunteers</div>
              <div className="mt-2 text-2xl font-bold">1.8k</div>
              <div className="mt-1 text-sm text-indigo-100/80">Active mentors</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-sm text-indigo-50">Partners</div>
              <div className="mt-2 text-2xl font-bold">120</div>
              <div className="mt-1 text-sm text-indigo-100/80">Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat value="20,000+" label="Learners served" />
        <Stat value="1,800" label="Volunteer hours / year" />
        <Stat value="120" label="Local partners" />
      </section>

      {/* Ways to get involved */}
      <section id="ways" className="mt-10">
        <h2 className="text-2xl font-bold">Ways to get involved</h2>
        <p className="mt-2 text-gray-600">Choose what fits your schedule and skills. Every contribution counts.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="flex-none h-12 w-12 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:scale-105 transition">
                <IconVolunteer className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Volunteer</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Share your time as a mentor, coach, or community supporter.</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href="/volunteer" className="text-indigo-600 font-medium hover:underline">Sign up to volunteer</a>
              <span className="inline-block h-1 w-1 bg-gray-200 rounded-full" aria-hidden></span>
              <span className="text-sm text-gray-500">Flexible shifts</span>
            </div>
          </article>

          <article className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="flex-none h-12 w-12 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-105 transition">
                <IconDonate className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Donate</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Support programs financially to expand reach and keep services free.</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href="/donate" className="text-rose-600 font-medium hover:underline">Make a donation</a>
              <span className="inline-block h-1 w-1 bg-gray-200 rounded-full" aria-hidden></span>
              <span className="text-sm text-gray-500">One-time or recurring</span>
            </div>
          </article>

          <article className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="flex-none h-12 w-12 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition">
                <IconPartner className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Partner</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Collaborate on programs, internships, and community projects.</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href="/partners" className="text-emerald-700 font-medium hover:underline">Become a partner</a>
              <span className="inline-block h-1 w-1 bg-gray-200 rounded-full" aria-hidden></span>
              <span className="text-sm text-gray-500">Corporate & NGO options</span>
            </div>
          </article>
        </div>
      </section>

      {/* Contact / quick signup form */}
      <section id="contact" className="mt-10 bg-white dark:bg-gray-900 rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold">Quick sign-up</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Tell us how you'd like to help and we'll follow up within 48 hours.</p>

        <form className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3" onSubmit={(e) => e.preventDefault()} aria-label="Get involved form">
          <label className="sr-only" htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Full name" className="md:col-span-1 rounded-md border-gray-200 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" />

          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email address" className="md:col-span-1 rounded-md border-gray-200 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" />

          <label className="sr-only" htmlFor="message">Message</label>
          <input id="message" name="message" type="text" placeholder="How you'd like to help (e.g. mentor, donate)" className="md:col-span-1 rounded-md border-gray-200 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" />

          <div className="md:col-span-3 mt-2 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-md font-semibold shadow hover:scale-[1.01] transition focus-visible:ring-4 focus-visible:ring-indigo-300">Send request</button>
            <span className="text-sm text-gray-500">No spam — we'll only use your details to follow up.</span>
          </div>
        </form>
      </section>

      <div className="my-12 text-center text-sm text-gray-500">Want a tailored plan? <a href="/contact" className="text-indigo-600 hover:underline">Contact our partnerships team</a>.</div>
    </main>
  );
};

export default GetInvolved;
