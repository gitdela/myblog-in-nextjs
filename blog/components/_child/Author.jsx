import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Author = () => {
  return (
    <div className='author flex py-2 md:py-5'>
      <Image
        src={'/images/image_one.png'}
        width={60}
        height={60}
        className='rounded-full'
        alt=''
      />
      <div className='flex flex-col justify-center px-4'>
        <Link href={'/'}>
          <span className='text-md font-bold text-gray-800 hover:text-gray-600 transition duration-150'>
            Ken Nartey
          </span>
        </Link>
        <span className='text-sm text-gray-500'>Frontend Developer</span>
      </div>
    </div>
  );
};

export default Author;
