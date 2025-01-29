import express from "express"
import Book from "../model/bookModel.js";
const route = express.Router();


route.post("/" ,async (req ,res)=>{
    const book = req.body;
    if(!book.title || ! book.author || !book.price  || !book.cover){
      return res.status(404).json({success: true, message: "please provide all field"});
    }
    const newBook = new Book(book);

    try {
      await newBook.save();
      res.status(200).json({success:true ,data:newBook});
    } catch (error) {
      console.log("error is creating book",error.message);
      res.status(500).json({succes:true, message:"server error"});
    }
});

export default route;