
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app= express();
app.use(express.json());
app.use(cors({
    origin:"*",
}));

mongoose.connect(process.env.DB_URL)
.then(() =>{
    console.log('Datebase connected successfully ');
}).catch(()=>{
    console.log('something went wrong while connecting to the database');
})
 app.listen(3000,()=>{
    console.log("server is run at 3000");
 })
