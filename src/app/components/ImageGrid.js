'use client';
import { useState, useEffect } from 'react';
import playlistImagesData from '../../../data/playlist_images.json';

function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const ImageGrid = () => {
  const images = playlistImagesData.playlistImages.map(
    (item) => Object.values(item)[0]
  );

  const [shuffledImages, setShuffledImages] = useState(() => {
    if (typeof window !== 'undefined') {
      return shuffleArray([...images]).slice(
        0,
        window.innerWidth >= 1440 ? 16 : 9
      );
    } else {
      return [];
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setShuffledImages(
          shuffleArray([...images]).slice(0, window.innerWidth >= 1440 ? 16 : 9)
        );
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined') {
        setShuffledImages(
          shuffleArray([...images]).slice(0, window.innerWidth >= 1440 ? 16 : 9)
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className='grid grid-cols-3 grid-rows-3 lg:grid-cols-4 lg:grid-rows-4 h-full'>
      {shuffledImages.map((image, index) => (
        <div key={index} className='overflow-hidden'>
          <img
            src={image}
            alt={`Image ${index}`}
            aria-label='none'
            className='w-full h-full object-cover opacity-80 hover:opacity-100 scale-[1.01] hover:scale-105 transition-all'
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
