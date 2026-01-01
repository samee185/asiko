import React, { useState } from 'react';

const Avatar = ({ src, name, sizeClasses = 'h-16 w-16 md:h-14 md:w-14' }) => {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (!src || errored) {
    return (
      <div className={`${sizeClasses} rounded-full bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center`}>
        <span className="font-semibold text-blue-900">{getInitials(name)}</span>
      </div>
    );
  }

  return (
    <div className={`relative ${sizeClasses} rounded-full overflow-hidden`}>
      {/* Blurred placeholder (uses same src) - fades out when image loads */}
      <div
        className={`absolute inset-0 bg-center bg-cover filter blur-xl scale-105 transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />

      {/* high-res image fades in */}
      <img
        src={src}
        alt={`Photo of ${name}`}
        loading="lazy"
        onError={() => setErrored(true)}
        onLoad={() => setLoaded(true)}
        className={`relative h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* subtle ring for polish */}
      <span className="absolute inset-0 rounded-full ring-1 ring-gray-100 pointer-events-none" aria-hidden="true" />
    </div>
  );
};

function getInitials(name) {
  return (name || '')
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default Avatar;
