import React, { useState } from 'react';
import baileunip from '../assets/baileunip.jpg';
import quintauniversitaria from '../assets/quintauniversitaria.png';
import mackejada from '../assets/mackejada.png'
import { Eventos } from './EventList.js'

const Cart = () => {
  const [baileUnipQty, setBaileUnipQty] = useState(0);
  const [quintaUniversitariaQty, setQuintaUniversitariaQty] = useState(0);
  const [mackejadaQty, setMackejadaQty] = useState(0);

  const baileUnipPrice = 48;
  const quintaUniversitariaPrice = 33;
  const mackejadaPrice = 52;

  const calculateTotal = (qty, price) => qty * price;

  const totalCarrinho = calculateTotal(baileUnipQty, baileUnipPrice) + calculateTotal(quintaUniversitariaQty, quintaUniversitariaPrice) + calculateTotal(mackejadaQty, mackejadaPrice);

  return (
    <div id="carrinho" className="container mt-5">
      <h2>Seu Carrinho</h2>
      <ul className="list-unstyled">
        <li className="d-flex align-items-center justify-content-between mb-4">
          <img src={baileunip} alt="Item 1" className="item-carrinho" style={{ maxWidth: '20%' }} />
          <div className="cart-item-info">
            <div>
              <p>BAILE UNIP</p>
              <p>Qtde: {baileUnipQty}</p>
              <p>Valor: R$ {baileUnipPrice}</p>
              <p>Sub-Total: R$ calculateTotal(baileUnipQty, baileUnipPrice)</p>
            </div>
          </div>
          <div className="cart-buttons d-flex align-items-center">
            <button className="btn btn-primary mr-2" onClick={() => setBaileUnipQty(baileUnipQty + 1)}>Adicionar</button>
            <button className="btn btn-danger" onClick={() => setBaileUnipQty(Math.max(baileUnipQty - 1, 0))}>Remover</button>
          </div>
        </li>
        <li className="d-flex align-items-center justify-content-between mb-4">
          <img src={quintauniversitaria} alt="Item 2" className="item-carrinho" style={{ maxWidth: '20%' }} />
          <div className="cart-item-info">
            <div>
              <p>QUINTA UNIVERSITÁRIA</p>
              <p>Qtde: {quintaUniversitariaQty}</p>
              <p>Valor: R$ {quintaUniversitariaPrice}</p>
              <p>Sub-Total: R$ {calculateTotal(quintaUniversitariaQty, quintaUniversitariaPrice)}</p>
            </div>
          </div>
          <div className="cart-buttons d-flex align-items-center">
            <button className="btn btn-primary mr-2" onClick={() => setQuintaUniversitariaQty(quintaUniversitariaQty + 1)}>Adicionar</button>
            <button className="btn btn-danger" onClick={() => setQuintaUniversitariaQty(Math.max(quintaUniversitariaQty - 1, 0))}>Remover</button>
          </div>
        </li>
        <li className="d-flex align-items-center justify-content-between mb-4">
          <img src={mackejada} alt="Item 3" className="item-carrinho" style={{ maxWidth: '20%' }} />
          <div className="cart-item-info">
            <div>
              <p>MACKEJADA</p>
              <p>Qtde: {mackejadaQty}</p>
              <p>Valor: R$ {mackejadaPrice}</p>
              <p>Sub-Total: R$ {calculateTotal(mackejadaQty, mackejadaPrice)}</p>
            </div>
          </div>
          <div className="cart-buttons d-flex align-items-center">
            <button className="btn btn-primary mr-2" onClick={() => setMackejadaQty(mackejadaQty + 1)}>Adicionar</button>
            <button className="btn btn-danger" onClick={() => setMackejadaQty(Math.max(mackejadaQty - 1, 0))}>Remover</button>
          </div>
        </li>
      </ul>
      <div>
        <p>Total do Carrinho: R$ {totalCarrinho}</p>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary">Voltar</button>
        <button className="btn btn-success">Avançar</button>
      </div>
    </div>
  );
};

export default Cart;
