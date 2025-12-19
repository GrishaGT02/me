import React from 'react';
import './Footer.css';

const Footer = () => {
  const services = {
    implantation: [
      'Коронка на зуб',
      'Имплантация зубов',
      'Протезирование зубов',
      'All-on-4',
      'All-on-6'
    ],
    aesthetics: [
      'Элайнеры',
      'Брекеты',
      'Виниры',
      'Отбеливание зубов',
      'Профессиональная гигиена',
      'Реставрация зубов'
    ],
    treatment: [
      'Лечение кариеса',
      'Лечение каналов',
      'Лечение дёсен',
      'Удаление зубов'
    ],
    pediatric: [
      'Осмотр и гигиена',
      'Лечение молочных зубов',
      'Герметизация фиссур',
      'Антистресс лечение'
    ],
    prevention: [
      'Регулярный осмотр',
      'Профессиональная гигиена'
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-services">
        <div className="footer-services-content">
          <div className="footer-services-column">
            <h3 className="footer-services-title">Имплантация</h3>
            <ul className="footer-services-list">
              {services.implantation.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="footer-services-column">
            <h3 className="footer-services-title">Эстетика</h3>
            <ul className="footer-services-list">
              {services.aesthetics.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="footer-services-column">
            <h3 className="footer-services-title">Лечение</h3>
            <ul className="footer-services-list">
              {services.treatment.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="footer-services-column">
            <h3 className="footer-services-title">Детская стоматология</h3>
            <ul className="footer-services-list">
              {services.pediatric.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="footer-services-column">
            <h3 className="footer-services-title">Профилактика</h3>
            <ul className="footer-services-list">
              {services.prevention.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <div className="footer-info-content">
          <div className="footer-info-left">
            <p className="footer-disclaimer">
              Вся информация на сайте носит ознакомительный характер и не является публичной офертой, определяемой положениями ч. 2 ст. 437 Гражданского кодекса Российской Федерации. Точную стоимость, состав и сроки услуг уточняйте у администраторов клиники по телефону. Окончательные условия лечения определяются индивидуально и фиксируются в договоре. Перед лечением необходима консультация врача для выявления возможных противопоказаний.
            </p>
            <div className="footer-payment">
              <h4 className="footer-payment-title">Возможные способы оплаты</h4>
              <div className="footer-payment-cards">
                <div className="footer-payment-card">МИР</div>
                <div className="footer-payment-card">VISA</div>
                <div className="footer-payment-card">MasterCard</div>
                <div className="footer-payment-card">Maestro</div>
              </div>
            </div>
          </div>
          <div className="footer-info-right">
            <p className="footer-disclaimer">
              Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях размещенные на сайте, не являются публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ.
            </p>
            <p className="footer-contraindications">
              ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ, НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА
            </p>
            <div className="footer-company">
              <p>Общество с ограниченной ответственностью «ДОК»</p>
              <p>108849, РОССИЯ, Г. МОСКВА, ПОСЕЛЕНИЕ ВНУКОВСКОЕ ВНТЕРГ., АННЫ АХМАТОВОЙ УЛ., Д.11 к. 1, помещ, 5н</p>
              <p>ОГРН 1237700836340 ИНН 7751279609 КПП 775101001</p>
              <p>Email: info@mr-doc.ru</p>
              <p>Генеральный директор Киракосян Карен Егишевич</p>
              <p>Действует на основании Устава</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-header">
        <div className="footer-header-content">
          <div className="footer-header-left">
            <div className="footer-header-logo">
              <div className="footer-header-logo-square">
                <span className="footer-header-logo-md">Md</span>
                <span className="footer-header-logo-plus">+</span>
              </div>
              <div className="footer-header-logo-text">
                <span className="footer-header-logo-name">MENDELEEV</span>
                <span className="footer-header-logo-tagline">Умная стоматология<br />в Москве</span>
              </div>
            </div>
          </div>

          <div className="footer-header-center">
            <p className="footer-header-hours-text">Работаем для вас</p>
            <p className="footer-header-hours-time">с 10 до 21 без выходных</p>
          </div>

          <div className="footer-header-right">
            <div className="footer-header-social">
              <div className="footer-header-social-icon footer-header-social-vk">
                <span>B</span>
              </div>
              <div className="footer-header-social-icon footer-header-social-ok">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="8" r="2" fill="white"/>
                </svg>
              </div>
              <div className="footer-header-social-icon footer-header-social-youtube">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L12 8L6 12V4Z" fill="white"/>
                </svg>
              </div>
              <div className="footer-header-social-icon footer-header-social-telegram">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8L6 10L14 3M14 3L6 10M14 3L10 14L6 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="footer-header-phone-hours">Звоните с 9:00 до 21:00</p>
            <div className="footer-header-phone-box">
              <a href="tel:+74992290003" className="footer-header-phone">+7 (499) 229-00-03</a>
            </div>
          </div>
          
          <div className="footer-header-callback">
            <button className="footer-header-callback-btn" onClick={() => console.log('Обратный звонок')}>
              ОБРАТНЫЙ ЗВОНОК
            </button>
          </div>
        </div>

        <div className="footer-header-footer">
          <div className="footer-header-footer-content">
            <a href="#licenses" className="footer-header-footer-link">Лицензии</a>
            <a href="#privacy" className="footer-header-footer-link">Политика конфиденциальности</a>
            <a href="#consent" className="footer-header-footer-link">Согласие на обработку персональных данных</a>
            <a href="#cookies" className="footer-header-footer-link">Политика использования файлов cookie</a>
            <a href="#pd" className="footer-header-footer-link">Политика обработки и защиты П.Д</a>
            <span className="footer-header-footer-copyright">© 2025. Все права защищены</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

