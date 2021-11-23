import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CartProvider} from './components/CartContext/CartContext';
import Home from './views/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Products from './views/Products/Products';
import Details from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './views/Contact/Contact';
import Footer from './components/Footer/Footer';
import Category from './components/CategoryList/CategoryList';
import Cart from './views/Cart/Cart';
import Ordenes from './views/Ordenes/Ordenes';
import Login from './views/Login/Login';
import './App.css';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path="/details/:id" component={Details} />
          <Route path="/category/:id" exact component={Category} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path='/order-form' component={Ordenes} />
          <Route path='/login' component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}
export default App;