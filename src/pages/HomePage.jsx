import { motion } from 'framer-motion';
import { FaPlay, FaSpotify, FaYoutube, FaChevronDown, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { fadeIn, staggerContainer, textVariant } from '../constants/motion';
import { featuredMusic } from '../constants/data';

const sectionTitle = (main, accent) => (
  <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-6">
    {main} <span className="text-[#d4af37]">{accent}</span>
  </h2>
);

const sectionSubtitle = (text) => (
  <p className="text-xl md:text-2xl font-merriweather text-[#d4af37] mb-12 text-center max-w-3xl mx-auto">{text}</p>
);

const buttonPrimary = (href, text) => (
  <a href={href} className="px-8 py-3 bg-[#d4af37] text-[#0c0c0c] font-medium rounded hover:bg-[#ffd700] transition-colors duration-300 inline-block">
    {text}
  </a>
);

const buttonOutline = (href, text) => (
  <a href={href} className="px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] font-medium rounded hover:bg-[#d4af37] hover:text-[#0f0f0f] transition-all duration-300 inline-block">
    {text}
  </a>
);

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0c0c0c]">
        {/* Video/Image Background with Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="w-full h-full bg-[url('/imgs/img1.jpg')] bg-cover bg-center bg-fixed z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-20"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-10 pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-32 h-32 border-2 border-[#d4af37]"></div>
          <div className="absolute bottom-[15%] right-[10%] w-48 h-48 border-2 border-[#d4af37]"></div>
        </div>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container-custom relative z-30 text-center"
        >
          <motion.div
            variants={fadeIn('down', 0.3)}
            className="inline-block mb-4"
          >
            <div className="px-3 py-1 border-b-2 border-[#d4af37] inline-block">
              <span className="text-sm tracking-widest text-[#d4af37] uppercase font-merriweather">Official Website</span>
            </div>
          </motion.div>

          <motion.h1
            variants={textVariant(0.2)}
            className="text-white text-5xl md:text-6xl lg:text-7xl font-playfair mb-6 tracking-tight"
          >
            <span className="font-light">Harmeet</span> <span className="text-[#d4af37]">Meet</span>
          </motion.h1>

          <motion.div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></motion.div>

          <motion.p
            variants={textVariant(0.4)}
            className="text-xl md:text-2xl font-merriweather text-gray-200 max-w-2xl mx-auto mb-12"
          >
            Composer. Performer. Visionary.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.6)}
            className="flex flex-wrap justify-center gap-6"
          >
            {buttonPrimary('#about', 'Discover Journey')}
            <a
              href="#music"
              className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] font-medium rounded hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-all duration-300 flex items-center"
            >
              <FaPlay className="mr-2" /> Listen Now
            </a>
          </motion.div>

          {/* <motion.div
            variants={fadeIn('up', 0.8)}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a href="#music" className="w-12 h-12 rounded-full border border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#0c0c0c] text-white transition-all duration-300">
              <FaChevronDown className="text-lg animate-bounce" />
            </a>
          </motion.div> */}
        </motion.div>
      </section>

      {/* Featured Music Section */}
      <section id="music" className="py-20 bg-[#0c0c0c]">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {sectionTitle('Iconic', 'Music')}
            {sectionSubtitle('Chart-topping tracks that defined the sound of a generation')}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredMusic.map((track, index) => (
                <motion.div
                  key={track.id}
                  variants={fadeIn('up', 0.2 * (index + 1))}
                  className="bg-[#2d2d2d] rounded p-6 flex flex-col"
                >
                  <div className="relative aspect-video mb-4 overflow-hidden rounded">
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                      <FaPlay className="text-[#d4af37] text-4xl" />
                    </div>
                    <img
                      src={track.thumbnail}
                      alt={track.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        // e.target.src = 'https://via.placeholder.com/480x270?text=Harmeet+Meet';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-playfair text-white mb-1">{track.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{track.movie} ({track.year})</p>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">{track.description}</p>
                  <div className="flex space-x-3 mt-auto">
                    <a href={`https://www.youtube.com/watch?v=${track.youtubeId}`} target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-white transition-colors">
                      <FaYoutube className="text-xl" />
                    </a>
                    <a href="#" className="text-[#d4af37] hover:text-white transition-colors">
                      <FaSpotify className="text-xl" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={fadeIn('up', 0.8)}
              className="text-center mt-12"
            >
              {buttonOutline('/music', 'Explore All Music')}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none select-none">
          <img
            src="/imgs/img3.jpg"
            alt="Music Notes"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {sectionTitle('The', 'Journey')}
              <p className="text-gray-300 mb-6">
                From the musical roots of Gwalior to the glamorous studios of Mumbai, Harmeet Meet's
                journey is a testament to passion, perseverance, and musical innovation.
              </p>
              <p className="text-gray-400 mb-8">
                Educated at The Scindia School and later at Sydenham College, Mumbai,
                his classical training combined with contemporary sensibilities has created a unique
                musical identity that resonates across generations.
              </p>
              {buttonPrimary('/about', 'Read Full Story')}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-[#1a1a1a] rounded overflow-hidden">
                <img
                  src="/imgs/img2.jpg"
                  alt="Harmeet Meet"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    // e.target.src = 'https://via.placeholder.com/600x600?text=Harmeet+Meet';
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-2xl font-playfair text-white">Harmeet Meet</h3>
                  <p className="text-[#d4af37]">Music Director & Composer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section id="awards" className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {sectionTitle('Awards &', 'Recognition')}
            {sectionSubtitle('Celebrating excellence in musical innovation')}
            <motion.div
              variants={fadeIn('up', 0.5)}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {([
                { name: 'Filmfare Award', category: 'Best Music Director', year: '2020' },
                { name: 'IIFA Award', category: 'Best Music Album', year: '2019' },
                { name: 'Mirchi Music Award', category: 'Song of the Year', year: '2021' }
              ]).map((award, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.2 * (index + 1))}
                  className="w-64 h-64 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded p-6 flex flex-col items-center justify-center text-center transform transition-transform hover:scale-105"
                >
                  <div className="w-16 h-16 mb-4 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                    <img
                      src="/imgs/img5.jpg"
                      alt={`Award ${index + 1}`}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        // e.target.src = 'https://via.placeholder.com/100?text=🏆';
                      }}
                    />
                  </div>
                  <h3 className="text-white font-playfair text-lg mb-2">{award.name}</h3>
                  <p className="text-[#d4af37] mb-2">{award.category}</p>
                  <p className="text-gray-400 text-sm">{award.year}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.8)}
              className="text-center mt-12"
            >
              {buttonOutline('/awards', 'View All Accolades')}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section id="impact" className="py-20 bg-[#0f0f0f] relative">
        <div className="absolute inset-0 bg-[url('/imgs/img4.jpg')] bg-cover bg-center opacity-20 pointer-events-none select-none"></div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-4xl mx-auto text-center"
          >
            {sectionTitle('Social', 'Impact')}
            <motion.p
              variants={textVariant(0.4)}
              className="text-gray-300 mb-8 text-lg"
            >
              Through the WeCare Initiative, Harmeet Meet has dedicated his platform to raising awareness
              about mental health issues in the entertainment industry, creating a safe space for artists
              to seek support and guidance.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              className="p-6 bg-[#1a1a1a]/80 backdrop-blur-sm rounded mb-8"
            >
              <blockquote className="text-lg text-gray-200 italic">
                "Music has the power to heal minds and transform lives. The WeCare Initiative is my way of
                giving back to an industry that has given me so much, by creating awareness and support systems
                for mental health in our creative community."
              </blockquote>
              <div className="mt-4 text-[#d4af37]">— Harmeet Meet</div>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.8)}>
              {buttonOutline('/impact', 'Learn About Our Initiative')}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {sectionTitle('Visual', 'Gallery')}
            <motion.div
              variants={fadeIn('up', 0.4)}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-12"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.1 * (index + 1))}
                  className="group relative aspect-square overflow-hidden rounded cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <h4 className="text-white font-playfair text-lg">Gallery Image {index + 1}</h4>
                      <p className="text-[#d4af37]">Concert Performance</p>
                    </div>
                  </div>
                  <img
                    src={`/imgs/img${(index % 7) + 1}.jpg`}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.8)}
              className="text-center mt-12"
            >
              {buttonOutline('/gallery', 'View Full Gallery')}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
