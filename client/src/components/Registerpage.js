import './Register.css';
import { useState } from 'react';


const Registerpage=() =>{

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

// export default ShadowInput;


   return ( <div>
        <div class="container">
        <div class="login">
            <h2>New to Website</h2>
            <input type="text" name="user name" placeholder="username" id="uName" />
            <input type="email" name="Email" placeholder="email" id="Email" />
            <input type="password" name="password" placeholder="password" id="password" />
            <input type="number" name="accountNumber" placeholder="accountNumber" id="accountNumber" />
      <input type="text" name="address" placeholder="address" id="address" />
      <a href="/" style={{ color: 'rgb(240, 236, 236)' }}>forgot password</a>


            <button class="submit" >Create new account</button>
    
            <h5>OR</h5>
            <button class="facebook">continue with facebook</button>
            <button class="google">continue with Google</button>
            <a href="/" style={{ color: 'white' }}><i><b><u>Have an existing account</u></b></i></a>

        </div>
    </div>
    </div>)

}

export default Registerpage;