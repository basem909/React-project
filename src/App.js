import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Nav from './components/Nav';
import './App.css';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <header className="header">
        <h1>Math Magicians</h1>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
