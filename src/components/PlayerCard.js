import React from 'react';
import '../styles/PlayerCard.css';

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <div className="player-photo">
        <img src={player.photo} alt={player.name} />
      </div>
      <div className="player-info">
        <h3>{player.name}</h3>
        <p className="position">{player.position}</p>
      </div>
    </div>
  );
}

export default PlayerCard; 