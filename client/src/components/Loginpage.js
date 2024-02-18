// import logo from './logo.svg';
import './login.css';
import { useState } from 'react';


function App() {
  function ShadowInput() {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [boxShadow, setBoxShadow] = useState("0 0 0 rgb(255, 255, 255)");
    const tempId = "Email"; // ID of the input element
  
    // Event handler for mouseover
    const handleMouseOver = () => {
      setIsMouseOver(true);
      randomShadow();
    };
  
    // Event handler for mouseout
    const handleMouseOut = () => {
      setIsMouseOver(false);
      stopRandomShadow();
    };
  
    // Function to add random shadow
    const randomShadow = () => {
      const interval = setInterval(() => {
        setBoxShadow(boxColor());
      }, 1000);
      return interval;
    };
  
    // Function to stop random shadow
    const stopRandomShadow = () => {
      setBoxShadow("0 0 0 rgb(255, 255, 255)");
    };
  
    // Function to generate random box color
    const boxColor = () => {
      const x = Math.floor(Math.random() * 256);
      const y = Math.floor(Math.random() * 256);
      const z = Math.floor(Math.random() * 256);
      return `0 0 10px rgba(${x},${y},${z},1.2)`;
    };
  
    return (
      <div>
        <input
          id={tempId}
          type="text"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ boxShadow: isMouseOver ? boxShadow : "" }}
        />
      </div>
    );
  }
  return (
    <div className="App">
      <div className="container">
    <div className="login">
      <h2>Welcome</h2>
      <input type="email" name="Email" placeholder="email" id="Email" />
      <input type="password" name="password" placeholder="password" id="password" />
      
      <a href="">forgot password</a>
      <a href="/register">Don't have any account? create one.</a>

      <button className="submit">Log in</button>
      <h5>OR</h5>
      <button className="facebook">continue with facebook</button>
      <button className="google">continue with Google</button>
      
    </div>
  </div>
    </div>
  );
}

export default App;