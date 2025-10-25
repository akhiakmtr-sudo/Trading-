import React from 'react';
import FadeInSection from './FadeInSection';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-100">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to Traders Net Cafe, your ultimate destination for high-speed internet, gaming, and a cozy atmosphere. Established in 2023, our mission is to provide a premium online experience combined with excellent service. Whether you're a professional needing a reliable connection, a student working on a project, or a gamer seeking the thrill of competition, we have created the perfect environment for you.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our cafe is more than just a place with computers; it's a community hub. We host regular events, workshops, and tournaments to bring people together. Enjoy our selection of freshly brewed coffee and delicious snacks while you work, play, or socialize. At Traders Net Cafe, we are committed to fostering a welcoming and productive space for everyone.
            </p>
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <h3 className="text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                STUDY | TRADE | INVEST
              </h3>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutUs;