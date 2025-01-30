import React from 'react';
import '../styles/SalaryTable.css';

const SalaryTable = ({ players }) => {
  return (
    <div className="salary-table-container">
      <h2>Monthly Player Salaries</h2>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Position</th>
            <th>Monthly Salary</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>₾{player.monthlySalary?.toLocaleString() || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalaryTable; 