
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Shop from '../src/Pages/Shop.jsx';
import ShopCategory from '../src/Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/men_banner.jpeg';
import women_banner from './Components/Assets/women_banner.jpeg';
import kid_banner from './Components/Assets/kid_banner.jpeg';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />

    </Routes>
    <Footer />
    </BrowserRouter>
      

    </div>
  );
}

export default App;
