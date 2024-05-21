import React from 'react';

const EventCard = ({ image, title, location, date }) => {
  return (
    <div>
      <div className="event-card bg-warning d-flex align-items-center justify-content-center" style={{ width: '200px', height: '120px', borderRadius: '12px', border: '1px solid black' }}>
        <img src={image} alt={title} className="event-image" style={{ maxWidth: '150%', minHeight: '120%', borderRadius: '12px' }} />
      </div>
      <div className="event-description" style={{ marginLeft: '8%' }}>
        <p className="event-title font-weight-bold">{title}</p>
        <p>{location} <br /> {date}</p>
      </div>
    </div>
  );
};

export default EventCard;
