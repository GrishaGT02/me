import React, { useState } from 'react';
import './Fich1.css';

const Fich1 = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [consentPersonal, setConsentPersonal] = useState(false);
  const [consentPrivacy, setConsentPrivacy] = useState(false);
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
    if (!consentPersonal) {
      alert('Пожалуйста, дайте согласие на обработку персональных данных');
      return;
    }
    if (!consentPrivacy) {
      alert('Пожалуйста, дайте согласие с политикой конфиденциальности');
      return;
    }
    console.log('Form submitted:', { phoneNumber, consentPersonal, consentPrivacy });
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="fich1-container">
      <div className="fich1-content">
        <div className="fich1-left">
          <div className="fich1-left-content">
            <div className="fich1-illustration">
              <img 
                src="https://ultradent66.ru/local/components/ultradent/form.feedback/templates/emergency.callback/assets/images/image.png" 
                alt="Острая боль" 
                className="fich1-illustration-img"
              />
            </div>
            <div className="fich1-text-content">
              <h2 className="fich1-title">
                Если у вас <span className="fich1-title-highlight">острая боль</span> или травма
              </h2>
              <p className="fich1-description">
                Запишитесь на срочный прием по телефону или воспользуйтесь формой заявки
              </p>
            </div>
          </div>
        </div>

        <div className="fich1-right">
          <form className="fich1-form" onSubmit={handleSubmit}>
            <input
              type="tel"
              className={`fich1-phone-input ${phoneError ? 'fich1-phone-input-error' : ''}`}
              placeholder="Введите телефон"
              value={phoneNumber}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
            />
            
            <label className="fich1-checkbox-label">
              <input
                type="checkbox"
                checked={consentPersonal}
                onChange={(e) => setConsentPersonal(e.target.checked)}
                className="fich1-checkbox"
              />
              <span className="fich1-checkbox-text">
                Я согласен на обработку персональных данных
              </span>
            </label>

            <label className="fich1-checkbox-label">
              <input
                type="checkbox"
                checked={consentPrivacy}
                onChange={(e) => setConsentPrivacy(e.target.checked)}
                className="fich1-checkbox"
              />
              <span className="fich1-checkbox-text">
                Я согласен с политикой конфиденциальности
              </span>
            </label>

            <button type="submit" className="fich1-submit-btn">
              Экстренная запись
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fich1;

