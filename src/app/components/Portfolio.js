'use client';

import { useState } from 'react';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../../../data/portfolioItems.json';

const Portfolio = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const playTrack = (filePath) => {
    if (currentPlaying === filePath) {
      setCurrentPlaying(null); // if the track is already playing, set currentPlaying to null
    } else {
      setCurrentPlaying(filePath); // if the track is not playing, start it
    }
  };

  return (
    <section id='listen' className='bg-black'>
      <div className='overflow-x-scroll contain'>
        <ul className='flex flex-col md:flex-row md:whitespace-nowrap'>
          {portfolioData.portfolioItems.map((item, index) => (
            <li key={index} className='md:min-w-[33.333%]'>
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
      </div>
    </section>
  );
};

export default Portfolio;
