import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-zinc-950 px-6"
    >
      <div className="max-w-lg w-full text-center">
        <h1 className="text-5xl md:text-7xl font-playfair text-white mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-playfair text-amber-400 mb-8">Page Not Found</h2>
        <p className="text-zinc-400 mb-10">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-medium rounded transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
