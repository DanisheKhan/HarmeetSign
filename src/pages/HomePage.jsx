import { motion } from 'framer-motion';
import { FaPlay, FaSpotify, FaYoutube, FaChevronDown, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { fadeIn, staggerContainer, textVariant } from '../constants/motion';
import { featuredMusic } from '../constants/data';
import { ImageContainer, VisualGallery } from '../components/ui';
import { FlipWords } from "../components/ui/FlipWords";
import HarryOm from '../components/ui/HarryOm';


const words = ["Composer", "Performer", " Innovator", "Visionary", "Legend", "Icon", "Maestro"];

const sectionTitle = (main, accent) => (
  <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4 sm:mb-6">
    {main} <span className="text-amber-400">{accent}</span>
  </h2>
);

const sectionSubtitle = (text) => (
  <p className="text-lg sm:text-xl md:text-2xl font-merriweather text-amber-400 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">{text}</p>
);

const buttonPrimary = (href, text) => (
  <a href={href} className="px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-400 text-zinc-950 font-medium rounded hover:bg-amber-300 transition-colors duration-300 inline-block text-sm sm:text-base">
    {text}
  </a>
);

const buttonOutline = (href, text) => (
  <a href={href} className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-amber-400 text-amber-400 font-medium rounded hover:bg-amber-400 hover:text-zinc-950 transition-all duration-300 inline-block text-sm sm:text-base">
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
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-950 z-0">
          {/* Dark gradient overlay on background */}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-10 pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-32 h-32 border-2 border-amber-400"></div>
          <div className="absolute bottom-[15%] right-[10%] w-48 h-48 border-2 border-amber-400"></div>
        </div>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-screen-xl px-6 relative z-30 text-center"
        >
          <motion.div
            variants={fadeIn('down', 0.3)}
            className="inline-block mb-4"
          >
            <div className="px-3 py-1 border-b-2 border-amber-400 inline-block">
              <span className="text-sm tracking-widest text-amber-400 uppercase font-merriweather">Official Website</span>
            </div>
          </motion.div>

          <motion.h1
            variants={textVariant(0.2)}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair mb-4 sm:mb-6 tracking-tight"
          >
            <span className="font-light">Harmeet</span> <span className="text-amber-400">Meet</span>
          </motion.h1>

          <motion.div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto mb-4 sm:mb-6"></motion.div>

          <motion.p
            variants={textVariant(0.4)}
            className="text-lg sm:text-xl md:text-2xl font-merriweather text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-12"
          >
            <div>
              <FlipWords words={words} />
            </div>
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.6)}
            className="flex flex-wrap justify-center gap-6"
          >
            {buttonPrimary('#about', 'Discover Journey')}
            <a
              href="#music"
              className="px-8 py-3 border-2 border-amber-400 text-amber-400 font-medium rounded hover:bg-amber-400 hover:text-zinc-950 transition-all duration-300 flex items-center"
            >
              <FaPlay className="mr-2" /> Listen Now
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Music Section */}
      <section id="music" className="py-20 bg-zinc-950">
        <div className="mx-auto max-w-screen-xl px-6">
          <HarryOm />


          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {sectionTitle('Iconic', 'Music')}
            {sectionSubtitle('Chart-topping tracks that defined the sound of a generation')}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
              {featuredMusic.map((track, index) => (
                <motion.div
                  key={track.id}
                  variants={fadeIn('up', 0.2 * (index + 1))}
                  className="bg-zinc-900 rounded-lg p-4 sm:p-6 flex flex-col"
                >
                  <div className="relative mb-3 sm:mb-4 group cursor-pointer">
                    <ImageContainer
                      src={track.thumbnail}
                      alt={track.title}
                      aspectRatio="aspect-video"
                      hover={true}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaPlay className="text-amber-400 text-3xl sm:text-4xl" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-playfair text-white mb-1">{track.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">{track.movie} ({track.year})</p>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">{track.description}</p>
                  <div className="flex space-x-3 mt-auto">
                    <a href={`https://www.youtube.com/watch?v=${track.youtubeId}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-white transition-colors">
                      <FaYoutube className="text-lg sm:text-xl" />
                    </a>
                    <a href="#" className="text-amber-400 hover:text-white transition-colors">
                      <FaSpotify className="text-lg sm:text-xl" />
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
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-zinc-950 relative overflow-hidden">
        {/* Enhanced background with stronger gradient overlay for better text visibility */}
        <div className="absolute inset-0 z-0"></div>
        {/* Background image with reduced opacity for less distraction */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none select-none z-0">
          <img
            alt="Background pattern"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Content container with improved spacing */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-zinc-950/80 p-4 sm:p-6 rounded-lg backdrop-blur-sm"
            >
              <h2 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-4 sm:mb-6">
                The <span className="text-amber-400">Journey</span>
              </h2>
              <p className="text-gray-200 mb-4 sm:mb-6 text-base sm:text-lg">
                From the musical roots of Gwalior to the glamorous studios of Mumbai, Harmeet Meet's
                journey is a testament to passion, perseverance, and musical innovation.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
                Educated at The Scindia School and later at Sydenham College, Mumbai,
                his classical training combined with contemporary sensibilities has created a unique
                musical identity that resonates across generations.
              </p>
              <div className="text-center lg:text-left">
                {buttonPrimary('/about', 'Read Full Story')}
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              <ImageContainer
                src="/public/HImgs/img8.webp"
                alt="Harmeet Meet"
                aspectRatio="aspect-square"
                hover={true}
                borderRadius="rounded-lg"
                className=""
                overlay="bg-gradient-to-t from-black via-black/70 to-transparent"
              >
                <div className="p-4 sm:p-8 absolute bottom-0 w-full">
                  <h3 className="text-xl sm:text-2xl font-playfair text-white font-bold tracking-wide">Harmeet Meet</h3>
                  <p className="text-amber-400 font-medium">Music Director & Composer</p>
                </div>
              </ImageContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section id="awards" className="py-20 bg-zinc-950">
        <div className="mx-auto max-w-screen-xl px-6">
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12"
            >
              <motion.div
                variants={fadeIn('up', 0.2)}
                className="bg-gradient-to-b from-zinc-800/50 to-zinc-900 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/public/awards/img8.jpg"
                    alt="IIFA Award"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white">IIFA Award</h3>
                    <p className="text-amber-400">Best Music Album</p>
                    <p className="text-gray-300 text-sm">2015</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn('up', 0.4)}
                className="bg-gradient-to-b from-zinc-800/50 to-zinc-900 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/public/awards/img6.webp"
                    alt="7th Mirchi Music Awards"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white">7th Mirchi Music Awards</h3>
                    <p className="text-amber-400">Best Song Producer</p>
                    <p className="text-gray-300 text-sm">2015</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn('up', 0.6)}
                className="bg-gradient-to-b from-zinc-800/50 to-zinc-900 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/public/awards/img5.jpg"
                    alt="Star Guild Awards"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Star Guild Awards</h3>
                    <p className="text-amber-400">Best Music Direction</p>
                    <p className="text-gray-300 text-sm">2015</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn('up', 0.8)}
                className="bg-gradient-to-b from-zinc-800/50 to-zinc-900 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/public/awards/img4.jpg"
                    alt="TOIFA"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white">TOIFA</h3>
                    <p className="text-amber-400">Best Music Album</p>
                    <p className="text-gray-300 text-sm">2016</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section id="impact" className="py-12 sm:py-16 md:py-20 bg-zinc-900 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <ImageContainer
            src="/public/HImgs/img19.png"
            alt="Impact background"
            className="h-full"
            aspectRatio=""
          />
        </div>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 relative z-10">
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
              className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg"
            >
              Through the WeCare Initiative, Harmeet Meet has dedicated his platform to raising awareness
              about mental health issues in the entertainment industry, creating a safe space for artists
              to seek support and guidance.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              className="p-4 sm:p-6 bg-zinc-800/80 backdrop-blur-sm rounded-lg mb-6 sm:mb-8"
            >
              <blockquote className="text-base sm:text-lg text-zinc-200 italic">
                "Music has the power to heal minds and transform lives. The WeCare Initiative is my way of
                giving back to an industry that has given me so much, by creating awareness and support systems
                for mental health in our creative community."
              </blockquote>
              <div className="mt-3 sm:mt-4 text-amber-400">— Harmeet Meet</div>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.8)}>
              {buttonOutline('/impact', 'Learn About Our Initiative')}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <VisualGallery />
    </motion.div>
  );
};

export default HomePage;
