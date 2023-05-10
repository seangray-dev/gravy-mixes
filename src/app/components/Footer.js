import React from 'react';

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
        </div>
        <div className='text-white/60 mx-auto md:mx-0 self-end md:text-right'>
          Copyright 2023. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
