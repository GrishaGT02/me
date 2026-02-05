import React from 'react';
import { useModal } from '../../context/ModalContext';
import womanImage from '../../assec/profil.jpg';
import './Stoimost.css';

const Stoimost = () => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal();
  };

  return (
    <div className="stoimost-container">
      <div className="stoimost-content">
        <div className="stoimost-woman-image">
          <img src={womanImage} alt="Anna - Personal Assistant" />
        </div>
        <div className="stoimost-text-block">
          <h2 className="stoimost-title">
            УЗНАЙТЕ СТОИМОСТЬ ВАШЕГО ЛЕЧЕНИЯ ЗА 2 МИНУТЫ
          </h2>
          <p className="stoimost-description">
            Оставьте телефон, и Анна - Ваш персональный помощник по всем вопросам стоматологии - перезвонит Вам! Она ответит на все Ваши вопросы и сориентирует по цене в Вашем конкретном случае.
          </p>
        </div>
        <button className="stoimost-button stoimost-btn-primary" onClick={handleClick}>
          <div className="flare"></div>
          <span>Бесплатная консультация</span>
          <div className="stoimost-btn-icon">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Stoimost;

