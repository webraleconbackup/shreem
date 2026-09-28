import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'STRUCTURAL FABRICATION',
      image: '/service/project1.jpg',
    },
    {
      title: 'INDUSTRIAL EQUIPMENT',
      image: '/service/project2.jpg',
    },
    {
      title: 'PLATFORMS & WALKWAYS',
      image: '/service/project3.jpg',
    },
    {
      title: 'CUSTOM FABRICATION',
      image: '/service/project4.jpg',
    },
    {
      title: 'TANK FABRICATION',
      image: '/service/project5.jpg',
    },
  ];

  return (
    <section className='w-full bg-white pt-14 lg:pt-20 overflow-hidden'>
      <div className='max-w-8xl mx-auto'>
        {/* Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#0A2E63] tracking-wide uppercase'>
            Our Projects
          </h2>

          <div className='w-16 h-1 bg-[#C89B3C] mx-auto mt-4 rounded-full'></div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 md:px-8 lg:px-15'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100'
            >
              {/* Image */}
              <div className='overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-56 object-center group-hover:scale-110 transition-transform duration-700'
                />
              </div>

              {/* Content */}
              <div className='p-5 text-center'>
                <h3 className='text-sm sm:text-base font-bold text-[#0A2E63] uppercase leading-snug tracking-wide'>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='mt-6 bg-[#C89B3C] px-4 md:px-15 py-8 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl'>
          {/* Left Side */}
          <div className='flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left'>
            <div className='w-20 h-20 flex items-center justify-center rounded-full bg-[#0A2E63] shadow-lg'>
              <FileText className='w-10 h-10 text-white' />
            </div>

            <div>
              <h3 className='text-2xl sm:text-3xl font-extrabold text-white uppercase'>
                Have A Project In Mind?
              </h3>

              <p className='text-white/90 text-base sm:text-lg mt-2'>
                Let’s build something great together.
              </p>
            </div>
          </div>

          {/* Button */}
          <a
            href='https://wa.me/919968177918?text=Hello%20I%20am%20interested%20in%20your%20service.'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='group bg-white cursor-pointer hover:bg-[#0A2E63] text-[#C89B3C] hover:text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg'>
              GET A QUOTE
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
