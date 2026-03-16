import React, { useState, useEffect, useRef } from 'react';
import { FaUserGraduate, FaUsers, FaChild, FaProjectDiagram } from 'react-icons/fa';

const Stats = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);
  const statRefs = useRef([]);

  const stats = [
    {
      number: 12,
      suffix: '',
      label: 'Expert Mentors',
      description: 'Senior professionals from top organizations',
      icon: FaUserGraduate,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: 200,
      suffix: '+',
      label: 'Mentees Served',
      description: 'Young Africans transformed through mentorship',
      icon: FaUsers,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: 5000,
      suffix: '+',
      label: 'Youth Reached',
      description: 'Through programs, summits, and initiatives',
      icon: FaChild,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: 2,
      suffix: '',
      label: 'Flagship Programs',
      description: 'Mentor Marvel and Lead Conference',
      icon: FaProjectDiagram,
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const animateValue = (start, end, duration, index) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setAnimatedNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[index] = Math.floor(progress * (end - start) + start);
          return newNumbers;
        });
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    stats.forEach((stat, index) => {
      setTimeout(() => animateValue(0, stat.number, 2000, index), index * 200);
    });
  }, []);

  return (
    <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Transforming Africa's future through mentorship and leadership development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                ref={el => statRefs.current[index] = el}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white text-2xl" />
                </div>
                
                {/* Number */}
                <div className={`text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r ${stat.color} mb-3`}>
                  {animatedNumbers[index].toLocaleString()}{stat.suffix}
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  {stat.description}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;