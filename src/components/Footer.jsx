import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  ReceiptText,
} from 'lucide-react';

const quickLinks = ['Home', 'About Us', 'Industries', 'Projects', 'Contact Us'];

const services = [
  'Laser Cutting',
  'CNC Bending',
  'Fabrication',
  'Machining',
  'Assembly',
];

const Footer = () => {
  return (
    <footer className='bg-[#032B63] text-white relative overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-[#F4B000]/10 blur-[120px] rounded-full'></div>
      <div className='absolute bottom-0 right-0 w-72 h-72 bg-[#F4B000]/10 blur-[120px] rounded-full'></div>

      <div className='max-w-[1450px] mx-auto px-4 md:px-4 lg:px-6 pt-16 pb-6 relative z-10'>
        {/* Footer Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 border-b border-white/10 pb-12'>
          {/* Brand */}
          <div>
            <div>
              <h1 className='text-[42px] leading-none font-black flex items-center tracking-wide'>
                <span className='text-white'>S</span>
                <span className='text-[#F4B000]'>HREEM</span>
              </h1>

              <p className='uppercase tracking-[5px] text-[#F4B000] text-[10px] mt-2 font-semibold'>
                Tech Industries
              </p>
            </div>

            <p className='text-gray-300 text-sm leading-7 mt-6'>
              Delivering advanced fabrication and precision manufacturing
              solutions with engineering excellence for modern industries.
            </p>

            {/* Social */}
            <div className='flex items-center gap-3 mt-7'>
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href='/'
                  className='group w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#F4B000] hover:border-[#F4B000] transition-all duration-300'
                >
                  <Icon
                    size={17}
                    className='text-white group-hover:text-[#032B63] transition-all duration-300'
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-bold uppercase relative inline-block'>
              Quick Links
              <span className='absolute left-0 -bottom-2 w-12 h-[2px] bg-[#F4B000]'></span>
            </h3>

            <ul className='space-y-4 mt-7'>
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href='/'
                    className='group flex items-center gap-2 text-sm text-gray-300 hover:text-[#F4B000] transition-all duration-300'
                  >
                    <ArrowRight
                      size={14}
                      className='group-hover:translate-x-1 transition-all duration-300'
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-bold uppercase relative inline-block'>
              Our Services
              <span className='absolute left-0 -bottom-2 w-12 h-[2px] bg-[#F4B000]'></span>
            </h3>

            <ul className='space-y-4 mt-7'>
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href='/'
                    className='group flex items-center gap-2 text-sm text-gray-300 hover:text-[#F4B000] transition-all duration-300'
                  >
                    <ArrowRight
                      size={14}
                      className='group-hover:translate-x-1 transition-all duration-300'
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-bold uppercase relative inline-block'>
              Contact Us
              <span className='absolute left-0 -bottom-2 w-12 h-[2px] bg-[#F4B000]'></span>
            </h3>

            <div className='space-y-5 mt-7'>
              {/* Address */}
              <div className='flex gap-3 group'>
                <div className='min-w-[42px] h-[42px] rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#F4B000] transition-all duration-300'>
                  <MapPin
                    size={18}
                    className='text-[#F4B000] group-hover:text-[#032B63]'
                  />
                </div>

                <div>
                  <h4 className='text-sm font-semibold mb-1'>Office Address</h4>

                  <p className='text-sm text-gray-300 leading-6'>
                    Khasra No. 433, Jai Dada Bhaiya Society,
                    <br />
                    Sector-9B, Basai Road,
                    <br />
                    Gurugram, Haryana - 122001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className='flex gap-3 group'>
                <div className='min-w-[42px] h-[42px] rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#F4B000] transition-all duration-300'>
                  <Phone
                    size={18}
                    className='text-[#F4B000] group-hover:text-[#032B63]'
                  />
                </div>

                <div>
                  <h4 className='text-sm font-semibold mb-1'>Call Us</h4>

                  <p className='text-sm text-gray-300'>+91 9968177918</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex gap-3 group'>
                <div className='min-w-[42px] h-[42px] rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#F4B000] transition-all duration-300'>
                  <Mail
                    size={18}
                    className='text-[#F4B000] group-hover:text-[#032B63]'
                  />
                </div>

                <div>
                  <h4 className='text-sm font-semibold mb-1'>Email Address</h4>

                  <p className='text-sm text-gray-300'>
                    shreemtechindustries@gmail.com
                  </p>
                </div>
              </div>

              {/* GST Number */}
              <div className='flex gap-3 group'>
                <div className='min-w-[42px] h-[42px] rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#F4B000] transition-all duration-300'>
                  <ReceiptText
                    size={18}
                    className='text-[#F4B000] group-hover:text-[#032B63]'
                  />
                </div>

                <div>
                  <h4 className='text-sm font-semibold mb-1'>GST Number</h4>

                  <p className='text-sm text-gray-300'>06AXFPS2859D1ZG</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className='text-lg font-bold uppercase relative inline-block'>
              Location Map
              <span className='absolute left-0 -bottom-2 w-12 h-[2px] bg-[#F4B000]'></span>
            </h3>

            <div className='mt-7 relative overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] h-[300px]'>
              <iframe
                title='Shreem Tech Industries Location'
                src='https://maps.google.com/maps?q=Khasra%20No.%20433%2C%20Jai%20Dada%20Bhaiya%20Society%2C%20Sector-9B%2C%20Basai%20Road%2C%20Gurugram%2C%20Haryana%20122001&t=&z=15&ie=UTF8&iwloc=&output=embed'
                className='w-full h-full'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>

              {/* Overlay */}
              {/* <div className='absolute inset-0 bg-[#032B63]/10'></div> */}

              {/* Pin */}
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='relative'>
                  <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-2xl relative z-10'>
                    <MapPin
                      size={18}
                      className='text-[#F4B000] fill-[#F4B000]'
                    />
                  </div>

                  <div className='absolute inset-0 rounded-full bg-white/40 animate-ping'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='pt-5 flex items-center justify-center'>
          <p className='text-sm text-gray-300 text-center'>
            © {new Date().getFullYear()} Shreem Tech Industries. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
