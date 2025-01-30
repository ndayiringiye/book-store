import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import bookRoute from "./route/book.routes.js"

dotenv.config()
const app = express();
app.use(express.json())
app.use("/api/books", bookRoute)

const PORT =process.env.PORT ||4000;

app.listen(PORT, async () => {
  await connectDb();
  console.log("server started at http://localhost4000");
});


app.get("/", (req, res) => {
  console.log("served on database");
});