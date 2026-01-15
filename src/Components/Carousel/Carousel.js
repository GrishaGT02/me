import React, { useState, useEffect, useRef, useCallback } from 'react';
import slad1 from '../../assec/slad1.jpg';
import slad2 from '../../assec/slad2.jpg';
import './Carousel.css';

const Carousel = () => {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const animationRef = useRef(null);
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const baseOffsetRef = useRef(0);
  const dragStartRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const currentOffsetRef = useRef(0);

  // Слайды с изображениями и контентом
  const slides = [
    { 
      id: 1, 
      image: slad1,
      title: 'Все зубы за 1 день за 119,000 рублей или 8,000 руб/в месяц',
      subtitle: 'С пожизненной гарантией от производителя',
      buttonText: 'ПОДРОБНЕЕ'
    },
    { 
      id: 2, 
      image: slad2,
      title: 'Брекеты + установка от 29,500 рублей. Рассрочка до 36 месяцев.',
      subtitle: 'С пожизненной гарантией от производителя',
      buttonText: 'ПОДРОБНЕЕ'
    },
    { 
      id: 3, 
      image: slad1,
      title: 'Все зубы за 1 день за 119,000 рублей или 8,000 руб/в месяц',
      subtitle: 'С пожизненной гарантией от производителя',
      buttonText: 'ПОДРОБНЕЕ'
    },
  ];

  // Дублируем слайды для бесконечной прокрутки (нужно минимум 2 копии)
  const extendedSlides = [...slides, ...slides, ...slides];

  // Непрерывная анимация
  useEffect(() => {
    if (isPaused || isDragging) return; // Не запускаем анимацию, если на паузе или перетаскиваем

    const speed = 0.5; // скорость движения (пикселей за кадр)

    const animate = () => {
      if (isPaused || isDragging) return;
      
      const slideWidth = 960;
      const gap = 50;
      const totalSlideWidth = slideWidth + gap; // ширина слайда + gap
      
      baseOffsetRef.current -= speed;
      
      // Когда проехали один полный цикл (3 слайда), сбрасываем позицию
      const cycleWidth = slides.length * totalSlideWidth;
      if (Math.abs(baseOffsetRef.current) >= cycleWidth) {
        baseOffsetRef.current = baseOffsetRef.current + cycleWidth; // сбрасываем на начало цикла
      }
      
      const newOffset = baseOffsetRef.current + dragOffsetRef.current;
      currentOffsetRef.current = newOffset;
      setOffset(newOffset);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [slides.length, isPaused, isDragging]);

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) {
      setIsPaused(false);
    }
  }, [isDragging]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    const diff = e.clientX - dragStartRef.current; // Перетаскивание вправо двигает карусель вправо, влево - влево
    dragOffsetRef.current = diff;
    const newOffset = baseOffsetRef.current + diff;
    currentOffsetRef.current = newOffset;
    setOffset(newOffset);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    // Обновляем baseOffsetRef с учетом нового положения после перетаскивания
    baseOffsetRef.current = baseOffsetRef.current + dragOffsetRef.current;
    dragOffsetRef.current = 0;
    setIsDragging(false);
    setIsPaused(false);
  }, [isDragging]);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setIsPaused(true);
    dragStartRef.current = e.clientX;
    // Сохраняем текущий baseOffset без dragOffset
    baseOffsetRef.current = currentOffsetRef.current - dragOffsetRef.current;
    dragOffsetRef.current = 0;
  }, []);

  // Добавляем обработчики для глобальных событий мыши
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div 
      className="carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-slides-wrapper" ref={wrapperRef}>
        <div 
          ref={trackRef}
          className="carousel-slides-track"
          style={{
            transform: `translateX(${offset}px)`,
          }}
          onMouseDown={handleMouseDown}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="carousel-wrapper"
            >
              <div className="carousel-slide">
                <div className="carousel-slide-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div className="carousel-slide-content">
                  <div className="carousel-slide-text">
                    <h2 className="carousel-slide-title">{slide.title}</h2>
                    <p className="carousel-slide-subtitle">{slide.subtitle}</p>
                  </div>
                  <button className="carousel-slide-button">{slide.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

