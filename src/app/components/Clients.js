import ClientImageSlider from './ClientImageSlider';

import Btn_Primary from './buttons/Btn_Primary';

const Clients = () => {
  return (
    <section className='flex flex-col-reverse md:grid md:grid-cols-[40%,_60%] lg:grid-cols-[60%,_40%]'>
      <div className='bg-black'>
        <ClientImageSlider />
      </div>
      <div className='bg-white py-20 px-8 md:grid justify-center items-center'>
        <div className='grid gap-4 md:max-w-[387px]'>
          <h1 className='uppercase font-bold text-[2rem] md:text-4xl tracking-wider'>
            Clients we've worked with
          </h1>
          <p className='opacity-60 text-sm tracking-wide'>
            We take pride in our collaborations with renowned artists and brands
            in the audio industry. Explore pur portfolio showcasing the range
            and quality of our mixing services, and imagine the possibilities
            for your next project.
          </p>
          <Btn_Primary>Listen</Btn_Primary>
        </div>
      </div>
    </section>
  );
};

export default Clients;
