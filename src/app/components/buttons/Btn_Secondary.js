import Link from 'next/link';

const Btn_Secondary = ({ children, href }) => {
  return (
    <Link href={href}>
      <div className='bg-white text-black py-2 px-6 w-full uppercase flex items-center gap-4 hover:opacity-60 transition-all'>
        <span className='mx-auto font-bold tracking-widest text-xs md:text-sm'>
          {children}
        </span>
      </div>
    </Link>
  );
};

export default Btn_Secondary;
