'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => {
  const controlsText = useAnimation();
  const controlsSlider = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controlsText.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
      controlsSlider.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controlsText.start({
        opacity: 0,
        x: 100,
        transition: { duration: 1 },
      });
      controlsSlider.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [controlsText, controlsSlider, inView]);

  return (
    <section className='bg-black' ref={ref}>
      <section className='flex flex-col-reverse md:grid md:grid-cols-[40%,_60%] lg:grid-cols-[60%,_40%] contain'>
        <motion.div
          className='bg-black'
          animate={controlsSlider}
          initial={{ opacity: 0 }}>
          <TestimonialSlider />
        </motion.div>
        <motion.div
          className='bg-white py-20 px-8 md:grid justify-center items-center'
          animate={controlsText}
          initial={{ opacity: 0, x: 100 }}>
          <div className='grid gap-4 md:max-w-[387px]'>
            <h2 className='uppercase font-bold text-[2rem] md:text-4xl tracking-wider'>
              Testimonials
            </h2>
            <p className='opacity-60 text-sm tracking-wide'>
              Hear from our clients who have experienced our services. We are
              dedicated to providing excellent customer service and high-quality
              results.
            </p>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default Testimonials;
