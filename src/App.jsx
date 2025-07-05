import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MusicPage from './pages/MusicPage';
import AwardsPage from './pages/AwardsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ui/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <AnimatePresence mode="wait">
              <HomePage />
            </AnimatePresence>
          } />
          <Route path="about" element={
            <AnimatePresence mode="wait">
              <AboutPage />
            </AnimatePresence>
          } />
          <Route path="music" element={
            <AnimatePresence mode="wait">
              <MusicPage />
            </AnimatePresence>
          } />
          <Route path="awards" element={
            <AnimatePresence mode="wait">
              <AwardsPage />
            </AnimatePresence>
          } />
          <Route path="gallery" element={
            <AnimatePresence mode="wait">
              <GalleryPage />
            </AnimatePresence>
          } />
          <Route path="contact" element={
            <AnimatePresence mode="wait">
              <ContactPage />
            </AnimatePresence>
          } />
          <Route path="*" element={
            <AnimatePresence mode="wait">
              <NotFoundPage />
            </AnimatePresence>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App
