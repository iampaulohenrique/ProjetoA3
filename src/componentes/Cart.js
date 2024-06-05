import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart, onAddToCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  return (
    <div id="carrinho" className="container mt-5">
      <h2>Seu Carrinho</h2>
      <ul className="list-unstyled">
        {cartItems.map((item, index) => (
          <li key={index} className="d-flex align-items-center justify-content-between mb-4">
            <img src={item.image} alt={`Item ${index + 1}`} className="item-carrinho" style={{ maxWidth: '20%' }} />
            <div className="cart-item-info">
              <div>
                <p>{item.title}</p>
                <p>Qtde: {item.quantity}</p>
                <p>Valor: R$ {item.price}</p>
                <p>Sub-Total: R$ {item.quantity * item.price}</p>
              </div>
            </div>
            <div className="cart-buttons d-flex align-items-center">
              <button className="btn btn-primary mr-2" onClick={() => onAddToCart(item)}>Adicionar</button>
              <button className="btn btn-danger" onClick={() => onRemoveFromCart(item)}>Remover Item</button>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <p>Total do Carrinho: R$ {calculateTotal()}</p>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary">Voltar</button>
        <button className="btn btn-success">Avançar</button>
      </div>
    </div>
  );
};

export default Cart;
