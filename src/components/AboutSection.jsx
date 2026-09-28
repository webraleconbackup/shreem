import React, { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      startValue += increment;

      if (startValue >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [start, end]);

  return (
    <h3
      ref={ref}
      className="text-3xl lg:text-4xl font-bold text-[#D4A017] leading-none"
    >
      {count}
      {suffix}
    </h3>
  );
}

export default function AboutSection() {
  return (
    <section className="w-full bg-[#072B63] py-10 lg:py-14 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-15">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          
          {/* Left Images Section */}
          <div className="relative flex justify-center lg:justify-start">
            
            {/* Main Image */}
            <div className="overflow-hidden shadow-2xl w-full max-w-[620px]">
              <img
                src="/about/about1.jpg"
                alt="Factory"
                className="w-full h-[280px] sm:h-[350px] lg:h-[420px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Floating Welding Image */}
            <div className="absolute -bottom-10 -lg:bottom-[-20px] right-[-6px] sm:right-6 -lg:right-60 bg-white p-1 border-1 border-white">
              <img
                src="/about/about2.jpg"
                alt="Welding"
                className="w-[120px] sm:w-[160px] lg:w-[210px] h-[160px] sm:h-[220px] lg:h-[240px] object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-white">
            
            {/* Small Heading */}
            <p className="text-[#D4A017] uppercase tracking-[3px] text-sm font-semibold mb-3">
              About Us
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              SHREEM TECH INDUSTRIES
            </h2>

            {/* Golden Line */}
            <div className="w-20 h-1 bg-[#D4A017] rounded-full mb-6"></div>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl text-justify">
              Shreem Tech Industries is a trusted name in the field of
              fabrication and manufacturing. With modern infrastructure,
              advanced technology and a skilled team, we deliver quality
              solutions for a wide range of industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 items-start">
              
              <div className="border-l-2 border-[#D4A017] pl-4 flex flex-col justify-start">
                <h3 className="text-3xl lg:text-4xl font-bold text-[#D4A017] leading-none">
                  10+
                </h3>
                <p className="text-sm text-gray-300 mt-2 uppercase">
                  Years of Experience
                </p>
              </div>

              <div className="border-l-2 border-[#D4A017] pl-4 flex flex-col justify-start">
                <Counter end={500} />
                <p className="text-sm text-gray-300 mt-2 uppercase">
                  Satisfied Clients
                </p>
              </div>

              <div className="border-l-2 border-[#D4A017] pl-4 flex flex-col justify-start">
                <Counter end={1000} />
                <p className="text-sm text-gray-300 mt-2 uppercase">
                  Successful Projects
                </p>
              </div>

              <div className="border-l-2 border-[#D4A017] pl-4 flex flex-col justify-start">
                <Counter end={25} />
                <p className="text-sm text-gray-300 mt-2 uppercase">
                  Skilled Professionals
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}