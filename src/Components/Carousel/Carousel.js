import React, { useState, useEffect, useRef } from 'react';
import slad1 from '../../assec/slad1.jpg';
import slad2 from '../../assec/slad2.jpg';
import './Carousel.css';

const Carousel = () => {
  const [offset, setOffset] = useState(0);
  const animationRef = useRef(null);
  const wrapperRef = useRef(null);

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
    const speed = 0.5; // скорость движения (пикселей за кадр)
    let currentOffset = 0;

    const animate = () => {
      const slideWidth = 960;
      const gap = 50;
      const totalSlideWidth = slideWidth + gap; // ширина слайда + gap
      
      currentOffset -= speed;
      
      // Когда проехали один полный цикл (3 слайда), сбрасываем позицию
      const cycleWidth = slides.length * totalSlideWidth;
      if (Math.abs(currentOffset) >= cycleWidth) {
        currentOffset = currentOffset + cycleWidth; // сбрасываем на начало цикла
      }
      
      setOffset(currentOffset);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [slides.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-slides-wrapper" ref={wrapperRef}>
        <div 
          className="carousel-slides-track"
          style={{
            transform: `translateX(${offset}px)`,
          }}
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

