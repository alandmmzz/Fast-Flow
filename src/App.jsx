import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import BottomNav from "./components/BottomNav/BottomNav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./pages/ScrollToTop";

import HomeContainer from "./pages/Home/HomeContainer";
import ContactContainer from "./pages/Contact/ContactContainer";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutContainer from "./pages/Checkout/CheckoutContainer";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

// 🔹 Componente interno que controla el layout
function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/cart", "/checkout"];

  return (
    <>
      <NavBar />
      <ScrollToTop />

      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route exact path="/contacto" element={<ContactContainer />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutContainer />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/products/:categoryId" element={<ProductsPage />} />
        <Route exact path="/product/:productId" element={<ProductDetailPage />} />
        <Route exact path="/categories" element={<CategoriesPage />} />
      </Routes>

      {/* 🔹 Footer solo si no estamos en rutas donde molesta */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}

      <BottomNav />
    </>
  );
}

// 🔹 App principal
export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </CartProvider>
  );
}
