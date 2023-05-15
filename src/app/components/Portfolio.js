'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../../../data/portfolioItems.json';

const Portfolio = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const playTrack = (filePath) => {
    if (currentPlaying === filePath) {
      setCurrentPlaying(null); // if the track is already playing, set currentPlaying to null
    } else {
      setCurrentPlaying(filePath); // if the track is not playing, start it
    }
  };

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: 100,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <section id='listen' className='bg-black overflow-hidden' ref={ref}>
      <motion.div
        className='overflow-x-scroll hide-scroll-bar snap-x snap-mandatory contain'
        animate={controls}
        initial='hidden'
        variants={variants}>
        <ul className='flex flex-col md:flex-row md:flex-nowrap'>
          {portfolioData.portfolioItems.map((item, index) => (
            <li key={index} className='md:min-w-[30%] snap-start'>
              <PortfolioItem
                image={item.image}
                filePath={item.filePath}
                songName={item.songName}
                artistName={item.artistName}
                playTrack={playTrack}
                isPlaying={currentPlaying === item.filePath}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Portfolio;
