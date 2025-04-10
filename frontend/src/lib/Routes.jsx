// App.js
import Layout from "@/components/digilynk/Layout";
import Home from "@/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "../pages/Contacts";

export default function DigilynkRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Other routes */}
        </Route>
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
