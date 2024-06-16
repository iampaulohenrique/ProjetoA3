import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap'; // Removi Dropdown e DropdownButton aqui
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
    { image: pagofunk, title: 'PAGOFUNK', location: 'Pacco Club', date: '2024-04-19', price: 30, singer: 'DJ X', genre: 'Funk' },
    { image: mackejada, title: 'MACKEJADA', location: 'Club A', date: '2024-04-19', price: 52, singer: 'Band Y', genre: 'Rock' },
    { image: baileunip, title: 'BAILE UNIP', location: 'Expo Barra Funda', date: '2024-04-19', price: 48, singer: 'Artist Z', genre: 'Pop' },
    { image: tardezinha, title: 'TARDEZINHA VIBES', location: 'Servus Beer', date: '2024-04-20', price: 25, singer: 'Band A', genre: 'Samba' },
    { image: supertenda, title: 'SUPERTENDA 2024', location: 'Neo Quimica Arena', date: '2024-04-20', price: 40, singer: 'Artist B', genre: 'Electro' },
    { image: quintauniversitaria, title: 'QUINTA UNIVERSITÁRIA', location: 'Une Bauru', date: '2024-04-18', price: 33, singer: 'Band C', genre: 'Sertanejo' },
    { image: festadobranco, title: 'FESTA DO BRANCO', location: 'Complexo do Canindé', date: '2024-04-26', price: 35, singer: 'Artist D', genre: 'Funk' },
    { image: sollune, title: 'SOLLUNE COMUNICARI', location: 'Vila dos Ipes', date: '2024-04-20', price: 20, singer: 'Band E', genre: 'Forró' },
    { image: opensunset, title: 'OPEN SUNSET', location: 'Double Deck', date: '2024-04-20', price: 28, singer: 'DJ F', genre: 'Electro' },
  ];

  const [filters, setFilters] = useState({
    date: '',
    singer: '',
    genre: ''
  });

  const [show, setShow] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const filteredEvents = events.filter(event => {
    return (
      (!filters.date || event.date === filters.date) &&
      (!filters.singer || event.singer.toLowerCase().includes(filters.singer.toLowerCase())) &&
      (!filters.genre || event.genre.toLowerCase().includes(filters.genre.toLowerCase()))
    );
  });

  return (
    <div className="container">
      <div className="row mb-4">
        <Button variant="primary" onClick={handleShow}>
          Filtros
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Filtrar Eventos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="dateFilter">
                <Form.Label>Data</Form.Label>
                <Form.Control 
                  type="date" 
                  name="date"
                  value={filters.date} 
                  onChange={handleFilterChange} 
                />
              </Form.Group>
              <Form.Group controlId="singerFilter">
                <Form.Label>Cantor</Form.Label>
                <Form.Control 
                  type="text" 
                  name="singer"
                  placeholder="Nome do Cantor"
                  value={filters.singer}
                  onChange={handleFilterChange}
                />
              </Form.Group>
              <Form.Group controlId="genreFilter">
                <Form.Label>Estilo musical</Form.Label>
                <Form.Control 
                  type="text" 
                  name="genre"
                  placeholder="Estilo Musical"
                  value={filters.genre}
                  onChange={handleFilterChange}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleClose}>
                Aplicar Filtros
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      
      <div className="row">
        {filteredEvents.map((event, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={event.image} className="card-img-top" alt={event.title} style={{ borderRadius: '12px' }} />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: 'bold' }}>{event.title}</h5>
                <p className="card-text" style={{ marginBottom: '0.5rem' }}>{event.location}</p>
                <p className="card-text">{event.date}</p>
                <p className="card-text">{event.singer}</p>
                <p className="card-text">{event.genre}</p>
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
