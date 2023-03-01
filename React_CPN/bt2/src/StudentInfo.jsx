import React from 'react';

const Students = ({ student }) => {
  return (
    <table>
      <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
      </thead>
      <tbody>
        {student.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.address}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Students;