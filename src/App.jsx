import React from 'react';
import Navbar from './Components/Navbar';
import './index.css'
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const App = () => {
  return (
  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
  );
};

export default App;