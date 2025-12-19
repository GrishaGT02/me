import React, { useState } from 'react';
import './Usluga.css';
import serviceImage from '../../assec/dod.png';

const Usluga = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Имплантация',
      image: serviceImage
    },
    {
      id: 2,
      title: 'Эстетика',
      image: serviceImage
    },
    {
      id: 3,
      title: 'Лечение',
      image: serviceImage
    },
    {
      id: 4,
      title: 'Профилактика',
      image: serviceImage
    }
  ];

  const handleCardHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="usluga-container">
      <div className="usluga-content">
        <h2 className="usluga-title">Наши услуги</h2>
        <div className="usluga-cards">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`usluga-card ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => handleCardHover(index)}
            >
              <div className="usluga-card-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="usluga-card-image"
                />
                <div className="usluga-card-overlay">
                  <div className="usluga-card-label">
                    {service.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usluga;

