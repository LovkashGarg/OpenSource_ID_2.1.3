import './App.css';
import ima from './components/logo.png'
import Bidroomhistory from './components/bidroomhistory';
// import Loginpage from './components/Loginpage';
// import Registerpage from './components/Registerpage'
import Livebidcarousel from './components/livebidcarousel';
import Bidroom from './components/bidroom';
import Createauction from './components/createauction';
function App() {
  return (
    <div className="App">
        {/* {Auctionlist.map((e)=>(
          <>
        <p>{e.Auctionname}</p>
        <p>{e.Itemname}</p>
        </>
    ))} */}
 <Livebidcarousel/>
 <div className='flex justify-center'>
 <img src={ima} alt=""  className='w-[400px] h-[400px] self-center'/>   
 <div className='flex self-start items-center justify-center my-[50px]'><Bidroom/></div>
 <div className='flex items-center justify-center '><Bidroomhistory/></div>
 </div>/
<div className='flex justify-center items-center'><Createauction/></div>
 {/* <Loginpage/> */}
 {/* <Registerpage/> */}
 </div>
  );
}

export default App;
