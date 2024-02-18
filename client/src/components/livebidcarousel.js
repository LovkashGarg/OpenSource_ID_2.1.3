import React, { useEffect, useState } from 'react'
import Livebidcard from './livebidcard'


const Livebidcarousel = () => {

  const [allItem, setAllItem] = useState([])
  async function fecthdata() {
    const response = await fetch("http://localhost:5000/");
    const alldata = await response.json();
    console.log(alldata)
    setAllItem(alldata);
  }
  useEffect(() => {
    fecthdata();
  }, []);
  return (
    < div className='flex flex-col justify-center m-[30px]'>
      <div className='flex justify-start mx-[40px]'>
        <div className='rounded-full bg-green-400 w-[20px] h-[20px]'>.</div> <div>Live Auctions</div>
      </div>
      <div className='  w-[1300px] h-[300px]'>
        <div className='flex overflow-x-scroll no-scrollbar w-[1500px] '>

          {/* <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/>
      <Livebidcard/> */}

{
  allItem.map((item) => (
    <Livebidcard Itemname={item} />
  ))
}
        </div>
      </div>
    </div>
  )
}

export default Livebidcarousel