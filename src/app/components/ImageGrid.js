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

  const [shuffledImages, setShuffledImages] = useState(
    shuffleArray([...images]).slice(0, 16)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledImages(shuffleArray([...images]).slice(0, 16));
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className='grid grid-cols-4 grid-rows-4 h-full'>
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
