import React from 'react';
import img from "../assets/hero-bg.jpeg"
import { useNavigate } from 'react-router-dom'; 

const Programs = () => {
  const navigate = useNavigate(); 

  const handleMentorClick = () => {
    // navigate('/programs/mentor-marvel'); 
  };

  const handleLeadClick = () => {
    // navigate('/programs/lead-conference');
  };

  return (
    <>
      {/* Full-screen Hero Section with African Pattern Overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-green-900">
        {/* Subtle African pattern background */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://www.shutterstock.com/image-vector/hand-drawn-abstract-african-pattern-600nw-2553597887.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 drop-shadow-2xl">
            Our Flagship Programs
          </h1>
          <p className="text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Transforming Africa's youth into confident leaders, innovators, and change-makers through world-class mentorship and inspirational gatherings.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mentor Marvel Full-Width Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-linear-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Mentor Marvel
            </h2>
            <div className="w-32 h-2 bg-yellow-400 rounded-full"></div>
            <p className="text-md leading-relaxed opacity-90">
              Mentor Marvel is  an Asiko program connecting young
              Africans with experienced mentors to build clarity,
              competence, and confidence for impactful careers.
              Through structured mentorship and leadership
              development, it bridges the gap between talent and
              opportunity
            </p>
            <p className="text-md leading-relaxed opacity-90">
           Since inception, features themed tracks across sectors
          such as Law, Finance, Technology, Healthcare, and
          Entrepreneurship, engaging over 200 mentees and 100
          mentors from top institutions such as Oxford, Harvard,
          and Cambridge, and organizations including the World
          Bank, African Finance Corporation, and Techstars.
            </p>
            <ul className="space-y-4 text-base md:text-md">
              <li className="flex items-start gap-4">
                <span className="text-3xl">🦸</span>
                <span>One-on-one personalized mentorship sessions</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">📚</span>
                <span>Skill-building workshops & masterclasses</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🚀</span>
                <span>Real-world capstone projects with impact</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🌍</span>
                <span>Access to exclusive Asiko network & resources</span>
              </li>
            </ul>
            <button
              onClick={handleMentorClick}
              className="mt-8 bg-white text-blue-900 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Get Involved Now !
            </button>
          </div>

          {/* Image Gallery */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
            <img
              src="https://thumbs.dreamstime.com/b/coaching-session-confident-mid-aged-female-mentor-trainer-coach-lead-group-discussion-seminar-diverse-young-interns-407951525.jpg"
              alt="Mentorship discussion group"
              className="rounded-2xl shadow-2xl object-cover h-80 transform hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://www.brookings.edu/wp-content/uploads/2024/05/black-female-mentor-training.jpg"
              alt="Female mentor guiding young professionals"
              className="rounded-2xl shadow-2xl object-cover h-80 mt-12 transform hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://www.bgca.org/wp-content/uploads/2024/01/24-MKTG-0002-BoysGirls_Clubs_of_America_Mentorship_945x625.jpg"
              alt="Diverse youth in mentorship circle"
              className="rounded-2xl shadow-2xl object-cover h-80 transform hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://younggloballeadersnetwork.com/wp-content/uploads/2021/03/yal-7.jpeg"
              alt="Young Africans networking and learning"
              className="rounded-2xl shadow-2xl object-cover h-80 mt-12 transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Lead Conference Full-Width Section */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-linear-to-r from-green-600 to-green-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery First on Mobile */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src={img}
              alt="Audience engaged at youth leadership summit"
              className="rounded-2xl shadow-2xl object-cover h-80 transform hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://youngafricanleaderssummit.com/wp-content/uploads/2021/12/IMG_3096-scaled.jpg"
              alt="Speaker on stage at African leadership conference"
              className="rounded-2xl shadow-2xl object-cover h-80 transform hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://youngafricanleaderssummit.com/wp-content/uploads/2021/12/IMG_2883-scaled.jpg"
              alt="Panel discussion with young African leaders"
              className="rounded-2xl shadow-2xl object-cover h-80 mt-12 transform hover:scale-105 transition-transform duration-500"
            />
            <img
              src="https://thevoiceofafrica.com/wp-content/uploads/2025/04/fd2567b1-4cde-49fc-8b0b-e778a69deed0.jpeg"
              alt="Networking and celebration at conference"
              className="rounded-2xl shadow-2xl object-cover h-80 mt-12 transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Lead Conference
            </h2>
            <div className="w-32 h-2 bg-yellow-400 rounded-full"></div>
            <p className="text-md leading-relaxed opacity-90">
              The LEAD Conference (Leadership, Exploration, and
              Development Conference) was established in 2018 by the
              founders as students of Bowen University. Designed to
              cultivate visionary, values-driven leaders, the conference
              provides a platform for students to engage with industry
              experts, thought leaders, and alumni through keynotes,
              mentorship, and skill-development workshops.
            </p>
            <p className="text-md leading-relaxed opacity-90">
              The impact is indelible as the conference has held every
              year since 2018 and 5,000+ students have been in
              attendance with notable speakers like previous presidential
              candidates, business owners and career professionals. The
              initiative aligns with Asiko’s mission to equip young Africans
              with clarity, competence, and confidence to build impactful
              careers and purpose-driven lives
            </p>
            <ul className="space-y-4 text-base md:text-lg">
              <li className="flex items-start gap-4">
                <span className="text-3xl">🎤</span>
                <span>Inspirational keynotes from African trailblazers</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🗣️</span>
                <span>Interactive panel discussions & fireside chats</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🤝</span>
                <span>High-impact networking opportunities</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-3xl">🏆</span>
                <span>Pitch competitions & innovation showcases</span>
              </li>
            </ul>
            <button
              onClick={handleLeadClick}
              className="mt-8 bg-white text-green-900 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Register for Next Edition
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl md:text-6xl font-extrabold mb-8">
            Ready to Shape Africa's Future?
          </h3>
          <p className="text-xl md:text-2xl mb-12 opacity-80">
            Join thousands of young Africans already transforming the continent through Asiko's programs.
          </p>
          <button className="bg-yellow-400 text-gray-900 px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:bg-yellow-300 transform hover:scale-110 transition-all duration-300">
            Get Involved Today
          </button>
        </div>
      </section>
    </>
  );
};

export default Programs;