import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import doctorImage from '../../assec/dock.jpg';
import './GuaranteeFAQ.css';

const GuaranteeFAQ = () => {
  const { openModal } = useModal();
  const [openIndex, setOpenIndex] = useState(0); // Первый пункт открыт по умолчанию

  const faqItems = [
    {
      question: 'Вы даете гарантию? На что именно?',
      answers: [
        'Да, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договоре Да, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договореДа, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договореДа, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договоре'
      ]
    },
    {
      question: 'Какие документы выдают пациенту на руки?',
      answers: [
        'Да, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договоре, который вы подписываете перед началом лечения. Гарантия распространяется на качество выполненных работ и используемые материалы.'
      ]
    },
    {
      question: 'Есть ли у вас гарантия на свои работы?',
      answers: [
        'Да, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договоре, который вы подписываете перед началом лечения. Гарантия распространяется на качество выполненных работ и используемые материалы.'
      ]
    },
    {
      question: 'Какие есть варианты оплаты?',
      answers: [
        'Да, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договоре, который вы подписываете перед началом лечения. Гарантия распространяется на качество выполненных работ и используемые материалы.'
      ]
    },
    {
      question: 'Выдаете ли вы справки для возврата налогового вычета за лечение?',
      answers: [
        'Да, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договоре, который вы подписываете перед началом лечения. Гарантия распространяется на качество выполненных работ и используемые материалы.'
      ]
    },
    {
      question: 'Какие преимущества есть в вашей клинике и что отличает вас от других?',
      answers: [
        'Да, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договоре, который вы подписываете перед началом лечения. Гарантия распространяется на качество выполненных работ и используемые материалы.'
      ]
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  const handleClick = () => {
    openModal();
  };

  const plusIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7H7M7 7H13M7 7V13M7 7V1" stroke="#485B85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const emailIcon = (
    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.4824 5.18945C22.4989 5.86303 22.5 6.6277 22.5 7.5V10C22.5 13.5355 22.4997 15.303 21.4014 16.4014C20.303 17.4997 18.5355 17.5 15 17.5H7.5C3.96447 17.5 2.19698 17.4997 1.09863 16.4014C0.00028325 15.303 0 13.5355 0 10V7.5C0 6.62771 0.000106283 5.86303 0.0166016 5.18945L10.0361 10.7559C10.791 11.1751 11.709 11.1751 12.4639 10.7559L22.4824 5.18945ZM15 0C18.5355 0 20.303 0.000283242 21.4014 1.09863C21.7842 1.48145 22.0309 1.94612 22.1934 2.53809C22.0907 2.56411 21.9895 2.60336 21.8926 2.65723L11.25 8.57031L0.607422 2.65723C0.510175 2.6032 0.408676 2.56411 0.305664 2.53809C0.468131 1.946 0.715761 1.4815 1.09863 1.09863C2.19698 0.000283265 3.96447 0 7.5 0H15Z" fill="white"/>
    </svg>
  );

  const playIcon = (
    <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.14062 20.8873V4.2563C1.14062 2.88492 1.14062 2.19847 1.38456 1.79272C1.59747 1.43858 1.92563 1.20607 2.28995 1.15048C2.70722 1.08681 3.219 1.40972 4.2411 2.05461L17.4204 10.3701L17.4252 10.3726C18.5547 11.0853 19.1197 11.4418 19.3051 11.917C19.4668 12.3315 19.4668 12.81 19.3051 13.2245C19.1195 13.7003 18.5531 14.0583 17.4204 14.773L4.2411 23.0885C3.21827 23.7338 2.70737 24.0555 2.28995 23.9918C1.92563 23.9362 1.59747 23.7037 1.38456 23.3496C1.14062 22.9438 1.14062 22.2587 1.14062 20.8873Z" fill="#112F55" stroke="#112F55" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="guarantee-faq">
      <div className="guarantee-faq-container">
        <div className="guarantee-faq-content">
          {/* Левая секция - Текст и FAQ */}
          <div className="guarantee-faq-left">
            <h2 className="guarantee-faq-title">
              ОТВЕТЫ НА <span>ЧАСТЫЕ ВОПРОСЫ</span>
            </h2>
            <p className="guarantee-faq-description">
              Отвечаем на любые Ваши вопросы! А если Вашего вопроса здесь нет, задайте свой вопрос, и мы ответим на него лично!
            </p>
            <div className="guarantee-faq-grid">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`guarantee-faq-card ${openIndex === index ? 'open' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="guarantee-faq-header">
                    <p className="guarantee-faq-text">{item.question}</p>
                    <div className="guarantee-faq-icon-wrapper">
                      <div className="guarantee-faq-icon">
                        {plusIcon}
                      </div>
                    </div>
                  </div>
                  <div className="guarantee-faq-accordion">
                    <div className="guarantee-faq-answers">
                      {item.answers.map((answer, ansIndex) => (
                        <div key={ansIndex} className="guarantee-faq-answer">
                          <span className="guarantee-faq-answer-text">{answer}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая секция - фото врача */}
          <div className="guarantee-faq-right">
            <div className="guarantee-faq-doctor-image">
              <img src={doctorImage} alt="Doctor" />
              <div className="guarantee-faq-doctor-play-button">
                {playIcon}
              </div>
              <div className="guarantee-faq-form">
                <div className="guarantee-faq-form-inner">
                  <div className="guarantee-faq-form-content">
                    <h3 className="guarantee-faq-form-title">Задайте свой вопрос</h3>
                    <p className="guarantee-faq-form-description">Ответим максимально быстро и поможем именно в Вашей ситуации</p>
                    {/* <input 
                      type="text" 
                      className="guarantee-faq-form-input" 
                      placeholder="Введите ваш вопрос"
                    /> */}
                  </div>
                  <div className="guarantee-faq-form-icon" onClick={handleClick}>
                    {emailIcon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeFAQ;

