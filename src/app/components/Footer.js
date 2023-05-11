import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='bg-black text-white py-14 md:py-16 md:px-10 flex flex-col gap-[50px] md:grid md:grid-cols-2 pb-[56px] border-t-2 border-white/10 contain'>
        <div>
          <div className='w-[170px] md:w-32 mx-auto md:mx-0 mb-2'>
            <img
              className='md:-ml-[29.5px]'
              src='/assets/images/branding/gravymixes-logo.png'
              alt=''
            />
          </div>
          <ul className='flex flex-col md:flex-row gap-5 mx-auto md:mx-0 text-center uppercase text-sm tracking-widest md:pb-20'>
            <li>
              <Link className='hover:opacity-60 transition-all' href='#listen'>
                Listen
              </Link>
            </li>
            <li>
              <Link className='hover:opacity-60 transition-all' href='#about'>
                About
              </Link>
            </li>
            <li>
              <Link className='hover:opacity-60 transition-all' href='#quote'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='text-white/60 mx-auto md:mx-0 self-end md:text-right'>
          <p>© {new Date().getFullYear()} Gravy Mixes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
