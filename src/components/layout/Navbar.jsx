import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMusic, FaBars, FaTimes, FaInstagram, FaYoutube, FaSpotify, FaFacebook, FaTwitter } from 'react-icons/fa';
import { headerVariants } from '../../constants/motion';
import { navLinks, socialLinks } from '../../constants/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Get current path for active link highlighting
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    // Control body scroll when menu is open
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  useEffect(() => {
    // Close mobile menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full ${isScrolled ? 'h-16' : 'h-20'
        } z-50 transition-all duration-300 ease-in-out bg-zinc-950 bg-opacity-${isScrolled ? '95' : '50'
        } backdrop-blur-md`}
      variants={headerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <Link to="/" className="flex items-center text-white font-playfair text-xl font-bold tracking-wider">
          <FaMusic className="text-amber-400 mr-2 text-2xl" />
          <span>Harmeet Meet</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'
          } md:flex fixed md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto h-[calc(100vh-4rem)] md:h-auto bg-zinc-950 md:bg-transparent flex-col md:flex-row items-center justify-start md:justify-end py-8 md:py-0 transition-all duration-300 ease-in-out z-50 md:z-auto`}>
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
            {navLinks.map((link, index) => {
              const isActive = currentPath === link.path || (link.path === '/' && currentPath === '/');

              return (
                <li key={index} className="mx-0 md:mx-1 lg:mx-3 my-3 md:my-0 relative w-full md:w-auto text-center md:text-left">
                  <Link
                    to={link.path}
                    className={`relative block px-4 py-3 md:py-2 md:px-3 font-inter text-sm md:text-base font-medium tracking-wider transition-colors duration-300 ${isActive
                        ? 'text-amber-400'
                        : 'text-zinc-300 hover:text-white'
                      }`}
                  >
                    {link.title}
                    <div className={`absolute h-0.5 bg-amber-400 transition-all duration-300 left-0 bottom-0 md:bottom-[-4px] ${isActive ? 'w-full' : 'w-0'
                      }`} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex mt-8 md:mt-0 md:ml-8">
            {socialLinks.slice(0, 3).map((social, index) => {
              // Dynamically select the correct icon component
              let IconComponent;
              switch (social.icon) {
                case 'FaInstagram': IconComponent = FaInstagram; break;
                case 'FaYoutube': IconComponent = FaYoutube; break;
                case 'FaSpotify': IconComponent = FaSpotify; break;
                case 'FaFacebook': IconComponent = FaFacebook; break;
                case 'FaTwitter': IconComponent = FaTwitter; break;
                default: IconComponent = FaMusic;
              }

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 mx-2 rounded-full border border-zinc-700 text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-zinc-950 hover:border-amber-400"
                  aria-label={social.name}
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
