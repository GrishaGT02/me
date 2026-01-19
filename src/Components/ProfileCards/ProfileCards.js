import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './ProfileCards.css';

const ProfileCards = () => {
  const cardsRef = useRef(null);
  const [draggedCard, setDraggedCard] = useState(null);
  const [pressedHandle, setPressedHandle] = useState(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Lukas Meier',
      rating: 4.5,
      stars: 5,
      halfStar: true,
      followers: '3.1 K',
      status: 'online',
      description: 'Digital product designer crafting intuitive, scalable user journeys',
      image: 'https://i.pinimg.com/736x/fd/5d/b0/fd5db03cfc44d0f9b6b4d4b7fdb05340.jpg'
    },
    {
      id: 2,
      name: 'Max Steiner',
      rating: 4.0,
      stars: 4,
      halfStar: false,
      followers: '2.4 K',
      status: 'online',
      description: 'Digital designer turning complex workflows into seamless journeys',
      image: 'https://i.pinimg.com/736x/80/b2/ff/80b2ff0b40a7b586cdd4cd8ff264d7a9.jpg'
    },
    {
      id: 3,
      name: 'Ueli Huber',
      rating: 5.0,
      stars: 5,
      halfStar: false,
      followers: '1.7 K',
      status: 'offline',
      description: 'UX strategist designing frictionless, data-driven digital experiences',
      image: 'https://i.pinimg.com/736x/37/d4/7b/37d47b1d8979b4fe22014c89bedd5c10.jpg'
    }
  ]);

  const handleDragStart = (e, cardId) => {
    setDraggedCard(cardId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', cardId.toString());
    
    // Находим карточку через родительские элементы (так как событие на handle)
    const cardWrap = e.currentTarget.closest('.card-wrap');
    const cardElement = cardWrap ? cardWrap.querySelector('.card') : null;
    if (cardElement && cardWrap) {
      const rect = cardElement.getBoundingClientRect();
      const cardWrapRect = cardWrap.getBoundingClientRect();
      
      // Создаем контейнер для drag image
      const dragContainer = document.createElement('div');
      dragContainer.style.cssText = `
        position: absolute;
        top: -9999px;
        left: -9999px;
        width: ${rect.width}px;
        height: ${rect.height}px;
        opacity: 1;
        pointer-events: none;
        z-index: 99999;
      `;
      
      const dragImage = cardElement.cloneNode(true);
      
      // Применяем стили напрямую к элементу
      dragImage.style.cssText = `
        position: relative;
        width: 100%;
        height: 100%;
        opacity: 1 !important;
        filter: none !important;
        transform: rotate(5deg);
        background-color: #000000;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 2.5rem;
        box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
      `;
      
      // Убираем все фильтры и делаем все элементы непрозрачными
      const allElements = dragImage.querySelectorAll('*');
      allElements.forEach(el => {
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('filter', 'none', 'important');
      });
      
      // Убираем card-filter полностью
      const filterElements = dragImage.querySelectorAll('.card-filter');
      filterElements.forEach(el => {
        el.style.setProperty('display', 'none', 'important');
      });
      
      dragContainer.appendChild(dragImage);
      document.body.appendChild(dragContainer);
      
      // Используем координаты относительно card-wrap
      const offsetX = e.clientX - cardWrapRect.left;
      const offsetY = e.clientY - cardWrapRect.top;
      
      e.dataTransfer.setDragImage(dragContainer, offsetX, offsetY);
      
      setTimeout(() => {
        if (document.body.contains(dragContainer)) {
          document.body.removeChild(dragContainer);
        }
      }, 0);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetCardId) => {
    e.preventDefault();
    if (!draggedCard) return;

    const draggedIndex = cards.findIndex(card => card.id === draggedCard);
    const targetIndex = cards.findIndex(card => card.id === targetCardId);

    if (draggedIndex !== targetIndex) {
      const newCards = [...cards];
      const [removed] = newCards.splice(draggedIndex, 1);
      newCards.splice(targetIndex, 0, removed);
      setCards(newCards);
    }

    setDraggedCard(null);
  };

  const handleDragEnd = () => {
    setDraggedCard(null);
  };

  const renderStars = (stars, halfStar) => {
    const starElements = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        if (halfStar && i === stars - 1) {
          starElements.push(
            <span key={i} className="card-rating-star half">★</span>
          );
        } else {
          starElements.push(
            <span key={i} className="card-rating-star filled">★</span>
          );
        }
      } else {
        starElements.push(
          <span key={i} className="card-rating-star">★</span>
        );
      }
    }
    return starElements;
  };

  return (
    <section className="profile-cards-section">
      <div className="cards" ref={cardsRef}>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`card-wrap ${draggedCard === card.id ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, card.id)}
            initial={{ opacity: 0, filter: 'blur(1rem)' }}
            animate={{ 
              opacity: draggedCard === card.id ? 0.7 : 1, 
              filter: draggedCard === card.id ? 'blur(0.2rem)' : 'blur(0)',
              scale: draggedCard === card.id ? 0.85 : 1
            }}
            transition={{ duration: 0.8, delay: draggedCard === card.id ? 0 : index / 4 }}
          >
            <motion.div
              className="card"
              whileHover={{ scale: 1.025 }}
              animate={{
                rotate: pressedHandle === card.id ? 5 : 0,
                scale: pressedHandle === card.id ? 0.98 : 1
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <div className={`card-filter ${pressedHandle === card.id ? 'visible' : ''}`}></div>
              <motion.img
                src={card.image}
                alt={card.name}
                className="card-bg"
                animate={{
                  scale: [1, 1.2]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
              />
              
              <div className={`card-status ${card.status}`}>
                <div className={`card-status-dot ${card.status}`}></div>
                <div className="card-status-text">
                  {card.status === 'online' ? 'Online' : 'Offline'}
                </div>
              </div>

              <motion.div
                className="card-handle grab"
                draggable
                onDragStart={(e) => {
                  handleDragStart(e, card.id);
                  e.dataTransfer.effectAllowed = 'move';
                  e.dataTransfer.setData('text/html', card.id.toString());
                }}
                onDragEnd={handleDragEnd}
                whileHover={{ scale: 0.95 }}
                onMouseDown={() => setPressedHandle(card.id)}
                onMouseUp={() => setPressedHandle(null)}
                onMouseLeave={() => setPressedHandle(null)}
              >
                <div className="card-handle-tip">
                  <span className="handle">⋮⋮</span>
                </div>
              </motion.div>

              <div className="card-content">
                <motion.div
                  className="card-name-wrap"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index / 4 + 0.3 }}
                >
                  <div className="card-name">{card.name}</div>
                  <div className="card-verfied">
                    <span className="card-verification">✓</span>
                  </div>
                </motion.div>

                <div className="card-tags">
                  <div className="card-tag">
                    <div className="card-rating-text">{card.rating}</div>
                    <div className="card-rating-stars">
                      {renderStars(card.stars, card.halfStar)}
                    </div>
                  </div>
                  <div className="card-tag">
                    <span className="card-tag-icon">👤</span>
                    <div className="card-rating-text">{card.followers}</div>
                  </div>
                </div>

                <motion.div
                  className="card-description"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.4 }}
                  transition={{ delay: index / 4 + 0.5 }}
                >
                  {card.description}
                </motion.div>

                <motion.div
                  className="card-button pointer"
                  whileHover={{ backgroundColor: '#FF004D' }}
                  whileTap={{ scale: 1.1 }}
                >
                  <div className="card-button-text pointer">Get In Touch</div>
                  <div className="card-button-call pointer">
                    <span className="card-button-call-icon pointer">📞</span>
                    <svg className="phone-waves" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path className="wave wave-1" d="M 60 50 Q 65 45, 70 50" stroke="#000000" stroke-width="2" fill="none" />
                      <path className="wave wave-2" d="M 60 50 Q 65 45, 70 50" stroke="#000000" stroke-width="2" fill="none" />
                    </svg>
                  </div>
                </motion.div>
              </div>
              <div className="card-fade"></div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfileCards;

