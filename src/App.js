import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />} />
      <Route path="/productinfo" element={<ProductInfo />} />
    </Routes>
  );
}

export default App;
