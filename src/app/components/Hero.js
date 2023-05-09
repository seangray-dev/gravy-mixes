import Image from 'next/image';
import bg_hero from '../../../public/assets/images/branding/hero-image.jpeg';
import Btn_Primary from './buttons/Btn_Primary';

const Hero = () => {
  return (
    <header className='flex flex-col-reverse md:grid md:grid-cols-[2fr,_1fr] lg:grid-cols-[1fr,_2fr]'>
      <section className='bg-black text-white py-20 px-8 md:grid justify-center items-center'>
        <div className='grid gap-4 md:max-w-[387px]'>
          <h1 className='uppercase font-bold text-[2rem] md:text-4xl tracking-wider'>
            Helping artists tell their story.
          </h1>
          <p className='opacity-60 text-sm tracking-wide'>
            Dedicated to elevating your sonic landscape by crafting immersive
            and engaging audio experiences.
          </p>
          <Btn_Primary>Get a quote</Btn_Primary>
        </div>
      </section>
      <section className='object-cover w-100 bg-black'>
        <Image
          className='md:h-full md:max-h-[1000px] md:w-full md:max-w-full object-cover opacity-80 hover:opacity-100 transition-all'
          src={bg_hero}
          alt='sean gray working on an ssl console'
        />
      </section>
    </header>
  );
};

export default Hero;
