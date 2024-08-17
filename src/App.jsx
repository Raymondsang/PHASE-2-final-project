import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Consultant from './components/Consultant';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import Login from './components/Login';
import Demonstration from './components/Demonstration';
import Products from './components/Products';
import Home from './components/Home';
import PrivateRoute from './contexts/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import Signup from './components/Signup'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultant" element={<Consultant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/demonstration" element={<Demonstration />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
