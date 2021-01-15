import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categories from './components/Categories';
import Shop from './components/Shop';
import Cart from './components/cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop/:section" component={Categories} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
      </Switch> 
    </BrowserRouter>
  )
}

export default App;