import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';

// now i need to put this section in a slider so i installed swiperjs
// import swiper react components and style
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// to use the slide autoplay
import SwiperCore, { Autoplay } from 'swiper';

const Firstsection = () => {
  // in setting the background size use one of width/height and auto
  // this will protect the aspect ratio of the image
  const bg = {
    background: '',
    backgroundPosition: 'right',
    backgroundSize: 'auto 30%',
  };

  // explicitly tell the code to use the swipercore
  // then go to the Swiper tag and add the autoplay attribute
  SwiperCore.use([Autoplay]);

  return (
    <section className='bg-purple-200 px-4 md:px-0'>
      <div className='container mx-auto md:max-w-screen-lg' style={bg}>
        <h1 className='font-bold text-2xl uppercase text-center md:text-4xl py-12'>
          Trending
        </h1>
        {/* i only passed the slide() function here first in this div*/}
        {/* before i installed the swiperslide and passed the slide() into it */}
        {/* then i duplicated the individual swiperslides */}

        <Swiper
          //   spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          //   onSlideChange={}
          //   onSwiper={}
        >
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <SwiperSlide>{slide()}</SwiperSlide>
          <div class='swiper-button-prev'></div>
          <div class='swiper-button-next'></div>
        </Swiper>
      </div>
    </section>
  );
};

function slide() {
  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {/* the path to the image here does not include /public */}
      {/* this is because /public is a special folder */}
      {/* next.js exposes it's content to the browser by default */}
      <div className='image'>
        <Link href={'/'}>
          <Image
            src={'/images/image_six.png'}
            width={600}
            height={600}
            alt=''
          />
        </Link>
      </div>
      <div className='info flex flex-col justify-start gap-4'>
        <div className='flex justify-start items-center'>
          <Link href={'/'}>
            <span className='text-sm text-orange-400 font-bold'>
              Career Change
            </span>
          </Link>
          <span className='text-sm text-gray-700 font-bold'>
            - July 30, 2023
          </span>
        </div>
        <Link href={'/'}>
          <h2 className='text-xl uppercase tracking-wide md:text-2xl font-bold'>
            This is a heading
          </h2>
        </Link>
        <p className='text-base text-justify tracking-tighter md:text-lg'>
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

export default Firstsection;
