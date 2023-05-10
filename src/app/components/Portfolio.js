import PortfolioItem from './PortfolioItem';
import portfolioData from '../../../data/portfolioItems.json';

const Portfolio = () => {
  return (
    <section className='bg-black'>
      <div className='overflow-x-scroll contain'>
        <ul className='flex flex-col md:flex-row md:whitespace-nowrap'>
          {portfolioData.portfolioItems.map((item, index) => (
            <li key={index} className='md:min-w-[33.333%]'>
              <PortfolioItem
                trackTitle={item.trackTitle}
                image={item.image}
                filePath={item.filePath}
                songName={item.songName}
                artistName={item.artistName}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
