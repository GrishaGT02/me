import React, { useState } from 'react';
import annaImage from '../../assec/profil.jpg';
import PrivacyModal from '../PrivacyModal/PrivacyModal';
import './Contact.css';

const Contact = () => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [consent, setConsent] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhoneNumber = (value) => {
    // Удаляем все нецифровые символы
    let digits = value.replace(/\D/g, '');
    
    // Удаляем начальные 8 или 7, если они есть (браузер может вставить их при автозаполнении)
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
    
    // Ограничиваем до 10 цифр
    const limitedDigits = digits.slice(0, 10);
    
    // Форматируем: 3 цифры пробел 3 цифры пробел 2 цифры пробел 2 цифры
    if (limitedDigits.length === 0) return '';
    if (limitedDigits.length <= 3) return limitedDigits;
    if (limitedDigits.length <= 6) return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3)}`;
    if (limitedDigits.length <= 8) return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 6)} ${limitedDigits.slice(6)}`;
    return `${limitedDigits.slice(0, 3)} ${limitedDigits.slice(3, 6)} ${limitedDigits.slice(6, 8)} ${limitedDigits.slice(8)}`;
  };

  const validatePhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    // Проверяем, что есть 10 цифр (без учета +7)
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
    if (!userName || userName.trim() === '') {
      alert('Пожалуйста, введите ваше имя');
      return;
    }
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
    
    if (isSubmitting) return; // Предотвращаем повторную отправку
    
    setIsSubmitting(true);
    
    // Формируем данные для отправки
    const phoneDigits = phoneNumber.replace(/\D/g, '');
    const formData = {
      name: userName.trim(),
      phone: phoneDigits,
      service: 'Консультация / запись на прием',
      privacyConsent: consent
    };

    try {
      await sendFormData(formData);
      alert('Спасибо! Анна свяжется с вами в течение 1-2 минут.');
      setUserName('');
      setPhoneNumber('');
      setConsent(false);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.375 0C19.2095 0 24.75 5.54048 24.75 12.375C24.75 19.2095 19.2095 24.75 12.375 24.75C5.54048 24.75 0 19.2095 0 12.375C0 5.54048 5.54048 0 12.375 0ZM12.375 3.4375C11.6156 3.4375 11 4.05311 11 4.8125V12.0312C11 12.9805 11.7695 13.75 12.7188 13.75H17.1875C17.9469 13.75 18.5625 13.1344 18.5625 12.375C18.5625 11.6156 17.9469 11 17.1875 11H13.75V4.8125C13.75 4.05311 13.1344 3.4375 12.375 3.4375Z" fill="white"/>
        </svg>
      ),
      text: 'Подберёт удобное время приема у стоматолога-терапевта или узкого специалиста.'
    },
    {
      icon: (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.125 13.75C4.125 11.1573 4.125 9.86091 4.93046 9.05546C5.73591 8.25 7.03228 8.25 9.625 8.25H23.375C25.9677 8.25 27.2641 8.25 28.0695 9.05546C28.875 9.86091 28.875 11.1573 28.875 13.75V19.25C28.875 21.8427 28.875 23.1391 28.0695 23.9445C27.2641 24.75 25.9677 24.75 23.375 24.75H9.625C7.03227 24.75 5.73591 24.75 4.93046 23.9445C4.125 23.1391 4.125 21.8427 4.125 19.25V13.75Z" fill="white"/>
          <circle cx="16.5" cy="16.5" r="2.75" fill="#112F55"/>
          <rect x="6.875" y="11" width="4.125" height="1.375" rx="0.6875" fill="#112F55"/>
          <rect x="22" y="20.625" width="4.125" height="1.375" rx="0.6875" fill="#112F55"/>
        </svg>
      ),
      text: 'Предварительно сориентирует по стоимости основных услуг.'
    },
    {
      icon: (
        <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.17188 9.26407C1.17188 14.9371 6.13478 19.6285 8.3315 21.4272C8.64588 21.6846 8.80496 21.8148 9.03951 21.8809C9.22214 21.9323 9.49095 21.9323 9.67358 21.8809C9.90857 21.8147 10.0665 21.6857 10.3821 21.4273C12.5788 19.6287 17.5415 14.9376 17.5415 9.26459C17.5415 7.11769 16.6792 5.05846 15.1442 3.54037C13.6093 2.02229 11.5276 1.16943 9.35681 1.16943C7.18606 1.16943 5.10412 2.02241 3.56916 3.5405C2.0342 5.05859 1.17188 7.11717 1.17188 9.26407Z" stroke="white" strokeWidth="2.33853" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.01819 8.18501C7.01819 9.47655 8.06519 10.5235 9.35672 10.5235C10.6483 10.5235 11.6952 9.47655 11.6952 8.18501C11.6952 6.89348 10.6483 5.84649 9.35672 5.84649C8.06519 5.84649 7.01819 6.89348 7.01819 8.18501Z" stroke="white" strokeWidth="2.33853" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: 'Ответит на организационные вопросы (как проехать, что взять с собой).'
    },
    {
      icon: (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.98138 8.44793C2.82938 8.44793 1.87738 8.10393 1.12538 7.41593C0.373375 6.71193 -0.00262499 5.64793 -0.00262499 4.22393C-0.00262499 2.78393 0.373375 1.71993 1.12538 1.03193C1.87738 0.343933 2.82938 -6.77109e-05 3.98138 -6.77109e-05C5.13338 -6.77109e-05 6.07738 0.343933 6.81338 1.03193C7.56538 1.71993 7.94138 2.78393 7.94138 4.22393C7.94138 5.64793 7.56538 6.71193 6.81338 7.41593C6.07738 8.10393 5.13338 8.44793 3.98138 8.44793ZM3.98138 6.62393C4.49338 6.62393 4.87738 6.42393 5.13338 6.02393C5.38938 5.62393 5.51738 5.02393 5.51738 4.22393C5.51738 3.42393 5.38938 2.82393 5.13338 2.42393C4.87738 2.02393 4.49338 1.82393 3.98138 1.82393C3.48538 1.82393 3.10138 2.02393 2.82938 2.42393C2.57338 2.82393 2.44538 3.42393 2.44538 4.22393C2.44538 5.02393 2.57338 5.62393 2.82938 6.02393C3.10138 6.42393 3.48538 6.62393 3.98138 6.62393ZM14.0614 17.4239C12.9094 17.4239 11.9574 17.0799 11.2054 16.3919C10.4534 15.6879 10.0774 14.6239 10.0774 13.1999C10.0774 11.7599 10.4534 10.6959 11.2054 10.0079C11.9574 9.31993 12.9094 8.97593 14.0614 8.97593C15.2134 8.97593 16.1654 9.31993 16.9174 10.0079C17.6694 10.6959 18.0454 11.7599 18.0454 13.1999C18.0454 14.6239 17.6694 15.6879 16.9174 16.3919C16.1654 17.0799 15.2134 17.4239 14.0614 17.4239ZM14.0614 15.5999C14.5734 15.5999 14.9574 15.3999 15.2134 14.9999C15.4694 14.5999 15.5974 13.9999 15.5974 13.1999C15.5974 12.3999 15.4694 11.7999 15.2134 11.3999C14.9574 10.9999 14.5734 10.7999 14.0614 10.7999C13.5654 10.7999 13.1814 10.9999 12.9094 11.3999C12.6534 11.7999 12.5254 12.3999 12.5254 13.1999C12.5254 13.9999 12.6534 14.5999 12.9094 14.9999C13.1814 15.3999 13.5654 15.5999 14.0614 15.5999ZM2.25338 17.2319L13.5814 0.191933H15.7894L4.46138 17.2319H2.25338Z" fill="white"/>
        </svg>
      ),
      text: 'Закрепит за Вами скидку 10% на лечение (действует только при условии записи через сайт).'
    }
  ];

  const checkIcon = (
    <svg width="9" height="7" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.07031 4.56934L2.9812 6.48023C3.20656 6.70558 3.57777 6.68502 3.77686 6.43616L8.07031 1.06934" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="contact">
      <div className="contact-container">
        <h2 className="contact-title"><span>СВЯЖИТЕСЬ С НАМИ</span> ЛЮБЫМ УДОБНЫМ СПОСОБОМ!</h2>
        <div className="contact-content">
          <div className="contact-form-wrapper">
            {/* Левая секция */}
            <div className="contact-left-section">
              {/* Блок с фото и текстом */}
              <div className="contact-top-section">
                <div className="contact-form-image">
                  <img src={annaImage} alt="Анна - персональный помощник" />
                </div>
                <div className="contact-top-content">
                  <p className="contact-promo-text">
                    Оставьте свои контакты, и Анна свяжется с Вами в течение 1-2 минут
                  </p>
                  {/* Блок с преимуществами */}
                  <div className="contact-offer-cards">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="contact-offer-card">
                        <div className={`contact-offer-icon ${index === 1 ? 'contact-offer-icon-large' : ''}`}>{benefit.icon}</div>
                        <span className="contact-offer-text">{benefit.text}</span>
                        <div className="contact-offer-checkbox checked">{checkIcon}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Инпуты и кнопки */}
              <div className="contact-form-bottom">
                <div className="contact-inputs-section">
                  <input
                    type="text"
                    className="contact-input contact-name-input"
                    placeholder="Введите Ваше имя"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <div className="contact-phone-input-wrapper">
                    <div className="contact-phone-prefix">
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="15" fill="white"/>
                        <rect y="5" width="20" height="5" fill="#0039A6"/>
                        <rect y="10" width="20" height="5" fill="#D52B1E"/>
                      </svg>
                      <span>+ 7</span>
                    </div>
                    <input
                      type="tel"
                      className={`contact-input contact-phone-input ${phoneError ? 'contact-phone-input-error' : ''}`}
                      placeholder="Введите Ваш номер телефона"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      onPaste={handlePhonePaste}
                      onBlur={handlePhoneBlur}
                      autoComplete="tel-national"
                      maxLength={17}
                    />
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="contact-form-submit">
                  <div className="contact-form-checkbox">
                    <input 
                      type="checkbox" 
                      id="contact-consent" 
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <label htmlFor="contact-consent" style={{ lineHeight: '1.5' }}>
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
                  <button type="submit" className="contact-submit-btn contact-btn-primary" disabled={isSubmitting || !consent}>
                    <div className="flare"></div>
                    <span>{isSubmitting ? 'Отправка...' : 'Получить скидку 10%'}</span>
                    <div className="contact-btn-icon">
                      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                      </svg>
                    </div>
                  </button>
                </form>
              </div>
            </div>

            {/* Правая секция - Контакты */}
            <div className="contact-right">
              <h3 className="contact-right-title">Наши контакты</h3>
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.50246 2.25722C7.19873 1.4979 6.46332 1 5.64551 1H2.89474C1.8483 1 1 1.8481 1 2.89453C1 11.7892 8.21078 19 17.1055 19C18.1519 19 19 18.1516 19 17.1052L19.0005 14.354C19.0005 13.5361 18.5027 12.8009 17.7434 12.4971L15.1069 11.4429C14.4249 11.1701 13.6483 11.2929 13.0839 11.7632L12.4035 12.3307C11.6089 12.9929 10.4396 12.9402 9.7082 12.2088L7.79222 10.2911C7.06079 9.55962 7.00673 8.39134 7.66895 7.59668L8.23633 6.9163C8.70661 6.35195 8.83049 5.57516 8.55766 4.89309L7.50246 2.25722Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <p className="contact-info-label">Звоните на номер:</p>
                    <a href="tel:+74992290003" className="contact-info-value">+7 (499) 229-00-03</a>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4824 5.18945C22.4989 5.86303 22.5 6.6277 22.5 7.5V10C22.5 13.5355 22.4997 15.303 21.4014 16.4014C20.303 17.4997 18.5355 17.5 15 17.5H7.5C3.96447 17.5 2.19698 17.4997 1.09863 16.4014C0.00028325 15.303 0 13.5355 0 10V7.5C0 6.62771 0.000106283 5.86303 0.0166016 5.18945L10.0361 10.7559C10.791 11.1751 11.709 11.1751 12.4639 10.7559L22.4824 5.18945ZM15 0C18.5355 0 20.303 0.000283242 21.4014 1.09863C21.7842 1.48145 22.0309 1.94612 22.1934 2.53809C22.0907 2.56411 21.9895 2.60336 21.8926 2.65723L11.25 8.57031L0.607422 2.65723C0.510175 2.6032 0.408676 2.56411 0.305664 2.53809C0.468131 1.946 0.715761 1.4815 1.09863 1.09863C2.19698 0.000283265 3.96447 0 7.5 0H15Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <p className="contact-info-label">Почта для пациентов:</p>
                    <a href="mailto:info@mr-doc.ru" className="contact-info-value">info@mr-doc.ru</a>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.55556 5.5H4.55577C3.31121 5.5 2.68847 5.5 2.21311 5.74524C1.79497 5.96095 1.45526 6.30491 1.24221 6.72827C1 7.20957 1 7.8401 1 9.10022V15.4002C1 16.6603 1 17.2901 1.24221 17.7714C1.45526 18.1947 1.79497 18.5393 2.21311 18.755C2.688 19 3.30999 19 4.55212 19H17.4479C18.69 19 19.3111 19 19.786 18.755C20.2041 18.5393 20.545 18.1947 20.758 17.7714C21 17.2905 21 16.6617 21 15.404V9.09652C21 7.83887 21 7.2091 20.758 6.72827C20.545 6.30491 20.2041 5.96095 19.786 5.74524C19.3106 5.5 18.6892 5.5 17.4447 5.5H15.4444M6.55556 5.5H15.4444M6.55556 5.5C6.55556 3.01472 8.5454 1 11 1C13.4546 1 15.4444 3.01472 15.4444 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <p className="contact-info-label">Почта для коммерческих предложений</p>
                    <a href="mailto:mrdoc.pr@yandex.ru" className="contact-info-value">mrdoc.pr@yandex.ru</a>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9.09316C1 14.7652 5.962 19.4557 8.15831 21.254C8.47264 21.5114 8.63169 21.6416 8.8662 21.7077C9.0488 21.7591 9.31755 21.7591 9.50016 21.7077C9.73511 21.6415 9.89304 21.5126 10.2086 21.2542C12.4049 19.4559 17.3666 14.7657 17.3666 9.09368C17.3666 6.94717 16.5045 4.88832 14.9698 3.37051C13.4351 1.8527 11.3538 1 9.18344 1C7.01309 1 4.93152 1.85283 3.39685 3.37064C1.86217 4.88845 1 6.94665 1 9.09316Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.84525 8.0143C6.84525 9.3056 7.89205 10.3524 9.18335 10.3524C10.4746 10.3524 11.5214 9.3056 11.5214 8.0143C11.5214 6.723 10.4746 5.6762 9.18335 5.6762C7.89205 5.6762 6.84525 6.723 6.84525 8.0143Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <p className="contact-info-label">Наш адрес</p>
                    <p className="contact-info-value">г. Рассказовка, ул. Анны Ахматовой 11, корп. 1</p>
                  </div>
                </div>
                <div className="contact-social-divider"></div>
              </div>
              <div className="contact-social">
                <p className="contact-social-text">Свяжитесь с нами любым удобным способом</p>
                <div className="contact-social-icons">
                  <a href="#" className="contact-social-icon" aria-label="Telegram">
                    <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.47426 12.9164C12.1384 8.68254 18.5821 5.89108 21.8056 4.54198C31.0121 0.693619 32.9351 0.0252847 34.1717 0.000416475C34.6302 -0.00854644 35.08 0.127356 35.4577 0.388983C35.7228 0.618774 35.8917 0.940754 35.9307 1.29046C35.9973 1.72537 36.016 2.16634 35.9864 2.60537C35.4886 7.88986 33.3277 20.6628 32.2302 26.5659C31.7664 29.0527 30.8513 29.9014 29.9641 29.9853C28.0412 30.1625 26.5634 28.7046 24.7085 27.4767C21.7901 25.5525 20.1423 24.3682 17.3105 22.4782C14.0366 20.3022 16.1604 19.1179 18.0246 17.1719C18.5131 16.6621 26.99 8.90324 27.157 8.20072C27.179 8.09698 27.1765 7.98949 27.1496 7.8869C27.1228 7.78432 27.0724 7.68951 27.0024 7.6101C26.9009 7.54632 26.7861 7.50722 26.6669 7.49589C26.5478 7.48456 26.4277 7.50131 26.3161 7.54482C26.0255 7.60906 21.3655 10.7062 12.3362 16.8362C11.0131 17.7501 9.81457 18.1957 8.74078 18.1729C7.55673 18.1449 5.28136 17.4983 3.5872 16.9295C1.51279 16.2518 -0.122614 15.8943 0.00723046 14.7535C0.083488 14.1567 0.905827 13.5443 2.47426 12.9164Z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="contact-social-icon" aria-label="WhatsApp">
                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 35.1527L2.47394 26.122C0.560007 22.7987 -0.204123 18.9368 0.300013 15.135C0.804148 11.3332 2.54837 7.80386 5.26231 5.09418C7.97625 2.3845 11.5083 0.645817 15.3109 0.147659C19.1135 -0.350499 22.9742 0.4197 26.2945 2.33886C29.6149 4.25801 32.2094 7.21892 33.6758 10.7626C35.1422 14.3062 35.3987 18.2346 34.4054 21.9389C33.4121 25.6431 31.2246 28.9162 28.1819 31.2507C25.1392 33.5852 21.4114 34.8508 17.5763 34.8512C14.6672 34.8495 11.8048 34.1196 9.25019 32.7279L0 35.1527ZM9.66632 29.5823L10.1972 29.9099C12.4294 31.2318 14.9756 31.9301 17.5698 31.9317C20.7823 31.9323 23.904 30.8653 26.444 28.8984C28.9841 26.9315 30.7984 24.1762 31.6018 21.0657C32.4053 17.9553 32.1522 14.666 30.8825 11.715C29.6127 8.76406 27.3983 6.31874 24.5873 4.76349C21.7763 3.20825 18.5282 2.63128 15.3535 3.12329C12.1789 3.61531 9.25773 5.1484 7.04937 7.48156C4.841 9.81471 3.47062 12.8156 3.15368 16.0125C2.83674 19.2094 3.59121 22.4209 5.29847 25.1423L5.62614 25.6895L4.16144 31.0338L9.66632 29.5823Z" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M26.3544 21.5676C26.2463 21.3841 25.9546 21.276 25.5188 21.0597C25.083 20.8435 22.9434 19.7884 22.5436 19.6409C22.1438 19.4935 21.8555 19.4247 21.5606 19.8605C21.2657 20.2963 20.4367 21.276 20.1843 21.5676C19.932 21.8593 19.6732 21.8953 19.2407 21.6758C17.9634 21.1629 16.7849 20.4322 15.7575 19.5164C14.8055 18.6358 13.9894 17.6188 13.336 16.4985C13.0804 16.0627 13.3065 15.8432 13.5261 15.6106C13.7456 15.3779 13.9619 15.0994 14.1814 14.8471C14.3616 14.6273 14.5084 14.3822 14.6172 14.1196C14.6746 13.9993 14.7013 13.8666 14.695 13.7334C14.6887 13.6002 14.6496 13.4706 14.5811 13.3562C14.473 13.1399 13.5981 10.9969 13.2377 10.1253C12.8773 9.25372 12.5266 9.39134 12.2547 9.37496C11.9827 9.35857 11.7108 9.37496 11.4224 9.37496C11.1985 9.37866 10.9778 9.42926 10.7746 9.52352C10.5714 9.61777 10.3902 9.75358 10.2428 9.92217C9.7541 10.3855 9.3665 10.9449 9.1043 11.5651C8.84209 12.1854 8.71096 12.8532 8.71911 13.5266C8.71911 15.6695 10.2788 17.7404 10.4984 18.0321C10.7179 18.3237 13.5687 22.721 17.9365 24.6052C18.7475 24.9551 19.5766 25.2613 20.4203 25.5226C21.3086 25.7924 22.2476 25.8519 23.1629 25.6963C23.9984 25.5718 25.7384 24.6412 26.1119 23.6254C26.4855 22.6096 26.4626 21.7479 26.3544 21.5676Z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="contact-social-icon" aria-label="Odnoklassniki">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.8769 34.9001C14.442 34.9001 12.8456 34.3965 10.0709 32.3821C8.31582 34.6483 2.75801 36.4193 2.51564 33.3893C2.51564 31.1147 2.01418 29.1926 1.44587 27.0942C0.7689 24.509 0 21.63 0 17.4585C0 7.49538 8.14031 0 17.785 0C27.438 0 35.0017 7.8647 35.0017 17.5508C35.0341 27.0871 27.3724 34.8493 17.8769 34.9001ZM18.019 8.61172C13.322 8.36831 9.6614 11.6334 8.85071 16.7534C8.1821 20.9921 9.36888 26.1541 10.3802 26.4227C10.8649 26.5402 12.0851 25.5498 12.8456 24.786C14.1032 25.6585 15.5677 26.1825 17.0913 26.3052C21.9582 26.5403 26.1167 22.8193 26.4435 17.9369C26.6337 13.0442 22.8865 8.9001 18.019 8.62011L18.019 8.61172Z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="contact-social-icon" aria-label="Email">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.9999 17.5425C34.9999 23.5617 32.1823 26.3763 28.6427 26.3763C27.6689 26.3777 26.7108 26.1317 25.8582 25.6612C25.0057 25.1907 24.2867 24.5112 23.7689 23.6866C22.3406 25.1367 20.4529 26.0457 18.4286 26.2581C16.4043 26.4705 14.3691 25.9731 12.6709 24.8511C10.9727 23.729 9.717 22.0519 9.11846 20.1065C8.51992 18.1611 8.61571 16.0682 9.38947 14.1856C10.1632 12.303 11.5669 10.7476 13.3605 9.78541C15.1541 8.82318 17.2263 8.51386 19.2227 8.91031C21.2191 9.30676 23.0158 10.3844 24.3057 11.9589C25.5955 13.5335 26.2984 15.5071 26.2941 17.5425V20.412C26.2941 21.865 27.3176 22.8885 28.6427 22.8885C30.2206 22.8885 31.5 21.5634 31.5 17.5517C31.5162 14.423 30.4894 11.3781 28.5818 8.89824C26.6742 6.41834 23.9946 4.64483 20.9664 3.85796C17.9383 3.07109 14.7342 3.31574 11.8606 4.55325C8.98706 5.79076 6.60781 7.95056 5.09885 10.6913C3.58989 13.4321 3.03729 16.5976 3.52836 19.6875C4.01943 22.7775 5.52617 25.6156 7.81049 27.7536C10.0948 29.8915 13.0264 31.2073 16.1421 31.4929C19.2577 31.7786 22.3797 31.0179 25.0147 29.331L27.3176 31.9781C24.4143 33.9615 20.9765 35.0154 17.4604 34.9998C13.9991 34.992 10.6178 33.9579 7.74428 32.0283C4.87072 30.0988 2.6339 27.3604 1.3167 24.1595C-0.000494433 20.9587 -0.338907 17.4391 0.344263 14.0459C1.02743 10.6527 2.70151 7.53831 5.15476 5.09657C7.60801 2.65483 10.7302 0.99543 14.1266 0.328218C17.523 -0.338994 21.041 0.0159534 24.2356 1.34818C27.4303 2.6804 30.1581 4.93005 32.0741 7.81264C33.9902 10.6952 35.0084 14.0813 34.9999 17.5425ZM17.503 22.8793C18.5585 22.8793 19.5903 22.5663 20.468 21.9799C21.3456 21.3935 22.0296 20.56 22.4336 19.5848C22.8375 18.6097 22.9432 17.5366 22.7373 16.5014C22.5313 15.4661 22.0231 14.5152 21.2767 13.7689C20.5303 13.0225 19.5794 12.5142 18.5442 12.3083C17.5089 12.1024 16.4359 12.2081 15.4607 12.612C14.4855 13.0159 13.652 13.6999 13.0656 14.5776C12.4792 15.4552 12.1662 16.487 12.1662 17.5425C12.1662 18.9579 12.7284 20.3154 13.7293 21.3162C14.7301 22.3171 16.0876 22.8793 17.503 22.8793Z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="contact-social-icon" aria-label="VKontakte">
                    <svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.7836 25C8.11803 25 0.327869 15.616 0 0H6.84262C7.06885 11.4592 12.1148 16.3153 16.1115 17.3168V0H22.5607V9.88311C26.4951 9.45955 30.6557 4.95797 32.0525 0H38.5016C37.4262 6.10389 32.9279 10.6087 29.7311 12.4606C32.2314 13.704 34.4396 15.4647 36.2098 17.6263C37.98 19.7879 39.2719 22.3012 40 25H32.9049C31.3803 20.2456 27.5803 16.5682 22.5607 16.0691V25H21.7836Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="contact-hours">Ежедневно с 9:00 до 21:00</p>
            </div>
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

export default Contact;


