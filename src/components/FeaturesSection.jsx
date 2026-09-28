import React from "react";
import {
  ShieldCheck,
  Cog,
  Users,
  Handshake,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <ShieldCheck size={42} />,
      title: "QUALITY ASSURANCE",
      description: "We ensure the highest standards in every project.",
      color: "text-blue-900",
    },
    {
      icon: <Cog size={42} />,
      title: "ADVANCED TECHNOLOGY",
      description: "Modern machines and latest technology.",
      color: "text-yellow-600",
    },
    {
      icon: <Users size={42} />,
      title: "EXPERT TEAM",
      description: "Skilled professionals committed to excellence.",
      color: "text-blue-900",
    },
    {
      icon: <Handshake size={42} />,
      title: "CUSTOMER SATISFACTION",
      description: "Client-focused approach with reliable support.",
      color: "text-yellow-600",
    },
  ];

  return (
    <section className="w-full bg-white py-6 px-4 md:px-8 lg:px-15 shadow-sm border-t border-gray-200">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 md:px-4 py-5 transition-all duration-300 hover:bg-gray-50 ${
                index !== features.length - 1
                  ? "lg:border-r border-gray-200"
                  : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`${item.color} flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[15px] md:text-[16px] font-bold text-gray-900 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}