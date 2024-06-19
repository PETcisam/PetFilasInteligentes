import React from 'react';
import "./Marcacoes.css";
import { FaClock } from 'react-icons/fa'; // Import the clock icon from react-icons

function Marcacoes() {

    const data2 = [
        {
          prontuario: "13579",
          nome: "Maria Silva",
          data: "2024-06-03",
          hora: "8:00"
        },
        {
          prontuario: "13579",
          nome: "Maria Silva",
          data: "2024-06-03",
          hora: "8:00"
        },
        {
          prontuario: "13579",
          nome: "Maria Silva",
          data: "2024-06-03",
          hora: "8:00"
        }
      ];


  // Function to generate times from 8:00 to 14:00 in 30 minute intervals
  const generateTimes = () => {
    const times = [];
    let startTime = new Date();
    startTime.setHours(8, 0, 0, 0); // Set start time to 8:00 AM
    const endTime = new Date();
    endTime.setHours(14, 0, 0, 0); // Set end time to 2:00 PM

    while (startTime <= endTime) {
      times.push(startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      startTime.setMinutes(startTime.getMinutes() + 30); // Increment by 30 minutes
    }

    return times;
  };

  const times = generateTimes();

  return (
    <div className="pagetodamarca">
      <div className="barrafixamarc">
      </div>
      <div className="sidebarmarca">
      </div>
      <div className="grid-container">
        <table className="grid-table">
          <thead>
            <tr>
              <th className="colgrid"><FaClock /> Hora</th>
              <th className="colgrid">Nome</th>
            </tr>
          </thead>
          <tbody>
            {times.map((time, index) => (
              <tr key={index}>
                <td className="infogrid">{time}</td>
                <td className="infogrid">
                  {data2.find(item => item.hora === time)?.nome || ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Marcacoes;

