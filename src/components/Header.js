import React from 'react';
import '../styles/Header.css';

function Header({ title, logo, telegramLink }) {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Club Logo" className="club-logo" />
        <h1>{title}</h1>
        <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="telegram-link">
          Join our Telegram Channel
        </a>
      </div>
    </header>
  );
}

export default Header; 