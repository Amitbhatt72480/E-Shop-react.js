import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import { AuthContextProvider } from "./contexts/AuthContext";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Account from '../src/components/Account'

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/productinfo" element={<ProductInfo />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
