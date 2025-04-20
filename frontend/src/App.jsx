import "./App.css";
import React, { useEffect } from "react";
import DigilynkRoutes from "./lib/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>

      <DigilynkRoutes />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />

    </>
  );
}

export default App;
