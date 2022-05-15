import logo from './logo.svg';
import './App.css';
import Sideshow from "./components/SideShow"
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductPage from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={< ProductPage />} />
          <Route path="products/:productId"element ={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
