import React from 'react';
import { useModal } from '../../context/ModalContext';
import womanImage from '../../assec/postel.jpg';
import doctorsImage from '../../assec/ker1.jpg';
import './MedicatedSleep.css';

const MedicatedSleep = () => {
    const { openModal } = useModal();

    const handleClick = () => {
        openModal();
    };

    const cards = [
        {
            title: 'Экспертность врачей',
            description: 'Операцию проводят хирурги-имплантологи высшей категории, а седацию контролирует отдельный врач-анестезиолог. Ваше состояние отслеживается по всем параметрам.'
        },
        {
            title: 'Премиум-забота',
            description: 'После операции Вы отдыхаете в уютной палате под наблюдением. При необходимости организуем комфортный трансфер домой.'
        },
        {
            title: 'Современное оборудование',
            description: 'Мы проводим операции в специально оборудованной хирургии. Наше оборудование Sirona (Германия) соответствует самым строгим стандартам.'
        },
        {
            title: 'Лечение за один визит',
            description: 'Седация позволяет провести объемное лечение - имплантацию, удаление, лечение каналов - за одну процедуру. Вы экономите время, избегаете многократных стрессовых визитов и сразу получаете готовый результат.'
        }
    ];

    return (
        <div className="medicated-sleep">
            <div className="medicated-sleep-container">
                <div className="medicated-sleep-header">
                    <div className="medicated-sleep-title">
                        ЛЕЧЕНИЕ И ИМПЛАНТАЦИЯ ЗУБОВ В МЕДИКАМЕНТОЗНОМ СНЕ – <span>ЗАБУДЬТЕ О СТРАХЕ И БОЛИ НАВСЕГДА!</span>
                    </div>
                    <div className="medicated-sleep-description">
                        Для многих сама мысль о стоматологическом лечении вызывает панику. Мы предлагаем цивилизованное решение — лечение под седацией (во сне). Это не просто отсутствие боли, это полное отсутствие любых неприятных воспоминаний о визите к врачу. Идеально для сложных операций, длительного лечения или непреодолимого страха.
                    </div>
                </div>
                
                <div className="medicated-sleep-content">
                    <div className="medicated-sleep-cards-left">
                        {cards.slice(0, 2).map((card, index) => (
                            <div key={index} className="medicated-sleep-card">
                                <div className="medicated-sleep-card-icon">
                                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="13.4739" height="13.4739" rx="6.73693" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 32.0005)" fill="#2E3D58" fillOpacity="0.7"/>
                                        <rect width="13.4739" height="13.4739" rx="6.73693" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18.5234 13.4736)" fill="#2E3D58" fillOpacity="0.7"/>
                                        <rect width="13.4739" height="13.4739" rx="6.73693" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18.5234 32.0005)" fill="#2E3D58"/>
                                    </svg>
                                </div>
                                <div className="medicated-sleep-card-content">
                                    <div className="medicated-sleep-card-title">{card.title}</div>
                                    <div className="medicated-sleep-card-description">{card.description}</div>
                                </div>
                                <div className="medicated-sleep-card-arrow">
                                    <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.5 13.0605L32.5607 14.1212L33.6213 13.0605L32.5607 11.9999L31.5 13.0605ZM1.5 11.5605C0.671571 11.5605 -2.6932e-06 12.2321 -2.76562e-06 13.0605C-2.83805e-06 13.889 0.671571 14.5605 1.5 14.5605L1.5 13.0605L1.5 11.5605ZM19.5 25.0605L20.5607 26.1212L32.5607 14.1212L31.5 13.0605L30.4393 11.9999L18.4393 23.9999L19.5 25.0605ZM31.5 13.0605L32.5607 11.9999L20.5607 -0.00011349L19.5 1.06055L18.4393 2.12121L30.4393 14.1212L31.5 13.0605ZM31.5 13.0605L31.5 11.5605L1.5 11.5605L1.5 13.0605L1.5 14.5605L31.5 14.5605L31.5 13.0605Z" fill="#485B85"/>
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="medicated-sleep-center-image">
                        <img src={womanImage} alt="Woman" />
                    </div>
                    
                    <div className="medicated-sleep-cards-right">
                        {cards.slice(2, 4).map((card, index) => (
                            <div key={index} className="medicated-sleep-card">
                                <div className="medicated-sleep-card-icon">
                                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="13.4739" height="13.4739" rx="6.73693" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 32.0005)" fill="#2E3D58" fillOpacity="0.7"/>
                                        <rect width="13.4739" height="13.4739" rx="6.73693" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18.5234 13.4736)" fill="#2E3D58" fillOpacity="0.7"/>
                                        <rect width="13.4739" height="13.4739" rx="6.73693" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18.5234 32.0005)" fill="#2E3D58"/>
                                    </svg>
                                </div>
                                <div className="medicated-sleep-card-content">
                                    <div className="medicated-sleep-card-title">{card.title}</div>
                                    <div className="medicated-sleep-card-description">{card.description}</div>
                                </div>
                                <div className="medicated-sleep-card-arrow">
                                    <svg viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.5 13.0605L32.5607 14.1212L33.6213 13.0605L32.5607 11.9999L31.5 13.0605ZM1.5 11.5605C0.671571 11.5605 -2.6932e-06 12.2321 -2.76562e-06 13.0605C-2.83805e-06 13.889 0.671571 14.5605 1.5 14.5605L1.5 13.0605L1.5 11.5605ZM19.5 25.0605L20.5607 26.1212L32.5607 14.1212L31.5 13.0605L30.4393 11.9999L18.4393 23.9999L19.5 25.0605ZM31.5 13.0605L32.5607 11.9999L20.5607 -0.00011349L19.5 1.06055L18.4393 2.12121L30.4393 14.1212L31.5 13.0605ZM31.5 13.0605L31.5 11.5605L1.5 11.5605L1.5 13.0605L1.5 14.5605L31.5 14.5605L31.5 13.0605Z" fill="#485B85"/>
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="medicated-sleep-consultation">
                    <div className="medicated-sleep-consultation-content">
                        <div className="medicated-sleep-consultation-text-block">
                            <h2 className="medicated-sleep-consultation-title">
                                Готовы лечить зубы по-новому?
                            </h2>
                            <p className="medicated-sleep-consultation-description">
                                Запишитесь на консультацию к хирургу-имплантологу. Врач изучит Ваш случай, ответит на вопросы и определит показания к лечению во сне.
                            </p>
                        </div>
                        <button className="medicated-sleep-consultation-button medicated-sleep-consultation-btn-primary" onClick={handleClick}>
                            <span>Бесплатная консультация</span>
                            <div className="medicated-sleep-consultation-btn-icon">
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                                </svg>
                            </div>
                        </button>
                        <div className="medicated-sleep-consultation-doctors-image">
                            <img src={doctorsImage} alt="Doctors" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicatedSleep;
