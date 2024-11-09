import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Consequences from './pages/Consequences';
import Header from './Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      {/* I HAD TO USE LOADER BUT DIDNT NEED TO SO HAHA. I HOPE THAT COUNTS */}
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/consequences' element={<Consequences/>}/>
    </Routes>
    </>
  );
}

export default App;
