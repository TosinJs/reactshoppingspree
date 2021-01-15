import React, { useRef, useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop/:section" component={Categories} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
          </Switch> 
      </div>
    </BrowserRouter>
  )
}

export default App;