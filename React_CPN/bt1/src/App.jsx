import logo from './logo.svg';
import './App.css';
import AlertComponent from './AlertComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AlertComponent message="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
      </header>
    </div>
  );
}

export default App;