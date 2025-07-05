import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaImages, FaVideo, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { pageTransition, fadeIn, staggerContainer, textVariant } from '../constants/motion';
import { ImageContainer } from '../components/ui';

// Gallery categories
const galleryCategories = [
  { id: 'all', name: 'All Media' },
  { id: 'concerts', name: 'Concerts' },
  { id: 'studio', name: 'Studio' },
  { id: 'behind-scenes', name: 'Behind the Scenes' },
  { id: 'events', name: 'Events' }
];

// Gallery data - these would normally be loaded from an API or data file
const galleryItems = [
  {
    id: 1,
    type: 'image',
    category: 'concerts',
    src: '/imgs/img1.jpg',
    alt: 'Live concert performance',
    caption: 'Electrifying the crowd at Mumbai Concert, 2023'
  },
  {
    id: 2,
    type: 'image',
    category: 'studio',
    src: '/imgs/img2.jpg',
    alt: 'Studio recording session',
    caption: 'Recording session for upcoming album'
  },
  {
    id: 3,
    type: 'image',
    category: 'events',
    src: '/imgs/img3.jpg',
    alt: 'Award ceremony',
    caption: 'Receiving Filmfare Award, 2015'
  },
  {
    id: 4,
    type: 'image',
    category: 'behind-scenes',
    src: '/imgs/img4.jpg',
    alt: 'Behind the scenes of music video',
    caption: 'On set of "Baby Doll" music video'
  },
  {
    id: 5,
    type: 'image',
    category: 'concerts',
    src: '/imgs/img5.jpg',
    alt: 'International tour',
    caption: 'International Tour, London 2022'
  },
  {
    id: 6,
    type: 'image',
    category: 'studio',
    src: '/imgs/img6.jpg',
    alt: 'Composing session',
    caption: 'Composing new tracks at MB Studios'
  },
  {
    id: 7,
    type: 'image',
    category: 'events',
    src: '/imgs/img7.jpg',
    alt: 'Media interview',
    caption: 'Interview with Rolling Stone India'
  },
  {
    id: 8,
    type: 'image',
    category: 'behind-scenes',
    src: '/imgs/img8.webp',
    alt: 'Rehearsal session',
    caption: 'Rehearsing with the band for upcoming tour'
  },
  {
    id: 9,
    type: 'image',
    category: 'concerts',
    src: '/imgs/img9.webp',
    alt: 'Festival performance',
    caption: 'Headlining at Sunburn Festival, Goa'
  },
  {
    id: 10,
    type: 'image',
    category: 'events',
    src: '/imgs/img10.webp',
    alt: 'Charity event',
    caption: 'Performing at charity fundraiser for education'
  },
  {
    id: 11,
    type: 'image',
    category: 'studio',
    src: '/imgs/img11.webp',
    alt: 'Collaboration session',
    caption: 'Collaboration with international artists'
  },
  {
    id: 12,
    type: 'image',
    category: 'behind-scenes',
    src: '/imgs/img12.webp',
    alt: 'Tour bus life',
    caption: 'Life on the road during national tour'
  }
];

// Video gallery data
const videoGallery = [
  {
    id: 101,
    thumbnail: '/imgs/img13.webp',
    title: 'Behind the Music: Baby Doll',
    duration: '5:24',
    category: 'behind-scenes',
    videoUrl: 'https://www.youtube.com/embed/example1'
  },
  {
    id: 102,
    thumbnail: '/imgs/img14.webp',
    title: 'Live at Royal Albert Hall',
    duration: '12:37',
    category: 'concerts',
    videoUrl: 'https://www.youtube.com/embed/example2'
  },
  {
    id: 103,
    thumbnail: '/imgs/img16.webp',
    title: 'Studio Sessions: Making of "Hangover"',
    duration: '8:15',
    category: 'studio',
    videoUrl: 'https://www.youtube.com/embed/example3'
  },
  {
    id: 104,
    thumbnail: '/imgs/img17.webp',
    title: 'Filmfare Awards Performance',
    duration: '7:48',
    category: 'events',
    videoUrl: 'https://www.youtube.com/embed/example4'
  }
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentSection, setCurrentSection] = useState('photos');

  // Filter gallery based on selected category
  const filteredGallery = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const filteredVideos = activeCategory === 'all'
    ? videoGallery
    : videoGallery.filter(video => video.category === activeCategory);

  // Handle lightbox navigation
  const handlePrevious = () => {
    if (!selectedMedia) return;

    const currentIndex = filteredGallery.findIndex(item => item.id === selectedMedia.id);
    const newIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setSelectedMedia(filteredGallery[newIndex]);
  };

  const handleNext = () => {
    if (!selectedMedia) return;

    const currentIndex = filteredGallery.findIndex(item => item.id === selectedMedia.id);
    const newIndex = (currentIndex + 1) % filteredGallery.length;
    setSelectedMedia(filteredGallery[newIndex]);
  };

  // Close lightbox when ESC key is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSelectedMedia(null);
    } else if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    }
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-950 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-zinc-900"></div>
          <div className="absolute inset-0 bg-[url('/imgs/img8.webp')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            variants={textVariant(0.2)}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair mb-6"
          >
            Photo & Video <span className="text-amber-400">Gallery</span>
          </motion.h1>

          <motion.p
            variants={textVariant(0.4)}
            className="text-zinc-300 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Visual highlights from Harmeet Singh's musical journey
          </motion.p>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-12 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center mb-10"
          >
            {/* Section Tabs */}
            <div className="flex p-1 bg-zinc-900 rounded-lg mb-6 sm:mb-0">
              <button
                onClick={() => setCurrentSection('photos')}
                className={`flex items-center px-5 py-2.5 rounded-md transition-colors ${currentSection === 'photos'
                    ? 'bg-amber-400 text-zinc-950'
                    : 'text-zinc-300 hover:text-white'
                  }`}
              >
                <FaImages className="mr-2" />
                Photos
              </button>
              <button
                onClick={() => setCurrentSection('videos')}
                className={`flex items-center px-5 py-2.5 rounded-md transition-colors ${currentSection === 'videos'
                    ? 'bg-amber-400 text-zinc-950'
                    : 'text-zinc-300 hover:text-white'
                  }`}
              >
                <FaVideo className="mr-2" />
                Videos
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {galleryCategories.map((category) => (
                <motion.button
                  key={category.id}
                  variants={fadeIn('up', 0.2)}
                  className={`px-4 py-1.5 rounded-full text-xs transition-all duration-300 ${activeCategory === category.id
                      ? 'bg-amber-400 text-zinc-950'
                      : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Photo Gallery */}
          {currentSection === 'photos' && (
            <motion.div
              variants={staggerContainer(0.05, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn('up', 0.2)}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMedia(item)}
                >
                  <div className="rounded-lg overflow-hidden bg-zinc-900">
                    <div className="aspect-square relative">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white text-sm truncate">{item.caption}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Empty state */}
              {filteredGallery.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <FaImages className="mx-auto text-6xl text-zinc-700 mb-4" />
                  <p className="text-zinc-400 text-xl">No photos found in this category.</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Video Gallery */}
          {currentSection === 'videos' && (
            <motion.div
              variants={staggerContainer(0.05, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {filteredVideos.map((video) => (
                <motion.div
                  key={video.id}
                  variants={fadeIn('up', 0.2)}
                  className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative aspect-video group cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-400 text-zinc-950">
                        <FaVideo className="text-2xl" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-zinc-950/80 px-2 py-1 rounded text-xs text-white">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium text-lg mb-1">{video.title}</h3>
                    <p className="text-zinc-400 text-sm">
                      Category: {galleryCategories.find(cat => cat.id === video.category)?.name}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Empty state */}
              {filteredVideos.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <FaVideo className="mx-auto text-6xl text-zinc-700 mb-4" />
                  <p className="text-zinc-400 text-xl">No videos found in this category.</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Instagram Feed Section */}
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
              Instagram <span className="text-amber-400">Feed</span>
            </motion.h2>
            <motion.p
              variants={textVariant(0.3)}
              className="text-zinc-300 max-w-xl mx-auto"
            >
              Follow <span className="text-amber-400">@harmeetmeet</span> for daily updates and behind the scenes content
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 + (index * 0.03))}
                className="aspect-square bg-zinc-800"
              >
                <img
                  src={`/imgs/img${(index % 12) + 1}${index > 9 ? '.webp' : index > 7 ? '.webp' : '.jpg'}`}
                  alt={`Instagram post ${index}`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <a
              href="https://instagram.com/harmeetmeet"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 bg-amber-400 text-zinc-950 rounded hover:bg-amber-300 transition-colors duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>
          </div>

          <div className="absolute top-1/2 left-4 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
              aria-label="Previous image"
            >
              <FaArrowLeft />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
              aria-label="Next image"
            >
              <FaArrowRight />
            </button>
          </div>

          <div
            className="max-w-5xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMedia.src}
              alt={selectedMedia.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 p-4">
              <p className="text-white">{selectedMedia.caption}</p>
              <p className="text-amber-400 text-sm">
                Category: {galleryCategories.find(cat => cat.id === selectedMedia.category)?.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryPage;
