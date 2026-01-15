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
                        <div className="guarantees-small-title">
                            <div className="guarantees-small-title-bar"></div>
                            <span>Лечитесь без тревоги за будущее. Все наши гарантии — в договоре!</span>
                        </div>
                        <div className="guarantees-main-title">
                            Мы на стороне пациента! Поэтому все наши обязательства - не просто слова, а пункты договора, которые <span>защищают Ваши интересы!</span>
                        </div>
                        <div className="guarantees-description">
                            Мы уверены в качестве своей работы настолько, что даём официальные, юридически закреплённые гарантии. Ваша уверенность в завтрашнем дне - наш главный приоритет.
                        </div>
                    </div>
                    <div className="guarantees-right">
                        {guarantees.map((guarantee, index) => (
                            <div key={index} className="guarantees-item">
                                <div className="guarantees-item-content-wrapper">
                                    <div className="guarantees-item-icon">
                                        <svg width="47" height="55" viewBox="0 0 47 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.3936 0.808594C21.909 -0.269473 24.757 -0.269473 27.2725 0.808594L44.6465 8.25488C45.8718 8.78017 46.6659 9.98521 46.666 11.3184V28.8281C46.666 35.2871 43.5469 41.3493 38.291 45.1035L27.208 53.0195C24.89 54.6752 21.776 54.6752 19.458 53.0195L8.375 45.1035C3.11908 41.3493 0 35.2871 0 28.8281V11.3184C0.00015748 9.98521 0.794227 8.78017 2.01953 8.25488L19.3936 0.808594ZM35.415 16.5186C33.9776 15.3688 31.8805 15.6018 30.7305 17.0391L19.7236 30.7969L15.6904 26.7637C14.3887 25.4622 12.2773 25.4622 10.9756 26.7637C9.67391 28.0653 9.67406 30.1768 10.9756 31.4785L16.3262 36.8281C18.4334 38.9352 21.904 38.7429 23.7656 36.416L35.9355 21.2031C37.0853 19.7656 36.8525 17.6685 35.415 16.5186Z" fill="#2E3D58"/>
                                        </svg>
                                    </div>
                                    <div className="guarantees-item-text">
                                        <div className="guarantees-years">{guarantee.years}</div>
                                        <div className="guarantees-item-description">{guarantee.description}</div>
                                    </div>
                                </div>
                                <div className="guarantees-divider"></div>
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
                                <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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

