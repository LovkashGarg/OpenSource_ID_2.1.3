const express=require('express');
const {model,connect} =require('./connect'); //  to get my collection and connection function
connect();
const app=express();
const http=require('http');
const {Server}=require("socket.io");
const cors=require('cors');
const { Collection } = require('mongoose');
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
    socket.on("send_updated_timer",(data)=>{
        socket.join(data);
         socket.to(data.room).emit("receive_updated_timer",data);
         console.log(data);
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
app.get("/",async (req,resp)=>{
    // resp.send();
    const allauctions=await model.find({})
    resp.send(allauctions);
})

app.post("/", async(req,res)=>{
    try{
        const data=new model(req.body);
        console.log(req.body);
        await data.save();
        // find function applied on collection not on istance of collection

    }
    catch(e){
        console.log(e)
        res.json("fail")
    }
    

})
server.listen(5000,()=>{
    console.log("Server Connected");
})
