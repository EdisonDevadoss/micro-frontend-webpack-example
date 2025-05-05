import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

import Header from 'home/Header';
import Footer from 'home/Footer';

import PDPContent from 'pdp/PDPContent';
import HomeContent from 'home/HomeContent';
import CartContent from 'cart/CartContent';

const MainLayout = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/product/:id/*" element={<PDPContent />} />
          <Route path="/cart/*" element={<CartContent />} />
        </Routes>
      </div>  
      <Footer />
    </div>
  );
};

export default MainLayout;
