import React, { useState, useEffect, useRef } from 'react';
import './TreatmentWarning.css';
import treatmentImage from '../../assec/block5.png';

const TreatmentWarning = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const slides = [treatmentImage, treatmentImage, treatmentImage, treatmentImage];
    const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
    const carouselRef = useRef(null);

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
    }, [isPaused, extendedSlides.length]);

    const reasons = [
        {
            id: 1,
            number: '01',
            title: 'Кариес',
            description: 'за 6-12 месяцев может из маленького пятна превратиться в пульпит, требующий срочного и сложного лечения корневых каналов.'
        },
        {
            id: 2,
            number: '02',
            title: 'Воспаление дёсен (гингивит)',
            description: 'в 90% случаев без лечения переходит в пародонтит, который приводит к подвижности и потере даже здоровых зубов.'
        },
        {
            id: 3,
            number: '03',
            title: 'Боль — это уже сигнал SOS.',
            description: 'Если зуб начал болеть, процесс зашёл далеко. Лечение на ранней стадии почти всегда проще, дешевле и безболезненнее.'
        }
    ];

    return (
        <div className="treatment-warning-container">
            <div className="treatment-warning-content">
                <div className="treatment-warning-main">
                    <div className="treatment-warning-left">
                        <h2 className="treatment-warning-title">
                            ПОЧЕМУ ЛЕЧЕНИЕ ЗУБОВ <span className="treatment-warning-title-highlight">НЕЛЬЗЯ ОТКЛАДЫВАТЬ</span>
                        </h2>
                        <p className="treatment-warning-intro">
                            Кариес и воспаление не останавливаются сами. Без лечения инфекция проникает глубже, разрушает зуб изнутри и может привести к его потере. <span className="treatment-warning-intro-highlight">Простая диагностика сейчас спасёт от сложного и дорогого лечения позже.</span>
                        </p>
                        <div 
                            className="treatment-warning-carousel-wrapper"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div className="treatment-warning-carousel" ref={carouselRef} onMouseDown={handleMouseDown}>
                                <div 
                                    className="treatment-warning-carousel-slides" 
                                    style={{ 
                                        transform: `translateX(-${currentSlide * 100}%)`,
                                        transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                    }}
                                >
                                    {extendedSlides.map((slide, index) => (
                                        <div key={index} className="treatment-warning-carousel-slide">
                                            <img src={slide} alt={`Slide ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="treatment-warning-carousel-dots-wrapper">
                                <div className="treatment-warning-carousel-dots">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`treatment-warning-carousel-dot ${realIndex === index ? 'active' : ''}`}
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

                    <div className="treatment-warning-right">
                        <div className="treatment-warning-reasons-list">
                            {reasons.map((reason, index) => (
                                <div key={reason.id} className="treatment-warning-reason-item">
                                    <div className="treatment-warning-reason-number-wrapper">
                                        <div className="treatment-warning-reason-number">{reason.number}</div>
                                        <div className="treatment-warning-reason-connector"></div>
                                    </div>
                                    <div className="treatment-warning-reason-content">
                                        <h3 className="treatment-warning-reason-title">{reason.title}</h3>
                                        <p className="treatment-warning-reason-description">
                                            {reason.id === 2 ? (
                                                <>
                                                    <strong>в 90% случаев</strong> без лечения переходит в пародонтит, который приводит к подвижности и потере даже здоровых зубов.
                                                </>
                                            ) : (
                                                reason.description
                                            )}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="treatment-warning-tip">
                            <div className="treatment-warning-tip-icon">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.5" cy="7.5" r="7.5" fill="#485B85"/>
                                    <g className="treatment-warning-exclamation-mark">
                                        <path d="M5.71837 4.89457C5.36034 3.70112 6.254 2.5 7.5 2.5C8.746 2.5 9.63966 3.70112 9.28163 4.89457L8.30459 8.15136C8.27775 8.24085 8.26432 8.28559 8.2475 8.32426C8.14711 8.55499 7.93186 8.71515 7.68201 8.745C7.64015 8.75 7.59343 8.75 7.5 8.75C7.40657 8.75 7.35985 8.75 7.31798 8.745C7.06814 8.71515 6.85289 8.55499 6.7525 8.32426C6.73568 8.28559 6.72225 8.24085 6.69541 8.15136L5.71837 4.89457Z" fill="white" stroke="white" strokeWidth="1.41667"/>
                                        <circle cx="7.5" cy="11.875" r="1.25" fill="white" stroke="white" strokeWidth="1.41667"/>
                                    </g>
                                </svg>
                            </div>
                            <p className="treatment-warning-tip-text">
                                Откладывая визит к стоматологу сейчас, Вы усложняете, удлиняете и удорожаете стоимость лечения в будущем! <strong>Лечение кариеса на ранней стадии экономит Ваш бюджет в 5-10 раз!</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentWarning;

