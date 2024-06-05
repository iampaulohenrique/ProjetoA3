import React from 'react';
import pagofunk from '../assets/pagofunk.jpg';
import mackejada from '../assets/mackejada.png';
import baileunip from '../assets/baileunip.jpg';
import tardezinha from '../assets/tardezinha.png';
import supertenda from '../assets/supertenda.png';
import quintauniversitaria from '../assets/quintauniversitaria.png';
import festadobranco from '../assets/festadobranco.png';
import sollune from '../assets/sollune.png';
import opensunset from '../assets/opensunset.jpg';

const EventList = ({ onAddToCart }) => {
  const events = [
    { image: pagofunk, title: 'PAGOFUNK', location: 'Pacco Club', date: '19 de Abril', price: 30 },
    { image: mackejada, title: 'MACKEJADA', location: 'Club A', date: '19 de Abril', price: 52 },
    { image: baileunip, title: 'BAILE UNIP', location: 'Expo Barra Funda', date: '19 de Abril', price: 48 },
    { image: tardezinha, title: 'TARDEZINHA VIBES', location: 'Servus Beer', date: '20 de Abril', price: 25 },
    { image: supertenda, title: 'SUPERTENDA 2024', location: 'Neo Quimica Arena', date: '20 de Abril', price: 40 },
    { image: quintauniversitaria, title: 'QUINTA UNIVERSITÁRIA', location: 'Une Bauru', date: '18 de Abril', price: 33 },
    { image: festadobranco, title: 'FESTA DO BRANCO', location: 'Complexo do Canindé', date: '26 de Abril', price: 35 },
    { image: sollune, title: 'SOLLUNE COMUNICARI', location: 'Vila dos Ipes', date: '20 de Abril', price: 20 },
    { image: opensunset, title: 'OPEN SUNSET', location: 'Double Deck', date: '20 de Abril', price: 28 },
  ];

  return (
    <div className="container">
      <div className="row">
        {events.map((event, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={event.image} className="card-img-top" alt={event.title} style={{ borderRadius: '12px' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: 'bold' }}>{event.title}</h5>
                <p className="card-text" style={{ marginBottom: '0.5rem' }}>{event.location}</p>
                <p className="card-text">{event.date}</p>
                <p className="card-text">R$ {event.price}</p>
                <button onClick={() => onAddToCart(event)}>Adicionar ao Carrinho</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
