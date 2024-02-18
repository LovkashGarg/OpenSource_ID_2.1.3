import './App.css';
// import Loginpage from './components/Loginpage';
// import Registerpage from './components/Registerpage'
import Livebidcarousel from './components/livebidcarousel';
import Bidroom from './components/bidroom';
function App() {
  return (
    <div className="App">
 <Livebidcarousel/>
 <div className='flex items-center justify-center my-[50px]'><Bidroom/></div>
 {/* <Loginpage/> */}
 {/* <Registerpage/> */}
    </div>
  );
}

export default App;
