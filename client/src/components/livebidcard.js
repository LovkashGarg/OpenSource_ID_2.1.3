import React from 'react'

const Livebidcard = () => {
    const sp=1000;
    const cp=4000;
    const itemname="Plot 100*100sq";
  return (
    <div className='w-[350px]'>

    <div className='livebidcard flex flex-col  h-[250px] mb-[30px] mx-[30px]  rounded-[30px] border-[3px] border-green-300 '>
        <div className='flex justify-between'>
<div className='left px-[20px]'>StartP :[₹{sp}]</div>
<div className='right px-[20px]'>CurrP :[₹{cp}]</div>
</div>
<div className='flex flex-col items-center'>
    {itemname}
    <img  className ='w-[200px] h-[140px] rounded-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnhG0Bs0gpH8M6vl3oQ9fypuqmwHGOMFZEJcHnn7PRw&s" alt="" />
</div>
<div className='flex justify-evenly my-[15px]'>
    <button className='viewbids bg-blue-500 text-white h-[30px]  w-[100px]' >Viewbids</button>
    <button className='joinbids bg-red-400 text-white h-[30px]  w-[100px] '>Joinbid</button>
</div>
    </div>
    </div>
  )
}

export default Livebidcard