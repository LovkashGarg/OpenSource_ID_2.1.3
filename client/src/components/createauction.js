import React from 'react'
import './createauction.css'
const Createauction = () => {
  return (
    <div className='auctionform flex flex-col justify-center items-center h-[500px] border-[3px] border-black w-[450px]'>
<div className='text-[35px] font-mono'>Hello Auctioner !!!</div>
<div className='text-[30px]'>Excited to get a value for Your Product</div>
<form action="/upload"  method='post' className='flex flex-col justify-center items-center'>
   <div>Auction Name : <input type="text" placeholder='bidarena'/></div>
   <div>Auction Item : <input type="text" placeholder='Sneakers Jordan' /></div>
   <div>Email : <input type="text" placeholder='Sneakers Jordan' /></div>
   <div>AccountNumber : <input type="text" placeholder='Sneakers Jordan' /></div>
   <div>Auction StartPrice : <input type="number" /></div>
   <div>IncrementperBid : <input type="number" /></div>
   <div>Image of Item : <input type="file" accept='image/' /></div>
</form>
    </div>
  )
}

export default Createauction