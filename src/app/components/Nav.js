'use client';

import Link from 'next/link';
import { useState } from 'react';
import Btn_Secondary from './buttons/Btn_Secondary';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-black'>
      <nav className='bg-black text-white py-7 px-6 flex justify-between items-center relative z-50 contain'>
        <div className='w-20 relative z-20'>
          <img
            className='md:-ml-[19.5px]'
            src='/assets/images/branding/gravymixes-logo.png'
            alt=''
          />
        </div>
        <div className='hidden md:flex gap-10 uppercase text-sm tracking-widest'>
          <Link className='hover:opacity-60 transition-all' href='#listen'>
            Listen
          </Link>
          <Link className='hover:opacity-60 transition-all' href='#about'>
            About
          </Link>
          <Link className='hover:opacity-60 transition-all' href='#quote'>
            Contact
          </Link>
        </div>
        <div className='hidden md:block w-[158px]'>
          <Btn_Secondary href={'#quote'}>Get a Quote</Btn_Secondary>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden block relative z-50'>
          <div className={isOpen ? 'hidden' : 'block'}>
            <span className='block w-6 mt-2 mb-2 border-t border-white'></span>
            <span className='block w-6 mb-2 border-t border-white'></span>
            <span className='block w-6 border-t border-white'></span>
          </div>
          <span className={isOpen ? 'block text-4xl' : 'hidden'}>&times;</span>
        </button>
      </nav>
      <div
        className={
          isOpen
            ? 'transition-all ease-out duration-500 absolute inset-x-0 top-0 mt-[115px] z-10 bg-black text-white md:hidden'
            : 'transition-all ease-in duration-500 absolute inset-x-0 -top-40 z-10 bg-black text-white md:hidden'
        }>
        <ul className='w-[310px] mx-auto flex flex-col text-center md:text-left gap-5 md:gap-10 uppercase text-sm tracking-widest border-b-2 border-white/60 pb-5'>
          <li>
            <Link className='hover:opacity-60 transition-all' href=''>
              Listen
            </Link>
          </li>
          <li>
            <Link className='hover:opacity-60 transition-all' href=''>
              About
            </Link>
          </li>
          <li>
            <Link className='hover:opacity-60 transition-all' href=''>
              Contact
            </Link>
          </li>
        </ul>
        <div className='w-[310px] mx-auto py-8'>
          <Btn_Secondary href={'#quote'}>Get a Quote</Btn_Secondary>
        </div>
      </div>
    </div>
  );
};

export default Nav;
