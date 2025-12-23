import React, { useState } from 'react';
import kerImage from '../../assec/ker.jpg';
import image2 from '../../assec/2.png';
import image3 from '../../assec/3.png';
import dockImage from '../../assec/dock.jpg';
import './Smiles.css';

const Smiles = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="smiles-container">
      <h2 className="smiles-title">
        ВОТ УЖЕ 15 ЛЕТ МЫ ДАРИМ ЛЮДЯМ <span className="smiles-title-highlight">КРАСИВЫЕ УЛЫБКИ</span>
      </h2>
      <div className="smiles-content">
        {/* Левая панель - До/После пациента + Рот до/после */}
        <div className="smiles-panel smiles-panel-left">
          {/* Основной контент: два блока на одной линии */}
          <div className="smiles-main-content">
            {/* Левая часть: фото пациента и текст */}
            <div className="smiles-top-section">
              <div className="smiles-patient-image">
                <img src={kerImage} alt="Patient" />
              </div>
              <div className="smiles-panel-text">
                <div className="smiles-text-content">
                  <div className="smiles-problem">
                    <strong>Проблема</strong>
                    <p>Имплантация нижней челюсти all-</p>
                  </div>
                  <div className="smiles-solution">
                    <strong>Решение</strong>
                    <p>Установка дентального имплантата на место 24 зуба верхней челюсти.</p>
                  </div>
                </div>
                {/* Навигация */}
                <div className="smiles-navigation">
                  <span className="smiles-slide-counter">{currentSlide + 1}/{totalSlides}</span>
                  <button 
                    className="smiles-nav-btn" 
                    onClick={goToPrevSlide}
                  >
                    <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.9375 1.06055L2.9375 7.06055L8.9375 13.0605" stroke="#1A1A1A" strokeOpacity="0.75" strokeWidth="3"/>
                    </svg>
                  </button>
                  <button 
                    className="smiles-nav-btn smiles-nav-btn-next" 
                    onClick={goToNextSlide}
                  >
                    <svg className="smiles-nav-progress" width="60" height="60" viewBox="0 0 60 60">
                      <circle
                        cx="30"
                        cy="30"
                        r="29"
                        fill="none"
                        stroke="#E0E0E0"
                        strokeWidth="1"
                      />
                      <circle
                        cx="30"
                        cy="30"
                        r="29"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                        strokeDasharray={`${2 * Math.PI * 29}`}
                        strokeDashoffset={`${2 * Math.PI * 29 * (1 - (currentSlide + 1) / totalSlides)}`}
                        strokeLinecap="round"
                        transform="rotate(-90 30 30)"
                        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                      />
                    </svg>
                    <svg className="smiles-nav-arrow" width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.0625 13.0605L7.0625 7.06055L1.0625 1.06055" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Правая часть: фото рта и текст */}
            <div className="smiles-mouth-section">
              <div className="smiles-mouth-images">
                <div className="smiles-mouth-before">
                  <img src={image2} alt="Mouth before treatment" />
                </div>
                <div className="smiles-mouth-after">
                  <img src={image3} alt="Mouth after treatment" />
                </div>
              </div>
              <div className="smiles-panel-info">
                <p className="smiles-panel-info-main">Имплантация премиум коронки Any Ridge. Установка под ключ</p>
                <p className="smiles-panel-info-small">Срок лечения 1 день</p>
              </div>
            </div>
          </div>
        </div>

        {/* Правая панель - Врач */}
        <div className="smiles-panel smiles-panel-right">
          <img src={dockImage} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};

export default Smiles;

