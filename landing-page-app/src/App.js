import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div id="leftDiv" className="col-md-6 d-flex justify-content-center">
        <h2>Landing Page - Promotion</h2>
      </div>
      <div id="rightDiv" className="col-md-6 justify-content-center">
        <form>
          <label>First Name:</label>
          <input type="text" id="fname" value=""></input><br></br><br></br>

          <label>Last Name:</label>
          <input type="text" id="lname" name="lname" value=""></input><br></br><br></br>

          <label>Email:</label>
          <input type="text" id="email" name="email" value=""></input><br></br><br></br>

          <label>Gender:</label>
          <select id="gender">
            <option value="Select" selected>Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br></br><br></br>
          <label>Message:</label><br></br>
          <button id="send" type="button">Send</button>
        </form>
      </div>      
    </div>




    /*<div className="App">
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
    </div>*/
  );
}

export default App;
