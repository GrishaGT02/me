import React, { useState, useEffect, useRef } from 'react';
import { useModal } from '../../context/ModalContext';
import slaiderHeader from '../../assec/slaider_header.jpg';
import doctorImage from '../../assec/dock.jpg';
import './FixedPrice.css';

const FixedPrice = () => {
    const { openModal } = useModal();
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef(null);
    
    const slides = [slaiderHeader, slaiderHeader, slaiderHeader, slaiderHeader];
    const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
    const realIndex = currentSlide === 0 ? slides.length - 1 : (currentSlide === extendedSlides.length - 1 ? 0 : currentSlide - 1);

    const goToNextSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => {
            if (prev === extendedSlides.length - 1) {
                return 0;
            }
            return prev + 1;
        });
    };

    const goToPrevSlide = () => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => {
            if (prev === 0) {
                return extendedSlides.length - 1;
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
                    goToNextSlide();
                } else {
                    goToPrevSlide();
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
        if (isPaused) return;
        
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setCurrentSlide((prev) => {
                if (prev === extendedSlides.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [extendedSlides.length, isPaused]);

    useEffect(() => {
        if (currentSlide === extendedSlides.length - 1) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(1);
                setTimeout(() => setIsTransitioning(true), 50);
            }, 1200);
            return () => clearTimeout(timer);
        } else if (currentSlide === 0) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(slides.length);
                setTimeout(() => setIsTransitioning(true), 50);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [currentSlide, slides.length, extendedSlides.length]);

    const handleClick = () => {
        openModal();
    };

    const guarantees = [
        {
            years: '3 года',
            description: 'Гарантия на работу врача'
        },
        {
            years: '3 года',
            description: 'Гарантия на материалы'
        },
        {
            years: '3 года',
            description: 'Гарантия на работу врача'
        }
    ];

    return (
        <div className="fixed-price">
            <div className="fixed-price-container">
                <div className="fixed-price-top">
                    <div className="fixed-price-left">
                        <div className="fixed-price-main-title">
                            НЕ НАВЯЗЫВАЕМ ЛИШНИЕ<br/>
                            УСЛУГИ, А ЦЕНУ ЗАКРЕПЛЯЕМ В<br/>
                            ДОГОВОРЕ!
                        </div>
                        <div className="fixed-price-description">
                            Вы платите только за то, что действительно нужно. Фиксируем стоимость лечения в договоре. Никаких скрытых доплат или «внезапных» этапов.
                        </div>
                        <div 
                            className="fixed-price-carousel-wrapper"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div 
                                className="fixed-price-carousel" 
                                ref={carouselRef}
                                onMouseDown={handleMouseDown}
                            >
                                <div 
                                    className="fixed-price-carousel-slides" 
                                    style={{ 
                                        transform: `translateX(-${currentSlide * 100}%)`,
                                        transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                    }}
                                >
                                    {extendedSlides.map((slide, index) => (
                                        <div key={index} className="fixed-price-carousel-slide">
                                            <img src={slide} alt={`Slide ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="fixed-price-carousel-dots-wrapper">
                                <div className="fixed-price-carousel-dots">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`fixed-price-carousel-dot ${realIndex === index ? 'active' : ''}`}
                                            onClick={() => {
                                                setIsTransitioning(true);
                                                setCurrentSlide(index + 1);
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed-price-right">
                        {guarantees.map((guarantee, index) => (
                            <div key={index} className="fixed-price-item">
                                <div className="fixed-price-years">{guarantee.years}</div>
                                <div className="fixed-price-item-description">{guarantee.description}</div>
                                <div className="fixed-price-divider"></div>
                            </div>
                        ))}
                        <div className="fixed-price-warning">
                            <div className="fixed-price-warning-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="12" fill="#485B85"/>
                                    <path d="M12 7V13M12 17H12.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="fixed-price-warning-text">
                                Откладывая визит к стоматологу сейчас, Вы усложняете, удлиняете и удорожаете стоимость лечения в будущем! Лечение кариеса на ранней стадии экономит Ваш бюджет в 5-10 раз!
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="fixed-price-consultation">
                    <div className="fixed-price-consultation-content">
                        <div className="fixed-price-consultation-doctor-image">
                            <img src={doctorImage} alt="Doctor" />
                        </div>
                        <div className="fixed-price-consultation-text-block">
                            <h2 className="fixed-price-consultation-title">
                                ЗАПИШИТЕСЬ НА КОНСУЛЬТАЦИЮ И ДИАГНОСТИКУ
                            </h2>
                            <p className="fixed-price-consultation-description">
                                На приёме врач не просто осмотрит зубы и покажет проблемные зоны, которых Вы не видите, но и составит понятный план лечения и даст экспертное заключение.
                            </p>
                        </div>
                        <button className="fixed-price-consultation-button fixed-price-consultation-btn-primary" onClick={handleClick}>
                            <span>ЗАПИСАТЬСЯ НА ПРИЁМ</span>
                            <div className="fixed-price-consultation-btn-icon">
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

export default FixedPrice;

