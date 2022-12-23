import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Navbar from './components/nav';





function App() {
  const onHandlerClick = () => {
    alert("messi")
  }
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text="Click me" onHandlerClick ={onHandlerClick} />  


        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aguante argentina la concha su madre
        </a>
      </header>
    </div>
  );
}

export default App;
