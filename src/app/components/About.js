const About = () => {
  return (
    <section id='about' className='bg-black'>
      <div className='flex flex-col md:grid md:grid-cols-[60%,_40%] lg:grid-cols-[40%,_60%] contain'>
        <div className='bg-white py-20 px-8 md:grid justify-center items-center'>
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
        </div>
        <div className='w-100 bg-black'>
          <img
            className='object-cover h-full'
            src='/assets/images/branding/about-image.jpeg'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default About;
