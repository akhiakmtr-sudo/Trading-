import React from 'react';
import FadeInSection from './FadeInSection';

const CoreValueCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center h-full">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed flex-grow">{children}</p>
  </div>
);

const OfferingCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
        <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
        <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

const AboutUs: React.FC = () => {
  const offerings = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      title: "Trading & Learning Zones",
      description: "Equipped for study, strategy, and analysis."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12l-1.414-1.414a2 2 0 00-2.828 0L10 16.172l-2.828-2.828a2 2 0 00-2.828 2.828l4 4a2 2 0 002.828 0l8-8z" /><path d="M12 22a10 10 0 110-20 10 10 0 010 20z" /></svg>,
      title: "Café Lounge",
      description: "Relax, network, and brainstorm ideas."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Workshops & Mentorships",
      description: "Learn directly from experts."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: "Community & Collaboration",
      description: "Connect with peers, partners, and mentors."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">About Us</h2>
          <p className="text-center text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-12">
            STUDY | TRADE | INVEST
          </p>

          <div className="max-w-4xl mx-auto text-center text-lg text-gray-600 space-y-6 mb-20">
            <p className="leading-relaxed">
              Welcome to Trader’s Net Café, a one-of-a-kind space where learning, trading, and networking come together in a modern café environment. We’re redefining how people experience trading — not behind closed doors, but in an open, inspiring atmosphere designed for thinkers, learners, and doers.
            </p>
            <p className="leading-relaxed">
              At Trader’s Net Café, we believe growth happens where ideas are shared and opportunities are created. Whether you’re an aspiring trader, a student of finance, or simply someone curious about investments, our café gives you the space — and the spark — to learn, trade, and connect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            <CoreValueCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
              title="Our Concept"
            >
              A café for creative minds and financial thinkers. Here, every table is a workspace, every coffee fuels curiosity, and every conversation opens new doors, blending education, innovation, and collaboration.
            </CoreValueCard>
            <CoreValueCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>}
              title="Our Mission"
            >
              To create a vibrant, community-driven space that empowers individuals to study, trade, and invest with confidence — supported by knowledge, technology, and collaboration.
            </CoreValueCard>
            <CoreValueCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l4 4M3 17l4 4" /></svg>}
              title="Our Vision"
            >
              To become the leading hub where finance meets creativity, nurturing a new generation of smart, independent traders and investors across the globe.
            </CoreValueCard>
          </div>

          <div className="max-w-6xl mx-auto text-center mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">What We Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerings.map((offer, index) => (
                <OfferingCard key={index} icon={offer.icon} title={offer.title} description={offer.description} />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-center mb-4 text-blue-800">Our Philosophy</h3>
            <blockquote className="text-center text-xl text-gray-700 italic leading-relaxed">
              "At Trader’s Net Café, we’re not just trading markets — we’re trading ideas, building skills, and sharing success. Because the future belongs to those who learn together, grow together, and trade smart."
            </blockquote>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AboutUs;
