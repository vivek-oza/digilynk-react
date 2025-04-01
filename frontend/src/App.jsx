import './App.css'
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import DigilynkRoutes from './lib/Routes';
import { HeroUIProvider } from '@heroui/system';



function App() {
  return (
    <>
    <HeroUIProvider>
      <DigilynkRoutes/>
    </HeroUIProvider>
    </>
  )
}

export default App
