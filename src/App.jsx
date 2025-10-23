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
import ProductGridContainer from './pages/ProductGridContainer/ProductGridContainer';
import CategoriesGridContainer from './pages/CategoriesGridContainer/CategoriesGridContainer';

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
          <Route exact path="/products" element={<ProductGridContainer />} />
          <Route exact path="/products/:categoryId" element={<ProductGridContainer />} />
          <Route exact path="/categories" element={<CategoriesGridContainer />} />
        </Routes>
        <Footer />
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
