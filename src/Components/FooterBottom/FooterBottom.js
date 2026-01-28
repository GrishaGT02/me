import React from 'react';
import profil from '../../assec/profil.jpg';
import './FooterBottom.css';

const FooterBottom = () => {
  return (
    <div className="footer-bottom-dark">
      <div className="footer-bottom-dark-content">
        {/* Левая секция */}
        <div className="footer-bottom-dark-left">
          <h3 className="footer-bottom-dark-title">Всегда спешим на помощь!</h3>
          <p className="footer-bottom-dark-subtitle">Ваша идеальная улыбка и здоровые зубы в Рассказовке</p>
        </div>

        {/* Центральная секция */}
        <div className="footer-bottom-dark-center">
          <div className="footer-bottom-dark-info-block">
            <p className="footer-bottom-dark-info-title footer-bottom-dark-info-title-large">Звоните по номеру</p>
            <a href="tel:+74992290003" className="footer-bottom-dark-info-value">+7 (499) 229-00-03</a>
          </div>
          <div className="footer-bottom-dark-info-block">
            <p className="footer-bottom-dark-info-title footer-bottom-dark-info-title-large">Работаем для Вас</p>
            <p className="footer-bottom-dark-info-value">Ежедневно с 9:00 до 21:00</p>
          </div>
          <div className="footer-bottom-dark-info-block">
            <p className="footer-bottom-dark-info-title footer-bottom-dark-info-title-large">Калькулятор стоимости лечения</p>
            <a href="#" className="footer-bottom-dark-info-link">Просчитать примерную стоимость</a>
          </div>
        </div>

        {/* Правая секция - Блок контактов */}
        <div className="footer-bottom-dark-right">
          <div className="footer-bottom-dark-contact-wrapper">
            <div className="footer-bottom-dark-phone-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.03405 1.04936L2.74416 0.339263C3.19634 -0.112923 3.92948 -0.112924 4.38167 0.339262L7.37574 3.33333C7.82792 3.78552 7.82792 4.51866 7.37574 4.97084L5.30031 7.04627C4.95424 7.39234 4.86844 7.92104 5.08732 8.35879C6.35261 10.8894 8.40456 12.9413 10.9352 14.2066C11.3729 14.4255 11.9016 14.3397 12.2477 13.9936L14.3231 11.9182C14.7753 11.466 15.5084 11.466 15.9606 11.9182L18.9547 14.9123C19.4069 15.3645 19.4069 16.0976 18.9547 16.5498L18.2446 17.2599C15.7999 19.7046 11.9295 19.9797 9.16363 17.9053L7.76441 16.8558C5.74559 15.3417 3.95222 13.5484 2.4381 11.5295L1.38869 10.1303C-0.685727 7.36443 -0.410668 3.49409 2.03405 1.04936Z" fill="white"/>
              </svg>
            </div>
            <div className="footer-bottom-dark-contact-block">
              <div className="footer-bottom-dark-phone-info">
                <div className="footer-bottom-dark-phone-number">+7 (499) 704-46-75</div>
                <div className="footer-bottom-dark-phone-hours">Ежедневно с 9:00 до 21:00</div>
              </div>
              <div className="footer-bottom-dark-avatar">
                <img src={profil} alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя секция - Ссылки и копирайт */}
      <div className="footer-bottom-dark-links">
        <a href="#" className="footer-bottom-dark-link">Политика конфиденциальности</a>
        <a href="#" className="footer-bottom-dark-link">Политика использования файлов cookie</a>
        <span className="footer-bottom-dark-link">Лицензия ЛО41-01137-77/01273693 от 01.07.2024 г</span>
        <span className="footer-bottom-dark-link">© 2026. Все права защищены</span>
      </div>
    </div>
  );
};

export default FooterBottom;

