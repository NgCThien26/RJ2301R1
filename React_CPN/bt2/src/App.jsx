import logo from './logo.svg';
import './App.css';
import Students from './StudentInfo';

function App() {
  const student = [
    { id: 1, name: "Nguyen Van A", age: "21", address: "Hue" },
    { id: 2, name: "Nguyen Huu B", age: "22", address: "Sai Gon" },
    { id: 3, name: "Nguyen Thi C", age: "23", address: "Ha Noi" },
    { id: 4, name: "Nguyen Dinh D", age: "24", address: "Da Nang" }
  ];

  return (
    <div>
      <Students student={student} />
    </div>
  );
}

export default App;