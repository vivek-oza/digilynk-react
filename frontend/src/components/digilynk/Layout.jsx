"use client";
// components/Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <main className="flex-1 pt-20 min-h-screen">
            <Navbar /> 
            <Outlet  /> {/* This is where child routes will render */}
        </main>
      </div>
    </>
  );
};

export default Layout;