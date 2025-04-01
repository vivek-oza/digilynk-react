"use client";
// components/Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar /> 
        <main className="flex-1 pt-20 h-[calc(100vh-5rem)]">
            <Outlet  className="bg-cyan-400"/> {/* This is where child routes will render */}
        </main>
      </div>
    </>
  );
};

export default Layout;