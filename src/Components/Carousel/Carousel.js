import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import slad1 from '../../assec/slad1.jpg';
import slad2 from '../../assec/slad2.jpg';
import './Carousel.css';

// Слайды с изображениями и контентом - выносим за пределы компонента
const SLIDES = [
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

// Дублируем слайды для бесконечной прокрутки по кругу
// Добавляем первый слайд в конец и последний в начало для плавного перехода
const EXTENDED_SLIDES = [SLIDES[SLIDES.length - 1], ...SLIDES, ...SLIDES, SLIDES[0]];

const Carousel = () => {
  // Вычисляем начальную позицию СРАЗУ при инициализации компонента
  // Это гарантирует, что карточки будут видны с первого рендера
  const getInitialOffset = () => {
    if (typeof window !== 'undefined') {
      const vwToPx = window.innerWidth / 100;
      // Ширина слайда 50vw, gap 2.6vw, цикл = 3 * (50vw + 2.6vw)
      const estimatedCycleWidth = SLIDES.length * (50 + 2.6) * vwToPx;
      return -estimatedCycleWidth; // Начинаем со второй копии
    }
    return 0;
  };
  
  const initialOffset = getInitialOffset();
  const [offset, setOffset] = useState(initialOffset);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const animationRef = useRef(null);
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const baseOffsetRef = useRef(initialOffset);
  const dragStartRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const currentOffsetRef = useRef(initialOffset);
  const slideWidthRef = useRef(0);
  const gapRef = useRef(0);
  const cycleWidthRef = useRef(0);
  const isInitializedRef = useRef(false);
  const isMouseOverRef = useRef(false);

  // Вычисляем размеры слайдов - используем useLayoutEffect для синхронной установки позиции
  // ВАЖНО: этот эффект должен работать НЕЗАВИСИМО от состояния мыши
  useLayoutEffect(() => {
    let rafId = null;
    
    const updateSizes = () => {
      if (trackRef.current && trackRef.current.children.length > 0) {
        const firstSlide = trackRef.current.children[0];
        const slideRect = firstSlide.getBoundingClientRect();
        
        // Если размеры еще не вычислены, ждем следующего кадра
        if (slideRect.width === 0) {
          rafId = requestAnimationFrame(updateSizes);
          return;
        }
        
        slideWidthRef.current = slideRect.width;
        
        // Получаем gap из computed styles
        const trackStyles = window.getComputedStyle(trackRef.current);
        const gapValue = trackStyles.gap;
        gapRef.current = parseFloat(gapValue) || 0;
        
        // Вычисляем ширину одного цикла (3 слайда)
        cycleWidthRef.current = SLIDES.length * (slideWidthRef.current + gapRef.current);
        // Вычисляем ширину одного слайда с gap
        const slideWidthWithGap = slideWidthRef.current + gapRef.current;
        
        // ВСЕГДА устанавливаем начальную позицию на первом слайде из основной копии
        // Начинаем с позиции -slideWidthWithGap (пропускаем последний слайд из первой копии)
        // КРИТИЧЕСКИ ВАЖНО: делаем это НЕЗАВИСИМО от isPaused, isInitializedRef и состояния мыши
        if (cycleWidthRef.current > 0) {
          const targetOffset = -slideWidthWithGap; // Начинаем с первого слайда основной копии
          baseOffsetRef.current = targetOffset;
          currentOffsetRef.current = targetOffset;
          // Принудительно устанавливаем позицию - НЕ зависит от isPaused или состояния мыши
          setOffset(targetOffset);
          isInitializedRef.current = true;
        }
      } else {
        // Если элементы еще не отрендерены, пробуем снова на следующем кадре
        rafId = requestAnimationFrame(updateSizes);
      }
    };

    // Вызываем сразу синхронно
    updateSizes();
    
    // Также обновляем при изменении размера окна
    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      updateSizes();
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Дополнительная проверка: принудительно устанавливаем позицию
  // ВАЖНО: этот эффект работает НЕЗАВИСИМО от состояния мыши и isPaused
  useEffect(() => {
    const trySetPosition = () => {
      if (trackRef.current && trackRef.current.children.length > 0) {
        const firstSlide = trackRef.current.children[0];
        const slideRect = firstSlide.getBoundingClientRect();
        if (slideRect.width > 0) {
          const trackStyles = window.getComputedStyle(trackRef.current);
          const gapValue = trackStyles.gap;
          const gap = parseFloat(gapValue) || 0;
          const cycleWidth = SLIDES.length * (slideRect.width + gap);
          const slideWidthWithGap = slideRect.width + gap;
          if (cycleWidth > 0) {
            const targetOffset = -slideWidthWithGap; // Начинаем с первого слайда основной копии
            baseOffsetRef.current = targetOffset;
            currentOffsetRef.current = targetOffset;
            // Принудительно устанавливаем позицию - НЕ зависит от isPaused или состояния мыши
            setOffset(targetOffset);
            cycleWidthRef.current = cycleWidth;
            slideWidthRef.current = slideRect.width;
            gapRef.current = gap;
            isInitializedRef.current = true;
            
            // Если мышь уже на блоке, устанавливаем паузу ПОСЛЕ установки позиции
            if (isMouseOverRef.current) {
              setIsPaused(true);
            }
            
            return true; // Позиция установлена
          }
        }
      }
      return false; // Позиция не установлена
    };

    // Пробуем установить позицию сразу
    trySetPosition();

    // Если не получилось, пробуем через небольшую задержку
    const timeoutId1 = setTimeout(() => {
      trySetPosition();
    }, 10);

    // Также пробуем через requestAnimationFrame
    const rafId1 = requestAnimationFrame(() => {
      trySetPosition();
      
      // Еще одна попытка через следующий кадр
      requestAnimationFrame(() => {
        trySetPosition();
      });
    });

    return () => {
      clearTimeout(timeoutId1);
      cancelAnimationFrame(rafId1);
    };
  }, []);

  // Непрерывная анимация
  useEffect(() => {
    // Не запускаем анимацию, если перетаскиваем, на паузе или не инициализирована
    if (isDragging || isPaused || !isInitializedRef.current) return;

    const speed = 0.5; // скорость движения (пикселей за кадр)

    const animate = () => {
      // Проверяем состояние перед каждым кадром
      if (isDragging || isPaused || !isInitializedRef.current) return;
      
      if (cycleWidthRef.current === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      baseOffsetRef.current -= speed;
      
      // Нормализация для циклической прокрутки
      // Структура: [последний, 1, 2, 3, 1, 2, 3, первый]
      // Начинаем с позиции -slideWidthWithGap (первый слайд основной копии)
      // Когда доходим до конца последнего слайда основной копии, возвращаемся к началу
      // ВАЖНО: используем цикл while для гарантированной нормализации
      if (cycleWidthRef.current > 0) {
        const slideWidthWithGap = slideWidthRef.current + gapRef.current;
        // Нормализуем в цикле: [-cycleWidth - slideWidthWithGap, slideWidthWithGap)
        while (baseOffsetRef.current <= -cycleWidthRef.current - slideWidthWithGap) {
          baseOffsetRef.current += cycleWidthRef.current;
        }
        while (baseOffsetRef.current >= slideWidthWithGap) {
          baseOffsetRef.current -= cycleWidthRef.current;
        }
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
  }, [isDragging, isPaused]);

  const handleMouseEnter = useCallback(() => {
    isMouseOverRef.current = true;
    // Устанавливаем паузу только если позиция уже инициализирована и не перетаскиваем
    // Это гарантирует, что начальная позиция установится до паузы
    if (isInitializedRef.current && !isDragging) {
      setIsPaused(true);
    }
  }, [isDragging]);

  const handleMouseLeave = useCallback(() => {
    isMouseOverRef.current = false;
    if (!isDragging) {
      setIsPaused(false);
    }
  }, [isDragging]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    const diff = e.clientX - dragStartRef.current; // Перетаскивание вправо двигает карусель вправо, влево - влево
    dragOffsetRef.current = diff;
    let newOffset = baseOffsetRef.current + diff;
    
    // Нормализуем позицию во время перетаскивания, чтобы слайды всегда были видны
    if (cycleWidthRef.current > 0) {
      const slideWidthWithGap = slideWidthRef.current + gapRef.current;
      // Если ушли слишком далеко влево, возвращаемся
      if (newOffset <= -cycleWidthRef.current - slideWidthWithGap) {
        newOffset += cycleWidthRef.current;
        baseOffsetRef.current += cycleWidthRef.current;
        dragOffsetRef.current = diff - cycleWidthRef.current;
      }
      // Если ушли слишком далеко вправо, возвращаемся
      if (newOffset >= slideWidthWithGap) {
        newOffset -= cycleWidthRef.current;
        baseOffsetRef.current -= cycleWidthRef.current;
        dragOffsetRef.current = diff + cycleWidthRef.current;
      }
    }
    
    currentOffsetRef.current = newOffset;
    setOffset(newOffset);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    // Обновляем baseOffsetRef с учетом нового положения после перетаскивания
    baseOffsetRef.current = baseOffsetRef.current + dragOffsetRef.current;
    
    // Нормализуем позицию в пределах цикла после перетаскивания
    // ВАЖНО: делаем это ПРИНУДИТЕЛЬНО, чтобы слайды всегда были видны
    if (cycleWidthRef.current > 0) {
      const slideWidthWithGap = slideWidthRef.current + gapRef.current;
      
      // Нормализуем в цикле: [-cycleWidth - slideWidthWithGap, slideWidthWithGap)
      while (baseOffsetRef.current <= -cycleWidthRef.current - slideWidthWithGap) {
        baseOffsetRef.current += cycleWidthRef.current;
      }
      while (baseOffsetRef.current >= slideWidthWithGap) {
        baseOffsetRef.current -= cycleWidthRef.current;
      }
      
      // Принудительно устанавливаем нормализованную позицию
      currentOffsetRef.current = baseOffsetRef.current;
      setOffset(baseOffsetRef.current);
    }
    
    dragOffsetRef.current = 0;
    setIsDragging(false);
    
    // После перетаскивания проверяем, находится ли мышь над блоком
    // Если да - оставляем паузу, если нет - снимаем паузу
    if (isMouseOverRef.current) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
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
          {EXTENDED_SLIDES.map((slide, index) => (
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
                  <button className="carousel-slide-button">
                    <div className="flare"></div>
                    {slide.buttonText}
                  </button>
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

