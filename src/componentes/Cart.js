import React from 'react';
import baileunip from '../assets/baileunip.jpg';
import quintauniversitaria from '../assets/quintauniversitaria.png';

const Cart = () => {
  return (
    <div id="carrinho" className="container mt-5">
      <h2>Seu Carrinho</h2>
      <ul className="list-unstyled">
        <li className="d-flex align-items-center justify-content-between mb-4">
          <img src={baileunip} alt="Item 1" className="item-carrinho" style={{ maxWidth: '20%' }} />
          <div className="cart-item-info">
            <div>
              <p>BAILE UNIP</p>
              <p>Qtde: 1</p>
            </div>
            <div>
              <p>Valor: R$ 45,00</p>
            </div>
          </div>
          <div className="cart-buttons d-flex align-items-center">
            <button className="btn btn-primary mr-2">Adicionar</button>
            <button className="btn btn-danger">Remover</button>
          </div>
        </li>
        <li className="d-flex align-items-center justify-content-between mb-4">
          <img src={quintauniversitaria} alt="Item 2" className="item-carrinho" style={{ maxWidth: '20%' }} />
          <div className="cart-item-info">
            <div>
              <p>QUINTA UNIVERSITÁRIA</p>
              <p>Qtde: 2</p>
            </div>
            <div>
              <p>Valor: R$ 25,00</p>
            </div>
          </div>
          <div className="cart-buttons d-flex align-items-center">
            <button className="btn btn-primary mr-2">Adicionar</button>
            <button className="btn btn-danger">Remover</button>
          </div>
        </li>
      </ul>
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary">Voltar</button>
        <button className="btn btn-success">Avançar</button>
      </div>
    </div>
  );
};

export default Cart;
