import React from 'react'
import imagehome from './images.jpg'
const Livebidcard = (props) => {
  const {Auctionname,Itemname,Email,accountno,Startprice,IncrementperBid}=props.Itemname;
  console.log(props.itemname);
    // const sp=1000;
    // const cp=4000;
    // const itemname="Plot 100*100sq";
    const openroom=()=>{
      alert("room ID is  201");
    }
  return (
    <div className='w-[350px]'>

    <div className='livebidcard flex flex-col  h-[280px] mb-[30px] mx-[30px]  rounded-[30px] border-[3px] border-green-300 '>
        <div className='flex justify-between'>
<div className='left px-[20px]'>StartP :[₹{Startprice}]</div>
<div className='right px-[20px]'>CurrP :[₹{IncrementperBid}]</div>
</div>
<div className='flex flex-col items-center'>
    {Itemname}
    <img  className ='w-[200px] h-[140px] rounded-[20px]' src={imagehome} alt="" />
</div>
<div className='flex justify-center my-[15px]'>
    <button className='joinbids bg-red-400 text-white h-[30px]  w-[100px] flex items-center justify-center ' onClick={openroom}>Joinbid</button>
</div>
    </div>
    </div>
  )
}

export default Livebidcard