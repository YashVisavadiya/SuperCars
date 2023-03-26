import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import AllBrands from "./AllBrands";
import CarDetails from "./CarDetails";
import AddCar from "./AddCar";
import AboutUs from './AboutUs';
import Advertising from './Advertising';
import ContactUs from './ContactUs';
import CopyrightNotice from './CopyrightNotice';
import Disclaimer from './Disclaimer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/SuperCars/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/SuperCars/allBrands" element={<AllBrands />}></Route>
          <Route path="/SuperCars/allBrands/:id" element={<CarDetails />}></Route>
          <Route path="/SuperCars/allBrands/add" element={<AddCar />}></Route>
          <Route path="/SuperCars/allBrands/edit/:id" element={<AddCar />}></Route>
          <Route path="/SuperCars/about-us" element={<AboutUs />}></Route>
          <Route path="/SuperCars/advertising" element={<Advertising />}></Route>
          <Route path="/SuperCars/contact-us" element={<ContactUs />}></Route>
          <Route path="/SuperCars/copyright-notice" element={<CopyrightNotice />}></Route>
          <Route path="/SuperCars/disclaimer" element={<Disclaimer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
