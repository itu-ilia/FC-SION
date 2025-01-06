import React, { useState, useEffect } from 'react';
import '../styles/PlayerCard.css';
import PlayerModal from './PlayerModal';

function PlayerCard({ player }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="player-card" onClick={handleCardClick}>
        <div className="player-photo">
          <img src={player.photo} alt={player.name} />
        </div>
        <div className="player-info">
          <h3>{player.name}</h3>
          <p className="position">{player.position}</p>
        </div>
      </div>
      {isModalOpen && <PlayerModal player={player} onClose={handleCloseModal} />}
    </>
  );
}

export default PlayerCard; 