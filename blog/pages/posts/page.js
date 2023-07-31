import React from 'react';
import Layout from '@/components/Layout';
import Author from '@/components/_child/Author';
import Related from '@/components/_child/Related';

const page = () => {
  return (
    <Layout>
      <section className='container mx-auto md:px-2 py-16'>
        <div className='flex justify-center'>
          <Author />
        </div>
        <div className='container mx-auto flex justify-center md:px-2 py-16'>
          <Related />
        </div>
      </section>
    </Layout>
  );
};

export default page;
