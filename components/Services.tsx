import React from 'react';
import FadeInSection from './FadeInSection';

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full overflow-hidden group">
    <div className="h-48 overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6 text-center flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow leading-relaxed">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const serviceData = [
    {
      imageUrl: "https://i.postimg.cc/mD8Z8q9y/trading-lounge.jpg",
      title: "Trading Lounge",
      description: "Step into our high-speed trading zone — equipped with pro-level setups, real-time market screens, and powerful Wi-Fi. Trade, track, and triumph — all with a cup of coffee in hand."
    },
    {
      imageUrl: "https://i.postimg.cc/6pQfWcRf/learning-pods.jpg",
      title: "Learning Pods",
      description: "Mini study hubs where beginners and pros exchange knowledge. Attend micro-sessions on Forex, Crypto, and Stock trading — or host your own session to teach and inspire!"
    },
    {
      imageUrl: "https://i.postimg.cc/J0k7N8Yx/trader-connect.jpg",
      title: "Trader Connect",
      description: "Meet fellow traders, investors, and financial enthusiasts. Network over cappuccinos, share insights, or form trading circles — your next big idea might start here."
    },
    {
      imageUrl: "https://i.postimg.cc/d11gS9bL/coffee-charts.jpg",
      title: "Coffee & Charts",
      description: "Our signature event! A casual blend of market talk and mocha. Discuss global trends, price actions, and strategies — every sip fuels your next move."
    },
    {
      imageUrl: "https://i.postimg.cc/x8K5Z6Yw/mentorship-zone.jpg",
      title: "Mentorship Zone",
      description: "Book 1-on-1 or group sessions with experienced traders. Learn smart strategies, risk management, and market psychology — practical wisdom brewed fresh daily."
    },
    {
      imageUrl: "https://i.postimg.cc/q7xW0Q2B/market-stream.jpg",
      title: "Global Market Café Stream",
      description: "Live market screens featuring Forex, stocks, and crypto updates — projected in real-time. Stay connected to the world’s pulse as you sip and study."
    },
    {
      imageUrl: "https://i.postimg.cc/Wb7F4kXf/simulation-corner.jpg",
      title: "Simulation Corner",
      description: "Test your trading skills in a demo environment — risk-free and realistic. Compete in “Trading Battles” or challenge your friends for the top spot!"
    },
    {
      imageUrl: "https://i.postimg.cc/jS3g5P8M/investment-talks.jpg",
      title: "Investment Talk Nights",
      description: "Weekly community sessions where experts, guests, or even members share insights about trading, investing, and financial independence — in a cozy café vibe."
    },
    {
      imageUrl: "https://i.postimg.cc/GpdH0S4Q/trading-courses.jpg",
      title: "Trading Courses & Workshops",
      description: "Learn at your pace. From beginner to pro-level — tailored programs on Forex, Crypto, Stocks, and Technical Analysis — with certifications."
    },
    {
      imageUrl: "https://i.postimg.cc/NfvR5C2F/chill-zone.jpg",
      title: "Chill & Create Zone",
      description: "A relaxed spot to brainstorm business ideas, journal your trades, or simply enjoy creative conversations. Because great minds think better over good coffee."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceData.map((service, index) => (
              <ServiceCard key={index} imageUrl={service.imageUrl} title={service.title} description={service.description} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Services;