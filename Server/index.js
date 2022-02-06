import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cardRoutes from './routes/cards.js';



const app=express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use('/cards',cardRoutes);

app.get('/',(req,res)=>{
    res.send('hello to SHOWITOFF');
});




const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{
    console.log("running");
}))
.catch((error)=>console.log(error.message))
