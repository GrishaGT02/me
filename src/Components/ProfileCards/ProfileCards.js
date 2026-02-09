import React, { useState, useEffect } from 'react';
import './ProfileCards.css';
import dock1 from '../../assec/dock1.jpg';
import dock2 from '../../assec/dock2.png';
import dock3 from '../../assec/dock3.jpg';
import dock4 from '../../assec/dock4.jpg';
import dock5 from '../../assec/dock5.jpg';
import dock6 from '../../assec/dock6.jpg';

const ProfileCards = () => {
  const doctors = [
    {
      id: 1,
      name: 'Киракосян Карен',
      specialization: 'Главный врач, хирург, имплантолог',
      rating: '5.0',
      likes: '5,255',
      description: 'Опыт более 15 лет. Эксперт в сложных случаях. Лечение с максимальным комфортом и вниманием к деталям.',
      image: dock1
    },
    {
      id: 2,
      name: 'Джейранова Лия',
      specialization: 'Детский стоматолог',
      rating: '5.0',
      likes: '4,480',
      description: 'Делает поход к врачу максимально комфортным. Лечит и успокаивает даже самых тревожных детей.',
      image: dock2
    },
    {
      id: 3,
      name: 'Ахмедова Диана',
      specialization: 'Стоматолог-терапевт',
      rating: '5.0',
      likes: '4,356',
      description: 'Мастер эстетических реставраций. Лечит кариес и проводит гигиену с применением микроскопа.',
      image: dock3
    },
    {
      id: 4,
      name: 'Сулейманлы Хатун',
      specialization: 'Врач стоматолог-ортодонт',
      rating: '5.0',
      likes: '4,965',
      description: 'Специалист по исправлению прикуса. Работает с брекетами и элайнерами для детей и взрослых.',
      image: dock4
    },
    {
      id: 5,
      name: 'Рубан Анна',
      specialization: 'Ортопед, эстетическая стоматология',
      rating: '5.0',
      likes: '4,735',
      description: 'Восстанавливает зубы и улыбку. Специализируется на протезировании, винирах и цифровых технологиях.',
      image: dock5
    },
    {
      id: 6,
      name: 'Пеньевский Георгий',
      specialization: 'Стоматолог-терапевт',
      rating: '5.0',
      likes: '4,155',
      description: 'Сохраняет здоровье зубов всей семьи. Акцент на точной диагностике, лечении и профилактике.',
      image: dock6
    }
  ];

  // Определяем, мобильная ли версия
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 780);
  
  // Количество карточек, видимых одновременно (1 для мобильной, 4 для десктопа)
  const cardsPerView = isMobile ? 1 : 4;
  // Всего слайдов: по количеству врачей
  const totalSlides = doctors.length;

  // Отслеживаем изменение размера экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Создаем слайды для бесконечной прокрутки
  const extendedDoctors = [...doctors, ...doctors, ...doctors];
  
  const [currentSlide, setCurrentSlide] = useState(() => {
    return window.innerWidth <= 780 ? 0 : totalSlides;
  });
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  // Вычисляем реальный индекс для отображения в счетчике
  const realIndex = currentSlide % totalSlides;

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Сброс позиции для бесконечной прокрутки
  useEffect(() => {
    if (currentSlide >= totalSlides * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(currentSlide - totalSlides);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (currentSlide < totalSlides) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(currentSlide + totalSlides);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, totalSlides]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const renderCard = (doctor, index) => (
    <div key={`${doctor.id}-${index}`} className="profile-cards-carousel-slide">
      <div className="card">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="card-image"
        />
        <div className="card-overlay"></div>
        <div className="card-bottom-overlay"></div>
        <div className="card-top-elements">
          <div className="card-status-badge">
            <div className="card-status-dot online"></div>
            <div className="card-status-text">В клинике</div>
          </div>
          <div className="card-favorite-button">
            <svg viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.76397 10.5084L10.033 17.3369C10.2834 17.5721 10.4086 17.6897 10.5562 17.7187C10.6227 17.7317 10.6911 17.7317 10.7575 17.7187C10.9052 17.6897 11.0304 17.5721 11.2807 17.3369L18.5498 10.5084C20.595 8.58712 20.8433 5.42551 19.1232 3.20847L18.7998 2.79159C16.742 0.139381 12.6116 0.584176 11.1657 3.61369C10.9614 4.04163 10.3523 4.04162 10.1481 3.61369C8.70216 0.584176 4.57171 0.139378 2.51396 2.79159L2.19052 3.20846C0.470404 5.42551 0.718768 8.58712 2.76397 10.5084Z" fill="#FF383C" stroke="#FF383C" strokeWidth="2.09102"/>
            </svg>
          </div>
        </div>
        <div className="card-bottom-content">
          <div className="card-top-info">
            <div className="card-name-row">
              <div className="card-name">{doctor.name}</div>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="card-verified-icon">
                <path d="M21.2959 6.54923C21.1542 5.4739 20.5864 4.32296 19.6315 3.36826C18.6771 2.41382 17.5264 1.84612 16.4513 1.70445C15.9649 1.64019 15.3153 1.37154 14.926 1.07271C14.0652 0.412641 12.8501 0 11.5 0C10.15 0 8.9348 0.412641 8.07402 1.07271C7.6847 1.37128 7.03513 1.64019 6.54872 1.70445C5.4736 1.84612 4.32296 2.41386 3.36852 3.36826C2.41356 4.32296 1.84582 5.47386 1.70419 6.54923C1.64019 7.03565 1.37128 7.68496 1.07271 8.07402C0.412427 8.9345 0 10.15 0 11.5C0 12.8501 0.412427 14.0655 1.07271 14.926C1.37154 15.3153 1.64019 15.9644 1.70419 16.4507C1.84587 17.5261 2.41356 18.6771 3.36852 19.6317C4.32296 20.5862 5.4736 21.1539 6.54872 21.2956C7.03513 21.3598 7.6847 21.6287 8.07402 21.9272C8.9345 22.5873 10.1497 23 11.5 23C12.8503 23 14.0652 22.5873 14.926 21.9272C15.3153 21.6287 15.9649 21.3598 16.4513 21.2956C17.5264 21.1539 18.6771 20.5861 19.6315 19.6317C20.5864 18.677 21.1542 17.5261 21.2959 16.4507C21.3598 15.9644 21.6288 15.3151 21.9273 14.926C22.5876 14.0655 23 12.8503 23 11.5C23 10.15 22.5876 8.9345 21.9273 8.07402C21.6285 7.68496 21.3598 7.03565 21.2959 6.54923ZM18.8297 7.73455L10.5658 15.9985L9.24357 17.3208C8.87838 17.686 8.28652 17.686 7.92133 17.3208L6.59908 15.9985L4.17001 13.5697C3.80482 13.2045 3.80482 12.6126 4.17001 12.2474L5.49225 10.9252C5.85744 10.56 6.44931 10.56 6.81449 10.9252L8.58221 12.6929L16.185 5.09007C16.5503 4.72488 17.1421 4.72488 17.5073 5.09007L18.8295 6.41231C19.1949 6.7775 19.1949 7.36962 18.8297 7.73455Z" fill="white"/>
              </svg>
            </div>
            <div className="card-specialization">{doctor.specialization}</div>
            <div className="card-stats">
              <div className="card-rating">
                <div className="card-rating-value">{doctor.rating}</div>
                <div className="card-rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00937 2.17673C5.59146 0.725577 5.88251 0 6.38299 0C6.88348 0 7.17453 0.725577 7.75662 2.17673L7.78373 2.24431C8.11258 3.06414 8.27701 3.47405 8.61212 3.7232C8.94723 3.97235 9.38713 4.01175 10.2669 4.09054L10.426 4.10479C11.8659 4.23375 12.5859 4.29822 12.7399 4.75628C12.894 5.21433 12.3593 5.70077 11.29 6.67365L10.9331 6.99834C10.3918 7.49083 10.1211 7.73707 9.99494 8.05981C9.97141 8.12002 9.95184 8.1817 9.93638 8.24446C9.85345 8.58091 9.93271 8.93813 10.0912 9.65259L10.1406 9.87497C10.4319 11.188 10.5776 11.8445 10.3232 12.1277C10.2282 12.2335 10.1047 12.3097 9.96747 12.3471C9.60028 12.4473 9.07896 12.0225 8.03632 11.1729C7.35169 10.615 7.00937 10.3361 6.61635 10.2734C6.46176 10.2487 6.30423 10.2487 6.14964 10.2734C5.75662 10.3361 5.4143 10.615 4.72967 11.1729C3.68703 12.0225 3.16571 12.4473 2.79852 12.3471C2.66131 12.3097 2.5378 12.2335 2.44276 12.1277C2.18844 11.8445 2.3341 11.188 2.62542 9.87497L2.67476 9.65259C2.83328 8.93813 2.91253 8.58091 2.82961 8.24446C2.81414 8.1817 2.79458 8.12002 2.77105 8.05981C2.6449 7.73707 2.37424 7.49083 1.83292 6.99834L1.47602 6.67365C0.406682 5.70077 -0.12799 5.21433 0.0260636 4.75628C0.180117 4.29822 0.900075 4.23375 2.33999 4.10479L2.49905 4.09054C3.37885 4.01175 3.81876 3.97235 4.15387 3.7232C4.48898 3.47405 4.65341 3.06413 4.98226 2.2443L5.00937 2.17673Z" fill="#FEC850"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="card-likes">
                <div className="card-likes-value">{doctor.likes}</div>
                <div className="card-likes-text">отметок нравится</div>
              </div>
            </div>
            <div className="card-description">{doctor.description}</div>
          </div>
          <button className="card-appointment-button">
            <span>Записаться на приём</span>
            <div className="card-appointment-button-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.05961 1.0634L2.77918 0.343832C3.2374 -0.114383 3.98031 -0.114383 4.43853 0.343832L7.47252 3.37782C7.93073 3.83604 7.93073 4.57895 7.47252 5.03717L5.36942 7.14026C5.01873 7.49095 4.93179 8.0267 5.15359 8.47029C6.43575 11.0346 8.51506 13.1139 11.0794 14.3961C11.523 14.6179 12.0587 14.531 12.4094 14.1803L14.5125 12.0772C14.9707 11.619 15.7136 11.619 16.1719 12.0772L19.2059 15.1112C19.6641 15.5694 19.6641 16.3123 19.2059 16.7705L18.4863 17.4901C16.009 19.9674 12.087 20.2461 9.28425 18.144L7.86638 17.0806C5.82064 15.5463 4.00335 13.729 2.46905 11.6833L1.40564 10.2654C-0.696433 7.46267 -0.417709 3.54072 2.05961 1.0634Z" fill="white"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="profile-cards-section">
      <div className="profile-cards-content">
        <div className="profile-cards-title">
          ПОЗНАКОМЬТЕСЬ <span>С НАШИМИ ВРАЧАМИ!</span>
        </div>
        <div className="profile-cards-description">
          Вас встретят высококвалифицированные специалисты, для которых здоровье и комфорт пациента - главный приоритет. Доверьте свою улыбку профессионалам!
        </div>
      </div>
      
      <div className="profile-cards-carousel-wrapper">
        <div 
          className="profile-cards-carousel" 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="profile-cards-carousel-slides" 
            style={{
              transform: isMobile 
                ? currentSlide === 0
                  ? 'translateX(0)'
                  : `translateX(calc(-100% - ${currentSlide * 6.41}vw - ${(currentSlide - 1) * 76.923}vw))`
                : `translateX(calc(-${currentSlide} * (100% / ${cardsPerView})))`,
              transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
          >
            {extendedDoctors.map((doctor, index) => renderCard(doctor, index))}
          </div>
        </div>
        
        {/* Навигация */}
        <div className="profile-cards-navigation">
          {/* Точки навигации */}
          <div className="profile-cards-carousel-dots-wrapper">
            <div className="profile-cards-carousel-dots">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`profile-cards-carousel-dot ${realIndex === index ? 'active' : ''}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentSlide(totalSlides + index);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Навигация со стрелками */}
          <div className="profile-cards-nav-controls">
            <div className="profile-cards-slide-counter">
              {realIndex + 1}/{totalSlides}
            </div>
            <button 
              className="profile-cards-nav-btn" 
              onClick={goToPrevSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{ border: '0.052vw solid rgba(0, 0, 0, 0.2)' }}
            >
              <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.9375 1.06055L2.9375 7.06055L8.9375 13.0605" stroke="#1A1A1A" strokeOpacity="0.75" strokeWidth="3"/>
              </svg>
            </button>
            <button 
              className="profile-cards-nav-btn" 
              onClick={goToNextSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <svg className="profile-cards-nav-progress" width="60" height="60" viewBox="0 0 60 60">
                <circle
                  cx="30"
                  cy="30"
                  r="29"
                  fill="none"
                  stroke="#E0E0E0"
                  strokeWidth="1"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="29"
                  fill="none"
                  stroke="#485B85"
                  strokeWidth="1"
                  strokeDasharray={`${2 * Math.PI * 29}`}
                  strokeDashoffset={`${2 * Math.PI * 29 * (1 - (realIndex + 1) / totalSlides)}`}
                  strokeLinecap="round"
                  transform="rotate(-90 30 30)"
                  style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
              </svg>
              <svg className="profile-cards-nav-arrow" width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.0625 13.0605L7.0625 7.06055L1.0625 1.06055" stroke="#1A1A1A" strokeOpacity="0.75" strokeWidth="3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCards;
