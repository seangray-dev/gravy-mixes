'use client';

import { useState, useEffect } from 'react';
import playlistImagesData from '../../../data/playlist_images.json';

// Fisher-Yates shuffle algorithm
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
    shuffleArray([...images]).slice(0, 12)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledImages(shuffleArray([...images]).slice(0, 12));
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className='grid grid-cols-4 grid-rows-3'>
      {shuffledImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          aria-label='none'
          className='w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all'
        />
      ))}
    </div>
  );
};

export default ImageGrid;
