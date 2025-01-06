import React from 'react';
import '../styles/PlayerModal.css';

function PlayerModal({ player, onClose }) {
  if (!player) return null;

  return (
    <div className="player-modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={player.photo} alt={player.name} className="modal-photo" />
        <div className="modal-info">
          <h2>{player.name}</h2>
          <p><strong>Position:</strong> {player.position}</p>
          <p><strong>Age:</strong> {player.age}</p>
          <p><strong>Years in Club:</strong> {player.yearsInClub}</p>
          <p><strong>Dominant Foot:</strong> {player.dominantFoot}</p>
          <p><strong>Play Style:</strong> {player.playStyle}</p>
          <p><strong>Bio:</strong> {player.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerModal; 