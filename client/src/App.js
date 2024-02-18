import './App.css';
import Bidroomhistory from './components/bidroomhistory';
// import Loginpage from './components/Loginpage';
// import Registerpage from './components/Registerpage'
import Livebidcarousel from './components/livebidcarousel';
import Bidroom from './components/bidroom';
function App() {
  return (
    <div className="App">
 <Livebidcarousel/>
 <div className='flex justify-center'>
 <div className='flex self-start items-center justify-center my-[50px]'><Bidroom/></div>
 <div className='flex items-center justify-center '><Bidroomhistory/></div>
 </div>

 {/* <Loginpage/> */}
 {/* <Registerpage/> */}
    </div>
  );
}

export default App;
