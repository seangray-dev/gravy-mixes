import Image from 'next/image';
import arrow_icon from '../../../../public/assets/icons/arrow.png';

const Btn_Primary = ({ children }) => {
  return (
    <button className='uppercase flex items-center gap-4 max-w-[200px] hover:opacity-60 transition-all'>
      <div className='font-bold tracking-widest text-xs'>{children}</div>
      <Image src={arrow_icon}></Image>
    </button>
  );
};

export default Btn_Primary;
