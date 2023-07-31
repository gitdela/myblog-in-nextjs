import React from 'react';
import Link from 'next/link';
import Newsletter from './_child/Newsletter';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  // const bg = {
  //   backgroundImage: "url('/images/image_one.png')",
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'bottom left',
  // };
  return (
    <div className='bg-purple-400 px-4 md:px-0'>
      <Newsletter></Newsletter>
      <div className='mx-auto flex justify-center py-6'>
        <div className='py-4'>
          <div className='flex gap-6 justify-center'>
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
          <p className='py-5 text-gray-400'></p>
          <p className='text-gray-800 text-center'>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
