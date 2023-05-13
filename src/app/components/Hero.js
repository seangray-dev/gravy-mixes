'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import bg_hero from '../../../public/assets/images/branding/hero-image.jpeg';
import Btn_Primary from './buttons/Btn_Primary';

const Hero = () => {
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
    <div className='bg-black' ref={ref}>
      <header className='flex flex-col-reverse md:grid md:grid-cols-[60%,_40%] lg:grid-cols-[40%,_60%] contain'>
        <section className='bg-black text-white py-20 px-8 md:grid justify-center items-center'>
          <div className='grid gap-4 md:max-w-[387px]'>
            <motion.h1
              className='uppercase font-bold text-[2rem] md:text-4xl tracking-wider'
              animate={controlsText}
              initial={{ opacity: 0, x: -50 }}>
              Helping artists tell their story.
            </motion.h1>
            <motion.p
              className='opacity-60 text-sm tracking-wide'
              animate={controlsText}
              initial={{ opacity: 0, x: -50 }}>
              Dedicated to elevating your sonic landscape by crafting immersive
              and engaging audio experiences.
            </motion.p>
            <motion.div animate={controlsText} initial={{ opacity: 0, x: -50 }}>
              <Btn_Primary href={'#quote'}>Get a quote</Btn_Primary>
            </motion.div>
          </div>
        </section>
        <section className='object-cover w-100 bg-black'>
          <div className='overflow-hidden'>
            <motion.div
              className='md:h-full md:max-h-[1000px] md:w-full md:max-w-full object-cover opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105'
              animate={controlsImage}
              initial={{ opacity: 0 }}>
              <Image src={bg_hero} alt='sean gray working on an ssl console' />
            </motion.div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Hero;
