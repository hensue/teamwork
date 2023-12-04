import logo from './logo.svg';
import './App.css';
import './Topbar.css';

function Topbar() {
  return (
    <div className ="topbar">
      <nav className ="nav-topbar">

        <ul>
          <li> Nosotros </li>
          <li> Planes </li>
          <li> Niceto</li>
        </ul>

      </nav>
    </div>

  )

}


function App() {
  return (
    <div className="App">
      <div><Topbar/></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div><Topbar/></div>
    </div>
  );
}

export default App;