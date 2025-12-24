import React from 'react';
import { useModal } from '../../context/ModalContext';
import doctorImage from '../../assec/dock.jpg';
import './Guarantees.css';

const Guarantees = () => {
    const { openModal } = useModal();

    const handleClick = () => {
        openModal();
    };

    const guarantees = [
        {
            years: '100 лет',
            description: 'Гарантия на импланты'
        },
        {
            years: '15 лет',
            description: 'Гарантия на коронки и протезы'
        },
        {
            years: '3 года',
            description: 'Гарантия на работу врача'
        }
    ];

    return (
        <div className="guarantees">
            <div className="guarantees-container">
                <div className="guarantees-top">
                    <div className="guarantees-left">
                        <div className="guarantees-small-title">Мы даём гарантии</div>
                        <div className="guarantees-main-title">
                            Мы на стороне пациента! Поэтому все наши обязательства - не просто слова, а пункты договора, которые <span>защищают Ваши интересы!</span>
                        </div>
                        <div className="guarantees-description">
                            Наша цель — сохранить ваши зубы. Применяем микроинвазивные технологии для максимально бережного лечения. Начните с бесплатной консультации и получите свой план лечения.
                        </div>
                    </div>
                    <div className="guarantees-right">
                        {guarantees.map((guarantee, index) => (
                            <div key={index} className="guarantees-item">
                                <div className="guarantees-years">{guarantee.years}</div>
                                <div className="guarantees-item-description">{guarantee.description}</div>
                                {index < guarantees.length - 1 && (
                                    <div className="guarantees-divider"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="guarantees-consultation">
                    <div className="guarantees-consultation-content">
                        <div className="guarantees-consultation-doctor-image">
                            <img src={doctorImage} alt="Doctor" />
                        </div>
                        <div className="guarantees-consultation-text-block">
                            <h2 className="guarantees-consultation-title">
                                ЗАПИШИТЕСЬ НА КОНСУЛЬТАЦИЮ И ДИАГНОСТИКУ
                            </h2>
                            <p className="guarantees-consultation-description">
                                На приёме врач не просто осмотрит зубы и покажет проблемные зоны, которых Вы не видите, но и составит понятный план лечения и даст экспертное заключение.
                            </p>
                        </div>
                        <button className="guarantees-consultation-button guarantees-consultation-btn-primary" onClick={handleClick}>
                            <span>ЗАПИСАТЬСЯ НА ПРИЁМ</span>
                            <div className="guarantees-consultation-btn-icon">
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

export default Guarantees;

