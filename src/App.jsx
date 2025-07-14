import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
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
