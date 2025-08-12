import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Product from './pages/Product';
import Product_Details from './pages/Product_Details';
import Navigation from './pages/Navigation';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import MainContext from '../Context/Home/exampleContext/MainContext';

const MainRoute = () => {
  return (
    <Router>
      <Navigation/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/propDrilling" element={<MainContext/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<Product_Details/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </Router>
  )
}

export default MainRoute