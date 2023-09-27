import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "./bootstrap.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Details from "./components/Details.js";
import Cart from "./components/Cart";
import Default from "./components/Default.js";
import Modal from './components/Modal.js';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
