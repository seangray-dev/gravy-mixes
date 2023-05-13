'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ClientImageSlider from './ClientImageSlider';

const Clients = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
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
    <section className='bg-black' ref={ref}>
      <div className='flex flex-col-reverse md:grid md:grid-cols-[40%,_60%] lg:grid-cols-[60%,_40%] contain'>
        <motion.div
          className='bg-black'
          animate={controls}
          initial='hidden'
          variants={variants}>
          <ClientImageSlider />
        </motion.div>
        <motion.div
          className='bg-white py-20 px-8 md:grid justify-center items-center'
          animate={controls}
          initial='hidden'
          variants={textVariants}>
          <div className='grid gap-4 md:max-w-[387px]'>
            <h2 className='uppercase font-bold text-[2rem] md:text-4xl tracking-wider'>
              Brands we've worked with
            </h2>
            <p className='opacity-60 text-sm tracking-wide'>
              We take pride in our collaborations with renowned artists and
              brands in the audio industry. Explore our portfolio showcasing the
              range and quality of our mixing services, and imagine the
              possibilities for your next project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
