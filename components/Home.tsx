import React, { useState, useEffect } from 'react';

const images = [
  'https://i.postimg.cc/wvSmxPWR/Black-and-Green-Bold-Trading-You-Tube-Thumbnail-20251023-235018-0000.png',
  'https://i.postimg.cc/3RPvr6LN/Black-and-Green-Bold-Trading-You-Tube-Thumbnail-20251023-235120-0000.png',
  'https://i.postimg.cc/zB9gDMdT/Black-and-Green-Bold-Trading-You-Tube-Thumbnail-20251023-235314-0000.png',
  'https://i.postimg.cc/0QLw53tf/Black-and-Green-Bold-Trading-You-Tube-Thumbnail-20251023-235911-0000.png',
];

// This is the duration for the slide animation itself
const SLIDE_TRANSITION_DURATION_MS = 500;
// This is the time an image stays on screen
const TIME_PER_SLIDE_MS = 5000;

const Home: React.FC = () => {
  // We add a clone of the first image at the end of the array to create a seamless loop.
  const slides = [...images, images[0]];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    // This effect handles the automatic sliding.
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, TIME_PER_SLIDE_MS); 

    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    // This effect handles the "snap back" for the infinite loop.
    if (currentIndex === images.length) {
      // When we reach the cloned slide, wait for the slide animation to finish.
      const timer = setTimeout(() => {
        // Then, turn off transitions and instantly jump back to the real first slide.
        setIsTransitioning(false); 
        setCurrentIndex(0); 
      }, SLIDE_TRANSITION_DURATION_MS);

      return () => clearTimeout(timer);
    }
    
    // This is a small fix to re-enable transitions after the jump.
    if (currentIndex === 0 && !isTransitioning) {
        // We use a timeout of 0 to push this to the next browser paint cycle,
        // ensuring the DOM has updated before we add the transition back.
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 50);
        return () => clearTimeout(timer);
    }

  }, [currentIndex, isTransitioning]);

  return (
    <section id="home" className="h-[50vh] w-full overflow-hidden" aria-label="Image Carousel">
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? `transform ${SLIDE_TRANSITION_DURATION_MS}ms ease-in-out` : 'none',
        }}
      >
        {slides.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={src}
              alt={`Traders Net Cafe scenery ${index < images.length ? index + 1 : 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
