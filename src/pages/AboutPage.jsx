import { motion } from 'framer-motion';
import { pageTransition, fadeIn, staggerContainer, textVariant } from '../constants/motion';
import { aboutContent, careerTimeline, quotes } from '../constants/data';
import { MdMusicNote, MdGroups, MdStar, MdTrendingUp, MdPerson, MdPublic } from 'react-icons/md';

const AboutPage = () => {
  // Map icon names from data to icon components
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'MdMusicNote': return <MdMusicNote />;
      case 'MdGroups': return <MdGroups />;
      case 'MdStar': return <MdStar />;
      case 'MdTrendingUp': return <MdTrendingUp />;
      case 'MdPerson': return <MdPerson />;
      case 'MdPublic': return <MdPublic />;
      default: return <MdMusicNote />;
    }
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-black z-0">
          {/* Replace with actual image */}
          <div className="w-full h-full bg-[url('/about-hero-bg.jpg')] bg-cover bg-center opacity-40"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black z-10"></div>
        </div>

        {/* Content */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-screen-xl px-6 relative z-20 text-center"
        >
          <motion.h1
            variants={textVariant(0.2)}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair mb-6"
          >
            About <span className="text-[#d4af37]">Harmeet Meet</span>
          </motion.h1>

          <motion.p
            variants={textVariant(0.4)}
            className="text-lg md:text-xl font-merriweather text-gray-200 max-w-2xl mx-auto"
          >
            The journey from a small-town dreamer to a celebrated music maestro
          </motion.p>
        </motion.div>
      </section>

      {/* Early Life Section */}
      <section className="py-16 md:py-24 bg-[#0c0c0c]">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">
                The <span className="text-[#d4af37]">Early</span> Years
              </h2>
              <div className="w-24 h-1 bg-[#d4af37] mb-8"></div>

              <div className="space-y-4 text-[#b3b3b3]">
                {aboutContent.earlyLife.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Replace with actual image */}
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div className="w-full h-full bg-[url('/early-life-image.jpg')] bg-cover bg-center"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 md:py-24 bg-[#161616] relative overflow-hidden">
        <div className="spotlight"></div>
        <div className="mx-auto max-w-screen-xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              {/* Replace with actual image */}
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div className="w-full h-full bg-[url('/journey-image.jpg')] bg-cover bg-center"></div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">
                The <span className="text-[#d4af37]">Journey</span>
              </h2>
              <div className="w-24 h-1 bg-[#d4af37] mb-8"></div>

              <div className="space-y-4 text-[#b3b3b3]">
                {aboutContent.journey.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-[#0c0c0c]">
        <div className="mx-auto max-w-screen-xl px-6">
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
              Career <span className="text-[#d4af37]">Timeline</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              className="text-[#b3b3b3] max-w-2xl mx-auto"
            >
              Tracing the key milestones in Harmeet Meet's illustrious musical journey
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#232323]"></div>

            <div className="relative">
              {careerTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: (i) => ({
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.2,
                        duration: 0.7,
                        ease: "easeOut"
                      }
                    })
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-right' : 'pr-8'}`}>
                    <h3 className="text-2xl font-playfair text-white mb-2">{item.title}</h3>
                    <div className="text-[#d4af37] font-bold mb-3">{item.year}</div>
                    <p className="text-[#b3b3b3]">{item.description}</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#d4af37] text-[#0c0c0c] flex items-center justify-center text-xl shadow-glow">
                      {getIconComponent(item.icon)}
                    </div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Musical Style Section */}
      <section className="py-16 md:py-24 bg-[#161616]">
        <div className="mx-auto max-w-screen-xl px-6">
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
              Musical <span className="text-[#d4af37]">Style</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 text-[#b3b3b3]"
            >
              {aboutContent.musicStyle.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Replace with actual image */}
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                <div className="w-full h-full bg-[url('/music-style-image.jpg')] bg-cover bg-center"></div>
              </div>
            </motion.div>
          </div>

          {/* Quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-[#0c0c0c] p-8 rounded-lg border-l-4 border-[#d4af37] shadow-xl"
              >
                <blockquote className="text-white italic mb-4 text-lg">"{quote.quote}"</blockquote>
                <cite className="text-[#d4af37] block text-sm">— {quote.source}</cite>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-16 md:py-24 bg-[#0c0c0c] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/social-impact-bg.jpg')] bg-cover bg-fixed bg-center opacity-10"></div>
        <div className="mx-auto max-w-screen-xl px-6 relative z-10">
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
              Social <span className="text-[#d4af37]">Impact</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            ></motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="space-y-4 text-[#b3b3b3]">
              {aboutContent.socialImpact.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#"
                className="px-8 py-3 bg-[#d4af37] text-[#0c0c0c] font-medium rounded hover:bg-[#f2d675] transition-colors inline-block"
              >
                Learn About WeCare Initiative
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
