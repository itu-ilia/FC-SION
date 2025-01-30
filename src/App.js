import React from 'react';
import Header from './components/Header';
import TeamsTable from './components/TeamsTable';
import PlayerCard from './components/PlayerCard';
import SalaryTable from './components/SalaryTable';
import Footer from './components/Footer';
import { teams } from './data/teams';
import { players } from './data/players';
import logo from './assets/logo.png';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header
        title="Sion All Stars"
        logo={logo}
        telegramLink="https://t.me/batumibreakingnews"
      />
      <main className="main-content">
        <TeamsTable teams={teams} />
        <div className="player-cards">
          {players.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
        <SalaryTable players={players} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
