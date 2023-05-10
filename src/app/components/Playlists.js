import ImageGrid from './ImageGrid';

const Clients = () => {
  return (
    <section className='bg-black'>
      <div className='flex flex-col md:grid md:grid-cols-[60%,_40%] lg:grid-cols-[40%,_60%] contain'>
        <div className='bg-white py-20 px-8 md:grid justify-center items-center'>
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
        </div>
        <div className='object-cover w-100 bg-black'>
          <ImageGrid />
        </div>
      </div>
    </section>
  );
};

export default Clients;
