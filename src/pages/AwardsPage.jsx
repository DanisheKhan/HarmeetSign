import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTrophy, FaMedal, FaStar, FaChevronDown } from 'react-icons/fa';
import { pageTransition, fadeIn, staggerContainer, textVariant } from '../constants/motion';

// Placeholder data for awards
const awardCategories = [
  { id: 'all', name: 'All Awards' },
  { id: 'filmfare', name: 'Filmfare Awards' },
  { id: 'iifa', name: 'IIFA Awards' },
  { id: 'other', name: 'Other Awards' }
];

const awards = [
  {
    id: 1,
    title: 'Filmfare Award',
    category: 'filmfare',
    description: 'Best Music Director',
    year: '2015',
    image: '/imgs/img2.jpg',
    for: 'Baby Doll - Ragini MMS 2',
  },
  {
    id: 2,
    title: 'IIFA Award',
    category: 'iifa',
    description: 'Best Music Direction',
    year: '2016',
    image: '/imgs/img3.jpg',
    for: 'Chittiyaan Kalaiyaan - Roy',
  },
  {
    id: 3,
    title: 'Screen Award',
    category: 'other',
    description: 'Best Music Director',
    year: '2014',
    image: '/imgs/img4.jpg',
    for: 'Baby Doll - Ragini MMS 2',
  },
  {
    id: 4,
    title: 'Dadasaheb Phalke Excellence Award',
    category: 'other',
    description: 'Best Live Performers',
    year: '2018',
    image: '/imgs/img5.jpg',
    for: 'Outstanding contribution to music',
  },
  {
    id: 5,
    title: 'Filmfare Award',
    category: 'filmfare',
    description: 'Best Music Album',
    year: '2017',
    image: '/imgs/img6.jpg',
    for: 'Various chart-topping songs',
  },
  {
    id: 6,
    title: 'IIFA Award',
    category: 'iifa',
    description: 'Best Song of the Year',
    year: '2015',
    image: '/imgs/img7.jpg',
    for: 'Hangover - Kick',
  }
];

const milestones = [
  {
    year: '2011',
    title: 'First Major Breakthrough',
    description: 'Meet Bros made their first significant entry into Bollywood with "Do-Dhaari Talwaar" from the movie Mere Brother Ki Dulhan.'
  },
  {
    year: '2014',
    title: 'Nationwide Recognition',
    description: 'Rose to national fame with "Baby Doll" from Ragini MMS 2, one of the biggest hits of the year.'
  },
  {
    year: '2015-2016',
    title: 'Hit Machine Era',
    description: 'Delivered a series of chart-topping songs including "Chittiyaan Kalaiyaan" and "Pink Lips" cementing their position in Bollywood.'
  },
  {
    year: '2018',
    title: 'International Recognition',
    description: 'Expanded global presence with international tours and collaborations.'
  },
  {
    year: '2020',
    title: 'Independent Music Label',
    description: 'Established MB Music, an independent music label to nurture emerging talent.'
  },
  {
    year: '2022',
    title: 'Expanding Horizons',
    description: 'Launched MB Music Academy to mentor aspiring musicians while continuing to create chart-topping music.'
  }
];

const AwardsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedMilestone, setExpandedMilestone] = useState(null);

  // Filter awards based on selected category
  const filteredAwards = activeCategory === 'all'
    ? awards
    : awards.filter(award => award.category === activeCategory);

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
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-zinc-900"></div>
          <div className="absolute inset-0 bg-[url('/imgs/img14.webp')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          {/* Golden sparkling overlay */}
          <div className="absolute inset-0 bg-amber-400/10"></div>
        </div>

        {/* Trophy icons floating in background */}
        <div className="absolute top-[20%] left-[10%] text-amber-400/20 text-6xl">
          <FaTrophy />
        </div>
        <div className="absolute top-[30%] right-[15%] text-amber-400/20 text-5xl">
          <FaMedal />
        </div>
        <div className="absolute bottom-[25%] left-[20%] text-amber-400/20 text-4xl">
          <FaStar />
        </div>
        <div className="absolute bottom-[15%] right-[10%] text-amber-400/20 text-6xl">
          <FaTrophy />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            variants={textVariant(0.2)}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair mb-6"
          >
            Awards & <span className="text-amber-400">Achievements</span>
          </motion.h1>

          <motion.p
            variants={textVariant(0.4)}
            className="text-zinc-300 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Celebrating musical excellence and industry recognition
          </motion.p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Categories */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16 flex flex-wrap justify-center gap-2"
          >
            {awardCategories.map((category) => (
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

          {/* Awards Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAwards.map((award) => (
              <motion.div
                key={award.id}
                variants={fadeIn('up', 0.3)}
                className="relative group"
              >
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative h-48">
                    <div className="absolute inset-0">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="bg-amber-400 text-zinc-950 px-3 py-1 rounded-full text-xs font-bold">
                        {award.year}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white text-xl font-bold">{award.title}</h3>
                      <p className="text-amber-400 text-sm">{award.description}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-zinc-900">
                    <div className="flex items-start">
                      <FaTrophy className="text-amber-400 text-xl mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-zinc-300 font-medium">Awarded for</p>
                        <p className="text-white">{award.for}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state for no awards in category */}
          {filteredAwards.length === 0 && (
            <div className="text-center py-12">
              <FaTrophy className="text-zinc-700 text-6xl mx-auto mb-4" />
              <p className="text-zinc-400 text-xl">No awards found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Career Milestones Timeline */}
      <section className="py-20 bg-zinc-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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
              Career <span className="text-amber-400">Milestones</span>
            </motion.h2>
            <motion.p
              variants={textVariant(0.3)}
              className="text-zinc-300 max-w-xl mx-auto"
            >
              The journey of musical excellence and innovation through the years
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + (index * 0.05))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div
                  className={`relative border-l-4 ${index === milestones.length - 1 ? 'border-transparent' : 'border-amber-400/30'
                    } pl-8 pb-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-amber-400"></div>

                  <div
                    className={`bg-zinc-800 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${expandedMilestone === index ? 'shadow-xl shadow-amber-400/5' : 'shadow-lg'
                      }`}
                    onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="bg-amber-400/10 text-amber-400 px-4 py-1 rounded-full text-sm font-medium">
                          {milestone.year}
                        </div>
                        <FaChevronDown
                          className={`text-amber-400 transition-transform duration-300 ${expandedMilestone === index ? 'rotate-180' : 'rotate-0'
                            }`}
                        />
                      </div>

                      <h3 className="text-white text-xl font-bold mb-2">{milestone.title}</h3>

                      {expandedMilestone === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <p className="text-zinc-300">{milestone.description}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Press Quotes */}
      <section className="py-20 bg-zinc-950">
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
              Media <span className="text-amber-400">Recognition</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + (index * 0.05))}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-8 border border-zinc-800"
              >
                <div className="mb-6">
                  <div className="text-amber-400 text-4xl">"</div>
                </div>
                <p className="text-zinc-300 italic mb-6">
                  Harmeet Singh has redefined the sound of modern Bollywood with his innate ability
                  to blend traditional elements with contemporary beats.
                </p>
                <div>
                  <p className="text-white font-medium">Media Publication {index + 1}</p>
                  <p className="text-zinc-500 text-sm">2023</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AwardsPage;
