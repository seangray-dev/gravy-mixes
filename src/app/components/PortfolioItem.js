import portfolioData from '../../../data/portfolioItems.json';

const PortfolioItem = ({
  trackTitle,
  image,
  filePath,
  songName,
  artistName,
}) => {
  return (
    <div className='bg-black relative'>
      <img
        className='w-full object-cover aspect-square opacity-70'
        src={image}
        alt={`${songName} by ${artistName}`}
      />
      <div className='text-white absolute bottom-0 flex flex-col gap-4 px-8 pb-2 w-full'>
        <div className='pb-4 border-b-2 border-b-white/25'>
          <p className='text-lg font-bold tracking-wider'>{songName}</p>
          <p className='text-sm'>By {artistName}</p>
        </div>
        <audio controls controlsList='nodownload' className='mx-auto'>
          <source src={filePath} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default PortfolioItem;
