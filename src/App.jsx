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
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';

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
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/products/:categoryId" element={<ProductsPage />} />
          <Route exact path="/product/:productId" element={<ProductDetailPage />} />
          <Route exact path="/categories" element={<CategoriesPage />} />
        </Routes>
        <Footer />
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
