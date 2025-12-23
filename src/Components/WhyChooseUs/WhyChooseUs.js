import React from 'react';
import image1 from '../../assec/(1).png';
import image2 from '../../assec/(2).png';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const items = [
    {
      title: 'Врачи-эксперты',
      description: 'Наши специалисты регулярно повышают свою квалификацию.'
    },
    {
      title: 'Лечение по немецким и швейцарским протоколам',
      description: 'Мы используем только доказанные методы лечения, что гарантирует долговечный результат.'
    },
    {
      title: 'Современная диагностика',
      description: 'Новейшее, современное оборудовние позволяют ставить диагноз с точностью 99% и избегать ошибок.'
    },
    {
      title: 'Технология «Лечение во сне» для взрослых и детей',
      description: 'Если страх непреодолим — мы предлагаем медикаментозный сон. Вы проснетесь со здоровыми зубами.'
    },
    {
      title: 'Семейные программы и выгодные абонементы',
      description: 'Лечитесь всей семьей и получайте скидки.'
    }
  ];

  return (
    <div className="why-choose-us-container">
      <div className="why-choose-us-content">
        <div className="why-choose-us-left">
          <h2 className="why-choose-us-title">
            ПОЧЕМУ ЖИТЕЛИ РАССКАЗОВКИ <span className="why-choose-us-title-highlight">ВЫБИРАЮТ НАС?</span>
          </h2>
          <div className="why-choose-us-items">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="why-choose-us-item">
                  <div className="why-choose-us-item-dots">
                    <svg width="32" height="76" viewBox="0 0 32 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="13.4739" height="13.4739" rx="6.73693" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 32.0005)" fill="#2E3D58" fillOpacity="0.7"/>
                      <rect width="13.4739" height="13.4739" rx="6.73693" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18.5234 13.4736)" fill="#2E3D58" fillOpacity="0.7"/>
                      <rect width="13.4739" height="13.4739" rx="6.73693" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 18.5234 32.0005)" fill="#2E3D58"/>
                    </svg>
                  </div>
                  <div className="why-choose-us-item-content">
                    <h3 className="why-choose-us-item-title">{item.title}</h3>
                    <p className="why-choose-us-item-description">{item.description}</p>
                  </div>
                  <div className="why-choose-us-item-arrow">
                    <svg width="50" height="76" viewBox="0 0 50 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M42.2865 28.3582L43.7808 28.489L43.9116 26.9947L42.4173 26.864L42.2865 28.3582ZM18.341 46.4928C17.7064 47.0253 17.6236 47.9714 18.1561 48.6061C18.6886 49.2407 19.6348 49.3234 20.2694 48.7909L19.3052 47.6419L18.341 46.4928ZM40.8075 45.2642L42.3018 45.395L43.7808 28.489L42.2865 28.3582L40.7923 28.2275L39.3132 45.1335L40.8075 45.2642ZM42.2865 28.3582L42.4173 26.864L25.5113 25.3849L25.3806 26.8792L25.2498 28.3735L42.1558 29.8525L42.2865 28.3582ZM42.2865 28.3582L41.3224 27.2092L18.341 46.4928L19.3052 47.6419L20.2694 48.7909L43.2507 29.5073L42.2865 28.3582Z" fill="#33363F"/>
                    </svg>
                  </div>
                </div>
                <div className="why-choose-us-item-divider"></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="why-choose-us-right">
          <img src={image1} alt="Doctors team" className="why-choose-us-image why-choose-us-image-first" />
          <img src={image2} alt="Doctors team" className="why-choose-us-image why-choose-us-image-second" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

