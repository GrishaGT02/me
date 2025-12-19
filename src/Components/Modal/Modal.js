import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import './Modal.css';

const Modal = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [consent, setConsent] = useState(true);
  const [callbackOption, setCallbackOption] = useState('now');

  useEffect(() => {
    // Открываем модальное окно при загрузке страницы
    openModal();
  }, []);

  const formatPhoneNumber = (value) => {
    let cleaned = value.replace(/[^\d+]/g, '');
    
    if (cleaned.length > 0 && !cleaned.startsWith('+') && !cleaned.startsWith('7') && !cleaned.startsWith('8')) {
      cleaned = '+7' + cleaned;
    }
    
    if (cleaned.startsWith('+7')) {
      const digits = cleaned.slice(2);
      const limitedDigits = digits.slice(0, 10);
      if (limitedDigits.length === 0) return '+7';
      if (limitedDigits.length <= 3) return `+7 (${limitedDigits}`;
      if (limitedDigits.length <= 6) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
      if (limitedDigits.length <= 8) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
      return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 8)}-${limitedDigits.slice(8, 10)}`;
    }
    
    if (cleaned.startsWith('7') || cleaned.startsWith('8')) {
      const digits = cleaned.startsWith('7') ? cleaned.slice(1) : cleaned.slice(1);
      const limitedDigits = digits.slice(0, 10);
      if (limitedDigits.length === 0) return '+7';
      if (limitedDigits.length <= 3) return `+7 (${limitedDigits}`;
      if (limitedDigits.length <= 6) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3)}`;
      if (limitedDigits.length <= 8) return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6)}`;
      return `+7 (${limitedDigits.slice(0, 3)}) ${limitedDigits.slice(3, 6)}-${limitedDigits.slice(6, 8)}-${limitedDigits.slice(8, 10)}`;
    }
    
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
    const digits = value.replace(/[^\d]/g, '').replace(/^7/, '');
    return digits.length === 10;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    
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
    console.log('Form submitted:', { phoneNumber, consent, callbackOption });
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    closeModal();
  };

  const handleClose = () => {
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>
        
        <div className="modal-logo">
          <div className="modal-logo-square">
            <span className="modal-logo-md">Md</span>
            <span className="modal-logo-plus">+</span>
          </div>
          <div className="modal-logo-text">
            <span className="modal-logo-since">SINCE 2008</span>
            <span className="modal-logo-name">MENDELEEV</span>
          </div>
        </div>

        <h2 className="modal-title">
          Консультация в клинике<br />
          «Менделеев»
        </h2>

        <p className="modal-description">
          Никакой лишней информации – только по делу!<br />
          Ответим на все вопросы.
        </p>

        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="tel"
            className={`modal-phone-input ${phoneError ? 'modal-phone-input-error' : ''}`}
            placeholder="Ваш номер телефона*"
            value={phoneNumber}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
          />
          {/* <div className="modal-phone-format">+7 (000) 000-00-00</div> */}

          <div className="modal-callback-options">
            <button
              type="button"
              className={`modal-callback-option ${callbackOption === 'now' ? 'active' : ''}`}
              onClick={() => setCallbackOption('now')}
            >
              Перезвонить сейчас
            </button>
            <div className="modal-callback-divider"></div>
            <button
              type="button"
              className={`modal-callback-option-link ${callbackOption === 'later' ? 'active' : ''}`}
              onClick={() => setCallbackOption('later')}
            >
              Выбрать удобное время
            </button>
          </div>

          <button type="submit" className="modal-submit-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 2C3.5 1.44772 3.94772 1 4.5 1H7.5C8.05228 1 8.5 1.44772 8.5 2V5C8.5 5.55228 8.05228 6 7.5 6H6.5C6.5 9.31371 9.18629 12.5 12.5 12.5H13.5C14.0523 12.5 14.5 12.9477 14.5 13.5V16.5C14.5 17.0523 14.0523 17.5 13.5 17.5H10.5C5.52944 17.5 1.5 13.4706 1.5 8.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H5.5C6.05228 4.5 6.5 4.94772 6.5 5.5V6.5C6.5 7.05228 6.94772 7.5 7.5 7.5H10.5C11.0523 7.5 11.5 7.05228 11.5 6.5V3.5C11.5 2.94772 11.0523 2.5 10.5 2.5H7.5C6.94772 2.5 6.5 2.05228 6.5 1.5V1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Жду звонка</span>
          </button>

          <label className="modal-checkbox-label">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="modal-checkbox"
            />
            <span className="modal-checkbox-text">
              Вы даете согласие на обработку персональных данных
            </span>
          </label>
        </form>

        {/* <p className="modal-attribution">Сделано в Calltouch</p> */}
      </div>
    </div>
  );
};

export default Modal;

