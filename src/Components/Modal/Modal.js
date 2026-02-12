import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import modalImage from '../../assec/modal.jpg';
import PrivacyModal from '../PrivacyModal/PrivacyModal';
import './Modal.css';

const Modal = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  
  useEffect(() => {
    openModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const formatPhoneNumber = (value) => {
    let digits = value.replace(/\D/g, '');
    
    if (digits.length > 10) {
      if (digits.startsWith('8')) {
        digits = digits.slice(1);
      } else if (digits.startsWith('7')) {
        digits = digits.slice(1);
      }
    } else if (digits.length === 11) {
      if (digits.startsWith('8') || digits.startsWith('7')) {
        digits = digits.slice(1);
      }
    }
    
    const limitedDigits = digits.slice(0, 10);
    
    if (limitedDigits.length === 0) return '';
    if (limitedDigits.length <= 3) return limitedDigits;
    if (limitedDigits.length <= 6) return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3)}`;
    if (limitedDigits.length <= 8) return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 6)} ${limitedDigits.slice(6)}`;
    return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 6)} ${limitedDigits.slice(6, 8)} ${limitedDigits.slice(8)}`;
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

  const handlePhonePaste = (e) => {
    e.preventDefault();
    const pastedText = (e.clipboardData || window.clipboardData).getData('text');
    const formatted = formatPhoneNumber(pastedText);
    setPhoneNumber(formatted);
  };

  const handlePhoneBlur = () => {
    if (phoneNumber && phoneNumber.length > 0) {
      const isValid = validatePhoneNumber(phoneNumber);
      setPhoneError(!isValid);
    }
  };

  // Функция для отправки данных на backend
  const sendFormData = async (formData) => {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Ошибка при отправке заявки');
      }

      return result;
    } catch (error) {
      console.error('Ошибка отправки:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
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
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    const phoneDigits = phoneNumber.replace(/\D/g, '');
    const formData = {
      phone: phoneDigits,
      service: 'Экстренная запись (модальное окно)',
      privacyConsent: consent
    };

    try {
      await sendFormData(formData);
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      setPhoneNumber('');
      setConsent(false);
      closeModal();
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-wrapper">
          {/* Левая колонка - Фото */}
          <div className="modal-image-block">
            <img src={modalImage} alt="Экстренная стоматологическая помощь" />
          </div>

          {/* Правая колонка - Форма */}
          <div className="modal-form-block">
            <h2 className="modal-title">
              Беспокоит острая зубная боль?
            </h2>

            <p className="modal-description">
              Окажем Вам экстренную стоматологическую помощь без очереди! Позвоните нам прямо сейчас или оставьте номер для обратного звонка.
            </p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="footer-phone-input-wrapper">
                <div className="footer-phone-prefix">
                  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="15" fill="white"/>
                    <rect y="5" width="20" height="5" fill="#0039A6"/>
                    <rect y="10" width="20" height="5" fill="#D52B1E"/>
                  </svg>
                  <span>+ 7</span>
                </div>
                <input
                  type="tel"
                  className={`footer-phone-input ${phoneError ? 'footer-phone-input-error' : ''}`}
                  placeholder="Введите Ваш номер телефона"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  onPaste={handlePhonePaste}
                  onBlur={handlePhoneBlur}
                  autoComplete="tel-national"
                  maxLength={17}
                />
              </div>

              <div className="googing-form-checkbox">
                <input 
                  type="checkbox" 
                  id="modal-consent" 
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <label htmlFor="modal-consent" style={{ lineHeight: '1.5' }}>
                  Подтверждаю, что ознакомлен с текстом{' '}
                  <a href="#" className="kvis-privacy-link" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }}>
                    согласия на обработку персональных данных
                  </a>
                  {' '}и согласен с{' '}
                  <a href="#" className="kvis-privacy-link" onClick={(e) => { e.preventDefault(); setShowPolicyModal(true); }}>
                    политикой конфиденциальности
                  </a>
                </label>
              </div>

              <button type="submit" className="googing-btn-1 googing-btn-primary" disabled={isSubmitting || !consent}>
                <div className="flare"></div>
                <span>{isSubmitting ? 'Отправка...' : 'Экстренная запись'}</span>
                <div className="googing-btn-icon">
                  <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>

      </div>

      <PrivacyModal
        showPrivacyModal={showPrivacyModal}
        showPolicyModal={showPolicyModal}
        onClosePrivacy={() => setShowPrivacyModal(false)}
        onClosePolicy={() => setShowPolicyModal(false)}
      />
    </div>
  );
};

export default Modal;


