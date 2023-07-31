import React from 'react';

const Newsletter = () => {
  return (
    <section className='bg-purple-400 pt-8'>
      <div className='container mx-auto md:max-w-screen-lg md:px-24 py-8 text-center'>
        <h1 className='font-bold text-3xl'>Subscribe to Newsletter</h1>
        <div className='py-4'>
          <input
            type='text'
            className='shadow border rounded w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
            placeholder='Enter your email'
          />
        </div>

        <button className='bg-orange-400 px-20 py-3 rounded-full text-white text-xl'>
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
