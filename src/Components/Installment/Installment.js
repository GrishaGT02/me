import React from 'react';
import { useModal } from '../../context/ModalContext';
import './Installment.css';

const Installment = () => {
  const { openModal } = useModal();
  
  const handleClick = () => {
    openModal();
  };

  return (
    <div className="installment-container">
      {/* <div className="installment-header">
        <h1 className="installment-title">
          <span>ЗАБОТЬТЕСЬ О ЗДОРОВЬЕ ЗУБОВ СЕЙЧАС</span>, А ПЛАТИТЕ ПОТОМ!
        </h1>
        <p className="installment-subtitle">
          Лечение сразу, а оплата удобными частями от 6 до 36 месяцев - без скрытых комиссий и переплат.
        </p>
      </div> */}

      <div className="installment-card">
        <div className="installment-card-left">
          <div className="installment-card-title">
            ЗАБОТЬТЕСЬ О ЗДОРОВЬЕ ЗУБОВ СЕЙЧАС, А ПЛАТИТЕ ПОТОМ!
          </div>
          <p className="installment-card-description">
            Лечение сразу, а оплата удобными частями от 6 до 36 месяцев – без первоначального взноса, скрытых комиссий и переплат.
          </p>
          <button className="installment-button" onClick={handleClick}>
            <span>Оформить заявку</span>
            <div className="installment-button-icon">
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#FFFFFF"/>
              </svg>
            </div>
          </button>
        </div>

        <div className="installment-card-right">
          <h2 className="installment-card-right-title">
            Оформляйте рассрочку без переплат!
          </h2>
          <div className="installment-stats">
            <div className="installment-stat-item">
              <span className="installment-stat-value">0%</span>
              <span className="installment-stat-label">ПРОЦЕНТОВ</span>
            </div>
            <div className="installment-stat-item">
              <span className="installment-stat-value">6</span>
              <span className="installment-stat-label">МЕСЯЦЕВ</span>
            </div>
          </div>
          <p className="installment-card-bottom-text">
            Все условия прозрачны до подписания договора. Оформление без первоначального взноса.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Installment;

