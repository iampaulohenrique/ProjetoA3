import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import EventList from './componentes/EventList';
import Cart from './componentes/Cart';
import OrdersPage from './componentes/OrdersPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import './styles/styles.css';

function App() {
  // Defina a lista de pedidos
  const orders = [
    {
      orderNumber: '1',
      status: 'Em processamento',
      purchaseDate: '10/05/2024',
      paymentMethod: 'Cartão de Crédito',
      orderDetails: 'Show de Sertanejo',
    },
    {
      orderNumber: '2',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Pix',
      orderDetails: 'Show de Funk',
    },
    {
      orderNumber: '3',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Cartão débito',
      orderDetails: 'Show de Pagode',
    },
    {
      orderNumber: '4',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Pix',
      orderDetails: 'Show de Samba',
    },
    {
      orderNumber: '5',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Pix',
      orderDetails: 'Show de Rock',
    },
    {
      orderNumber: '6',
      status: 'Finalizado',
      purchaseDate: '05/05/2024',
      paymentMethod: 'Boleto',
      orderDetails: 'Festival RaveFunk',
    },
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<EventList />} />
        <Route path="/carrinho" element={<Cart />} />
        {/* Adicione a rota para Meus Pedidos e passe a lista de pedidos como prop */}
        <Route path="/meus-pedidos" element={<OrdersPage orders={orders} />} /> 
      </Routes>
    </Router>
  );
}

export default App;
