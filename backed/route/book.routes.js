import express from "express"
import { getBooks } from "../controller/book.controller.js";
import { getBook } from "../controller/book.controller.js";
import { createBook } from "../controller/book.controller.js";
import { updateBook } from "../controller/book.controller.js";
import { deleteBook } from "../controller/book.controller.js";
const route = express.Router();

route.get("/", getBooks);
route.get("/:id", getBook);
route.post("/", createBook);
route.put("/:id", updateBook);
route.delete("/:id", deleteBook);

export default route;