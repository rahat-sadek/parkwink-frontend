import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='layout-container'>
    <Header />
    <main className='body-container'>{children}</main>
    <Footer />
  </div>
);

export default Layout;
