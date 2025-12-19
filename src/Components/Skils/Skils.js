import React from 'react';
import './Skils.css';
import serviceImage from '../../assec/dod.png';

const Skils = () => {
  const skills = [
    {
      id: 1,
      title: 'Лидерство',
      description: 'Полностью привержен успеху компании',
      iconColor: '#FFD700'
    },
    {
      id: 2,
      title: 'Ответственность',
      description: 'Сотрудники всегда будут моим главным приоритетом',
      iconColor: '#4169E1'
    },
    {
      id: 3,
      title: 'Гибкость',
      description: 'Способность переключаться - важный навык',
      iconColor: '#9370DB'
    }
  ];

  return (
      <div className="skils-container">
      <div className="skils-content">
        <div className="skils-header">
          <div className="skils-left">
            <h2 className="skils-title">
              Получите навыки, которые нужны для работы, которая востребована
            </h2>
          </div>
          <div className="skils-right">
            <p className="skils-description">
              Современный рынок труда диктует свои условия. Сегодня, чтобы быть конкурентоспособным специалистом, требуется больше, чем профессиональные навыки.
            </p>
          </div>
        </div>
      </div>
      
      <div className="skils-bottom">
        <div className="skils-bottom-content">
          <div className="skils-skills-section">
            <div className="skils-skills-list">
              {skills.map((skill, index) => (
                <div key={skill.id} className="skils-skill-item">
                  <div className="skils-skill-icon-wrapper">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className="skils-skill-icon"
                    >
                      {skill.id === 1 && (
                        <path 
                          d="M17 8h-1V6c0-2.76-2.24-5-5-5S6 3.24 6 6v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10z" 
                          fill={skill.iconColor}
                          stroke={skill.iconColor}
                          strokeWidth="1.5"
                        />
                      )}
                      {skill.id === 2 && (
                        <>
                          <circle 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            fill="none"
                            stroke={skill.iconColor}
                            strokeWidth="2"
                          />
                          <path 
                            d="M12 16v-4M12 8h.01" 
                            stroke={skill.iconColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </>
                      )}
                      {skill.id === 3 && (
                        <path 
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                          fill={skill.iconColor}
                          stroke={skill.iconColor}
                          strokeWidth="1.5"
                        />
                      )}
                    </svg>
                    {index < skills.length - 1 && <div className="skils-skill-connector"></div>}
                  </div>
                  <div className="skils-skill-content">
                    <h3 className="skils-skill-title">{skill.title}</h3>
                    <p className="skils-skill-description">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skils-image-section">
            <div className="skils-image-wrapper">
              <img 
                src={serviceImage} 
                alt="Специалист" 
                className="skils-image"
              />
            </div>
            <div className="skils-play-button">
              <svg 
                width="250" 
                height="250" 
                viewBox="0 0 100 100" 
                fill="none"
              >
                <path 
                  d="M20 20L20 80L80 50L20 20Z" 
                  fill="white"
                />
              </svg>
            </div>
            <div className="skils-banner">
              <div className="skils-banner-section">
                <span className="skils-banner-number">10</span>
                <div className="skils-banner-text-wrapper">
                  <span className="skils-banner-text">ЛЕТ</span>
                  <span className="skils-banner-text">ОПЫТА</span>
                </div>
              </div>
              <div className="skils-banner-divider"></div>
              <div className="skils-banner-section">
                <span className="skils-banner-number">250</span>
                <div className="skils-banner-text-wrapper">
                  <span className="skils-banner-text">ВИДОВ</span>
                  <span className="skils-banner-text">КУРСОВ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;

