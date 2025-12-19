import React from 'react';
import { useModal } from '../../context/ModalContext';
import './Zayavka.css';

const Zayavka = () => {
  const { openModal } = useModal();
  return (
    <div className="zayavka-container">
      <div className="zayavka-header">
        <h1 className="zayavka-title">
          Лечение в наших клиниках <span className="zayavka-title-green">доступно каждому</span>
        </h1>
        <p className="zayavka-subtitle">
          Можно не брать в долг у знакомых и не просить детей оплатить лечение
        </p>
      </div>

      <div className="zayavka-card">
        <div className="zayavka-card-left">
          <div className="zayavka-card-title">
            Комфортный платеж без первоначального взноса с{' '}
            <span className="zayavka-highlight">0% без переплат!</span>
          </div>
          <p className="zayavka-card-description">
            Выберите срок комфортного платежа от 6 до 36 месяцев и платите удобными ежемесячными платежами под 0%. Просто разделите сумму на выбранный срок!
          </p>
          <button className="zayavka-button" onClick={openModal}>Оставить заявку</button>
        </div>

        <div className="zayavka-card-right">
          <div className="zayavka-card-right-inner">
            <p className="zayavka-card-instruction">
              Для оформления комфортного платежа достаточно иметь при себе только паспорт гражданина РФ
            </p>
            <div className="zayavka-stats">
              <div className="zayavka-stat-item">
                <span className="zayavka-stat-value zayavka-stat-green">0%</span>
                <span className="zayavka-stat-label">процентов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zayavka;

