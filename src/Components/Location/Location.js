import React from 'react';
import './Location.css';
import ms1 from '../../assec/ms1.jpg';
import ms2 from '../../assec/ms2.jpg';
import ms3 from '../../assec/ms3.jpg';
import metro from '../../assec/metro.png';

const Location = () => {
  const infoCards = [
    {
      id: 1,
      title: 'К нам легко добраться',
      description: 'Идеальная доступность на машине и метро.'
    },
    {
      id: 2,
      title: 'Всегда есть место',
      description: 'Бесплатная парковка для наших пациентов.'
    },
    {
      id: 3,
      title: 'Ждем Вас в гости',
      description: 'Насладитесь заботой, которая чувствуется в каждой детали.'
    }
  ];

  return (
    <div className="location">
      <div className="location-container">
        <div className="location-top-header">
          <div className="location-top-header-bar"></div>
          <span>Удобная транспортная доступность</span>
        </div>
        <div className="location-header">
          <h2 className="location-title">
            МЫ НАХОДИМСЯ <span className="location-title-highlight">В 2 МИНУТАХ ПЕШКОМ</span> ОТ МЕТРО РАССКАЗОВКА
          </h2>
          <p className="location-description">
            Выход из последнего вагона из центра. Из стеклянных дверей налево. Пройти 50 метров до жилого дома, обойти его слева, и вы увидите наш вывеску
          </p>
        </div>

        <div className="location-content">
          <div className="location-video-main">
            <div className="location-video-wrapper">
              <img src={ms1} alt="Метро" className="location-video-image" />
              <div className="location-video-overlay">
                <div className="location-video-badge">
                  <div className="location-video-badge-icon">
                    <img src={metro} alt="metro" />
                  </div>
                  <span>Простая схема проезда от метро</span>
                </div>
              </div>
              <div className="location-video-bottom">
                <div className="location-video-text">
                  Совсем близко! Всего 2 минуты пешком от метро. Мы подготовили наглядную схему, чтобы Вы не запутались.
                </div>
                <div className="guarantee-faq-play-button">
                  <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.14062 20.8873V4.2563C1.14062 2.88492 1.14062 2.19847 1.38456 1.79272C1.59747 1.43858 1.92563 1.20607 2.28995 1.15048C2.70722 1.08681 3.219 1.40972 4.2411 2.05461L17.4204 10.3701L17.4252 10.3726C18.5547 11.0853 19.1197 11.4418 19.3051 11.917C19.4668 12.3315 19.4668 12.81 19.3051 13.2245C19.1195 13.7003 18.5531 14.0583 17.4204 14.773L4.2411 23.0885C3.21827 23.7338 2.70737 24.0555 2.28995 23.9918C1.92563 23.9362 1.59747 23.7037 1.38456 23.3496C1.14062 22.9438 1.14062 22.2587 1.14062 20.8873Z" fill="#112F55" stroke="#112F55" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="location-videos-secondary">
            <div className="location-video-secondary">
              <div className="location-video-wrapper">
                <img src={ms2} alt="Внешний вид" className="location-video-image" />
                <div className="guarantee-faq-play-button">
                  <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.14062 20.8873V4.2563C1.14062 2.88492 1.14062 2.19847 1.38456 1.79272C1.59747 1.43858 1.92563 1.20607 2.28995 1.15048C2.70722 1.08681 3.219 1.40972 4.2411 2.05461L17.4204 10.3701L17.4252 10.3726C18.5547 11.0853 19.1197 11.4418 19.3051 11.917C19.4668 12.3315 19.4668 12.81 19.3051 13.2245C19.1195 13.7003 18.5531 14.0583 17.4204 14.773L4.2411 23.0885C3.21827 23.7338 2.70737 24.0555 2.28995 23.9918C1.92563 23.9362 1.59747 23.7037 1.38456 23.3496C1.14062 22.9438 1.14062 22.2587 1.14062 20.8873Z" fill="#112F55" stroke="#112F55" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="location-video-secondary">
              <div className="location-video-wrapper">
                <img src={ms3} alt="Интерьер" className="location-video-image" />
                <div className="guarantee-faq-play-button">
                  <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.14062 20.8873V4.2563C1.14062 2.88492 1.14062 2.19847 1.38456 1.79272C1.59747 1.43858 1.92563 1.20607 2.28995 1.15048C2.70722 1.08681 3.219 1.40972 4.2411 2.05461L17.4204 10.3701L17.4252 10.3726C18.5547 11.0853 19.1197 11.4418 19.3051 11.917C19.4668 12.3315 19.4668 12.81 19.3051 13.2245C19.1195 13.7003 18.5531 14.0583 17.4204 14.773L4.2411 23.0885C3.21827 23.7338 2.70737 24.0555 2.28995 23.9918C1.92563 23.9362 1.59747 23.7037 1.38456 23.3496C1.14062 22.9438 1.14062 22.2587 1.14062 20.8873Z" fill="#112F55" stroke="#112F55" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="location-info-cards">
            {infoCards.map((card) => (
              <div key={card.id} className="location-info-card">
                <div className="location-info-card-content">
                  <h3 className="location-info-card-title">{card.title}</h3>
                  <p className="location-info-card-description">{card.description}</p>
                </div>
                <div className="location-info-card-icon">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4055 11.3452L11.345 1.40566M11.345 1.40566H3.39341M11.345 1.40566L11.345 9.35729" stroke="#112F55" strokeWidth="2.81133" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="location-map-section">
          <div className="location-map">
            <div className="location-map-info">
              <div className="location-map-info-item">
                <span>ул.Анны Ахматовой 11, корп. 1</span>
              </div>
              <div className="location-map-info-item">
                <span>Напротив "Тц Галерея"</span>
              </div>
              <div className="location-map-info-item">
                <span>Бесплатная парковка</span>
              </div>
              <div className="location-map-info-item">
                <span>Вход со стороны "ТЦ Галерея"</span>
              </div>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.3320%2C55.6345&z=16&pt=37.3320%2C55.6345&l=map"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              style={{ position: 'absolute', top: 0, left: 0 }}
              title="Карта расположения клиники"
            ></iframe>
          </div>
        </div>

        <div className="location-panorama-section">
          <div className="location-panorama-content">
            <div className="location-panorama-image">
              <img src={ms2} alt="Внешний вид здания" />
            </div>
            <div className="location-panorama-text-block">
              <h2 className="location-panorama-title">
                Так же можно посмотреть панораму улицы
              </h2>
              <p className="location-panorama-description">
                Чтобы Вы могли оценить локацию и инфраструктуру не выходя из дома, приглашаем Вас на виртуальную прогулку по району. Всего в один клик - и Вы на нашей улице!
              </p>
            </div>
            <button className="location-panorama-button">
              <div className="flare"></div>
              <span>Посмотреть панораму</span>
              <div className="location-panorama-btn-icon">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

