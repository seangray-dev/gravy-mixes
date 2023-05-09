'use client';

import { useState, useEffect } from 'react';
import client_images from '../../../data/client_images.json';

const ClientImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const images = client_images.clientImages.map(
    (item) => Object.values(item)[0]
  );
  const length = images.length;

  // Change current image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) =>
        prevCurrent === length - 1 ? 0 : prevCurrent + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className='relative flex justify-center items-center h-full'>
      {images.map((image, index) => {
        return (
          <div key={index} className={index === current ? 'block' : 'hidden'}>
            <img
              className='max-w-[300px] h-[300px]'
              src={image}
              alt={`Image ${index}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ClientImageSlider;
