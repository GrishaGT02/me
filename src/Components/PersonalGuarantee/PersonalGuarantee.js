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
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4812 24.0625H7.5625C6.80311 24.0625 6.1875 23.4469 6.1875 22.6875V15.8125C6.1875 15.0531 6.80311 14.4375 7.5625 14.4375H11.4812C11.5952 14.4375 11.6875 14.5298 11.6875 14.6438V23.8562C11.6875 23.9702 11.5952 24.0625 11.4812 24.0625Z" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                    <path d="M11.6875 15.8125L14.2923 10.6028C14.3878 10.4119 14.4375 10.2014 14.4375 9.98791V7.5625C14.4375 6.80311 15.0531 6.1875 15.8125 6.1875C17.3313 6.1875 18.5625 7.41872 18.5625 8.9375V14.4375" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                    <path d="M15.8125 14.4375H24.0586C24.9751 14.4375 25.6351 15.3171 25.3788 16.197L22.976 24.447C22.805 25.0339 22.2671 25.4375 21.6558 25.4375H16.382C16.0174 25.4375 15.6676 25.2926 15.4098 25.0348L14.8402 24.4652C14.5824 24.2074 14.2326 24.0625 13.868 24.0625H11.6875" stroke="white" strokeWidth="1.375" strokeLinecap="round"/>
                </svg>
            ),
            title: 'Я гарантирую фиксированную цену, закреплённую в договоре.',
            description: 'Вы получаете детальный план лечения с точными ценами. Все обязательства фиксируются в договоре, никаких скрытых доплат или неожиданных расходов.'
        },
        {
            icon: (
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            Моя репутация и профессиональная честь — это не просто слова. Я лично контролирую каждый этап лечения и несу полную ответственность за результат. Для меня важно, чтобы каждый пациент получил качественное лечение и остался доволен результатом.
                        </div>
                        <a href="#" className="personal-guarantee-link" onClick={(e) => { e.preventDefault(); handleClick(); }}>
                            Написать письмо главному врачу &gt;&gt;
                        </a>
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
                            <div className="personal-guarantee-email-icon">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L8.10764 6.61227L8.10967 6.61396C8.78785 7.11128 9.12714 7.3601 9.49876 7.45621C9.82723 7.54117 10.1725 7.54117 10.501 7.45621C10.8729 7.36001 11.2132 7.11047 11.8926 6.61227C11.8926 6.61227 15.8101 3.60594 18 2M1 11.8002V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V11.8036C19 12.9215 19 13.4805 18.7822 13.9079C18.5905 14.2842 18.2837 14.5905 17.9074 14.7822C17.48 15 16.921 15 15.8031 15H4.19691C3.07899 15 2.5192 15 2.0918 14.7822C1.71547 14.5905 1.40973 14.2842 1.21799 13.9079C1 13.4801 1 12.9203 1 11.8002Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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

