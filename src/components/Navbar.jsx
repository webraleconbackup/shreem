import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '#' },
    { name: 'SERVICES' }, // only dropdown menu
    { name: 'INDUSTRIES', path: '#' },
    { name: 'PROJECTS', path: '#' },
    { name: 'CONTACT US', path: '#' },
  ];

  return (
    <header className='w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'>
      <nav className='max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10'>
        
        {/* Logo */}
        <Link to='/' className='flex items-center shrink-0'>
          <img
            src='/logo/logo1.jpeg'
            alt='Shreem Tech Industries'
            className='h-22 sm:h-22 md:h-24 lg:h-[110px] xl:h-[120px] w-52 lg:w-72 object-contain transition-all duration-300'
          />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-7 xl:gap-10 h-full'>
          {navItems.map((item) => (
            <div key={item.name} className='relative h-full flex items-center'>
              
              {/* SERVICES DROPDOWN */}
              {item.name === 'SERVICES' ? (
                <div
                  className='relative h-full flex items-center group'
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className='relative flex items-center gap-1 text-[15px] xl:text-[16px] font-bold tracking-wide text-[#0B2C5F] hover:text-[#C89B3C] transition-all duration-300 h-full py-10'
                  >
                    {item.name}

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />

                    {/* Underline */}
                    <span className='absolute left-0 bottom-7 h-[3px] bg-[#C89B3C] rounded-full w-full scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-out' />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 bg-white min-w-[260px] rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 transition-all duration-300 ${
                      dropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-3'
                    }`}
                  >
                    <button className='block w-full text-left px-6 py-4 text-[15px] font-semibold text-gray-700 hover:bg-[#f8f5ef] hover:text-[#C89B3C] transition-all duration-300'>
                      LASER CUTTING
                    </button>

                    <button className='block w-full text-left px-6 py-4 text-[15px] font-semibold text-gray-700 hover:bg-[#f8f5ef] hover:text-[#C89B3C] transition-all duration-300'>
                      CNC BENDING
                    </button>

                    <button className='block w-full text-left px-6 py-4 text-[15px] font-semibold text-gray-700 hover:bg-[#f8f5ef] hover:text-[#C89B3C] transition-all duration-300'>
                      FABRICATION
                    </button>

                    <button className='block w-full text-left px-6 py-4 text-[15px] font-semibold text-gray-700 hover:bg-[#f8f5ef] hover:text-[#C89B3C] transition-all duration-300'>
                      MACHINING
                    </button>

                    <button className='block w-full text-left px-6 py-4 text-[15px] font-semibold text-gray-700 hover:bg-[#f8f5ef] hover:text-[#C89B3C] transition-all duration-300'>
                      ASSEMBLY
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`relative flex items-center h-full text-[15px] xl:text-[16px] font-bold tracking-wide transition-all duration-300 py-10 group ${
                    location.pathname === item.path
                      ? 'text-[#0B2C5F]'
                      : 'text-[#0B2C5F] hover:text-[#C89B3C]'
                  }`}
                >
                  {item.name}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 bottom-7 h-[3px] bg-[#C89B3C] rounded-full transition-all duration-500 ease-out ${
                      location.pathname === item.path
                        ? 'w-full scale-x-100'
                        : 'w-full scale-x-0 group-hover:scale-x-100 origin-left'
                    }`}
                  />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Quote Button */}
        <div className='hidden lg:block'>
  <a
    href='https://wa.me/919968177918?text=Hello%20I%20am%20interested%20in%20your%20services.'
    target='_blank'
    rel='noopener noreferrer'
    className='bg-[#C89B3C] hover:bg-[#b4882d] text-white font-bold text-sm px-6 xl:px-7 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44zM12.07 21.8a9.9 9.9 0 01-5.05-1.39l-.36-.21-3.74.98 1-3.65-.24-.37a9.87 9.87 0 01-1.52-5.27c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.9 6.99c0 5.46-4.45 9.91-9.89 9.91zm5.43-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.49.71.31 1.27.5 1.7.64.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z' />
    </svg>
    GET A QUOTE
  </a>
</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='lg:hidden text-[#0B2C5F] transition'
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-500 ${
          isOpen
            ? 'max-h-[700px] border-t border-gray-100'
            : 'max-h-0'
        }`}
      >
        <div className='px-5 py-5 space-y-5'>
          
          {navItems.map((item) => (
            <div key={item.name}>
              
              {/* MOBILE SERVICES */}
              {item.name === 'SERVICES' ? (
                <>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className='flex items-center justify-between w-full text-[#0B2C5F] font-bold text-[16px]'
                  >
                    {item.name}

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      dropdownOpen
                        ? 'max-h-[300px] mt-4'
                        : 'max-h-0'
                    }`}
                  >
                    <div className='ml-2 border-l-2 border-[#C89B3C] pl-4 space-y-4'>
                      
                      <button className='block text-[15px] font-semibold text-gray-700 hover:text-[#C89B3C] transition'>
                        LASER CUTTING
                      </button>

                      <button className='block text-[15px] font-semibold text-gray-700 hover:text-[#C89B3C] transition'>
                        CNC BENDING
                      </button>

                      <button className='block text-[15px] font-semibold text-gray-700 hover:text-[#C89B3C] transition'>
                        FABRICATION
                      </button>

                      <button className='block text-[15px] font-semibold text-gray-700 hover:text-[#C89B3C] transition'>
                        MACHINING
                      </button>

                      <button className='block text-[15px] font-semibold text-gray-700 hover:text-[#C89B3C] transition'>
                        ASSEMBLY
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-[16px] font-bold transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-[#C89B3C] translate-x-1'
                      : 'text-[#0B2C5F] hover:text-[#C89B3C] hover:translate-x-1'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Quote Button */}
          <Link
            to='#'
            onClick={() => setIsOpen(false)}
            className='block text-center bg-[#C89B3C] hover:bg-[#b4882d] text-white font-bold py-3 rounded-md transition-all duration-300 shadow-md'
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
}