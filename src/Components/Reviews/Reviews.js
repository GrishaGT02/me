import React, { useState, useEffect, useRef } from 'react';
import { useModal } from '../../context/ModalContext';
import userPhoto1 from '../../assec/dod.png';
import yandexIcon from '../../assec/iandex.png';
import gisIcon from '../../assec/gis.png';
import zoonIcon from '../../assec/zoon.png';
import './Reviews.css';

const Reviews = () => {
  const { openModal } = useModal();
  const [animatedValue1, setAnimatedValue1] = useState(0);
  const animationFrameRef1 = useRef(null);
  const timeoutRef1 = useRef(null);
  
  const reviews = [
    {
      id: 1,
      name: 'Ирина 3',
      photo: userPhoto1,
      platform: '2GIS',
      rating: 5.0,
      text: 'Очень рекомендую данную стоматологическую клинику! Высококвалифицированные специалисты, дружелюбный и отзывчивый персонал, всегда приятная обстановка! Проходила в клинике терапевтическое лечение у доктора Дианы Александровны, в рамках которого была выполнена качественная комплексная чистка, а также вылечен кариес. Особую благодарность выражаю Карену Егишевичу! Ситуация была непростая: необходимо было удалить 4 зуба мудрости, 2 из которых корнями были близко к нерву. В итоге, было принято решение провести удаление в медика...'
    },
    {
      id: 2,
      name: 'Ирина 3',
      photo: userPhoto1,
      platform: 'Яндекс Карты',
      rating: 5.0,
      text: 'Огромное спасибо команде клиники и особенно Карену Егишевичу! У меня была довольно сложная ситуация, требующая удаления металлических предметов в зубах (коронки, штифты и т.д.) в сжатые сроки. Все сделано быстро, качественно и даже лучше ожиданий. Вместо металлических материалов, доктор сделал временные композитные (о чем я даже не мечтал). Крайне рекомендую, можно доверить свое здоровье, чувствуется во всем высокий профессионализм команды.'
    },
    {
      id: 3,
      name: 'Ирина 3',
      photo: userPhoto1,
      platform: 'ZOON',
      rating: 4.9,
      text: 'Достоинства Чистота, порядок, пунктуальность, качество и прозрачность цен. Недостатки Не обнаружила Комментарий Попала в эту клинику по рекомендации подруги, искала ближе к дому. Осталась очень довольна. Клиника сразу видно новая, все чисто аккуратно, это так приятно, я человек брезгливый, мне важно чтоб был порядок прям от входа. Приняли ровно во время записи, никаких ожиданий, не может не радовать, сначала консультация небольшая была, потом сделали все, что планировала, осталась очень довольна и качеством услуг и отношением. Редко отзывы п...'
    },
    {
      id: 4,
      name: 'Ирина З.',
      photo: userPhoto1,
      platform: '2GIS',
      rating: 5.0,
      text: 'Со съёмным протезом были одни мучения, носить просто не могла! В МитраЛаб предложили несъёмный протез на 4 имплантах, и это стало просто спасением! Удобно, ничего не натирает, боли нет. Операция прошла удивительно спокойно, врачи очень внимательные и заботливые. И что самое приятное — восстановление прошло быстро! Огромное спасибо Олегу Владимировичу и Юрию Николаевичу!'
    },
    {
      id: 5,
      name: 'Александр',
      photo: userPhoto1,
      platform: 'ZOON',
      rating: 5.0,
      text: 'Два с половиной года назад Софья Олеговна Шматова сделала мне полную базальную имплантацию. Операция была длительной и сложной, но доктор проявила умение, настойчивость и профессионализм. И всё получилось! В итоге, новые зубы радуют меня. Спасибо.'
    },
    {
      id: 6,
      name: 'Альфия Доан',
      photo: userPhoto1,
      platform: 'YELL.RU',
      rating: 5.0,
      text: 'Маме сильно мешал съёмный протез, ей приходилось испытывать сильнейший дискомфорт. И в MitraLab помогли! Здесь ей сделали протезирование за 3 дня, вместо 6 месяцев как в других клиниках. Всё прошло просто замечательно, зубки получились ровными и красивыми. Теперь очередь папы, с ним сложнее в плане зубов. Но в MitraLab отличные специалисты, так что я не переживаю.'
    }
  ];

  // Создаем слайды: каждый слайд - это одна карточка
  // Для бесконечной прокрутки дублируем отзывы
  const extendedReviews = [...reviews, ...reviews, ...reviews];
  
  const [currentSlide, setCurrentSlide] = useState(reviews.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  
  // Вычисляем реальный индекс для отображения в счетчике
  const realIndex = currentSlide % reviews.length;
  const totalSlides = reviews.length;

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Сброс позиции для бесконечной прокрутки
  useEffect(() => {
    if (currentSlide >= reviews.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(currentSlide - reviews.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (currentSlide < reviews.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(currentSlide + reviews.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, reviews.length]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleMouseDown = (e) => {
    const startPos = e.clientX;
    setIsPaused(true);
    
    const handleMouseMove = (moveEvent) => {
      const diff = startPos - moveEvent.clientX;
      const threshold = 10;
      
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          goToNextSlide(); // Перетащили влево - следующий слайд
        } else {
          goToPrevSlide(); // Перетащили вправо - предыдущий слайд
        }
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };
    
    const handleMouseUp = () => {
      setIsPaused(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const getPlatformCard = (platform, rating) => {
    if (platform === '2GIS') {
      return (
        <div className="reviews-rating-card">
          <img src={gisIcon} alt="2ГИС" className="reviews-rating-icon" />
          <div className="reviews-rating-content">
            <div className="reviews-rating-stars">
              <span className="reviews-rating-value">{rating.toFixed(1).replace('.', ',')}</span>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (platform === 'ZOON') {
      return (
        <div className="reviews-rating-card">
          <img className="reviews-rating-icon" src={zoonIcon} alt="ZOON" />
          <div className="reviews-rating-content">
            <div className="reviews-rating-stars">
              <span className="reviews-rating-value">{rating.toFixed(1).replace('.', ',')}</span>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (platform === 'Яндекс Карты') {
      return (
        <div className="reviews-rating-card">
          <img src={yandexIcon} alt="Яндекс Карты" className="reviews-rating-icon" />
          <div className="reviews-rating-content">
            <div className="reviews-rating-stars">
              <span className="reviews-rating-value">{rating.toFixed(1).replace('.', ',')}</span>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (platform === 'YELL.RU') {
      return (
        <div className="reviews-rating-card">
          <img src={yandexIcon} alt="YELL.RU" className="reviews-rating-icon" />
          <div className="reviews-rating-content">
            <div className="reviews-rating-stars">
              <span className="reviews-rating-value">{rating.toFixed(1).replace('.', ',')}</span>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    let isRunning1 = true;

    const animate1 = () => {
      if (!isRunning1) return;
      
      let currentValue = 0;
      const targetValue = 100;
      const duration = 4000;
      const startTime = Date.now();

      const animateFrame = () => {
        if (!isRunning1) return;
        
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        currentValue = Math.floor(easeOutQuart * targetValue);
        
        setAnimatedValue1(currentValue);

        if (progress < 1) {
          animationFrameRef1.current = requestAnimationFrame(animateFrame);
        } else {
          timeoutRef1.current = setTimeout(() => {
            if (isRunning1) {
              setAnimatedValue1(0);
              animate1();
            }
          }, 1000);
        }
      };

      animationFrameRef1.current = requestAnimationFrame(animateFrame);
    };

    animate1();

    return () => {
      isRunning1 = false;
      if (animationFrameRef1.current) {
        cancelAnimationFrame(animationFrameRef1.current);
      }
      if (timeoutRef1.current) {
        clearTimeout(timeoutRef1.current);
      }
    };
  }, []);

  const handleClick = () => {
    openModal();
  };

  return (
    <div className="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <div className="reviews-header-left">
            <h2 className="reviews-title">
              <span className="reviews-title-highlight">МЫ НЕ БОИМСЯ</span> РЕАЛЬНЫХ ОТЗЫВОВ!
            </h2>
            <p className="reviews-description">
              Мы искренне заботимся о каждом пациенте, а они, в свою очередь, делятся своими благодарностями - это лучшая оценка нашей работы!
            </p>
          </div>
          <div className="reviews-header-stats">
            <div className="reviews-stat-item">
              <div className="reviews-stat-value">{animatedValue1}+</div>
              <div className="reviews-stat-label">отзывов</div>
            </div>
            <div className="reviews-stat-item reviews-stat-item-active">
              <div className="reviews-stat-value">200+</div>
              <div className="reviews-stat-label">оценок</div>
            </div>
            <div className="reviews-stat-item">
              <div className="reviews-stat-value">1,000+</div>
              <div className="reviews-stat-label">довольных пациентов</div>
            </div>
          </div>
        </div>

        <div 
          className="reviews-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="reviews-carousel" 
            ref={carouselRef}
            onMouseDown={handleMouseDown}
          >
            <div 
              className="reviews-carousel-slides" 
              style={{ 
                transform: `translateX(calc(-${currentSlide} * (100% / 3)))`,
                transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }}
            >
              {extendedReviews.map((review, reviewIndex) => (
                <div key={`${review.id}-${reviewIndex}`} className="reviews-carousel-slide">
                  <div className="otzov-card">
                    <div className="otzov-card-header">
                      <div className="otzov-user-info">
                        <img 
                          src={review.photo} 
                          alt={review.name} 
                          className="otzov-user-photo"
                        />
                        <div className="otzov-user-details">
                          <div className="otzov-header-top">
                            <div className="otzov-user-name-wrapper">
                              <p className="otzov-user-name">{review.name}</p>
                              <div className="otzov-user-rating">
                                <span className="otzov-rating-value">{review.rating.toFixed(1)}</span>
                                <div className="otzov-rating-stars">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                                    </svg>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="otzov-platform-rating">
                              {getPlatformCard(review.platform, review.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="otzov-review-text">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Точки навигации */}
          <div className="reviews-carousel-dots-wrapper-bottom">
            <div className="reviews-carousel-dots-bottom">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`reviews-carousel-dot-bottom ${realIndex === index ? 'active' : ''}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentSlide(reviews.length + index);
                  }}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Рейтинги платформ */}
        <div className="reviews-platforms">
          <div className="reviews-platforms-top">
            {/* Карточки рейтингов слева */}
            <div className="reviews-ratings">
              <div className="reviews-ratings-cards">
                <div className="reviews-rating-card">
                  <img src={yandexIcon} alt="Яндекс Карты" className="reviews-rating-icon" />
                  <div className="reviews-rating-content">
                    <div className="reviews-rating-stars">
                      <span className="reviews-rating-value">5.0</span>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="reviews-rating-card">
                  <img src={gisIcon} alt="2ГИС" className="reviews-rating-icon" />
                  <div className="reviews-rating-content">
                    <div className="reviews-rating-stars">
                      <span className="reviews-rating-value">5.0</span>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="reviews-rating-card">
                  <img className="reviews-rating-icon" src={zoonIcon} alt="ZOON" />
                  <div className="reviews-rating-content">
                    <div className="reviews-rating-stars">
                      <span className="reviews-rating-value">4.9</span>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="reviews-platforms-text">Оставляйте свои отзывы на независимых площадках.</p>
            </div>

            {/* Навигация в центре */}
            <div className="reviews-navigation">
              <div className="reviews-nav-controls">
                <span className="reviews-slide-counter">{realIndex + 1}/{totalSlides}</span>
                <button 
                  className="reviews-nav-btn" 
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
                  className="reviews-nav-btn" 
                  onClick={goToNextSlide}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <svg className="reviews-nav-progress" width="60" height="60" viewBox="0 0 60 60">
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
                  <svg className="reviews-nav-arrow" width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.0625 13.0605L7.0625 7.06055L1.0625 1.06055" stroke="#1A1A1A" strokeOpacity="0.75" strokeWidth="3"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Кнопки справа */}
            <div className="reviews-buttons">
              <button className="reviews-upload-video-btn" onClick={handleClick}>
                <span>Загрузить свой видео-отзыв</span>
              </button>
              <button className="reviews-leave-review-btn" onClick={handleClick}>
                <div className="flare"></div>
                <span>Оставить отзыв</span>
                <div className="reviews-leave-review-btn-icon">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

