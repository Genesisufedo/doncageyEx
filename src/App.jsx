import React from 'react';
import About from './Components/About';
import Navber from './Components/Navber'
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  

  return (
    <>
    <Navber />
    <Routes>
      <Route path='*' element={
        <>
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
        
        </>
      } />

      <Route path='About' element={
        <>
        <About />
        </>
      } />

       <Route path='Services' element={
        <>
        <Services />
        </>
      } />

       <Route path='Contact' element={
        <>
        <Contact />
        </>
      } />
    
    </Routes>
    </>
  )
}

export default App;
