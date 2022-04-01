import './App.css';
import Home from './components/Home'
import Login from "./components/Login";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Reports from './components/Reports';

function App() {
  return (
      <div className="App">

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Product />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
  );
}

export default App;
