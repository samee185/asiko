import React from 'react';
import MentorsGrid from '../components/MentorsGrid';

const Mentors = () => {
  return (
    <main>
      {/* Show all mentors on the main mentors page */}
      <MentorsGrid showAll={true} />
    </main>
  );
};

export default Mentors;
