import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import './Oprosnik.css';
import videoImage from '../../assec/dod.png';

const Oprosnik = () => {
  const { openModal } = useModal();
  const [openLeftIndex, setOpenLeftIndex] = useState(0);  // Первый пункт открыт по умолчанию
  const [openRightIndex, setOpenRightIndex] = useState(0); // Первый пункт правого блока открыт по умолчанию

  const faqItems = [
    {
      question: 'Какие услуги предоставляет стоматологическая клиника?',
      answers: [
        'Терапия: лечение кариеса, пульпита, периодонтита, реставрация зубов',
        'Хирургия и имплантация: удаление зубов, установка имплантов'
      ]
    },
    {
      question: 'Какие документы выдают пациенту на руки?',
      answers: [
        'Договор на оказание медицинских услуг и информированное согласие',
        'Чеки об оплате и выписка из медицинской карты'
      ]
    },
    {
      question: 'Есть ли у вас гарантия на свои работы?',
      answers: [
        'Да, на все виды работ предоставляется гарантия от 1 до 5 лет',
        'Гарантийное обслуживание включает бесплатную коррекцию'
      ]
    },
    {
      question: 'Какие есть варианты оплаты?',
      answers: [
        'Наличный и безналичный расчёт, оплата картой',
        'Рассрочка без процентов на срок до 24 месяцев'
      ]
    },
    {
      question: 'Выдаете ли вы справки для возврата налогового вычета за лечение?',
      answers: [
        'Да, предоставляем все необходимые документы для налогового вычета',
        'Справка оформляется в течение 3 рабочих дней по запросу'
      ]
    },
    {
      question: 'Какие преимущества есть в вашей клинике и что отличает вас от других?',
      answers: [
        'Современное оборудование и опытные специалисты с практикой до 27 лет',
        'Индивидуальный подход и комфортные условия лечения'
      ]
    }
  ];

  const handleLeftToggle = (index) => {
    // Нельзя закрыть - только переключить на другой
    setOpenLeftIndex(index);
  };

  const handleRightToggle = (index) => {
    // Нельзя закрыть - только переключить на другой
    setOpenRightIndex(index);
  };

  return (
    <div className="oprosnik-container">
      <div className="oprosnik-header">
        <div className="oprosnik-title">
          Отвечаем на <span className="oprosnik-title-green">частые вопросы</span> об имплантации зубов
        </div>
        <div className="oprosnik-whatsapp-section">
          <button className="oprosnik-whatsapp-btn" onClick={openModal}>
            <div className="oprosnik-whatsapp-content">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="white"/>
              </svg>
              <div className="oprosnik-whatsapp-text">
                <span className="oprosnik-whatsapp-main-text">Задать вопрос нам в WhatsApp</span>
                <span className="oprosnik-whatsapp-sub-text">Время ответа 10 минут (примерно)</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="oprosnik-content">
        <div className="oprosnik-left">
          <div className="oprosnik-faq-grid">
            {faqItems.slice(0, 3).map((item, index) => (
              <div 
                key={index} 
                className={`oprosnik-faq-card ${openLeftIndex === index ? 'open' : ''}`}
                onClick={() => handleLeftToggle(index)}
              >
                <div className="oprosnik-faq-header">
                  <p className="oprosnik-faq-text">{item.question}</p>
                  <div className="oprosnik-play-wrapper">
                    <div className="oprosnik-wave oprosnik-wave-1"></div>
                    <div className="oprosnik-wave oprosnik-wave-2"></div>
                    <div className="oprosnik-wave oprosnik-wave-3"></div>
                    <button className="oprosnik-play-btn">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#FF0000"/>
                        <path d="M10 8L16 12L10 16V8Z" fill="white"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="oprosnik-faq-accordion">
                  <div className="oprosnik-faq-answers">
                    {item.answers.map((answer, ansIndex) => (
                      <div key={ansIndex} className="oprosnik-faq-answer">
                        <span className="oprosnik-faq-answer-icon">✓</span>
                        <span className="oprosnik-faq-answer-text">{answer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="oprosnik-center">
          <div className="oprosnik-faq-grid">
            {faqItems.slice(3, 6).map((item, index) => (
              <div 
                key={index + 3} 
                className={`oprosnik-faq-card ${openRightIndex === index ? 'open' : ''}`}
                onClick={() => handleRightToggle(index)}
              >
                <div className="oprosnik-faq-header">
                  <p className="oprosnik-faq-text">{item.question}</p>
                  <div className="oprosnik-play-wrapper">
                    <div className="oprosnik-wave oprosnik-wave-1"></div>
                    <div className="oprosnik-wave oprosnik-wave-2"></div>
                    <div className="oprosnik-wave oprosnik-wave-3"></div>
                    <button className="oprosnik-play-btn">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#FF0000"/>
                        <path d="M10 8L16 12L10 16V8Z" fill="white"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="oprosnik-faq-accordion">
                  <div className="oprosnik-faq-answers">
                    {item.answers.map((answer, ansIndex) => (
                      <div key={ansIndex} className="oprosnik-faq-answer">
                        <span className="oprosnik-faq-answer-icon">✓</span>
                        <span className="oprosnik-faq-answer-text">{answer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="oprosnik-right">
          <div className="oprosnik-video-card">
            <div className="oprosnik-video-thumbnail">
              <img 
                src={videoImage} 
                alt="Куратор лечения" 
                className="oprosnik-video-image"
              />
              <div className="oprosnik-video-gradient"></div>
              <div className="oprosnik-video-play-wrapper">
                <div className="oprosnik-video-wave oprosnik-video-wave-1"></div>
                <div className="oprosnik-video-wave oprosnik-video-wave-2"></div>
                <div className="oprosnik-video-wave oprosnik-video-wave-3"></div>
                <button className="oprosnik-video-play-btn">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#FF0000"/>
                    <path d="M10 8L16 12L10 16V8Z" fill="white"/>
                  </svg>
                </button>
              </div>
              <div className="oprosnik-video-info">
                <p className="oprosnik-video-role">Куратор лечения</p>
                <p className="oprosnik-video-name">Гончарова Маргарита</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oprosnik;

