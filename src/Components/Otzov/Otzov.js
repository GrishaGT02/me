import React from 'react';
import './Otzov.css';
import userPhoto1 from '../../assec/dod.png';

const Otzov = () => {
  const reviews = [
    {
      id: 1,
      name: 'Ирина З.',
      photo: userPhoto1,
      platform: '2GIS',
      platformLogo: '2GIS',
      rating: 5.0,
      text: 'Со съёмным протезом были одни мучения, носить просто не могла! В МитраЛаб предложили несъёмный протез на 4 имплантах, и это стало просто спасением! Удобно, ничего не натирает, боли нет. Операция прошла удивительно спокойно, врачи очень внимательные и заботливые. И что самое приятное — восстановление прошло быстро! Огромное спасибо Олегу Владимировичу и Юрию Николаевичу!'
    },
    {
      id: 2,
      name: 'Александр',
      photo: userPhoto1,
      platform: 'ZOON',
      platformLogo: 'ZOON',
      rating: 5.0,
      text: 'Два с половиной года назад Софья Олеговна Шматова сделала мне полную базальную имплантацию. Операция была длительной и сложной, но доктор проявила умение, настойчивость и профессионализм. И всё получилось! В итоге, новые зубы радуют меня. Спасибо.'
    },
    {
      id: 3,
      name: 'Альфия Доан',
      photo: userPhoto1,
      platform: 'YELL.RU',
      platformLogo: 'YELL.RU',
      rating: 5.0,
      text: 'Маме сильно мешал съёмный протез, ей приходилось испытывать сильнейший дискомфорт. И в MitraLab помогли! Здесь ей сделали протезирование за 3 дня, вместо 6 месяцев как в других клиниках. Всё прошло просто замечательно, зубки получились ровными и красивыми. Теперь очередь папы, с ним сложнее в плане зубов. Но в MitraLab отличные специалисты, так что я не переживаю.'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="otzov-star">★</span>
    ));
  };

  const getPlatformLogo = (platform) => {
    if (platform === '2GIS') {
      return (
        <div className="otzov-platform-logo otzov-platform-2gis">
          <div className="otzov-2gis-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" fill="#2FCB5A"/>
              <path d="M10 6L10 14M6 10L14 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="10" r="2" fill="white"/>
            </svg>
          </div>
          <span>2GIS</span>
        </div>
      );
    } else if (platform === 'ZOON') {
      return (
        <div className="otzov-platform-logo otzov-platform-zoon">
          <span className="otzov-zoon-text">ZOON</span>
        </div>
      );
    } else if (platform === 'YELL.RU') {
      return (
        <div className="otzov-platform-logo otzov-platform-yell">
          <div className="otzov-yell-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L10.5 6.5L15 6.5L11.25 9.5L12.75 14L9 11L5.25 14L6.75 9.5L3 6.5L7.5 6.5L9 2Z" fill="#FF0000"/>
            </svg>
          </div>
          <span>YELL.RU</span>
        </div>
      );
    }
    return <span>{platform}</span>;
  };

  return (
    <div className="otzov-container">
      <div className="otzov-content">
        <h2 className="otzov-title">
          <span className="otzov-title-purple">Благодарим вас</span>
          <br />
          <span className="otzov-title-black">за развёрнутые отзывы</span>
        </h2>
        
        <div className="otzov-cards">
          {reviews.map((review) => (
            <div key={review.id} className="otzov-card">
              <div className="otzov-card-header">
                <div className="otzov-user-info">
                  <img 
                    src={review.photo} 
                    alt={review.name} 
                    className="otzov-user-photo"
                  />
                  <div className="otzov-user-details">
                    <div className="otzov-header-top">
                      <p className="otzov-user-name">{review.name}</p>
                      <div className="otzov-platform-rating">
                        {getPlatformLogo(review.platform)}
                        <div className="otzov-rating">
                          <div className="otzov-stars">
                            {renderStars(review.rating)}
                          </div>
                          <span className="otzov-rating-value">{review.rating.toFixed(1).replace('.', ',')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="otzov-review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Otzov;

