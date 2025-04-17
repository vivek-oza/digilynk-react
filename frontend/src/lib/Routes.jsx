// App.js
import Layout from "@/components/digilynk/Layout";
import Home from "@/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import WebDevelopment from "../pages/WebDevelopment";

export default function DigilynkRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Other routes */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-development" element={<WebDevelopment />} />

        </Route>
        {/* <Route path="/Contacts" element={<Contacts />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
