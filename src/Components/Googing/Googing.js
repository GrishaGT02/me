import React, { useState } from 'react';
import doctorImage from '../../assec/block33.jpg';
import PrivacyModal from '../PrivacyModal/PrivacyModal';
import './Googing.css';

const Googing = () => {
    const [consent, setConsent] = useState(false);
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);
    const [showPolicyModal, setShowPolicyModal] = useState(false);

    return (
        <div className="googing">
            <div className="googing-container">
                <div className="googing-header">
                    <div className="googing-title">
                        ВЕРНЁМ ЗДОРОВЬЕ ЗУБОВ <span>ДАЖЕ В САМЫХ СЛОЖНЫХ СЛУЧАЯХ!</span>
                    </div>
                    <div className="googing-description">
                        По опыту можем сказать, что даже самая сложная проблема имеет решение - и мы его найдем! Наша команда специалистов под руководством главного врача находит решения там, где опускают руки другие.
                    </div>
                </div>
                <div className="googing-content">
                    <div className="googing-left">
                        <div className="googing-doctor-image">
                            <img src={doctorImage} alt="Киракосян Карен Егишевич" />
                            <div className="googing-play-button">
                                <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.14062 20.8873V4.2563C1.14062 2.88492 1.14062 2.19847 1.38456 1.79272C1.59747 1.43858 1.92563 1.20607 2.28995 1.15048C2.70722 1.08681 3.219 1.40972 4.2411 2.05461L17.4204 10.3701L17.4252 10.3726C18.5547 11.0853 19.1197 11.4418 19.3051 11.917C19.4668 12.3315 19.4668 12.81 19.3051 13.2245C19.1195 13.7003 18.5531 14.0583 17.4204 14.773L4.2411 23.0885C3.21827 23.7338 2.70737 24.0555 2.28995 23.9918C1.92563 23.9362 1.59747 23.7037 1.38456 23.3496C1.14062 22.9438 1.14062 22.2587 1.14062 20.8873Z" fill="#112F55" stroke="#112F55" strokeWidth="2.28571" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="googing-doctor-info">
                            <div className="googing-doctor-info-card">
                                <div>
                                    <div className="googing-doctor-name">Киракосян Карен Егишевич</div>
                                    <div className="googing-doctor-title">Основатель, главный врач, хирург, имплантолог</div>
                                </div>
                                <div className="googing-doctor-contact">
                                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.4824 5.18945C22.4989 5.86303 22.5 6.6277 22.5 7.5V10C22.5 13.5355 22.4997 15.303 21.4014 16.4014C20.303 17.4997 18.5355 17.5 15 17.5H7.5C3.96447 17.5 2.19698 17.4997 1.09863 16.4014C0.00028325 15.303 0 13.5355 0 10V7.5C0 6.62771 0.000106283 5.86303 0.0166016 5.18945L10.0361 10.7559C10.791 11.1751 11.709 11.1751 12.4639 10.7559L22.4824 5.18945ZM15 0C18.5355 0 20.303 0.000283242 21.4014 1.09863C21.7842 1.48145 22.0309 1.94612 22.1934 2.53809C22.0907 2.56411 21.9895 2.60336 21.8926 2.65723L11.25 8.57031L0.607422 2.65723C0.510175 2.6032 0.408676 2.56411 0.305664 2.53809C0.468131 1.946 0.715761 1.4815 1.09863 1.09863C2.19698 0.000283265 3.96447 0 7.5 0H15Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="googing-right">
                        <div className="googing-form-card">
                            <h2 className="googing-form-title">
                                <span style={{color: '#485B85'}}>СОМНЕВАЕТЕСЬ</span>{' '}
                                <span>В ПРЕДЛОЖЕННОМ ПЛАНЕ ЛЕЧЕНИЯ В ДРУГОЙ КЛИНИКЕ?</span>
                            </h2>
                            <p className="googing-form-description">
                                Пришлите Ваши снимки и диагноз на бесплатный аудит консилиума. Наши специалисты изучат Ваш случай и предоставят экспертное мнение и варианты решения проблемы.
                            </p>
                            <div className="googing-form-buttons">
                                <button className="googing-btn googing-btn-secondary">ЗАГРУЗИТЬ ДОКУМЕНТЫ</button>
                                <button className="googing-btn-1 googing-btn-primary">
                                    <div className="flare"></div>
                                    <span>ОТПРАВИТЬ НА КОНСИЛИУМ</span>
                                    <div className="googing-btn-icon">
                                        <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.7592 2.88185L18.6868 3.0505L18.8555 1.12286L16.9278 0.954215L16.7592 2.88185ZM0.692446 13.8375C-0.126203 14.5244 -0.232985 15.7449 0.453944 16.5636C1.14087 17.3822 2.36138 17.489 3.18003 16.8021L1.93624 15.3198L0.692446 13.8375ZM15.8052 13.7862L17.7328 13.9549L18.6868 3.0505L16.7592 2.88185L14.8316 2.7132L13.8776 13.6176L15.8052 13.7862ZM16.7592 2.88185L16.9278 0.954215L6.02349 0.000207278L5.85484 1.92784L5.68619 3.85548L16.5906 4.80949L16.7592 2.88185ZM16.7592 2.88185L15.5154 1.39956L0.692446 13.8375L1.93624 15.3198L3.18003 16.8021L18.003 4.36415L16.7592 2.88185Z" fill="#485B85"/>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="googing-form-checkbox">
                                <input 
                                    type="checkbox" 
                                    id="googing-consent"
                                    checked={consent}
                                    onChange={(e) => setConsent(e.target.checked)}
                                />
                                <label htmlFor="googing-consent" style={{ lineHeight: '1.5' }}>
                                    Подтверждаю, что ознакомлен с текстом{' '}
                                    <a href="#" className="kvis-privacy-link" onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }}>
                                        согласия на обработку персональных данных
                                    </a>
                                    {' '}и согласен с{' '}
                                    <a href="#" className="kvis-privacy-link" onClick={(e) => { e.preventDefault(); setShowPolicyModal(true); }}>
                                        политикой конфиденциальности
                                    </a>
                                </label>
                            </div>
                            <div className="googing-form-disclaimer">
                                * предложение ограничено для первых 5 обращений в декабре.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PrivacyModal
                showPrivacyModal={showPrivacyModal}
                showPolicyModal={showPolicyModal}
                onClosePrivacy={() => setShowPrivacyModal(false)}
                onClosePolicy={() => setShowPolicyModal(false)}
            />
        </div>
    );
};

export default Googing;

