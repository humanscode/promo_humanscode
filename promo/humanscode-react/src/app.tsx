// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThankYou from './pages/ThankYou';
import DNASystemSection from './components/DNASystemSection/DNASystemSection';
import AIERPSection from './components/AIERPSection/AIERPSection';
const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <DNASystemSection />
              <Services />
              <AIERPSection />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Страница благодарности */}
        <Route path="/pages/ThankYou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
