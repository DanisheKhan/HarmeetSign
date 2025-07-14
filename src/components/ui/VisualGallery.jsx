import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../constants/motion';
import { galleryImages } from '../../constants/data';

const sectionTitle = (main, accent) => (
  <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-playfair text-white mb-6">
    {main} <span className="text-amber-400">{accent}</span>
  </h2>
);

const buttonOutline = (href, text) => (
  <a href={href} className="px-6 py-3 border-2 border-amber-400 text-amber-400 font-medium rounded hover:bg-amber-400 hover:text-zinc-950 transition-all duration-300 inline-block">
    {text}
  </a>
);

function VisualGallery() {
  return (
    <section id="gallery" className="py-20 bg-zinc-950">
      <div className="mx-auto max-w-screen-xl px-6">
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
            {galleryImages.images.map((image, index) => (
              <motion.div
                key={image.id}
                variants={fadeIn('up', 0.1 * (index + 1))}
                className="group relative aspect-square overflow-hidden rounded cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h4 className="text-white font-playfair text-lg">{image.title}</h4>
                    <p className="text-amber-400">Concert Performance</p>
                  </div>
                </div>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
  );
}

export default VisualGallery;
