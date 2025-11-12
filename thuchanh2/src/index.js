import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const students = [
  { company: 'Google', contact: 'Sundar', country: 'USA' },
  { company: 'Microsoft', contact: 'Satya', country: 'USA' },
  { company: 'Apple', contact: 'Tim', country: 'USA' },
];

const tableElement = (
  <div>
    <h1>Students</h1>
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(tableElement);
