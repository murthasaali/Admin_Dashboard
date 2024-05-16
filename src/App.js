import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; 
import './App.css';
import AdiminDashboard from './pages/AdiminDashboard';
import dummyOrders from './Datas/OrderDetails';
import { useSelector } from 'react-redux';


function App() {
  // store the data when app runsss
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders'));
    if (!storedOrders) {
      localStorage.setItem('orders', JSON.stringify(dummyOrders));
    }
  }, []);
  const isAdminLoggedIn = useSelector(state => state.admin.isAdminLoggedIn);


  return (
    <>
      {/* toast */}
      <Toaster /> 
      <Router>
        <Routes>
          <Route path="/" element={<AdiminDashboard  isAdminLoggedIn={isAdminLoggedIn} />} />
          <Route path="/orders" element={<AdiminDashboard isAdminLoggedIn={isAdminLoggedIn}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
