import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';
import NavbarApp from './components/Uitily/NavbarApp';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarApp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
