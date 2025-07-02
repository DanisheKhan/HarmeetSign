import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMusic, FaHeart, FaInstagram, FaYoutube, FaSpotify, FaFacebook, FaTwitter } from 'react-icons/fa';
import { navLinks, socialLinks } from '../../constants/data';
import { fadeIn } from '../../constants/motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0c0c] border-t border-[#232323] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1"
          >
            <Link to="/" className="flex items-center mb-6">
              <FaMusic className="text-[#d4af37] mr-2 text-3xl" />
              <h3 className="font-playfair text-2xl font-bold tracking-wider text-white">Harmeet Meet</h3>
            </Link>
            <p className="text-[#b3b3b3] mb-6">
              Composer. Performer. Visionary. Creating musical experiences that transcend boundaries and touch souls.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3a3a3a] text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0c0c0c] hover:border-[#d4af37] hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3a3a3a] text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0c0c0c] hover:border-[#d4af37] hover:-translate-y-1"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href={socialLinks[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3a3a3a] text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0c0c0c] hover:border-[#d4af37] hover:-translate-y-1"
                aria-label="Spotify"
              >
                <FaSpotify />
              </a>
              <a
                href={socialLinks[3].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#3a3a3a] text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0c0c0c] hover:border-[#d4af37] hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h4 className="font-playfair text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-12 after:h-[2px] after:bg-[#d4af37]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-[#b3b3b3] hover:text-[#d4af37] transition-colors flex items-center"
                  >
                    <span className="text-[#d4af37] mr-2">›</span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Recent Works */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h4 className="font-playfair text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-12 after:h-[2px] after:bg-[#d4af37]">
              Recent Works
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="group flex items-center">
                  <div className="w-16 h-16 bg-[#161616] mr-3 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-[url('/baby-doll-thumb.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                  </div>
                  <div>
                    <h6 className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Baby Doll</h6>
                    <p className="text-sm text-[#6e6e6e]">Ragini MMS 2, 2014</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center">
                  <div className="w-16 h-16 bg-[#161616] mr-3 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-[url('/chittiyaan-kalaiyaan-thumb.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                  </div>
                  <div>
                    <h6 className="text-white font-medium group-hover:text-[#d4af37] transition-colors">Chittiyaan Kalaiyaan</h6>
                    <p className="text-sm text-[#6e6e6e]">Roy, 2015</p>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h4 className="font-playfair text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-12 after:h-[2px] after:bg-[#d4af37]">
              Stay Updated
            </h4>
            <p className="text-[#b3b3b3] mb-6">
              Subscribe to our newsletter for the latest updates on new releases, concerts and exclusive content.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-[#161616] border border-[#3a3a3a] text-[#b3b3b3] px-4 py-3 rounded-md focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="bg-[#d4af37] text-[#0c0c0c] font-medium py-3 rounded-md hover:bg-[#f2d675] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#232323] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#6e6e6e] text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Harmeet Meet. All Rights Reserved.
            <span className="mx-1">|</span>
            Made with <FaHeart className="text-[#d4af37] inline mx-1" /> by Your Agency
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-[#6e6e6e] hover:text-[#d4af37] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#6e6e6e] hover:text-[#d4af37] transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-[#6e6e6e] hover:text-[#d4af37] transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
