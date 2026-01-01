import React from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import mentors from '../config/mentors';

const MentorsGrid = ({ showAll = false }) => {
  return (
    <section aria-labelledby="mentors-heading" className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 id="mentors-heading" className="text-2xl text-center md:text-4xl font-bold text-blue-900">
              Meet our mentors
            </h2>
            <p className="mt-2 text-blue-900 text-center max-w-xl">
              Seasoned practitioners across product, engineering, growth and operations who mentor and advise our community.
            </p>
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-white border border-transparent rounded-full px-3 py-2 shadow-sm">
              <SparklesIcon className="h-5 w-5 text-blue-900" aria-hidden="true" />
              <span className="text-sm font-medium text-[#374151]">Featured mentors</span>
            </div>

            {/* Primary CTA to go to mentors main route */}
            <Link
              to="/mentors"
              className={`hidden md:inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-md hover:bg-blue-800 transition ${showAll ? 'hidden' : ''}`}
            >
              View all mentors
            </Link>
          </div>
        </div>

        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? mentors : mentors.slice(0, 6)).map((m) => (
            <li key={m.id}>
              <article className="group bg-white rounded-2xl border border-transparent hover:border-blue-100 shadow-sm hover:shadow-lg transition-shadow duration-200 p-6">
                <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Avatar src={m.image} name={m.name} />
                    </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-[#111827]">{m.name}</h3>
                    <p className="text-sm text-gray-500">{m.role}</p>
                    {/* <div className="mt-3 text-sm text-gray-900">{m.bio}</div> */}

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {m.tags.map((t) => (
                        <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-900">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={`mailto:${m.email}`}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-900 text-white text-sm font-medium hover:bg-blue-700 transition"
                    aria-label={`Email ${m.name}`}
                  >
                    <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
                    Connect
                  </a>

                  <a
                    href={m.profile}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Profile</span>
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Mobile CTA: visible on small screens */}
        <div className={`mt-6 flex justify-center md:hidden ${showAll ? 'hidden' : ''}`}>
          <Link
            to="/mentors"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
          >
            View all mentors
          </Link>
        </div>
      </div>
    </section>
  );
};

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default MentorsGrid;
