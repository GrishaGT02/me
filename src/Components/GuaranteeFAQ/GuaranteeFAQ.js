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
        'Да, гарантия до 10 лет на имплантацию и до 2 лет на терапию. Все прописано в договоре, который вы подписываете перед началом лечения. Гарантия распространяется на качество выполненных работ и используемые материалы.'
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
      <path d="M1 7H7M7 7H13M7 7V13M7 7V1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const emailIcon = (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L8.10764 6.61227L8.10967 6.61396C8.78785 7.11128 9.12714 7.3601 9.49876 7.45621C9.82723 7.54117 10.1725 7.54117 10.501 7.45621C10.8729 7.36001 11.2132 7.11047 11.8926 6.61227C11.8926 6.61227 15.8101 3.60594 18 2M1 11.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V11.8036C19 12.9215 19 13.4805 18.7822 13.9079C18.5905 14.2842 18.2837 14.5905 17.9074 14.7822C17.48 15 16.921 15 15.8031 15H4.19691C3.07899 15 2.5192 15 2.0918 14.7822C1.71547 14.5905 1.40973 14.2842 1.21799 13.9079C1 13.4801 1 12.9203 1 11.8002Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="guarantee-faq">
      <div className="guarantee-faq-container">
        <div className="guarantee-faq-header-text">
          <h2 className="guarantee-faq-title">
            Мы <span>искренне заботимся</span> о каждом пациенте, а они, в свою очередь, делятся своими благодарностями это лучшая оценка нашей работы!
          </h2>
          <p className="guarantee-faq-subtitle">
            И мы не боимся реальных отзывов! Вы можете посмотреть не только отзывы на нашем сайте, но и независимые оценки на популярных площадках: Яндекс.Карты, 2ГИС, Zoon и другие. Наша репутация для Вас прозрачна, как и наши принципы работы.
          </p>
        </div>
        <div className="guarantee-faq-content">
          {/* Левая секция - Аккордеон */}
          <div className="guarantee-faq-left">
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
              <div className="guarantee-faq-email-icon" onClick={handleClick}>
                {emailIcon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeFAQ;

