import React from 'react';
import { useModal } from '../../context/ModalContext';
import doctorImage from '../../assec/dock.jpg';
import './PersonalGuarantee.css';

const PersonalGuarantee = () => {
    const { openModal } = useModal();

    const handleClick = () => {
        openModal();
    };

    const stats = [
        {
            value: '15 лет',
            label: 'опыт работы'
        },
        {
            value: '100+',
            label: 'операций'
        },
        {
            value: '10,000+',
            label: 'довольных клиентов'
        }
    ];

    const guarantees = [
        {
            icon: (
                <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4812 24.0625H7.5625C6.80311 24.0625 6.1875 23.4469 6.1875 22.6875V15.8125C6.1875 15.0531 6.80311 14.4375 7.5625 14.4375H11.4812C11.5952 14.4375 11.6875 14.5298 11.6875 14.6438V23.8562C11.6875 23.9702 11.5952 24.0625 11.4812 24.0625Z" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                    <path d="M11.6875 15.8125L14.2923 10.6028C14.3878 10.4119 14.4375 10.2014 14.4375 9.98791V7.5625C14.4375 6.80311 15.0531 6.1875 15.8125 6.1875C17.3313 6.1875 18.5625 7.41872 18.5625 8.9375V14.4375" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                    <path d="M15.8125 14.4375H24.0586C24.9751 14.4375 25.6351 15.3171 25.3788 16.197L22.976 24.447C22.805 25.0339 22.2671 25.4375 21.6558 25.4375H16.382C16.0174 25.4375 15.6676 25.2926 15.4098 25.0348L14.8402 24.4652C14.5824 24.2074 14.2326 24.0625 13.868 24.0625H11.6875" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                </svg>
            ),
            title: 'Вашим лечением занимаются только врачи, которых я лично отбирал.',
            description: 'Каждый специалист проходит строгий отбор по профессиональным и личным качествам. Я лично проверяю квалификацию, опыт и подход к работе каждого врача перед тем, как он начинает работать в клинике.'
        },
        {
            icon: (
                <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4812 24.0625H7.5625C6.80311 24.0625 6.1875 23.4469 6.1875 22.6875V15.8125C6.1875 15.0531 6.80311 14.4375 7.5625 14.4375H11.4812C11.5952 14.4375 11.6875 14.5298 11.6875 14.6438V23.8562C11.6875 23.9702 11.5952 24.0625 11.4812 24.0625Z" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                    <path d="M11.6875 15.8125L14.2923 10.6028C14.3878 10.4119 14.4375 10.2014 14.4375 9.98791V7.5625C14.4375 6.80311 15.0531 6.1875 15.8125 6.1875C17.3313 6.1875 18.5625 7.41872 18.5625 8.9375V14.4375" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                    <path d="M15.8125 14.4375H24.0586C24.9751 14.4375 25.6351 15.3171 25.3788 16.197L22.976 24.447C22.805 25.0339 22.2671 25.4375 21.6558 25.4375H16.382C16.0174 25.4375 15.6676 25.2926 15.4098 25.0348L14.8402 24.4652C14.5824 24.2074 14.2326 24.0625 13.868 24.0625H11.6875" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                </svg>
            ),
            title: 'Я гарантирую фиксированную цену, закреплённую в договоре.',
            description: 'Чтобы вы были спокойны за бюджет, мы составляем детальный план лечения и фиксируем окончательную стоимость до начала работ. Никаких скрытых доплат по нашей вине не будет.'
        },
        {
            icon: (
                <svg viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4812 24.0625H7.5625C6.80311 24.0625 6.1875 23.4469 6.1875 22.6875V15.8125C6.1875 15.0531 6.80311 14.4375 7.5625 14.4375H11.4812C11.5952 14.4375 11.6875 14.5298 11.6875 14.6438V23.8562C11.6875 23.9702 11.5952 24.0625 11.4812 24.0625Z" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                    <path d="M11.6875 15.8125L14.2923 10.6028C14.3878 10.4119 14.4375 10.2014 14.4375 9.98791V7.5625C14.4375 6.80311 15.0531 6.1875 15.8125 6.1875C17.3313 6.1875 18.5625 7.41872 18.5625 8.9375V14.4375" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                    <path d="M15.8125 14.4375H24.0586C24.9751 14.4375 25.6351 15.3171 25.3788 16.197L22.976 24.447C22.805 25.0339 22.2671 25.4375 21.6558 25.4375H16.382C16.0174 25.4375 15.6676 25.2926 15.4098 25.0348L14.8402 24.4652C14.5824 24.2074 14.2326 24.0625 13.868 24.0625H11.6875" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                </svg>
            ),
            title: 'Каждый сложный случай мы разбираем на врачебном консилиуме под моим контролем.',
            description: 'Для сложных случаев собирается врачебный консилиум. Я лично контролирую процесс принятия решений, чтобы обеспечить наилучший результат лечения.'
        }
    ];

    return (
        <div className="personal-guarantee">
            <div className="personal-guarantee-container">
                <div className="personal-guarantee-content">
                    {/* Левая секция */}
                    <div className="personal-guarantee-left">
                        <div className="personal-guarantee-name">
                            <div className="personal-guarantee-name-bar"></div>
                            <span>Киракосян Карен Егишевич</span>
                        </div>
                        <div className="personal-guarantee-title-wrapper">
                            <div className="personal-guarantee-title">
                                Я <span>ЛИЧНО ОТВЕЧАЮ</span> ЗА ВАШЕ ЗДОРОВЬЕ!
                            </div>
                        </div>
                        <div className="personal-guarantee-description">
                        Когда пациент доверяет нам своё здоровье -  он доверяет его лично мне. Я не просто управляю клиникой, я несу персональную ответственность за работу каждого специалиста и за результат, который Вы получите. Ваша  улыбка — это моя профессиональная репутация, которую я берегу больше всего.
                        </div>
                        <button className="personal-guarantee-button personal-guarantee-btn-primary" onClick={handleClick}>
                            <span>Напишите мне письмо</span>
                            <div className="personal-guarantee-btn-icon">
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                                </svg>
                            </div>
                        </button>
                        <div className="personal-guarantee-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="personal-guarantee-stat-item">
                                    <div className="personal-guarantee-stat-value">{stat.value}</div>
                                    <div className="personal-guarantee-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Средняя секция - фото врача */}
                    <div className="personal-guarantee-center">
                        <div className="personal-guarantee-doctor-image">
                            <img src={doctorImage} alt="Doctor" />
                            <div className="googing-play-button">
                                <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.14062 20.8873V4.2563C1.14062 2.88492 1.14062 2.19847 1.38456 1.79272C1.59747 1.43858 1.92563 1.20607 2.28995 1.15048C2.70722 1.08681 3.219 1.40972 4.2411 2.05461L17.4204 10.3701L17.4252 10.3726C18.5547 11.0853 19.1197 11.4418 19.3051 11.917C19.4668 12.3315 19.4668 12.81 19.3051 13.2245C19.1195 13.7003 18.5531 14.0583 17.4204 14.773L4.2411 23.0885C3.21827 23.7338 2.70737 24.0555 2.28995 23.9918C1.92563 23.9362 1.59747 23.7037 1.38456 23.3496C1.14062 22.9438 1.14062 22.2587 1.14062 20.8873Z" fill="#112F55" stroke="#112F55" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="skils-info-card">
                                <div className="skils-info-card-inner">
                                    <div className="skils-info-card-content">
                                        <p className="skils-info-card-text">Все мои профессиональные стремления всегда направлены на помощь пациентам!</p>
                                        <p className="skils-info-card-subtext">Главный врач клиники Mr.Doc Киракосян Карен Егишевич</p>
                                    </div>
                                    {/* <div className="skils-info-card-icon">
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="23.8828" cy="17.9121" r="7.96094" fill="white"/>
                                            <circle cx="33.8301" cy="17.9121" r="5.9707" fill="white"/>
                                            <circle cx="13.9316" cy="17.9121" r="5.9707" fill="white"/>
                                            <path d="M33.8369 25.873C38.7088 25.873 40.6607 30.7405 41.3936 33.667C41.6796 34.8092 40.7761 35.8242 39.5986 35.8242H34.9717C34.1694 32.8192 32.6184 29.4097 29.6172 27.4629C30.6957 26.5113 32.0747 25.8732 33.8369 25.873Z" fill="white"/>
                                            <path d="M13.9297 25.873C15.6923 25.8731 17.0708 26.512 18.1494 27.4639C15.1496 29.4109 13.599 32.8199 12.7969 35.8242H8.16797C6.9905 35.8242 6.08799 34.8092 6.37402 33.667C7.10694 30.7405 9.05789 25.873 13.9297 25.873Z" fill="white"/>
                                            <path d="M23.8887 27.8633C31.2698 27.8633 33.1761 34.433 33.6684 37.8265C33.8262 38.9143 32.9488 39.8047 31.8496 39.8047H15.9277C14.8286 39.8047 13.9511 38.9143 14.1089 37.8265C14.6013 34.433 16.5076 27.8633 23.8887 27.8633Z" fill="white"/>
                                        </svg>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правая секция - гарантии */}
                    <div className="personal-guarantee-right">
                        {guarantees.map((guarantee, index) => (
                            <div key={index} className="personal-guarantee-item">
                                <div className="personal-guarantee-item-icon">
                                    {guarantee.icon}
                                </div>
                                <div className="personal-guarantee-item-content">
                                    <div className="personal-guarantee-item-title">{guarantee.title}</div>
                                    <div className="personal-guarantee-item-description">{guarantee.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalGuarantee;

