import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/Author';
import { Swiper, SwiperSlide } from 'swiper/react';

const Thirdsection = () => {
  return (
    <section className='bg-purple-200 px-4 md:px-0'>
      <div className='container mx-auto md:max-w-screen-lg'>
        <h1 className='text-center font-bold md:text-4xl py-12'>
          Most Popular
        </h1>
        <Swiper slidesPerView={2}>
          <SwiperSlide>{Posts()}</SwiperSlide>
          <SwiperSlide>{Posts()}</SwiperSlide>
          <SwiperSlide>{Posts()}</SwiperSlide>
          <SwiperSlide>{Posts()}</SwiperSlide>
          <SwiperSlide>{Posts()}</SwiperSlide>
          <SwiperSlide>{Posts()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

function Posts() {
  return (
    <div className='grid'>
      <div className='image flex justify-center'>
        <Link href={'/'}>
          <Image
            src={'/images/image_six.png'}
            width={400}
            height={400}
            alt=''
          />
        </Link>
      </div>
      <div className='info flex flex-col justify-center items-center py-4'>
        <div className='flex justify-start items-center'>
          <Link href={'/'}>
            <span className='text-sm text-orange-500'>Career Change</span>
          </Link>
          <span className='text-sm text-gray-700'>- July 30, 2023</span>
        </div>
        <Link href={'/'}>
          <h2 className='uppercase md:text-2xl font-bold'>This is a heading</h2>
        </Link>
        <p className='text-sm text-center md:text-base'>
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

export default Thirdsection;
