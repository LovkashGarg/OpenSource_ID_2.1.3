import React, { useState } from 'react'
import './createauction.css'
import axios from 'axios';

const Createauction = () => {
    const [auctionlist,setauctionlist]=useState([]);
    const [auctionitem,setauctionitem]=useState({
        Auctionname:'',
        Itemname:'',
        Email:'',
        accountno:'',
        Startprice:'',
        IncrementperBid:'',
    }
    );
    const handlechange=(event)=>{
        setauctionitem({...auctionitem,[event.target.name]:event.target.value})
    }
    const submit= async(e)=>{
e.preventDefault();
try{
    alert("Auction detail Submited");
    console.log(auctionitem);
    // what we want to send
    await axios.post("http://localhost:5000/",auctionitem)
    .then(res=>{
        if(res.data==="fail"){
            console.log(res.data);
            alert("failed")
        }
        else{
setauctionlist(res.data);
        }
    })
}
catch(e){
console.log(e)
}
    }
  return (
    <>
    <div className='auctionform flex flex-col justify-center items-center h-[500px] border-[3px] border-black w-[450px]'>
<div className='text-[35px] font-mono'>Hello Auctioner !!!</div>
<div className='text-[30px]'>Excited to get a value for Your Product</div>
<form action="POST" className='flex flex-col justify-center items-center'>
   <div>Auction Name : <input onChange={handlechange} type="text" placeholder='Bid Arena' name='Auctionname'/></div>
   <div>Auction Item : <input onChange={handlechange} type="text" placeholder='Sneakers Jordan' name='Itemname' /></div>
   <div>Email : <input onChange={handlechange}  type="text" placeholder='Sneakers Jordan' name='Email' /></div>
   <div>AccountNumber : <input onChange={handlechange} type="text" placeholder='Sneakers Jordan'  name='accountno'/></div>
   <div>Auction StartPrice : <input  onChange={handlechange}type="number" name='Startprice' /></div>
   <div>IncrementperBid : <input  onChange={handlechange} type="number" name='IncrementperBid'/></div>
   {/* <div>Image of Item : <input type="file" accept='image/' /></div> */}
   <input type="submit" onClick={submit} value="submit" />
</form>
    </div>
    {auctionlist.map((e)=>(
        <>
        <div className='flex flex-col'>
        <p>{e.Auctionname}</p>
        <p>{e.Itemname}</p>
        <p>{e.Startprice}</p>
        <p>{e.IncrementperBid}</p>
        </div>
        </>
    ))}
    </>
  )
}

export default Createauction;