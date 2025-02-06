import mongoose from "mongoose";
import Book from "../model/bookModel.js";

export const getBooks = async (req, res) => {
    const books = await Book.find({});
    res.status(200).json({ success: true, data: books })
    try {

    } catch (error) {
        console.log("error gettingf books", error.message)
        res.status(500).json({ success: false, message: "sever error" })
    }
};

export const getBook = async (req, res) => {
    const { id } = req.params;
    try {
        const books = await Book.findById(id);
        res.status(200).json({ success: true, data: books })
    } catch (error) {
        console.log("error getting books", error.message)
        res.status(500).json({ success: false, message: "sever error" })
    }
};
export const createBook = async (req, res) => {
    const book = req.body;
    if (!book.title || !book.author || !book.price || !book.cover) {
        return res.status(404).json({ success: true, message: "please provide all field" });
    }
    const newBook = new Book(book);

    try {
        await newBook.save();
        res.status(200).json({ success: true, data: newBook });
    } catch (error) {
        console.log("error is creating book", error.message);
        res.status(500).json({ succes: true, message: "server error" });
    }
};

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid id" });
    };
    try {
        const updateBook = await Book.findByIdAndUpdate(id, book, { new: true });
        res.status(200).json({ success: true, data: updateBook });
    } catch (error) {
        res.status(500).json({ success: false, message: "sever error" });
    }

};

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid id" });
    };
    try {
        await Book.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "book delete succesfully" })
    } catch (error) {
        console.log("error deleting books", error.message)
        res.status(500).json({ success: false, message: "sever error" })
    }
}