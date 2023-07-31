import React from 'react';
// we need these components on every page
import Header from './Header';
import Footer from './Footer';
// we need NEXT's Head for metadata
import Head from 'next/head';

// the layout tag accepts children
// the children will (or might) come from the index.js file
const Layout = ({ children }) => {
  return (
    <>
      {/* this HEAD is what you see in the browser tab */}
      {/* we need it everywhere on the website */}
      {/* so it's good to put it inside the layout tag */}
      <Head>
        <title>Ken's Blog</title>
      </Head>
      {/* with the layout component, you declared children for it */}
      {/* so whatever you wrap the tag around becomes the child(ren) */}
      {/* you need to define where you want to see the children */}
      {/* in this case between the Header and the Footer */}
      {/* i put it in a main for semantics */}
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
