import './App.css';
import Product from './components/Product.js'
import Dashboard from './components/Dashboard.js'
import Login from './components/Login.js'
import SignUp from './components/SignUp.js'
import NoPage from './components/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Product" element={<Product />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
