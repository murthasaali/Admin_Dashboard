import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; 
import './App.css';
import AdiminDashboard from './pages/AdiminDashboard';
import dummyOrders from './Datas/OrderDetails';

function App() {
  // useEffect to store order details in local storage
  useEffect(() => {
    // Check if orders exist in local storage
    const storedOrders = JSON.parse(localStorage.getItem('orders'));
    if (!storedOrders) {
      // If no orders exist in local storage, store the dummy orders
      localStorage.setItem('orders', JSON.stringify(dummyOrders));
    }
  }, []);

  return (
    <>
      <Toaster /> 
      <Router>
        <Routes>
          <Route path="/" element={<AdiminDashboard />} />
          <Route path="/orders" element={<AdiminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
