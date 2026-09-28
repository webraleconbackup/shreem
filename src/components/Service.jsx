import React from "react";
import {
  Wrench,
  Cog,
  Settings,
  Hammer,
  Factory,
} from "lucide-react";

export default function Service() {
  const services = [
    {
      title: "LASER CUTTING",
      description:
        "High precision laser cutting for a wide range of metals and thickness.",
      icon: <Factory size={58} />,
      color: "text-blue-900",
      border: "border-blue-900",
    },
    {
      title: "CNC BENDING",
      description:
        "Accurate and efficient CNC bending for complex components.",
      icon: <Hammer size={58} />,
      color: "text-yellow-700",
      border: "border-yellow-700",
    },
    {
      title: "FABRICATION",
      description:
        "Custom fabrication solutions tailored to your needs.",
      icon: <Settings size={58} />,
      color: "text-blue-900",
      border: "border-blue-900",
    },
    {
      title: "MACHINING",
      description:
        "Precision machining for consistent and quality results.",
      icon: <Cog size={58} />,
      color: "text-yellow-700",
      border: "border-yellow-700",
    },
    {
      title: "ASSEMBLY",
      description:
        "Complete assembly solutions with quality and on-time delivery.",
      icon: <Wrench size={58} />,
      color: "text-blue-900",
      border: "border-blue-900",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-15">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-700 font-semibold tracking-widest uppercase text-sm md:text-base">
            What We Do
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mt-2">
            OUR SERVICES
          </h2>

          <div className="w-20 h-1 bg-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2`}
            >
              <div className="p-8 flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div
                  className={`${service.color} mb-6 transition-transform duration-500 group-hover:scale-110`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg md:text-xl font-extrabold ${service.color} mb-4`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Border */}
              <div
                className={`h-1 w-full ${service.border.replace(
                  "border",
                  "bg"
                )}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}