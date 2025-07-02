import { motion } from 'framer-motion';
import { FaPlay, FaSpotify, FaYoutube } from 'react-icons/fa';
import { pageTransition, fadeIn, staggerContainer, textVariant } from '../constants/motion';
import { featuredMusic } from '../constants/data';

const HomePage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black z-0">
          {/* Replace with actual video or high-res image */}
          <div className="w-full h-full bg-[url('/concert-backdrop.jpg')] bg-cover bg-center opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black z-10"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container-custom relative z-20 text-center"
        >
          <motion.h1
            variants={textVariant(0.2)}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair mb-6"
          >
            <span className="font-light">Harmeet</span> <span className="text-[#d4af37]">Meet</span>
          </motion.h1>

          <motion.p
            variants={textVariant(0.4)}
            className="text-lg md:text-xl font-merriweather text-gray-200 max-w-2xl mx-auto mb-8"
          >
            Composer. Performer. Visionary.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.6)}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#about"
              className="px-8 py-3 bg-[#d4af37] text-[#0c0c0c] font-medium rounded hover:bg-[#f2d675] transition-colors transform hover:-translate-y-1 duration-300"
            >
              Discover Journey
            </a>
            <a
              href="#music"
              className="px-8 py-3 border border-[#d4af37] text-[#d4af37] font-medium rounded hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-colors transform hover:-translate-y-1 duration-300 flex items-center"
            >
              <FaPlay className="mr-2" /> Listen Now
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.8)}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Music Section */}
      <section id="music" className="py-16 md:py-24 bg-[#0c0c0c]">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariant(0.1)}
              className="text-3xl md:text-4xl font-playfair mb-4"
            >
              <span className="text-[#d4af37]">Featured</span> Music
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              className="text-[#b3b3b3] max-w-2xl mx-auto"
            >
              Experience the melodic brilliance of Harmeet Meet through his most acclaimed musical creations that have left a lasting impact on Bollywood.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMusic.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-[#161616] rounded-lg overflow-hidden group"
              >
                <div className="h-48 overflow-hidden relative">
                  {/* Replace with actual thumbnail */}
                  <div className="w-full h-full bg-[url('/music-thumbnail-placeholder.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-[#d4af37] text-[#0c0c0c]"
                    >
                      <FaPlay />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                  <p className="text-[#6e6e6e] text-sm mb-3">{item.movie}, {item.year}</p>
                  <p className="text-[#b3b3b3] mb-4 text-sm line-clamp-2">{item.description}</p>
                  <div className="flex justify-between">
                    <a
                      href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#d4af37] hover:text-[#f2d675] transition-colors text-sm"
                    >
                      <FaYoutube className="mr-1 text-lg" /> YouTube
                    </a>
                    <a
                      href="#"
                      className="flex items-center text-[#d4af37] hover:text-[#f2d675] transition-colors text-sm"
                    >
                      <FaSpotify className="mr-1 text-lg" /> Spotify
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/music"
              className="px-8 py-3 border border-[#d4af37] text-[#d4af37] font-medium rounded hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-colors inline-block"
            >
              View All Music
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section id="about" className="py-16 md:py-24 bg-[#161616] relative overflow-hidden">
        <div className="spotlight"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">
                The <span className="text-[#d4af37]">Journey</span> of <br />
                Musical Excellence
              </h2>
              <div className="w-24 h-1 bg-[#d4af37] mb-8"></div>
              <p className="text-[#b3b3b3] mb-6">
                Born and raised in Gwalior, Harmeet Singh's musical journey began at The Scindia School and continued through Sydenham College, where he refined his artistic vision and technical expertise.
              </p>
              <p className="text-[#b3b3b3] mb-8">
                From his early television appearances to becoming one of Bollywood's most celebrated music directors, Harmeet Meet's career has been defined by innovation, versatility, and a deep connection to India's rich musical heritage.
              </p>
              <a
                href="/about"
                className="px-8 py-3 bg-[#d4af37] text-[#0c0c0c] font-medium rounded hover:bg-[#f2d675] transition-colors inline-block"
              >
                Full Biography
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              {/* Replace with actual image */}
              <div className="h-[500px] relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-[url('/harmeet-portrait.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161616]"></div>
              </div>
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="font-playfair text-[#d4af37] text-xl mb-1">Harmeet Meet</h3>
                <p className="text-white">Music Director & Composer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Latest Release */}
      <section className="py-16 md:py-24 bg-[#0c0c0c] relative">
        <div className="absolute inset-0 bg-[url('/latest-release-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={textVariant(0.1)}
              className="text-3xl md:text-4xl font-playfair mb-4"
            >
              Latest <span className="text-[#d4af37]">Release</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              className="text-[#b3b3b3] max-w-2xl mx-auto mb-8"
            >
              Experience the latest musical masterpiece from Harmeet Meet, a composition that pushes boundaries and captivates listeners.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.4)}
              className="bg-[#161616] border border-[#232323] p-8 rounded-lg max-w-4xl mx-auto relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="col-span-1">
                  {/* Replace with actual album art */}
                  <div className="aspect-square bg-[url('/album-art-placeholder.jpg')] bg-cover bg-center rounded-md shadow-lg"></div>
                </div>
                <div className="col-span-2 text-left">
                  <h3 className="text-2xl font-playfair mb-2">Harmony in Motion</h3>
                  <p className="text-[#d4af37] mb-4">New Album - 2025</p>
                  <p className="text-[#b3b3b3] mb-6">
                    A groundbreaking fusion of classical Indian instrumentation with contemporary electronic beats, creating an immersive auditory experience that transcends traditional genre boundaries.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="px-6 py-2 bg-[#d4af37] text-[#0c0c0c] font-medium rounded hover:bg-[#f2d675] transition-colors flex items-center"
                    >
                      <FaSpotify className="mr-2" /> Listen on Spotify
                    </a>
                    <a
                      href="#"
                      className="px-6 py-2 border border-[#d4af37] text-[#d4af37] font-medium rounded hover:bg-[#d4af37] hover:text-[#0c0c0c] transition-colors flex items-center"
                    >
                      <FaYoutube className="mr-2" /> Watch on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
