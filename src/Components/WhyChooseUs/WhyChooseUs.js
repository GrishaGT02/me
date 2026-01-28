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
      <h2 className="why-choose-us-title why-choose-us-title-top" style={{ display: 'block' }}>
        ПОЧЕМУ ЖИТЕЛИ РАССКАЗОВКИ <span className="why-choose-us-title-highlight">ВЫБИРАЮТ НАС</span>?
      </h2>
      <div className="why-choose-us-content">
        <div className="why-choose-us-left">
          <div className="why-choose-us-left-content">
            <div className="why-choose-us-items">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <div className="why-choose-us-item">
                  <div className="why-choose-us-item-dots">
                    <span className="why-choose-us-item-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="why-choose-us-item-content">
                    <h3 className="why-choose-us-item-title">{item.title}</h3>
                    <p className="why-choose-us-item-description">{item.description}</p>
                  </div>
                  <div className="why-choose-us-item-arrow">
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.6502 3.72285L24.1407 3.94074L24.3586 1.45026L21.8681 1.23237L21.6502 3.72285ZM0.89216 17.8774C-0.165528 18.7649 -0.303487 20.3418 0.584017 21.3995C1.47152 22.4572 3.04841 22.5952 4.1061 21.7077L2.49913 19.7925L0.89216 17.8774ZM20.4177 17.8112L22.9082 18.0291L24.1407 3.94074L21.6502 3.72285L19.1598 3.50496L17.9272 17.5933L20.4177 17.8112ZM21.6502 3.72285L21.8681 1.23237L7.77981 -0.000202287L7.56192 2.49028L7.34403 4.98077L21.4324 6.21334L21.6502 3.72285ZM21.6502 3.72285L20.0433 1.80774L0.89216 17.8774L2.49913 19.7925L4.1061 21.7077L23.2572 5.63796L21.6502 3.72285Z" fill="#485B85"/>
                    </svg>
                  </div>
                </div>
                <div className="why-choose-us-item-divider"></div>
              </React.Fragment>
            ))}
            </div>
          </div>
        </div>
        <div className="why-choose-us-right">
          <div className="why-choose-us-image-first-wrapper">
            <img src={image1} alt="Doctors team" className="why-choose-us-image why-choose-us-image-first" />
          </div>
          <div className="why-choose-us-image-second-wrapper">
            <img src={image2} alt="Doctors team" className="why-choose-us-image why-choose-us-image-second" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

