import React from 'react';
import FadeInSection from './FadeInSection';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 text-center flex flex-col">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-6 flex-shrink-0">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const serviceData = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      title: "Algorithmic Trend Engine",
      description: "Harness the power of automation. Our system identifies and analyzes high-probability trending assets in real-time, delivering actionable alerts straight to you."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "1-on-1 Performance Mentorship",
      description: "Get personalized coaching from a seasoned pro who will analyze your trades, refine your strategy, and provide accountability to accelerate your growth and discipline."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: "Structured Trader's Blueprint",
      description: "A step-by-step system covering risk management, technical analysis, and psychological mastery to build a solid foundation for long-term success."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
      title: "Alpha Intelligence Briefing",
      description: "This service provides exclusive market analysis, hidden gem opportunities, and strategic insights you won't find anywhere else, giving you the 'alpha' to stay ahead."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Services;