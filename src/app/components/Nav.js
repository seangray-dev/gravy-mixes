import Btn_Secondary from './buttons/Btn_Secondary';

const Nav = () => {
  return (
    <nav className='bg-black text-white py-7 px-6 flex justify-between items-center'>
      <div className='w-20'>
        <img src='/assets/images/branding/gravymixes-logo.png' alt='' />
      </div>
      <ul className='flex gap-10 uppercase text-sm tracking-widest'>
        <li>
          <a className='hover:opacity-60 transition-all' href=''>
            Listen
          </a>
        </li>
        <li>
          <a className='hover:opacity-60 transition-all' href=''>
            About
          </a>
        </li>
        <li>
          <a className='hover:opacity-60 transition-all' href=''>
            Contact
          </a>
        </li>
        <li>
          <a className='hover:opacity-60 transition-all' href=''>
            FAQ
          </a>
        </li>
      </ul>
      <div>
        <Btn_Secondary>Get a Quote</Btn_Secondary>
      </div>
    </nav>
  );
};

export default Nav;
