import "./App.css";
import Product from "./components/Product.js";
import Dashboard from "./components/Dashboard.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import NoPage from "./components/NoPage";
import Groups from "./components/groups.js";
import Category from "./components/category.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Product" element={<Product />} />
        <Route path="Group" element={<Groups />} />
        <Route path="Category" element={<Category />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
