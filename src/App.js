import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import EventList from './componentes/EventList';
import Cart from './componentes/Cart';
import OrdersPage from './componentes/OrdersPage';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import './styles/styles.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const orders = [
    // Define your orders here
  ];

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.title === item.title);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.title !== item.title)
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<EventList onAddToCart={handleAddToCart} />} />
        <Route path="/carrinho" element={<Cart cartItems={cartItems} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/meus-pedidos" element={<OrdersPage orders={orders} />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
