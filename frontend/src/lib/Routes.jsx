// App.js
import Layout from '@/components/digilynk/Layout';
import Home from '@/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function DigilynkRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Other routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}