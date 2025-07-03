import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMusic, FaBars, FaTimes, FaInstagram, FaYoutube, FaSpotify, FaFacebook, FaTwitter } from 'react-icons/fa';
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

      // Find the current section
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });

      // Only update state when the section actually changes
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }

      // Set home as active when at the top of the page
      if (scrollPosition < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Toggle body class to prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  useEffect(() => {
    // Close mobile menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full ${isScrolled ? 'h-16 bg-opacity-95' : 'h-20 bg-opacity-50'} z-[1000] transition-all duration-300 ease-in-out bg-[#0c0c0c] backdrop-blur-md`}
      variants={headerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="container-custom flex justify-between items-center h-full">
        <Link to="/" className="flex items-center text-white font-playfair text-xl font-bold tracking-wider">
          <FaMusic className="text-[#d4af37] mr-2 text-2xl" />
          <span>Harmeet Meet</span>
        </Link>

        {/* Mobile menu button */}
        <div className="text-white text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex fixed md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto h-[calc(100vh-4rem)] md:h-auto bg-[#0c0c0c] md:bg-transparent flex-col md:flex-row items-center justify-start md:justify-end py-8 md:py-0 transition-all duration-300 ease-in-out z-50 md:z-auto`}>
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto list-none">
            {navLinks.map((link, index) => (
              <li key={index} className="mx-0 md:mx-1 lg:mx-3 my-3 md:my-0 relative w-full md:w-auto text-center md:text-left">
                <Link
                  to={link.path}
                  className={`relative block px-4 py-3 md:py-2 md:px-3 font-inter text-sm md:text-base font-medium tracking-wider transition-colors duration-300 ${activeSection === link.path.slice(1) || (link.path === '/' && activeSection === 'home')
                      ? 'text-[#d4af37]'
                      : 'text-[#b3b3b3] hover:text-white'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                  <motion.div
                    className={`absolute h-[2px] bg-[#d4af37] transition-all duration-300 left-0 bottom-0 md:bottom-[-4px] ${activeSection === link.path.slice(1) || (link.path === '/' && activeSection === 'home')
                        ? 'md:w-full'
                        : 'md:w-0'
                      }`}
                    initial={{ width: '0%' }}
                    animate={{
                      width: activeSection === link.path.slice(1) || (link.path === '/' && activeSection === 'home')
                        ? '100%'
                        : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex mt-8 md:mt-0 md:ml-8">
            {socialLinks.slice(0, 3).map((social, index) => {
              // Dynamically select the correct icon component
              let IconComponent;
              switch (social.icon) {
                case 'FaInstagram':
                  IconComponent = FaInstagram;
                  break;
                case 'FaYoutube':
                  IconComponent = FaYoutube;
                  break;
                case 'FaSpotify':
                  IconComponent = FaSpotify;
                  break;
                case 'FaFacebook':
                  IconComponent = FaFacebook;
                  break;
                case 'FaTwitter':
                  IconComponent = FaTwitter;
                  break;
                default:
                  IconComponent = FaMusic;
              }

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 mx-2 rounded-full border border-[#3a3a3a] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#0c0c0c] hover:border-[#d4af37]"
                >
                  <IconComponent size={16} />
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
