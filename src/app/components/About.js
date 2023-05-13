'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controlsText = useAnimation();
  const controlsImg = useAnimation();
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
      controlsImg.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controlsText.start({
        opacity: 0,
        x: -50,
        transition: { duration: 1 },
      });
      controlsImg.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [controlsText, controlsImg, inView]);

  return (
    <section id='about' className='bg-black' ref={ref}>
      <div className='flex flex-col md:grid md:grid-cols-[60%,_40%] lg:grid-cols-[40%,_60%] contain'>
        <motion.div
          className='bg-white py-20 px-8 md:grid justify-center items-center'
          animate={controlsText}
          initial={{ opacity: 0, x: -50 }}>
          <div className='grid gap-4 md:max-w-[387px]'>
            <h2 className='uppercase font-bold text-[2rem] md:text-4xl tracking-wider'>
              About
            </h2>
            <p className='opacity-60 text-sm tracking-wide'>
              I'm Sean Gray, a Toronto-based mixing engineer dedicated to
              transforming creative concepts into reality. My passion lies in
              crafting mixes that stir emotions and resonate with the listener.
              Each project I undertake is meticulously tailored to fulfill
              individual needs, acknowledging the unique essence of every artist
              and producer I collaborate with.
            </p>
            <p className='opacity-60 text-sm tracking-wide'>
              My expertise extends across various genres, including but not
              limited to:
            </p>
            <ul className='opacity-60 text-sm tracking-wide'>
              <li>• Hip-Hop/Rap</li>
              <li>• R&B</li>
              <li>• Pop</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className='w-100 bg-black'
          animate={controlsImg}
          initial={{ opacity: 0 }}>
          <img
            className='object-cover h-full'
            src='/assets/images/branding/about-image.jpeg'
            alt=''
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
