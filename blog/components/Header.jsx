import React from 'react';
import Link from 'next/link';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Header = () => {
  return (
    <header className='bg-purple-500'>
      <div className='flex flex-col items-center space-y-2 text-white font-bold py-4 px-2 border-b-4 border-black md:flex-row md:space-y-0 md:text-xl md:max-w-screen-lg md:mx-auto md:flex md:justify-between md:items-center'>
        <div className='text-2xl tracking-wider'>
          <span className='text-black'>KEN</span> NARTEY
        </div>
        <div>
          <input
            type='text'
            className='input-text text-base text-black focus:outline-none'
            placeholder='Search..'
          />
        </div>
        <div className='flex justify-center items-center space-x-4'>
          <Link href={'/'}>
            <AiOutlineTwitter size={25} color='black' />
          </Link>
          <Link href={'/'}>
            <AiFillLinkedin size={25} color='black' />
          </Link>
          <Link href={'/'}>
            <AiFillGithub size={25} color='black' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
