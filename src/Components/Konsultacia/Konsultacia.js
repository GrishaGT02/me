import React from 'react';
import { useModal } from '../../context/ModalContext';
import './Konsultacia.css';

const Konsultacia = () => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal();
  };

  return (
    <div className="konsultacia-container">
      <div className="konsultacia-content">
        <div className="konsultacia-text">
          <p className="konsultacia-text-line1">
            Начните с консультации у <span className="konsultacia-bold">врачей-экспертов</span>
          </p>
          <p className="konsultacia-text-line2">
            <span className="konsultacia-bold">с практикой до 27 лет.</span>
          </p>
          <p className="konsultacia-text-line3">
            <span className="konsultacia-strikethrough">2000 Р</span> <span className="konsultacia-bold">БЕСПЛАТНО</span> до конца месяца
          </p>
        </div>
        <button className="konsultacia-button" onClick={handleClick}>
          <span className="konsultacia-button-line1">НАЧАТЬ С КОНСУЛЬТАЦИИ</span>
          <span className="konsultacia-button-line2">
            <span className="konsultacia-strikethrough">2000 Р</span> БЕСПЛАТНО
          </span>
        </button>
      </div>
    </div>
  );
};

export default Konsultacia;

