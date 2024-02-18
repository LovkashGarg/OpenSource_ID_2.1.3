const express=require('express');
const {model,connect} =require('./connect'); //  to get my collection and connection function
connect();
const app=express();
const http=require('http');
const {Server}=require("socket.io");
const cors=require('cors');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const server=http.createServer(app);

// allow us to work with socket io
const io=new Server(server,{
    cors:{
origin:"http://localhost:3000", //  we have to write where our react would be running 
methods:["GET","POST"],
    },
})

io.on("connection",(socket)=>{
    console.log(`User Connected ${socket.id}`);
    // Here join_room is a event 
    // here data would be the room parameter
    socket.on("join_room",(data)=>{
        socket.join(data);
        console.log(`User with ID ${socket.id} joined room :${data}`);
    })
    socket.on("bid_done",(data)=>{

        socket.join(data);
        console.log(`User with ID ${socket.id} Bid for :${data}`);
    })
    socket.on("timer_update",(data)=>{
        
    })
    socket.on("winner",(data)=>{
        console.log(data);
    })

    socket.on("send_updated_bid",(data)=>{
        socket.join(data);
        socket.to(data.room).emit("receive_updated_bid",data)
        // console.log(data);
    })
    socket.on("disconnect", () => {
        console.log("User Disconnected ", socket.id)
    })
})
app.post("/", async(req,res)=>{
    const {msg}=req.body;
    console.log("data from frontend",req.body.auctionitem)
    // console.log(msg);
    const data=new model(req.body.auctionitem);
    await data.save();

})
server.listen(5000,()=>{
    console.log("Server Connected");
})
