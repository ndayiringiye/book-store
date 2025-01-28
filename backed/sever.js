import express from "express";
import dotenv  from "dotenv";
import mongoose from "mongoose";
import { connectDb } from "./config/db.js";

dotenv.config()
const app = express();


app.listen(4000, async()=>{
  await  connectDb();
    console.log("server started at http://localhost4000");
});


app.get("/" , (req , res) =>{
    console.log("served on database")
});