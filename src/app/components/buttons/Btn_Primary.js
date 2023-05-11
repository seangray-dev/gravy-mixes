import Link from 'next/link';

const Btn_Primary = ({ children, href }) => {
  return (
    <Link href={href}>
      <div className='uppercase flex items-center gap-4 max-w-[200px] hover:opacity-60 transition-all'>
        <span className='font-bold tracking-widest text-xs'>{children}</span>
      </div>
    </Link>
  );
};

export default Btn_Primary;
