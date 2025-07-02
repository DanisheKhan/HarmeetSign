import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ui/ScrollToTop';
// import './styles/global.css';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            {/* Add additional routes here when pages are created */}
            <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-playfair text-white">Page Not Found</h1>
            </div>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
