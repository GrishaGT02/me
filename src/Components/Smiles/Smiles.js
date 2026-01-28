import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import kerImage from '../../assec/ker.jpg';
import image2 from '../../assec/2.png';
import image3 from '../../assec/3.png';
import dockImage from '../../assec/dock.jpg';
import './Smiles.css';

const Smiles = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Начинаем с 1, так как 0 - это дублированный последний слайд
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [kerImage, kerImage, kerImage, kerImage, kerImage, kerImage]; // 6 слайдов
  
  // Данные для каждого слайда
  const slideData = [
    {
      problem: "Имплантация нижней челюсти all-",
      solution: "Установка дентального имплантата на место 24 зуба верхней челюсти."
    },
    {
      problem: "Имплантация нижней челюсти all-",
      solution: "Установка дентального имплантата на место 24 зуба верхней челюсти."
    },
    {
      problem: "Имплантация нижней челюсти all-",
      solution: "Установка дентального имплантата на место 24 зуба верхней челюсти."
    },
    {
      problem: "Имплантация нижней челюсти all-",
      solution: "Установка дентального имплантата на место 24 зуба верхней челюсти."
    },
    {
      problem: "Имплантация нижней челюсти all-",
      solution: "Установка дентального имплантата на место 24 зуба верхней челюсти."
    },
    {
      problem: "Имплантация нижней челюсти all-",
      solution: "Установка дентального имплантата на место 24 зуба верхней челюсти."
    }
  ];
  
  // Дублируем последний слайд в начало и первый в конец для бесконечного эффекта
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const carouselRef = useRef(null);

  // Реальный индекс для отображения (0-5)
  const realIndex = currentSlide === 0 ? slides.length - 1 : (currentSlide === extendedSlides.length - 1 ? 0 : currentSlide - 1);
  const totalSlides = slides.length;
  
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false); // Анимация началась

  // Запускаем анимацию только после первой смены слайда
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        if (prev === extendedSlides.length - 1) {
          return 0;
        }
        return prev + 1;
      });
      // Включаем анимацию после первой смены слайда
      if (!hasStartedAnimation) {
        setHasStartedAnimation(true);
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [extendedSlides.length, isPaused, hasStartedAnimation]);
  
  // Получаем данные для текущего слайда
  const currentSlideData = slideData[realIndex] || slideData[0];
  
  // Разбиваем текст на строки (как в оригинальной структуре)
  const problemParts = currentSlideData.problem.split(' ');
  const solutionParts = currentSlideData.solution.split(' ');
  
  // Формируем строки для проблемы (2 строки)
  const problemLine1 = problemParts.slice(0, 2).join(' ');
  const problemLine2 = problemParts.slice(2).join(' ');
  
  // Формируем строки для решения (3 строки)
  const solutionLine1 = solutionParts.slice(0, 2).join(' ');
  const solutionLine2 = solutionParts.slice(2, 5).join(' ');
  const solutionLine3 = solutionParts.slice(5).join(' ');

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      if (prev === extendedSlides.length - 1) {
        return 0; // Это не должно произойти, так как useEffect обработает это
      }
      return prev + 1;
    });
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return extendedSlides.length - 1; // Это не должно произойти, так как useEffect обработает это
      }
      return prev - 1;
    });
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


  useEffect(() => {
    if (currentSlide === extendedSlides.length - 1) {
      // Если дошли до дублированного первого слайда в конце, мгновенно переходим на реальный первый
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1200);
      return () => clearTimeout(timer);
    } else if (currentSlide === 0) {
      // Если дошли до дублированного последнего слайда в начале, мгновенно переходим на реальный последний
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(slides.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, slides.length, extendedSlides.length]);

  return (
    <div className="smiles-container">
      <h2 className="smiles-title">
        ВОТ УЖЕ 15 ЛЕТ МЫ ДАРИМ ЛЮДЯМ <span className="smiles-title-highlight">КРАСИВЫЕ УЛЫБКИ</span>
      </h2>
      <div className="smiles-content">
        {/* Левая панель - До/После пациента + Рот до/после */}
        <div className="smiles-panel smiles-panel-left">
          {/* Основной контент: два блока на одной линии */}
          <div className="smiles-main-content">
            {/* Левая часть: фото пациента и текст */}
            <div className="smiles-top-section">
              <div 
                className="smiles-carousel-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div 
                  className="smiles-carousel" 
                  ref={carouselRef}
                  onMouseDown={handleMouseDown}
                >
                  <div 
                    className="smiles-carousel-slides" 
                    style={{ 
                      transform: `translateX(-${currentSlide * 100}%)`,
                      transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                    }}
                  >
                    {extendedSlides.map((slide, index) => (
                      <div key={index} className="smiles-carousel-slide">
                        <img src={slide} alt={`Slide ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="smiles-carousel-dots-wrapper">
                  <div className="smiles-carousel-dots">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`smiles-carousel-dot ${realIndex === index ? 'active' : ''}`}
                        onClick={() => {
                          setIsTransitioning(true);
                          setCurrentSlide(index + 1);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="smiles-panel-text">
                <div className="smiles-text-content">
                  <div className="smiles-problem">
                    <div className="smiles-text-line">
                      <AnimatePresence mode="wait">
                        <motion.strong
                          key={`problem-title-${realIndex}`}
                          className="smiles-text-span"
                          initial={{ y: 100, opacity: 0 }}
                          animate={{ 
                            y: 0, 
                            opacity: 1,
                            transition: {
                              duration: 0.6,
                              delay: 0,
                              ease: [0.25, 0.40, 0.70, 0.94]
                            }
                          }}
                          exit={{ 
                            y: 100, 
                            opacity: 0,
                            transition: {
                              duration: 0.4,
                              delay: 0,
                              ease: [0.25, 0.40, 0.70, 0.94]
                            }
                          }}
                        >
                          Проблема:
                        </motion.strong>
                      </AnimatePresence>
                    </div>
                    <div className="smiles-text-line">
                      <p>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`problem-1-${realIndex}`}
                            className="smiles-text-span"
                            initial={hasStartedAnimation ? { y: 100, opacity: 0 } : false}
                            animate={{ 
                              y: 0, 
                              opacity: 1,
                              transition: {
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                            exit={{ 
                              y: 100, 
                              opacity: 0,
                              transition: {
                                duration: 0.8,
                                delay: 0,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                          >
                            {problemLine1}
                          </motion.span>
                        </AnimatePresence>
                        {' '}
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`problem-2-${realIndex}`}
                            className="smiles-text-span"
                            initial={hasStartedAnimation ? { y: 100, opacity: 0 } : false}
                            animate={{ 
                              y: 0, 
                              opacity: 1,
                              transition: {
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                            exit={{ 
                              y: 100, 
                              opacity: 0,
                              transition: {
                                duration: 0.8,
                                delay: 0,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                          >
                            {problemLine2}
                          </motion.span>
                        </AnimatePresence>
                      </p>
                    </div>
                  </div>
                  <div className="smiles-solution">
                    <div className="smiles-text-line">
                      <AnimatePresence mode="wait">
                        <motion.strong
                          key={`solution-title-${realIndex}`}
                          className="smiles-text-span"
                          initial={{ y: 100, opacity: 0 }}
                          animate={{ 
                            y: 0, 
                            opacity: 1,
                            transition: {
                              duration: 0.6,
                              delay: 0,
                              ease: [0.25, 0.40, 0.70, 0.94]
                            }
                          }}
                          exit={{ 
                            y: 100, 
                            opacity: 0,
                            transition: {
                              duration: 0.4,
                              delay: 0,
                              ease: [0.25, 0.40, 0.70, 0.94]
                            }
                          }}
                        >
                          Решение:
                        </motion.strong>
                      </AnimatePresence>
                    </div>
                    <div className="smiles-text-line">
                      <p>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`solution-1-${realIndex}`}
                            className="smiles-text-span"
                            initial={hasStartedAnimation ? { y: 100, opacity: 0 } : false}
                            animate={{ 
                              y: 0, 
                              opacity: 1,
                              transition: {
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                            exit={{ 
                              y: 100, 
                              opacity: 0,
                              transition: {
                                duration: 0.8,
                                delay: 0,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                          >
                            {solutionLine1}
                          </motion.span>
                        </AnimatePresence>
                        {' '}
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`solution-2-${realIndex}`}
                            className="smiles-text-span"
                            initial={hasStartedAnimation ? { y: 100, opacity: 0 } : false}
                            animate={{ 
                              y: 0, 
                              opacity: 1,
                              transition: {
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                            exit={{ 
                              y: 100, 
                              opacity: 0,
                              transition: {
                                duration: 0.8,
                                delay: 0,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                          >
                            {solutionLine2}
                          </motion.span>
                        </AnimatePresence>
                        {' '}
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`solution-3-${realIndex}`}
                            className="smiles-text-span"
                            initial={hasStartedAnimation ? { y: 100, opacity: 0 } : false}
                            animate={{ 
                              y: 0, 
                              opacity: 1,
                              transition: {
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                            exit={{ 
                              y: 100, 
                              opacity: 0,
                              transition: {
                                duration: 0.8,
                                delay: 0,
                                ease: [0.25, 0.40, 0.70, 0.94]
                              }
                            }}
                          >
                            {solutionLine3}
                          </motion.span>
                        </AnimatePresence>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Навигация */}
                <div className="smiles-navigation">
                  <span className="smiles-slide-counter">{realIndex + 1}/{totalSlides}</span>
                <button 
                    className="smiles-nav-btn" 
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
                    className="smiles-nav-btn" 
                    onClick={goToNextSlide}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <svg className="smiles-nav-progress" width="60" height="60" viewBox="0 0 60 60">
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
                    <svg className="smiles-nav-arrow" width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.0625 13.0605L7.0625 7.06055L1.0625 1.06055" stroke="#1A1A1A" strokeOpacity="0.75" strokeWidth="3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Правая часть: фото рта и текст */}
            <div className="smiles-mouth-section">
              <div className="smiles-mouth-section-content">
              <div className="smiles-mouth-images">
                <div className="smiles-mouth-before">
                  <img src={image2} alt="Mouth before treatment" />
                </div>
                <div className="smiles-mouth-after">
                  <img src={image3} alt="Mouth after treatment" />
                </div>
              </div>
              <div className="smiles-panel-info">
                <p className="smiles-panel-info-main">Имплантация премиум коронки Any Ridge. Установка под ключ</p>
                <p className="smiles-panel-info-small">Срок лечения 1 день</p>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Правая панель - Врач */}
        <div className="smiles-panel smiles-panel-right">
          <div className="smiles-panel-right-image-wrapper">
            <img src={dockImage} alt="Doctor" />
            <div className="googing-play-button">
              <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.14062 20.8873V4.2563C1.14062 2.88492 1.14062 2.19847 1.38456 1.79272C1.59747 1.43858 1.92563 1.20607 2.28995 1.15048C2.70722 1.08681 3.219 1.40972 4.2411 2.05461L17.4204 10.3701L17.4252 10.3726C18.5547 11.0853 19.1197 11.4418 19.3051 11.917C19.4668 12.3315 19.4668 12.81 19.3051 13.2245C19.1195 13.7003 18.5531 14.0583 17.4204 14.773L4.2411 23.0885C3.21827 23.7338 2.70737 24.0555 2.28995 23.9918C1.92563 23.9362 1.59747 23.7037 1.38456 23.3496C1.14062 22.9438 1.14062 22.2587 1.14062 20.8873Z" fill="#112F55" stroke="#112F55" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smiles;

