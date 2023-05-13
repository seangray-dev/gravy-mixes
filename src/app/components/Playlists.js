'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageGrid from './ImageGrid';

const Playlists = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
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
      controlsImage.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controlsText.start({
        opacity: 0,
        x: -50,
        transition: { duration: 1 },
      });
      controlsImage.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [controlsText, controlsImage, inView]);

  return (
    <section className='bg-black' ref={ref}>
      <div className='flex flex-col md:grid md:grid-cols-[60%,_40%] lg:grid-cols-[40%,_60%] contain'>
        <motion.div
          className='bg-white py-20 px-8 md:grid justify-center items-center'
          animate={controlsText}
          initial={{ opacity: 0, x: -50 }}>
          <div className='grid gap-4 md:max-w-[387px]'>
            <h2 className='uppercase font-bold text-[2rem] md:text-4xl tracking-wider'>
              Featured on curated Playlists
            </h2>
            <p className='opacity-60 text-sm tracking-wide'>
              Experience the exceptional quality of our mixing services that
              have captured the attention of prominent playlist curators,
              earning placements on numerous popular playlists. Explore the top
              playlists showcasing our work and see for yourself the
              transformative sonic impact we can bring to your project.
            </p>
          </div>
        </motion.div>
        <motion.div
          className='object-cover w-100 bg-black'
          animate={controlsImage}
          initial={{ opacity: 0 }}>
          <ImageGrid />
        </motion.div>
      </div>
    </section>
  );
};

export default Playlists;
