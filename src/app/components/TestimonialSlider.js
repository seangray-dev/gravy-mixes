'use client';

import { useState, useEffect } from 'react';
import testimonialsData from '../../../data/testimonials-data.json';

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = testimonialsData.testimonials;
  const length = testimonials.length;

  // Change current testimonial every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) =>
        prevCurrent === length - 1 ? 0 : prevCurrent + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [length]);

  // Create function to handle next and prev testimonial
  const nextTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className='relative h-full'>
      <div className='relative'>
        <button
          className='absolute flex items-center justify-center transform top-[250px] left-1 z-10 w-10 h-10 bg-white rounded-full hover:opacity-60 transition-all text-4xl'
          onClick={prevTestimonial}>
          {'<'}
        </button>
        <button
          className='absolute flex items-center justify-center transform top-[250px] right-1 z-10 w-10 h-10 bg-white rounded-full hover:opacity-60 transition-all text-4xl'
          onClick={nextTestimonial}>
          {'>'}
        </button>
      </div>

      {testimonials.map((testimonial, index) => {
        return (
          <div
            key={index}
            className={index === current ? 'block fade-in' : 'hidden'}>
            <div className='flex flex-col lg:grid lg:grid-cols-2'>
              <img
                className='w-full h-[500px] object-cover'
                src={testimonial.imgUrl}
                alt={`Image of ${testimonial.client}`}
              />
              <div className='flex flex-col gap-2 text-white text-sm tracking-wider p-14'>
                <h3 className='text-xl font-bold'>{testimonial.client}</h3>
                <div className='flex flex-col gap-1 lg:flex-row lg:gap-4 opacity-50'>
                  <p>{testimonial.aboutClient}</p>
                  <span className='hidden lg:block'>|</span>
                  <p>{testimonial.location}</p>
                </div>
                <p className='max-w-[500px]'>{testimonial.testimonial}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialSlider;
