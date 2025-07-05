import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaYoutube, FaSpotify, FaFacebook, FaTwitter, FaMusic } from 'react-icons/fa';
import { pageTransition, fadeIn, staggerContainer, textVariant } from '../constants/motion';
import { socialLinks } from '../constants/data';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form (simple validation)
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill all required fields'
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      type: 'loading',
      message: 'Sending message...'
    });

    // Fake API call delay
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-950 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-zinc-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-zinc-900 opacity-50"></div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            variants={textVariant(0.2)}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-playfair mb-6"
          >
            Get In <span className="text-amber-400">Touch</span>
          </motion.h1>

          <motion.p
            variants={textVariant(0.4)}
            className="text-zinc-300 max-w-2xl mx-auto text-lg md:text-xl"
          >
            For bookings, collaborations, and press inquiries
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeIn('right', 0.2)}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6">
                  Contact <span className="text-amber-400">Information</span>
                </h2>
                <p className="text-zinc-300 mb-8">
                  Interested in booking Harmeet for a show, collaborating on a project,
                  or have press inquiries? Reach out using the contact details below.
                </p>
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  variants={fadeIn('up', 0.3)}
                  className="flex"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-amber-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg mb-1">Location</h3>
                    <p className="text-zinc-400">Mumbai, Maharashtra, India</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn('up', 0.4)}
                  className="flex"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-amber-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg mb-1">Email</h3>
                    <a href="mailto:bookings@harmeetmeet.com" className="text-zinc-400 hover:text-amber-400 transition-colors">
                      bookings@harmeetmeet.com
                    </a>
                    <p className="text-zinc-500 text-sm mt-1">
                      For management: <a href="mailto:management@harmeetmeet.com" className="hover:text-amber-400 transition-colors">management@harmeetmeet.com</a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn('up', 0.5)}
                  className="flex"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mr-4">
                    <FaPhone className="text-amber-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg mb-1">Phone</h3>
                    <p className="text-zinc-400">+91 (123) 456-7890</p>
                    <p className="text-zinc-500 text-sm mt-1">Monday to Friday, 10am - 6pm IST</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn('up', 0.6)}
                  className="pt-6"
                >
                  <h3 className="text-white font-medium text-lg mb-3">Connect On Social Media</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com/harmeetmeet"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-zinc-950 hover:border-amber-400 transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://youtube.com/harmeetmeet"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-zinc-950 hover:border-amber-400 transition-all duration-300"
                      aria-label="YouTube"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="https://open.spotify.com/artist/harmeetmeet"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-zinc-950 hover:border-amber-400 transition-all duration-300"
                      aria-label="Spotify"
                    >
                      <FaSpotify />
                    </a>
                    <a
                      href="https://facebook.com/harmeetmeet"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-zinc-950 hover:border-amber-400 transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://twitter.com/harmeetmeet"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-zinc-950 hover:border-amber-400 transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-playfair text-white mb-6">
                Send a <span className="text-amber-400">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-zinc-300 mb-2 text-sm">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-zinc-300 mb-2 text-sm">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-zinc-300 mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-zinc-300 mb-2 text-sm">
                    Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  ></textarea>
                </div>

                {formStatus && (
                  <div className={`p-4 rounded ${formStatus.type === 'success' ? 'bg-green-900/20 text-green-300' :
                    formStatus.type === 'error' ? 'bg-red-900/20 text-red-300' :
                      'bg-amber-900/20 text-amber-300'
                    }`}>
                    {formStatus.message}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="bg-amber-400 text-zinc-950 font-medium px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    disabled={formStatus?.type === 'loading'}
                  >
                    {formStatus?.type === 'loading' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
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
              Booking <span className="text-amber-400">Information</span>
            </motion.h2>
            <motion.p
              variants={textVariant(0.3)}
              className="text-zinc-300 max-w-2xl mx-auto"
            >
              Interested in booking Harmeet Singh for your event?
              Here's what you need to know.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-zinc-800 rounded-xl p-8 text-center"
            >
              <div className="bg-amber-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMusic className="text-amber-400 text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Live Performances</h3>
              <p className="text-zinc-300">
                Available for concerts, corporate events,
                private functions, and music festivals.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-zinc-800 rounded-xl p-8 text-center"
            >
              <div className="bg-amber-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSpotify className="text-amber-400 text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Collaborations</h3>
              <p className="text-zinc-300">
                Open to musical collaborations with artists,
                producers and brands aligned with his vision.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-zinc-800 rounded-xl p-8 text-center"
            >
              <div className="bg-amber-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="text-amber-400 text-2xl" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Media Inquiries</h3>
              <p className="text-zinc-300">
                For interviews, press features, and other
                media opportunities, please contact our press team.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="mailto:bookings@harmeetmeet.com"
              className="inline-flex items-center px-8 py-4 bg-amber-400 text-zinc-950 rounded-lg hover:bg-amber-300 transition-colors font-medium"
            >
              Request Booking Information
            </a>
          </motion.div>
        </div>
      </section>

      {/* Map Section - Embed a Google Map or similar */}
      <section className="relative h-[400px] bg-zinc-800">
        <div className="absolute inset-0 bg-zinc-950/30 z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-950/80 backdrop-blur-sm z-20 px-8 py-6 rounded-lg text-center">
          <h3 className="text-white text-2xl font-playfair mb-2">Visit Our Studio</h3>
          <p className="text-zinc-300">Mumbai, Maharashtra, India</p>
          <button className="mt-4 px-5 py-2 bg-amber-400 text-zinc-950 rounded hover:bg-amber-300 transition-colors text-sm font-medium">
            Get Directions
          </button>
        </div>
        {/* Map background using an existing image from our project */}
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 bg-cover bg-center" style={{ backgroundImage: "url('/imgs/img14.webp')", backgroundOpacity: 0.2 }}></div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
