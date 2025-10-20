import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import BottomNav from './components/BottomNav/BottomNav';
import ScrollToTop from './pages/ScrollToTop';
import Footer from './components/Footer/Footer';
import HomeContainer from './pages/Home/HomeContainer';
import ContactContainer from './pages/Contact/ContactContainer';
import CartContainer from './pages/Cart/CartContainer';
import CheckoutContainer from './pages/Checkout/CheckoutContainer';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/contacto" element={<ContactContainer />} />
          <Route exact path="/cart" element={<CartContainer />} />
          <Route exact path="/checkout" element={<CheckoutContainer />} />
        </Routes>
        <Footer />
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
