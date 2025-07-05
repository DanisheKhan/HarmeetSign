import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaPlay, FaSpotify, FaYoutube, FaHeadphones } from 'react-icons/fa';
import { pageTransition, fadeIn, staggerContainer, textVariant } from '../constants/motion';
import { ImageContainer } from '../components/ui';

// Placeholder data for music - replace with real data from constants/data.js in production
const musicCategories = [
  { id: 'all', name: 'All Music' },
  { id: 'bollywood', name: 'Bollywood' },
  { id: 'singles', name: 'Singles' },
  { id: 'collaborations', name: 'Collaborations' }
];

const musicCollection = [
  {
    id: 1,
    title: 'Baby Doll',
    film: 'Ragini MMS 2',
    year: '2014',
    category: 'bollywood',
    coverImage: '/imgs/img2.jpg',
    spotify: 'https://open.spotify.com/track/example',
    youtube: 'https://youtube.com/watch?v=example'
  },
  {
    id: 2,
    title: 'Chittiyaan Kalaiyaan',
    film: 'Roy',
    year: '2015',
    category: 'bollywood',
    coverImage: '/imgs/img3.jpg',
    spotify: 'https://open.spotify.com/track/example',
    youtube: 'https://youtube.com/watch?v=example'
  },
  {
    id: 3,
    title: 'Hangover',
    film: 'Kick',
    year: '2014',
    category: 'bollywood',
    coverImage: '/imgs/img4.jpg',
    spotify: 'https://open.spotify.com/track/example',
    youtube: 'https://youtube.com/watch?v=example'
  },
  {
    id: 4,
    title: 'Pink Lips',
    film: 'Hate Story 2',
    year: '2014',
    category: 'bollywood',
    coverImage: '/imgs/img5.jpg',
    spotify: 'https://open.spotify.com/track/example',
    youtube: 'https://youtube.com/watch?v=example'
  },
  {
    id: 5,
    title: 'Party Toh Banti Hai',
    film: 'Bhoothnath Returns',
    year: '2014',
    category: 'bollywood',
    coverImage: '/imgs/img6.jpg',
    spotify: 'https://open.spotify.com/track/example',
    youtube: 'https://youtube.com/watch?v=example'
  },
  {
    id: 6,
    title: 'Desi Look',
    film: 'Ek Paheli Leela',
    year: '2015',
    category: 'bollywood',
    coverImage: '/imgs/img7.jpg',
    spotify: 'https://open.spotify.com/track/example',
    youtube: 'https://youtube.com/watch?v=example'
  },
  {
    id: 7,
    title: 'Rockstar',
    film: 'Single',
    year: '2020',
    category: 'singles',
    coverImage: '/imgs/img8.webp',
    spotify: 'https://open.spotify.com/track/example',
    youtube: 'https://youtube.com/watch?v=example'
  },
  {
    id: 8,
    title: 'Heartbeat',
    film: 'Collaboration with Neha Kakkar',
    year: '2021',
    category: 'collaborations',
    coverImage: '/imgs/img9.webp',
    spotify: 'https://open.spotify.com/track/example',
    youtube: 'https://youtube.com/watch?v=example'
  }
];

const MusicPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredMusic, setFilteredMusic] = useState([]);
  const [activeTrack, setActiveTrack] = useState(null);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredMusic(musicCollection);
    } else {
      setFilteredMusic(musicCollection.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-950 z-0">
          {/* Dark gradient overlay on background */}
          <div className="w-full h-full bg-gradient-to-r from-zinc-950 to-zinc-900 opacity-90"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/imgs/img1.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            variants={textVariant(0.2)}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair mb-6"
          >
            Music by <span className="text-amber-400">Harmeet Singh</span>
          </motion.h1>

          <motion.p
            variants={textVariant(0.4)}
            className="text-zinc-300 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Explore the discography that has shaped Bollywood's modern sound
          </motion.p>
        </div>
      </section>

      {/* Music Filter & Display Section */}
      <section className="py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 flex flex-wrap justify-center gap-2"
          >
            {musicCategories.map((category) => (
              <motion.button
                key={category.id}
                variants={fadeIn('up', 0.2)}
                className={`px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${activeCategory === category.id
                    ? 'bg-amber-400 text-zinc-950 shadow-lg'
                    : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
                  }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Music Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredMusic.map((music) => (
              <motion.div
                key={music.id}
                variants={fadeIn('up', 0.3)}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg bg-zinc-900 shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <ImageContainer
                    src={music.coverImage}
                    alt={music.title}
                    aspectRatio="aspect-square"
                    hover={true}
                    borderRadius="rounded-lg"
                  >
                    <div className="p-6 pb-5 w-full bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
                      <h3 className="text-xl font-playfair font-bold text-white mb-1">{music.title}</h3>
                      <p className="text-zinc-400 text-sm mb-3">{music.film} · {music.year}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                          <a
                            href={music.spotify}
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-500 hover:text-green-400 transition-colors"
                            aria-label={`Listen to ${music.title} on Spotify`}
                          >
                            <FaSpotify size={20} />
                          </a>
                          <a
                            href={music.youtube}
                            target="_blank"
                            rel="noreferrer"
                            className="text-red-500 hover:text-red-400 transition-colors"
                            aria-label={`Watch ${music.title} on YouTube`}
                          >
                            <FaYoutube size={22} />
                          </a>
                        </div>
                        <button
                          onClick={() => setActiveTrack(music.id === activeTrack ? null : music.id)}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-colors"
                          aria-label={`Play ${music.title}`}
                        >
                          <FaPlay size={12} className="ml-0.5" />
                        </button>
                      </div>
                    </div>
                  </ImageContainer>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredMusic.length === 0 && (
            <div className="text-center py-20">
              <FaHeadphones className="text-zinc-700 text-6xl mx-auto mb-4" />
              <p className="text-zinc-400 text-xl">No music found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-20 bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={textVariant(0.1)}
              className="text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-6"
            >
              Latest <span className="text-amber-400">Releases</span>
            </motion.h2>
            <motion.p
              variants={textVariant(0.3)}
              className="text-zinc-300 max-w-xl mx-auto"
            >
              Check out Harmeet Singh's newest music, featuring fresh collaborations and groundbreaking sounds
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              variants={fadeIn('right', 0.4)}
              className="rounded-xl overflow-hidden shadow-2xl bg-zinc-800"
            >
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-amber-400/20"></div>
                <img
                  src="/imgs/img10.webp"
                  alt="Latest Release"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent">
                  <div className="absolute bottom-6 left-6 flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-colors cursor-pointer">
                      <FaPlay size={20} className="ml-1" />
                    </div>
                    <div className="ml-4">
                      <p className="text-amber-400 font-medium text-sm uppercase tracking-wider">Latest Single</p>
                      <h3 className="text-white text-xl font-bold">Heartbeat (2024)</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-zinc-300 mb-6">
                  A fusion of traditional Indian sounds with contemporary electronic beats, "Heartbeat"
                  showcases Harmeet Singh's innovative approach to modern music production.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="px-5 py-2.5 bg-amber-400 text-zinc-950 rounded-lg hover:bg-amber-300 transition-colors text-sm font-medium"
                  >
                    Watch Video
                  </a>
                  <a
                    href="#"
                    className="px-5 py-2.5 border border-zinc-600 text-zinc-300 rounded-lg hover:border-amber-400 hover:text-amber-400 transition-colors text-sm font-medium"
                  >
                    Listen on Spotify
                  </a>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('left', 0.3 + (index * 0.1))}
                  className="flex bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="w-1/3 relative">
                    <img
                      src={`/imgs/img${11 + index}.webp`}
                      alt={`Recent release ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-5">
                    <h3 className="font-bold text-white text-lg mb-1">Track Title {index + 1}</h3>
                    <p className="text-zinc-400 text-sm mb-3">Featuring Artist · 2024</p>
                    <p className="text-zinc-300 text-sm line-clamp-2">
                      A brief description of this musical collaboration and its significance.
                    </p>
                    <div className="mt-3 flex items-center">
                      <button className="text-amber-400 hover:text-amber-300 flex items-center text-sm font-medium">
                        <FaPlay size={12} className="mr-2" /> Play Preview
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MusicPage;
