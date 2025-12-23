import React from "react";
import "./index.css"; // import CSS nếu muốn style

// Khởi tạo danh sách sinh viên
const students = [
  { company: "Apple", contact: "Tim Cook", country: "USA" },
  { company: "Samsung", contact: "Kim Ki Nam", country: "South Korea" },
  { company: "Microsoft", contact: "Satya Nadella", country: "USA" },
];

function Bai1() {
  return (
    <div>
      <h1>Students</h1>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.company}</td>
              <td>{s.contact}</td>
              <td>{s.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bai1;
