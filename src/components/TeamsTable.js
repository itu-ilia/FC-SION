import React from 'react';
import '../styles/TeamsTable.css';

function TeamsTable({ teams }) {
  return (
    <div className="teams-table-container">
      <h2>League Standings</h2>
      <table className="teams-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.name}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamsTable; 