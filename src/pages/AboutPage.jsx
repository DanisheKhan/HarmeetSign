import { motion } from 'framer-motion';
import { pageTransition, fadeIn, staggerContainer, textVariant } from '../constants/motion';
import { aboutContent, careerTimeline, quotes, ventures } from '../constants/data';
import { MdMusicNote, MdGroups, MdStar, MdTrendingUp, MdPerson, MdPublic } from 'react-icons/md';
import { ImageContainer } from '../components/ui';

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
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-zinc-950 z-0">
          {/* Dark gradient overlay on background */}
          <div className="absolute inset-0  opacity-90 z-0"></div>
          <img
            src="/imgs/img2.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 mix-blend-overlay"
          />
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
            About <span className="text-amber-400">Harmeet Meet</span>
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
      <section className="py-16 md:py-24 bg-zinc-950">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">
                <span className="text-amber-400">The Early Years</span>
              </h2>
              <div className="w-24 h-1 bg-amber-400 mb-8"></div>

              <div className="space-y-4 text-zinc-300">
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
              {/* Early life image */}
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                <ImageContainer
                  src="/public/HImgs/img20.png"
                  alt="Harmeet Singh's Early Years"
                  aspectRatio="aspect-auto"
                  className="h-full"
                  hover={true}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 md:py-24 bg-zinc-900 relative overflow-hidden">
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
              {/* Journey image */}
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                <ImageContainer
                  src="/public/HImgs/img21.png"
                  alt="Harmeet Singh's Journey"
                  aspectRatio="aspect-auto"
                  className="h-full"
                  hover={true}
                />
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
                <span className="text-amber-400"> The Journey</span>
              </h2>
              <div className="w-24 h-1 bg-amber-400 mb-8"></div>

              <div className="space-y-4 text-zinc-300">
                {aboutContent.journey.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-zinc-950">
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
              <span className="text-amber-400"> Career Timeline</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="w-24 h-1 bg-amber-400 mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              className="text-zinc-300 max-w-2xl mx-auto"
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
                    <div className="text-amber-400 font-bold mb-3">{item.year}</div>
                    <p className="text-zinc-300">{item.description}</p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center text-xl shadow-glow">
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

      {/* Current Ventures Section */}
      <section className="py-16 md:py-24">
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
              <span className="text-amber-400">Current Ventures</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="w-24 h-1 bg-amber-400 mx-auto mb-6"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ventures.slice(0, 3).map((venture) => (
              <motion.div
                key={venture.id}
                variants={fadeIn('up', 0.2 * venture.id)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-zinc-950 rounded-lg overflow-hidden"
              >
                <div className="h-64 bg-zinc-900 flex items-center justify-center p-6">
                  <img
                    src={venture.logo}
                    alt={venture.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{venture.name} - <span className="text-amber-400">{venture.role}</span></h3>
                  <p className="text-amber-400 font-medium mb-4">{venture.timeframe}</p>
                  <p className="text-zinc-300 text-sm">{venture.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {ventures.slice(3, 6).map((venture) => (
              <motion.div
                key={venture.id}
                variants={fadeIn('up', 0.2 * (venture.id - 3))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-zinc-950 rounded-lg overflow-hidden"
              >
                <div className="h-64 bg-zinc-900 flex items-center justify-center p-6">
                  <img
                    src={venture.logo}
                    alt={venture.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{venture.name} - <span className="text-amber-400">{venture.role}</span></h3>
                  <p className="text-amber-400 font-medium mb-4">{venture.timeframe}</p>
                  <p className="text-zinc-300 text-sm">{venture.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {ventures.slice(6).map((venture) => (
              <motion.div
                key={venture.id}
                variants={fadeIn('up', 0.2 * (venture.id - 6))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-zinc-950 rounded-lg overflow-hidden"
              >
                <div className="h-64 bg-zinc-900 flex items-center justify-center p-6">
                  <img
                    src={venture.logo}
                    alt={venture.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{venture.name} - <span className="text-amber-400">{venture.role}</span></h3>
                  <p className="text-amber-400 font-medium mb-4">{venture.timeframe}</p>
                  <p className="text-zinc-300 text-sm">{venture.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Social Impact Section */}
      <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-zinc-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="/public/HImgs/img13.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
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
              Social <span className="text-amber-400">Impact</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="w-24 h-1 bg-amber-400 mx-auto mb-6"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="space-y-4 text-zinc-300">
                {aboutContent.socialImpact.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Social Impact image */}
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                <ImageContainer
                  src="/public/HImgs/img18.png"

                  alt="Harmeet Singh's Social Impact"
                  aspectRatio="aspect-auto"
                  className="h-full object-top"
                  hover={true}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mt-12">
              <a
                href="#"
                className="px-8 py-3 bg-amber-400 text-zinc-950 font-medium rounded hover:bg-amber-300 transition-colors inline-block"
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
