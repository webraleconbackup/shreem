import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bannerData = [
  {
    id: 1,
    image: "/home-img/hero1.jpg",
    title: "KNT",
    subtitle: "Powered By Japanese Technology",
    description1: "Ride Smooth, Stay Stable.",
    description2: "Premium KNT Suspension Parts – Enquire Now!",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    id: 2,
    image: "/home-img/hero2.jpg",
    title: "KNT",
    subtitle: "Powered By Japanese Technology",
    description1: "Optimal Cooling for Peak Performance.",
    description2: "Trust KNT Coolants – Enquire Now!",
    buttonText: "Contact us",
    buttonLink: "/contact",
  },
  {
    id: 3,
    image: "/home-img/hero3.jpg",
    title: "KNT",
    subtitle: "Powered By Japanese Technology",
    description1: "Smooth Every Move.",
    description2: "High-Quality KNT Lubricants for Maximum Engine Life!",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
  {
    id: 4,
    image: "/home-img/hero4.jpg",
    title: "KNT",
    subtitle: "Powered By Japanese Technology",
    description1: "Clean Engines Run Better.",
    description2: "Premium KNT Filters – Let’s Talk!",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
  {
    id: 5,
    image: "/home-img/hero5.jpg",
    title: "KNT",
    subtitle: "Powered By Japanese Technology",
    description1: "Precision Clutch Solutions",
    description2: "For Smooth & Reliable Performance!",
    buttonText: "Contact us",
    buttonLink: "/contact",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bannerData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = bannerData[index];

  return (
    <div className="relative w-full h-[300px] lg:h-[80vh] overflow-hidden bg-black">
      <AnimatePresence>
        {/* Smooth image crossfade without white gap */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            // Small overlap to prevent white flash
            opacity: { duration: 2.5 },
          }}
          className="absolute inset-0"
          style={{ zIndex: 1 }}
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001f5f]/50 flex flex-col justify-center items-start px-4 md:px-30 text-left text-white overflow-hidden">
            <motion.div
              key={current.id + "-text"}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h1 className="font-bold">
                <span className="text-red-600 text-3xl">{current.title}</span>
                <span className="ml-2 font-bold">{current.subtitle}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl">{current.description1}</p>
              <p className="text-lg md:text-xl mb-8">{current.description2}</p>
              <a
                href={current.buttonLink}
                className="border border-white px-6 py-3 ml-14 rounded-lg hover:bg-red-600 transition duration-300"
              >
                {current.buttonText}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hidden duplicate below for smoother blending */}
      <img
        src={current.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-0"
      />
    </div>
  );
}
