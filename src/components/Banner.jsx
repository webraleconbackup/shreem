import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  const slides = [
    { image: '/banner/banner1.jpeg' },
    // { image: '/banner/banner2.jpeg' },
    // { image: '/banner/banner3.jpeg' },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[30vh] sm:h-[48vh] md:h-[54vh] lg:h-[90vh] overflow-hidden mt-22 lg:mt-22">

      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide.image}
            alt="banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-center"
          />
        ))}
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

    </section>
  );
};

export default Banner;