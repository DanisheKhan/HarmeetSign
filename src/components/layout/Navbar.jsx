import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMusic, FaBars, FaTimes } from 'react-icons/fa';
import { headerVariants } from '../../constants/motion';
import { navLinks, socialLinks } from '../../constants/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full ${isScrolled ? 'h-[70px] bg-opacity-90 shadow-lg' : 'h-[80px] bg-opacity-50'} z-[1000] transition-all duration-300 ease-in-out bg-[#0c0c0c] backdrop-blur-md`}
      variants={headerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex justify-between items-center max-w-[1400px] h-full mx-auto px-8">
        <Link to="/" className="flex items-center text-white font-playfair text-xl font-bold uppercase tracking-wider">
          <FaMusic className="text-[#d4af37] mr-2 text-2xl" />
          <span>Harmeet Meet</span>
        </Link>

        <div className="text-white text-2xl cursor-pointer hidden lg:block" onClick={toggleMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`flex items-center lg:fixed lg:top-[70px] lg:right-0 lg:w-[70%] lg:h-[calc(100vh-70px)] lg:bg-[#161616] lg:flex-col lg:items-center lg:justify-start lg:py-12 lg:transition-all lg:duration-300 lg:ease-in-out lg:shadow-[-5px_0_15px_rgba(0,0,0,0.3)] ${mobileMenuOpen ? 'lg:right-0' : 'lg:right-[-100%]'}`}>
          <ul className="flex lg:flex-col lg:w-full list-none">
            {navLinks.map((link, index) => (
              <li key={index} className="mx-2 relative lg:w-full lg:my-2 lg:text-center">
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 font-inter text-base font-medium uppercase tracking-wider transition-colors duration-300 lg:block lg:w-full lg:py-4 lg:px-0 ${activeSection === link.path.slice(1) || (link.path === '/' && activeSection === 'home')
                    ? 'text-[#d4af37]'
                    : 'text-[#b3b3b3] hover:text-white'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                  <motion.div
                    className={`absolute h-[2px] bg-[#d4af37] transition-all duration-300 left-0 bottom-[-5px] lg:left-1/2 lg:bottom-[5px] lg:transform lg:translate-x-[-50%] ${activeSection === link.path.slice(1) || (link.path === '/' && activeSection === 'home')
                      ? 'lg:w-[30px]'
                      : 'lg:w-0'
                      }`}
                    initial={{ width: '0%' }}
                    animate={{
                      width: activeSection === link.path.slice(1) || (link.path === '/' && activeSection === 'home')
                        ? activeSection === link.path.slice(1) || (link.path === '/' && activeSection === 'home') && !mobileMenuOpen
                          ? '100%'
                          : '30px'
                        : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex ml-8 lg:ml-0 lg:mt-8">
            {socialLinks.slice(0, 3).map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[36px] h-[36px] mx-2 rounded-full border border-[#3a3a3a] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0c0c0c] hover:border-[#d4af37] hover:transform hover:-translate-y-[3px]"
              >
                <FaMusic />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
