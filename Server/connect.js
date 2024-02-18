const mongoose = require('mongoose');
// const collection="Auctionlist";
// require('dotenv').config();
const Schema = new mongoose.Schema({
  AuctionName: { type: String },
  Email: { type: String,required:true},
  AuctionStartP:{type:Number,required:true},
  accountNumber: String,
  Incrementperbid: {type:Number,required:true},
  auctionTimings:{type:Date,required:true}
});

const model=mongoose.model('users',Schema);

async function connect()
{      await mongoose.connect(`mongodb://localhost:27017/collection`);
  console.log('mongo db conneced Connected!');
}

module.exports={model,connect};