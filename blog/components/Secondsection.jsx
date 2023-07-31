import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';

const Secondsection = () => {
  return (
    <section className='bg-purple-200 px-4 md:px-0'>
      <div className='mx-auto md:max-w-screen-lg'>
        <h1 className='text-2xl uppercase text-center font-bold md:text-4xl py-12'>
          Latest Posts
        </h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
          {Posts()}
          {Posts()}
          {Posts()}
          {Posts()}
          {Posts()}
          {Posts()}
        </div>
      </div>
    </section>
  );
};

function Posts() {
  return (
    <div className='item'>
      <div className='image'>
        <Link href={'/'}>
          <Image
            src={'/images/image_six.png'}
            className='rounded'
            width={500}
            height={350}
            alt=''
          />
        </Link>
      </div>
      <div className='info flex flex-col gap-4 justify-center py-4'>
        <div className='flex justify-start items-center'>
          <Link href={'/'}>
            <span className='text-sm text-orange-500'>Career Change</span>
          </Link>
          <span className='text-sm text-gray-700'>- July 30, 2023</span>
        </div>
        <Link href={'/'}>
          <h2 className='text-xl uppercase md:text-2xl font-bold'>
            This is a heading
          </h2>
        </Link>
        <p className='text-justify tracking-tighter'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae at
          fugiat magnam cum repellat tempore? Doloribus cupiditate ducimus
          obcaecati laborum, neque nihil quod molestias tenetur asperiores sequi
          quisquam unde illum?
        </p>
        <Author />
      </div>
    </div>
  );
}

export default Secondsection;
