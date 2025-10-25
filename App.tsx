
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Activities from './components/Activities';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Home />
        <AboutUs />
        <Services />
        <Activities />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
