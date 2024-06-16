import React, { useState } from 'react';

const Cart = ({ cartItems, onRemoveFromCart, onAddToCart }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  const handleAdvance = () => {
    setShowPayment(true);
  };

  const handleBack = () => {
    setShowPayment(false);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="container mt-5">
      {!showPayment ? (
        <div id="carrinho">
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
            <button className="btn btn-success" onClick={handleAdvance}>Avançar</button>
          </div>
        </div>
      ) : (
        <div id="pagamento">
          <h2>Pagamento</h2>
          <form>
            <div className="form-group">
              <label>Método de Pagamento:</label>
              <select className="form-control" value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="creditCard">Cartão de Crédito</option>
                <option value="pix">Pix</option>
                <option value="boleto">Boleto</option>
              </select>
            </div>

            <p>Total do Carrinho: R$ {calculateTotal()}</p>

            {paymentMethod === 'creditCard' && (
              <>
                <div className="form-group">
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" className="form-control" id="nome" name="nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="nome">CPF:</label>
                  <input type="text" className="form-control" id="cpf" name="cpf" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cartao">Número do Cartão:</label>
                  <input type="text" className="form-control" id="cartao" name="cartao" required />
                </div>
                <div className="form-group">
                  <label htmlFor="validade">Validade:</label>
                  <input type="text" className="form-control" id="validade" name="validade" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV:</label>
                  <input type="text" className="form-control" id="cvv" name="cvv" required />
                </div>
              </>
            )}

            {paymentMethod === 'pix' && (
              <div className="form-group">
                <p>Para pagar com Pix, escaneie o código QR gerado ou use o código Pix copiado.</p>
                <img src="url-do-qr-code-pix" alt="QR Code Pix" className="img-fluid" />
              </div>
            )}

            {paymentMethod === 'boleto' && (
              <div className="form-group">
                <p>Para pagar com Boleto, o boleto será gerado e você poderá pagar em qualquer banco ou lotérica.</p>
                <button type="button" className="btn btn-primary">Gerar Boleto</button>
              </div>
            )}

            <button type="submit" className="btn btn-success">Pagar</button>
            <button type="button" className="btn btn-secondary ml-2" onClick={handleBack}>Voltar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
