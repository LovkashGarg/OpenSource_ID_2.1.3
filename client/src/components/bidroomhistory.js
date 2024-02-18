import React from 'react'

const Bidroomhistory  = () => {
    const Bidroomhistorycard=()=>{
        const username="Aditya Hanji";
        const money="100000";
        return(
            <div className='historycard  flex m-[20px] rounded-[20px] items-center justify-evenly w-[400px] h-[60px] border-gray-600 border-[3px]'>
            <div className="left bg-blue-500 rounded-[20px] h-[40px] flex items-center justify-center  w-[160px] text-white">{username}</div>
            <div className="right  bg-red-500 rounded-[20px] h-[40px] flex items-center justify-center  w-[160px] text-white">₹{money}</div>
            </div>
        )
    }
  return (
    <div className='History Container flex-col justify-center items-center w-[450px] h-[600px] border-black border-[3px] rounded-[20px] no-scrollbar overflow-y-scroll'>
     <Bidroomhistorycard/>
    </div>
  )
}

export default Bidroomhistory;