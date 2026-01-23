import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assec/f75f26dc6cd4ff859268de37e425468cec2292a4.png';
import metro from '../../assec/metro.png';
import profil from '../../assec/profil.jpg';
import slaiderHeader from '../../assec/slaider_header.jpg';
import yandexIcon from '../../assec/iandex.png';
import gisIcon from '../../assec/gis.png';
import zoonIcon from '../../assec/zoon.png';
import dockImage from '../../assec/dock.jpg';
import './Header.css';

const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(1); // Начинаем с 1, так как 0 - это дублированный последний слайд
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const slides = [slaiderHeader, slaiderHeader, slaiderHeader, slaiderHeader];
    // Дублируем последний слайд в начало и первый в конец для бесконечного эффекта
    const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
    const carouselRef = useRef(null);
    const headerContainerRef = useRef(null);
    const headerNavContainerRef = useRef(null);
    const headerTopRowRef = useRef(null);
    const stickyAnchorRef = useRef(null);
    const stickyContentRef = useRef(null);
    const [isStickyFixed, setIsStickyFixed] = useState(false);

    // Реальный индекс для отображения (0-3)
    const realIndex = currentSlide === 0 ? slides.length - 1 : (currentSlide === extendedSlides.length - 1 ? 0 : currentSlide - 1);

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
        if (isPaused) return; // Не запускаем интервал, если карусель на паузе
        
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

    useEffect(() => {
        const onScroll = () => {
            if (!stickyAnchorRef.current || !stickyContentRef.current) return;
            
            const anchorRect = stickyAnchorRef.current.getBoundingClientRect();
            
            // Проверяем, когда anchor достигает верха экрана
            if (anchorRect.top <= 0) {
                if (!isStickyFixed) {
                    const contentHeight = stickyContentRef.current.offsetHeight;
                    stickyAnchorRef.current.style.height = `${contentHeight}px`;
                    setIsStickyFixed(true);
                }
            } else {
                if (isStickyFixed) {
                    stickyAnchorRef.current.style.height = '0px';
                    setIsStickyFixed(false);
                }
            }
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onScroll);
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [isStickyFixed]);


    return (
        <div className="header">
            <div className="header-container" ref={headerContainerRef}>
                <div className="header-top-row" ref={headerTopRowRef}>
                <div className="header-logo">
                    <img src={logo} alt="logo" />
                </div>
                
                <div className="header-clinic-info">
                    <div className="header-clinic-text">Современная стоматологическая <br/> клиника в Рассказовке</div>
                </div>
                
                <div className="header-location">
                    <div className="header-metro-icon">
                        <img src={metro} alt="metro" />
                    </div>
                    <div className="header-address">
                        <div className="header-metro-text">2 мин от м.Рассказовка</div>
                        <div className="header-street">ул. Анны Ахматовой 11 корп. 1</div>
                    </div>
                </div>
                
                <div className="header-calculator-btn">
                    <span>Калькулятор стоимости лечения</span>
                    <div className="header-calculator-btn-icon">
                            <svg viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.97601 1.71526L11.1234 1.81565L11.2238 0.668218L10.0764 0.56783L9.97601 1.71526ZM0.412221 8.23665C-0.0750831 8.64554 -0.138645 9.37206 0.270252 9.85936C0.679148 10.3467 1.40566 10.4102 1.89297 10.0013L1.15259 9.11899L0.412221 8.23665ZM9.40813 8.20612L10.5556 8.30651L11.1234 1.81565L9.97601 1.71526L8.82858 1.61488L8.2607 8.10573L9.40813 8.20612ZM9.97601 1.71526L10.0764 0.56783L3.58554 -4.58476e-05L3.48515 1.14739L3.38477 2.29482L9.87562 2.86269L9.97601 1.71526ZM9.97601 1.71526L9.23564 0.832921L0.412221 8.23665L1.15259 9.11899L1.89297 10.0013L10.7164 2.5976L9.97601 1.71526Z"/>
                        </svg>
                    </div>
                </div>
                
                <div className="header-contact-wrapper">
                    <div className="header-phone-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.03405 1.04936L2.74416 0.339263C3.19634 -0.112923 3.92948 -0.112924 4.38167 0.339262L7.37574 3.33333C7.82792 3.78552 7.82792 4.51866 7.37574 4.97084L5.30031 7.04627C4.95424 7.39234 4.86844 7.92104 5.08732 8.35879C6.35261 10.8894 8.40456 12.9413 10.9352 14.2066C11.3729 14.4255 11.9016 14.3397 12.2477 13.9936L14.3231 11.9182C14.7753 11.466 15.5084 11.466 15.9606 11.9182L18.9547 14.9123C19.4069 15.3645 19.4069 16.0976 18.9547 16.5498L18.2446 17.2599C15.7999 19.7046 11.9295 19.9797 9.16363 17.9053L7.76441 16.8558C5.74559 15.3417 3.95222 13.5484 2.4381 11.5295L1.38869 10.1303C-0.685727 7.36443 -0.410668 3.49409 2.03405 1.04936Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="header-contact-block">
                        <div className="header-phone-info">
                            <div className="header-phone-number">+7 (499) 704-46-75</div>
                            <div className="header-phone-hours">Ежедневно с 9:00 до 21:00</div>
                        </div>
                        <div className="header-avatar">
                            <img src={profil} alt="profile" />
                        </div>
                    </div>
                    <div className="header-menu-btn">
                        <span>Меню</span>
                        <div className="header-menu-icons">
                            <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="30" height="5" fill="white"/>
                                <rect className="header-menu-bottom-line" x="5" y="10" width="25" height="5" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                </div>
                <div className="header-nav-wrapper">
                    <div className="header-nav-anchor" ref={stickyAnchorRef}></div>
                    <nav className={`header-nav ${isStickyFixed ? 'fixed' : ''}`} ref={stickyContentRef}>
                        <div style={{ }} className="header-nav-container" ref={headerNavContainerRef}>
                        <a href="#services" className="header-nav-item">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3359 11.6084C23.3359 18.0517 18.1123 23.2754 11.6689 23.2754C5.22562 23.2754 0.00195234 18.0517 0.00195262 11.6084C0.00195309 5.55896 4.6066 0.585524 10.502 -5.60989e-07L10.502 11.125L6.66016 7.2832L5.01074 8.93262L10.8437 14.7666L11.6689 15.5918L12.4932 14.7666L18.3271 8.93262L17.502 8.1084L16.6768 7.2832L12.835 11.125L12.835 -4.59012e-07C18.7308 0.585077 23.3359 5.55863 23.3359 11.6084Z" fill="#485B85"/>
                            </svg>
                            <span>Услуги</span>
                        </a>
                        <a href="#about" className="header-nav-item">О клинике</a>
                        <a href="#doctors" className="header-nav-item">Врачи</a>
                        <a href="#promotions" className="header-nav-item">Акции</a>
                        <a href="#portfolio" className="header-nav-item">Портфолио</a>
                        <a href="#prices" className="header-nav-item">Цены</a>
                        <a href="#articles" className="header-nav-item">Полезные статьи</a>
                        <a href="#reviews" className="header-nav-item">
                            <span>Отзывы</span>
                            <span className="header-nav-badge">100+</span>
                        </a>
                        <a href="#contacts" className="header-nav-item">Контакты</a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="header_nuv">
                <div className="header_nuv-left">
                    <div className="header_nuv-left-text">Ваша <span>идеальная улыбка</span> и здоровые зубы в рассказовке</div>
                    <div className="header_nuv-left-text-description">Лечение зубов без боли и стресса! Это возможно! Мы используем самые современные методы, которые делают лечение по-настоящему комфортным.</div>
                    <div className="header_nuv-left-buttons">
                        <button className="header_nuv-btn header_nuv-btn-secondary">
                            ПОДРОБНЕЕ
                        </button>
                        <button className="header_nuv-btn-1 header_nuv-btn-primary">
                            <span>ЗАПИСАТЬСЯ НА ПРИЁМ</span>
                            <div className="header_nuv-btn-icon">
                                <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="header_nuv-left-about">
                        <div className="header_nuv-tooth-icon">
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.41406 11.1177C8.64936 11.1177 9.47289 13.5883 10.2964 13.5883C11.9435 13.5883 14.4141 6.58834 14.4141 3.29422C14.4141 1.71414 13.1788 0.411865 11.5317 0.411865C9.88465 0.411865 8.64936 2.05892 7.41406 2.05892C6.17877 2.05892 4.94347 0.411865 3.29642 0.411865C1.64936 0.411865 0.414062 1.64716 0.414062 3.29422C0.414062 6.58834 2.88465 13.5883 4.53171 13.5883C5.35524 13.5883 6.17877 11.1177 7.41406 11.1177Z" stroke="white" strokeWidth="0.823529"/>
                            </svg>
                        </div>
                        <div className="header_nuv-about-text">О нашей клинике</div>
                    </div>
                    
                    <div className="header-center-card">
                        <div className="header-center-item">
                            <div className="header-center-icon">
                                <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 5.29224)" fill="#191919" fillOpacity="0.7"/>
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 12.5688)" fill="#191919"/>
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 7.27344 12.5688)" fill="#191919" fillOpacity="0.7"/>
                                </svg>
                            </div>
                            <div className="header-center-content">
                                <div className="header-center-title">Точный рассчет</div>
                                <div className="header-center-description">стоимости до начала лечения!</div>
                            </div>
                            <div className="header-center-arrow">
                                <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8318 1.98856L17.7994 2.07321L17.8841 1.1056L16.9165 1.02095L16.8318 1.98856ZM0.343894 14.5556C-0.067041 14.9004 -0.120641 15.5131 0.224175 15.924C0.56899 16.3349 1.18165 16.3886 1.59258 16.0437L0.968238 15.2997L0.343894 14.5556ZM15.8108 13.6584L16.7784 13.7431L17.7994 2.07321L16.8318 1.98856L15.8642 1.9039L14.8432 13.5738L15.8108 13.6584ZM16.8318 1.98856L16.9165 1.02095L5.24659 -3.36673e-05L5.16193 0.967577L5.07728 1.93519L16.7472 2.95617L16.8318 1.98856ZM16.8318 1.98856L16.2075 1.24449L0.343894 14.5556L0.968238 15.2997L1.59258 16.0437L17.4561 2.73262L16.8318 1.98856Z" fill="#33363F"/>
                                </svg>
                            </div>
                        </div>
                        <div className="header-center-divider"></div>
                        <div className="header-center-item">
                            <div className="header-center-icon">
                                <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 5.29224)" fill="#191919" fillOpacity="0.7"/>
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 12.5688)" fill="#191919"/>
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 7.27344 12.5688)" fill="#191919" fillOpacity="0.7"/>
                                </svg>
                            </div>
                            <div className="header-center-content">
                                <div className="header-center-title">Гарантия</div>
                                <div className="header-center-description">на лечение до 10 лет.</div>
                            </div>
                            <div className="header-center-arrow">
                                <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8318 1.98856L17.7994 2.07321L17.8841 1.1056L16.9165 1.02095L16.8318 1.98856ZM0.343894 14.5556C-0.067041 14.9004 -0.120641 15.5131 0.224175 15.924C0.56899 16.3349 1.18165 16.3886 1.59258 16.0437L0.968238 15.2997L0.343894 14.5556ZM15.8108 13.6584L16.7784 13.7431L17.7994 2.07321L16.8318 1.98856L15.8642 1.9039L14.8432 13.5738L15.8108 13.6584ZM16.8318 1.98856L16.9165 1.02095L5.24659 -3.36673e-05L5.16193 0.967577L5.07728 1.93519L16.7472 2.95617L16.8318 1.98856ZM16.8318 1.98856L16.2075 1.24449L0.343894 14.5556L0.968238 15.2997L1.59258 16.0437L17.4561 2.73262L16.8318 1.98856Z" fill="#33363F"/>
                                </svg>
                            </div>
                        </div>
                        <div className="header-center-divider"></div>
                        <div className="header-center-item">
                            <div className="header-center-icon">
                                <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 5.29224)" fill="#191919" fillOpacity="0.7"/>
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 12.5688)" fill="#191919"/>
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 7.27344 12.5688)" fill="#191919" fillOpacity="0.7"/>
                                </svg>
                            </div>
                            <div className="header-center-content">
                                <div className="header-center-title">Рассрочка без переплат</div>
                                <div className="header-center-description">Лечитесь сейчас, платите потом!</div>
                            </div>
                            <div className="header-center-arrow">
                                <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8318 1.98856L17.7994 2.07321L17.8841 1.1056L16.9165 1.02095L16.8318 1.98856ZM0.343894 14.5556C-0.067041 14.9004 -0.120641 15.5131 0.224175 15.924C0.56899 16.3349 1.18165 16.3886 1.59258 16.0437L0.968238 15.2997L0.343894 14.5556ZM15.8108 13.6584L16.7784 13.7431L17.7994 2.07321L16.8318 1.98856L15.8642 1.9039L14.8432 13.5738L15.8108 13.6584ZM16.8318 1.98856L16.9165 1.02095L5.24659 -3.36673e-05L5.16193 0.967577L5.07728 1.93519L16.7472 2.95617L16.8318 1.98856ZM16.8318 1.98856L16.2075 1.24449L0.343894 14.5556L0.968238 15.2997L1.59258 16.0437L17.4561 2.73262L16.8318 1.98856Z" fill="#33363F"/>
                                </svg>
                            </div>
                        </div>
                        <div className="header-center-divider"></div>
                        <div className="header-center-item">
                            <div className="header-center-icon">
                                <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 5.29224)" fill="#191919" fillOpacity="0.7"/>
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 12.5688)" fill="#191919"/>
                                    <rect width="5.29213" height="5.29213" rx="2.64606" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 7.27344 12.5688)" fill="#191919" fillOpacity="0.7"/>
                                </svg>
                            </div>
                            <div className="header-center-content">
                                <div className="header-center-title">Лечение во сне</div>
                                <div className="header-center-description">Уснете с больным зубом, проснетесь со здоровым.</div>
                            </div>
                            <div className="header-center-arrow">
                                <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8318 1.98856L17.7994 2.07321L17.8841 1.1056L16.9165 1.02095L16.8318 1.98856ZM0.343894 14.5556C-0.067041 14.9004 -0.120641 15.5131 0.224175 15.924C0.56899 16.3349 1.18165 16.3886 1.59258 16.0437L0.968238 15.2997L0.343894 14.5556ZM15.8108 13.6584L16.7784 13.7431L17.7994 2.07321L16.8318 1.98856L15.8642 1.9039L14.8432 13.5738L15.8108 13.6584ZM16.8318 1.98856L16.9165 1.02095L5.24659 -3.36673e-05L5.16193 0.967577L5.07728 1.93519L16.7472 2.95617L16.8318 1.98856ZM16.8318 1.98856L16.2075 1.24449L0.343894 14.5556L0.968238 15.2997L1.59258 16.0437L17.4561 2.73262L16.8318 1.98856Z" fill="#33363F"/>
                                </svg>
                            </div>
                        </div>
                        <div className="header-center-divider"></div>
                    </div>
                
                <div className="header_nuv-right">
                    <div 
                        className="header_nuv-carousel-wrapper"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div 
                            className="header_nuv-carousel" 
                            ref={carouselRef}
                            onMouseDown={handleMouseDown}
                        >
                            <div 
                                className="header_nuv-carousel-slides" 
                                style={{ 
                                    transform: `translateX(-${currentSlide * 100}%)`,
                                    transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                }}
                            >
                                {extendedSlides.map((slide, index) => (
                                    <div key={index} className="header_nuv-carousel-slide">
                                        <img src={slide} alt={`Slide ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="header_nuv-carousel-dots-wrapper">
                            <div className="header_nuv-carousel-dots">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`header_nuv-carousel-dot ${realIndex === index ? 'active' : ''}`}
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
                <div className="header_nuv-ratings">
                    <div className="header_nuv-rating-card">
                        <img src={yandexIcon} alt="Яндекс Карты" className="header_nuv-rating-icon" />
                        <div className="header_nuv-rating-content">
                            {/* <div className="header_nuv-rating-title">Яндекс Карты</div> */}
                            <div className="header_nuv-rating-stars">
                                <span className="header_nuv-rating-value">5.0</span>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="header_nuv-rating-card">
                        <img src={gisIcon} alt="2ГИС" className="header_nuv-rating-icon" />
                        <div className="header_nuv-rating-content">
                            {/* <div className="header_nuv-rating-title">2ГИС</div> */}
                            <div className="header_nuv-rating-stars">
                                <span className="header_nuv-rating-value">5.0</span>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="header_nuv-rating-card">
                        <img className="header_nuv-rating-icon" src={zoonIcon} alt="ZOON" />
                        <div className="header_nuv-rating-content">
                            <div className="header_nuv-rating-title" style={{display: 'none'}}>ZOON</div>
                            <div className="header_nuv-rating-stars">
                                <span className="header_nuv-rating-value">4.9</span>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.76935 2.9415C7.55595 0.980499 7.94925 0 8.62558 0C9.30191 0 9.69521 0.9805 10.4818 2.9415L10.5184 3.03281C10.9628 4.14068 11.185 4.69462 11.6379 5.0313C12.0907 5.36799 12.6852 5.42123 13.8741 5.52771L14.089 5.54696C16.0349 5.72122 17.0078 5.80835 17.2159 6.42734C17.4241 7.04632 16.7016 7.70366 15.2566 9.01835L14.7743 9.45713C14.0428 10.1226 13.677 10.4554 13.5065 10.8915C13.4747 10.9729 13.4483 11.0562 13.4274 11.141C13.3153 11.5957 13.4225 12.0784 13.6367 13.0439L13.7033 13.3444C14.097 15.1188 14.2938 16.0059 13.9502 16.3886C13.8217 16.5316 13.6548 16.6345 13.4694 16.6851C12.9732 16.8205 12.2687 16.2465 10.8598 15.0984C9.93461 14.3445 9.47203 13.9676 8.94093 13.8828C8.73202 13.8494 8.51914 13.8494 8.31024 13.8828C7.77913 13.9676 7.31655 14.3445 6.39138 15.0984C4.98242 16.2465 4.27795 16.8205 3.78175 16.6851C3.59633 16.6345 3.42942 16.5316 3.301 16.3886C2.95732 16.0059 3.15415 15.1188 3.54783 13.3444L3.6145 13.0439C3.82871 12.0784 3.93582 11.5957 3.82376 11.141C3.80286 11.0562 3.77642 10.9729 3.74462 10.8915C3.57415 10.4554 3.2084 10.1226 2.47689 9.45713L1.99461 9.01835C0.549564 7.70366 -0.172958 7.04632 0.0352208 6.42734C0.243399 5.80835 1.21631 5.72122 3.16212 5.54696L3.37706 5.52771C4.56597 5.42123 5.16043 5.36799 5.61328 5.0313C6.06613 4.69462 6.28833 4.14068 6.73272 3.03281L6.76935 2.9415Z" fill="#FEC850"/>
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="header_nuv-ratings-nav">
                        <div className="header_nuv-ratings-counter">{realIndex + 1}/{slides.length}</div>
                        <button 
                            className="header_nuv-nav-btn" 
                            onClick={goToPrevSlide}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <svg className="header_nuv-nav-progress" width="60" height="60" viewBox="0 0 60 60">
                                <circle
                                    cx="30"
                                    cy="30"
                                    r="29"
                                    fill="none"
                                    stroke="#E0E0E0"
                                    strokeWidth="1"
                                />
                            </svg>
                            <svg className="header_nuv-nav-arrow" width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.9375 1.06055L2.9375 7.06055L8.9375 13.0605" stroke="#1A1A1A" strokeOpacity="0.75" strokeWidth="3"/>
                            </svg>
                        </button>
                        <button 
                            className="header_nuv-nav-btn" 
                            onClick={goToNextSlide}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <svg className="header_nuv-nav-progress" width="60" height="60" viewBox="0 0 60 60">
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
                                    strokeDashoffset={`${2 * Math.PI * 29 * (1 - (realIndex + 1) / slides.length)}`}
                                    strokeLinecap="round"
                                    transform="rotate(-90 30 30)"
                                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                                />
                            </svg>
                            <svg className="header_nuv-nav-arrow" width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.0625 13.0605L7.0625 7.06055L1.0625 1.06055" stroke="#1A1A1A" strokeOpacity="0.75" strokeWidth="3"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
                <div>
                    <div className="header_nuv-doctor-image">
                        <img src={dockImage} alt="Doctor" />
                    </div>
                </div>
            </div>
            <div className="header-phone-icon-fixed">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.03405 1.04936L2.74416 0.339263C3.19634 -0.112923 3.92948 -0.112924 4.38167 0.339262L7.37574 3.33333C7.82792 3.78552 7.82792 4.51866 7.37574 4.97084L5.30031 7.04627C4.95424 7.39234 4.86844 7.92104 5.08732 8.35879C6.35261 10.8894 8.40456 12.9413 10.9352 14.2066C11.3729 14.4255 11.9016 14.3397 12.2477 13.9936L14.3231 11.9182C14.7753 11.466 15.5084 11.466 15.9606 11.9182L18.9547 14.9123C19.4069 15.3645 19.4069 16.0976 18.9547 16.5498L18.2446 17.2599C15.7999 19.7046 11.9295 19.9797 9.16363 17.9053L7.76441 16.8558C5.74559 15.3417 3.95222 13.5484 2.4381 11.5295L1.38869 10.1303C-0.685727 7.36443 -0.410668 3.49409 2.03405 1.04936Z" fill="white"/>
                </svg>
            </div>
        </div>
    );
};

export default Header;