import React, { useState } from 'react';
import './Zapis.css';

const Zapis = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [consent, setConsent] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const formatPhoneNumber = (value) => {
    // Удаляем все нецифровые символы кроме +
    let cleaned = value.replace(/[^\d+]/g, '');
    
    // Если начинается с любой цифры кроме 7 или 8, добавляем +7
    if (cleaned.length > 0 && !cleaned.startsWith('+') && !cleaned.startsWith('7') && !cleaned.startsWith('8')) {
      cleaned = '+7' + cleaned;
    }
    
    // Если начинается с +7, форматируем как российский номер
    if (cleaned.startsWith('+7')) {
      const digits = cleaned.slice(2);
      // Ограничиваем до 10 цифр
      const limitedDigits = digits.slice(0, 10);
      if (limitedDigits.length === 0) return '+7';
      if (limitedDigits.length <= 3) return `+7 (${limitedDigits}`;
      if (limitedDigits.length <= 6) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
      if (limitedDigits.length <= 8) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
      return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 8)}-${limitedDigits.slice(8, 10)}`;
    }
    
    // Если начинается с 7 или 8, заменяем на +7
    if (cleaned.startsWith('7') || cleaned.startsWith('8')) {
      const digits = cleaned.startsWith('7') ? cleaned.slice(1) : cleaned.slice(1);
      // Ограничиваем до 10 цифр
      const limitedDigits = digits.slice(0, 10);
      if (limitedDigits.length === 0) return '+7';
      if (limitedDigits.length <= 3) return `+7 (${limitedDigits}`;
      if (limitedDigits.length <= 6) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
      if (limitedDigits.length <= 8) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
      return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 8)}-${limitedDigits.slice(8, 10)}`;
    }
    
    // Если начинается с +, но не +7, заменяем на +7
    if (cleaned.startsWith('+') && !cleaned.startsWith('+7')) {
      const digits = cleaned.slice(1);
      const limitedDigits = digits.slice(0, 10);
      if (limitedDigits.length === 0) return '+7';
      if (limitedDigits.length <= 3) return `+7 (${limitedDigits}`;
      if (limitedDigits.length <= 6) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
      if (limitedDigits.length <= 8) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
      return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 8)}-${limitedDigits.slice(8, 10)}`;
    }
    
    return value;
  };

  const validatePhoneNumber = (value) => {
    // Извлекаем только цифры после +7
    const digits = value.replace(/[^\d]/g, '').replace(/^7/, '');
    // Номер валиден, если есть ровно 10 цифр после +7
    return digits.length === 10;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    
    // Проверяем валидность
    if (formatted && formatted.length > 0) {
      const isValid = validatePhoneNumber(formatted);
      setPhoneError(!isValid);
    } else {
      setPhoneError(false);
    }
  };

  const handlePhoneBlur = () => {
    if (phoneNumber && phoneNumber.length > 0) {
      const isValid = validatePhoneNumber(phoneNumber);
      setPhoneError(!isValid);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      setPhoneError(true);
      alert('Пожалуйста, введите номер телефона');
      return;
    }
    const isValid = validatePhoneNumber(phoneNumber);
    if (!isValid) {
      setPhoneError(true);
      alert('Пожалуйста, введите корректный номер телефона');
      return;
    }
    if (!consent) {
      alert('Пожалуйста, дайте согласие на обработку персональных данных');
      return;
    }
    console.log('Form submitted:', { phoneNumber, consent });
    alert('Спасибо! Мы свяжемся с вами в течение 10 минут.');
  };

  return (
    <div className="zapis-container">
      <div className="zapis-content">
        <div className="zapis-left">
          <div className="zapis-title">
            Запишитесь на<br />
            первичный приём /<br />
            консультацию в нашу<br />
            клинику
          </div>
          <h2 className="zapis-subtitle">С чего начать, если есть сомнения?</h2>
          <p className="zapis-description">
            Для начала — перезвоним, ответим на ваши вопросы,
            предложим несколько вариантов лечения, сориентируем по
            стоимости и, если все устроит, подберем удобное время для
            визита в клинику.
          </p>
        </div>

        <div className="zapis-center">
          <div className="zapis-image-wrapper">
            <img 
              src="https://furor-clinic.ru/wp-content/themes/furor-child/assets/img/test-img/index/feedback-doctor-img.png" 
              alt="Магомед Зубайруевич Магомедов" 
              className="zapis-doctor-image"
            />
            <div className="zapis-person-info">
              <p className="zapis-person-name">Магомед Зубайруевич<br />Магомедов</p>
              <p className="zapis-person-specialty">Эксперт в области имплантации и<br />протезирования</p>
            </div>
          </div>
        </div>

        <div className="zapis-right">
          <p className="zapis-form-intro">
            Просто оставьте контакты — свяжемся с вами в
            течение 10 минут
          </p>
          <form className="zapis-form" onSubmit={handleSubmit}>
            <label className="zapis-form-label">Введите номер телефона</label>
            <input
              type="tel"
              className={`zapis-phone-input ${phoneError ? 'zapis-phone-input-error' : ''}`}
              placeholder="+7 (_ _ _) _ _ _-_ _-_ _"
              value={phoneNumber}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
            />
            <button type="submit" className="zapis-submit-btn">
              Получить консультацию
            </button>
            <label className="zapis-checkbox-label">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="zapis-checkbox"
              />
              <span className="zapis-checkbox-text">
                Даю согласие на обработку моих персональных данных
              </span>
            </label>
          </form>
          
          <div className="zapis-divider">
            <span className="zapis-divider-text">или</span>
          </div>

          <div className="zapis-call-info">
            <div className="zapis-call-header">
              <span className="zapis-call-text">Позвоните сейчас</span>
              <span className="zapis-call-hours">Ежедневно с 10:00 до 21:00</span>
            </div>
            <a href="tel:+74951209676" className="zapis-phone-link">
              +7 (495) 120-96-76
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zapis;

