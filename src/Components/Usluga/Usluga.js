import React, { useState } from 'react';
import './Usluga.css';
import usluga1 from '../../assec/Usluga1.jpg';
import usluga2 from '../../assec/Usluga2.jpg';
import usluga3 from '../../assec/Usluga3..jpg';
import usluga4 from '../../assec/Usluga4.jpg';
import usluga5 from '../../assec/Usluga5.jpg';

const Usluga = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Имплантация',
      image: usluga1
    },
    {
      id: 2,
      title: 'Эстетика',
      image: usluga2
    },
    {
      id: 3,
      title: 'Лечение',
      image: usluga3
    },
    {
      id: 4,
      title: 'Профилактика',
      image: usluga4
    },
    {
      id: 5,
      title: 'Детская стоматология',
      image: usluga5
    }
  ];

  const handleCardHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="usluga-container">
      <div className="usluga-content">
        <div className="usluga-title">
          НАШИ <span>УСЛУГИ</span>
        </div>
        <div className="usluga-description">
          В нашей клинике Вы найдёте комплексные решения для здоровья зубов и красоты Вашей улыбки
        </div>
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
                <div className="usluga-card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                {activeIndex === index && (
                  <>
                    <div className="usluga-card-main-title">{service.title}</div>
                    <div className="usluga-card-buttons-wrapper">
                      <div className="usluga-card-buttons-left">
                        {index === 0 && (
                          <>
                            <div className="usluga-card-buttons-row">
                              <div className="usluga-card-button-text">Коронка на зуб</div>
                              <div className="usluga-card-button-text">Имплантация зубов</div>
                            </div>
                            <div className="usluga-card-buttons-row">
                              <div className="usluga-card-button-text">Протезирование зубов</div>
                              <div className="usluga-card-button-text">All-on-4</div>
                              <div className="usluga-card-button-text">All-on-6</div>
                            </div>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <div className="usluga-card-buttons-row">
                              <div className="usluga-card-button-text">Элайнеры</div>
                              <div className="usluga-card-button-text">Отбеливание зубов</div>
                              <div className="usluga-card-button-text">Брекеты</div>
                            </div>
                            <div className="usluga-card-buttons-row">
                              <div className="usluga-card-button-text">Профессиональная гигиена</div>
                              <div className="usluga-card-button-text">Виниры</div>
                              <div className="usluga-card-button-text">Реставрация зубов</div>
                            </div>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <div className="usluga-card-buttons-row">
                              <div className="usluga-card-button-text">Лечение кариеса</div>
                              <div className="usluga-card-button-text">Лечение каналов</div>
                            </div>
                            <div className="usluga-card-buttons-row">
                              <div className="usluga-card-button-text">Лечение дёсен</div>
                              <div className="usluga-card-button-text">Удаление зубов</div>
                            </div>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <div className="usluga-card-buttons-row">
                              <div className="usluga-card-button-text">Регулярный осмотр</div>
                              <div className="usluga-card-button-text">Профессиональная гигиена</div>
                            </div>
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <div className="usluga-card-buttons-row">
                              <div className="usluga-card-button-text">Осмотр и гигиена</div>
                              <div className="usluga-card-button-text">Лечение молочных зубов</div>
                            </div>
                            <div className="usluga-card-buttons-row">
                              <div className="usluga-card-button-text">Герметизация фиссур</div>
                              <div className="usluga-card-button-text">Антистресс лечение</div>
                            </div>
                          </>
                        )}
                      </div>
                      <button className="usluga-card-button-details">
                        <div className="flare"></div>
                        <span>Подробнее</span>
                        <div className="usluga-card-button-icon">
                          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#FFFFFF"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </>
                )}
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

