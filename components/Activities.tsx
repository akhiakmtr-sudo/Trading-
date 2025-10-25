import React from 'react';
import FadeInSection from './FadeInSection';

interface ActivityCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, imageUrl, description }) => (
  <div 
    className="relative h-96 rounded-lg shadow-lg overflow-hidden group"
  >
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-6">
      <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Activities: React.FC = () => {
  const activitiesData = [
    { 
      title: "The Prodigy Mentorship Program", 
      description: "A guided journey to trading mastery. This personalized program provides one-on-one coaching, live trade analysis, and strategic feedback to accelerate your path to consistent profitability.",
      imageUrl: "https://i.postimg.cc/rssRJTKY/18e7882177adbc8540caaffd05253e5f.jpg" 
    },
    { 
      title: "Live Market Masterclasses", 
      description: "Trade the trends as they happen. Join our experts in real-time, interactive sessions where we dissect live markets, analyze breaking trends, and demonstrate entry and exit strategies.",
      imageUrl: "https://i.postimg.cc/Y00L37hs/4be308799a60e30b975caefe8fe61ded.jpg" 
    },
    { 
      title: "The Alpha Algorithm Hub", 
      description: "Get exclusive, data-driven trade signals from our proprietary scanning systems. This activity provides curated, high-conviction ideas, saving you hours of research.",
      imageUrl: "https://i.postimg.cc/xCtbM8TZ/5010c487b210c1e1b923bd1e86bf4565.jpg" 
    },
    { 
      title: "The Trader's Inner Circle", 
      description: "Connect with a dedicated network of traders in a private forum. Share ideas, discuss strategies, participate in weekly challenges, and gain collective wisdom for continuous learning.",
      imageUrl: "https://i.postimg.cc/900wp2rg/9c7a3a5a0b27ce38ef9f99260836aa28.jpg" 
    },
  ];

  return (
    <section id="activities" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Activities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {activitiesData.map((activity, index) => (
              <ActivityCard key={index} title={activity.title} description={activity.description} imageUrl={activity.imageUrl} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Activities;