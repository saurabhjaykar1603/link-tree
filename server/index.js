import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./../server/.env",
});
mongoose.set("strictQuery", false);
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
  connectDB();
});
