import React, { useRef, useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Shop from './components/Shop';
import Cart from './components/cart';

function App() {
  const [toggle, setToggle] = useState(false)
  const dropdownRef = useRef(null)
  const cartRef = useRef(null)

  const handleDropOpen = () => setToggle(!toggle)
  const handleClick = (event) => {
    if(!dropdownRef.current.contains(event.target) && !cartRef.current.contains(event.target)){
      setToggle(false)
    } 
  }
  return (
    <BrowserRouter>
      <div onClick={handleClick}>
        <Navbar dropdownRef={dropdownRef} handleDropOpen={handleDropOpen} toggle={toggle} cartRef={cartRef}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop/:section" element={<Categories />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes> 
      </div>
    </BrowserRouter>
  )
}

export default App;