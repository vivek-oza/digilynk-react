"use client";
// components/Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { ScrollProgress } from '../magicui/scroll-progress';
import Footer from './Sections/Footer';

const Layout = () => {
  return (
    <>
      <div className="flex flex-col bg-white min-h-screen">
        <Navbar />
        <ScrollProgress className="h-1 top-[calc(5rem)]" />
        <main className="flex-1 pt-20 h-[calc(100vh-5rem)]">
          <Outlet className="" /> {/* This is where child routes will render */}
        </main>
        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;